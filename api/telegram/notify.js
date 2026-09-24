const jwt = require('jsonwebtoken');
const cookie = require('cookie');

// Order / inquiry notifications for the Telegram group.
// The bot token lives only in Vercel env variables, never in browser code.
function readEnv(name) {
  let value = (process.env[name] || '').trim();
  if (value.startsWith(name + '=')) value = value.slice(name.length + 1).trim();
  return value.replace(/^['"]|['"]$/g, '');
}

const BOT_TOKEN = readEnv('TELEGRAM_BOT_TOKEN');
const CHAT_ID = readEnv('TELEGRAM_CHAT_ID');
const JWT_SECRET = readEnv('ADMIN_JWT_SECRET');

// Telegram's own limit is 4096 characters per message
const MAX_TEXT_LENGTH = 4000;

// In-memory rate limiting so the endpoint cannot be used to spam the group
const sendCounts = new Map();
const MAX_MESSAGES = 10;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isAdmin(req) {
  if (!JWT_SECRET) return false;
  const token = cookie.parse(req.headers.cookie || '').admin_token;
  if (!token) return false;
  try {
    return jwt.verify(token, JWT_SECRET).role === 'admin';
  } catch (e) {
    return false;
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram notify disabled: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set');
    return res.status(503).json({ success: false, message: 'Telegram integratsiyasi sozlanmagan.' });
  }

  const body = req.body || {};
  let text;

  if (body.test) {
    // Test message from the admin panel - admins only
    if (!isAdmin(req)) {
      return res.status(401).json({ success: false, message: 'Avtorizatsiyadan o\'tilmagan.' });
    }
    text = `🧪 <b>TEST XABARI — STANDART VA METROLOGIYA TIZIMI</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `✅ Saytdagi buyurtmalar integratsiyasi ishlayapti!\n` +
      `📅 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`;
  } else {
    text = typeof body.text === 'string' ? body.text.trim() : '';
    if (!text || text.length > MAX_TEXT_LENGTH) {
      return res.status(400).json({ success: false, message: 'Xabar matni noto\'g\'ri.' });
    }

    const forwardedFor = req.headers['x-forwarded-for'];
    const clientIp = (forwardedFor ? String(forwardedFor).split(',')[0].trim() : '') || req.socket?.remoteAddress || '127.0.0.1';
    const now = Date.now();
    const info = sendCounts.get(clientIp) || { count: 0, resetAt: now + WINDOW_MS };
    if (info.resetAt < now) {
      info.count = 0;
      info.resetAt = now + WINDOW_MS;
    }
    if (info.count >= MAX_MESSAGES) {
      return res.status(429).json({ success: false, message: 'Juda ko\'p so\'rov. Birozdan so\'ng qayta urinib ko\'ring.' });
    }
    info.count += 1;
    sendCounts.set(clientIp, info);
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    const data = await tgRes.json();

    if (!data.ok) {
      console.error(`Telegram API error (${data.error_code}): ${data.description}`);
      return res.status(502).json({ success: false, message: `Telegram xatoligi: ${data.description}` });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Telegram request failed:', err);
    return res.status(502).json({ success: false, message: 'Telegram serveriga ulanib bo\'lmadi.' });
  }
};
