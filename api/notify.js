// Saytdagi buyurtma, ariza va murojaatlarni menejerlar Telegram guruhiga yuboradi.
// Bot tokeni faqat serverda: Vercel → Settings → Environment Variables
//   TELEGRAM_BOT_TOKEN  — @BotFather bergan token
//   TELEGRAM_CHAT_ID    — guruh ID (masalan -1003964640399)
//   ALLOWED_ORIGINS     — (ixtiyoriy) vergul bilan qo'shimcha domenlar, masalan https://gsouz.uz

const MAX_TEXT_LENGTH = 4000; // Telegram chegarasi 4096
const RATE_LIMIT = 10; // bitta IP dan
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 daqiqada

// In-memory rate limiting map: ip -> { count: number, resetAt: timestamp }
const sendAttempts = new Map();

// Values pasted into the Vercel UI often carry stray whitespace, quotes or a "NAME=" prefix
function readEnv(name) {
  let value = (process.env[name] || '').trim();
  if (value.startsWith(name + '=')) value = value.slice(name.length + 1).trim();
  return value.replace(/^['"]|['"]$/g, '');
}

const BOT_TOKEN = readEnv('TELEGRAM_BOT_TOKEN');
const CHAT_ID = readEnv('TELEGRAM_CHAT_ID');
const EXTRA_ORIGINS = readEnv('ALLOWED_ORIGINS').split(',').map(s => s.trim()).filter(Boolean);

// Faqat o'z saytimizdan (yoki ALLOWED_ORIGINS dagi domenlardan) kelgan so'rovlar
function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  let originHost;
  try {
    originHost = new URL(origin).host;
  } catch (e) {
    return false;
  }
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return originHost === host || EXTRA_ORIGINS.includes(origin);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram notify disabled: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set');
    return res.status(503).json({ ok: false, message: 'Telegram sozlanmagan' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ ok: false, message: 'Forbidden' });
  }

  // Get Client IP (first entry of x-forwarded-for is the original client)
  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = (forwardedFor ? String(forwardedFor).split(',')[0].trim() : '') || req.socket?.remoteAddress || '127.0.0.1';
  const now = Date.now();
  const attempt = sendAttempts.get(clientIp) || { count: 0, resetAt: now + RATE_WINDOW_MS };
  if (attempt.resetAt < now) {
    attempt.count = 0;
    attempt.resetAt = now + RATE_WINDOW_MS;
  }
  if (attempt.count >= RATE_LIMIT) {
    return res.status(429).json({ ok: false, message: "Juda ko'p so'rov. Birozdan keyin qayta urinib ko'ring." });
  }

  const { text } = req.body || {};
  if (typeof text !== 'string' || !text.trim() || text.length > MAX_TEXT_LENGTH) {
    return res.status(400).json({ ok: false, message: "Xabar bo'sh yoki juda uzun" });
  }

  attempt.count += 1;
  sendAttempts.set(clientIp, attempt);

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const data = await tgRes.json();
    if (!data.ok) {
      // Token hech qachon javobga qo'shilmaydi — faqat Telegram xato kodi
      console.error(`Telegram API error ${data.error_code}: ${data.description}`);
      return res.status(502).json({ ok: false, message: 'Telegram xatoligi', code: data.error_code });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram request failed:', err.message);
    return res.status(502).json({ ok: false, message: 'Telegram bilan ulanib bo\'lmadi' });
  }
};
