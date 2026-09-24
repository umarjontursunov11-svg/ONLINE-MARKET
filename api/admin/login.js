const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

// In-memory rate limiting map: ip -> { count: number, resetAt: timestamp }
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

// Secrets come only from environment variables (Vercel → Settings → Environment Variables).
// Generate the hash with: node scripts/hash-password.js "<password>"
const JWT_SECRET = process.env.ADMIN_JWT_SECRET;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

module.exports = async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Fail closed if the server is not configured
  if (!JWT_SECRET || !ADMIN_PASSWORD_HASH) {
    console.error('Admin login disabled: ADMIN_JWT_SECRET and ADMIN_PASSWORD_HASH must be set');
    return res.status(503).json({
      success: false,
      message: "Admin kirish tizimi sozlanmagan. Administrator bilan bog'laning."
    });
  }

  // Get Client IP (first entry of x-forwarded-for is the original client)
  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = (forwardedFor ? String(forwardedFor).split(',')[0].trim() : '') || req.socket?.remoteAddress || '127.0.0.1';
  const now = Date.now();

  // Rate Limiting & Lockout Check
  const attemptInfo = loginAttempts.get(clientIp) || { count: 0, resetAt: now + LOCKOUT_MS };
  if (attemptInfo.resetAt < now) {
    attemptInfo.count = 0;
    attemptInfo.resetAt = now + LOCKOUT_MS;
  }

  if (attemptInfo.count >= MAX_ATTEMPTS) {
    const minutesLeft = Math.ceil((attemptInfo.resetAt - now) / (60 * 1000));
    return res.status(429).json({
      success: false,
      message: `Juda ko'p xato urinishlar! Xavfsizlik yuzasidan ${minutesLeft} daqiqaga bloklandingiz.`
    });
  }

  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      attemptInfo.count += 1;
      loginAttempts.set(clientIp, attemptInfo);
      return res.status(400).json({
        success: false,
        message: "Foydalanuvchi nomi va parol kiritilishi shart."
      });
    }

    // Verify credentials
    const isUsernameMatch = (username.trim().toLowerCase() === ADMIN_USERNAME.toLowerCase());
    let isPasswordMatch = false;

    if (isUsernameMatch) {
      // Use bcrypt to compare password with hash
      isPasswordMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    }

    if (!isUsernameMatch || !isPasswordMatch) {
      attemptInfo.count += 1;
      loginAttempts.set(clientIp, attemptInfo);

      // Generic error message - does not reveal whether username or password was wrong
      return res.status(401).json({
        success: false,
        message: "Foydalanuvchi nomi yoki parol noto'g'ri."
      });
    }

    // Successful login - reset failed attempts
    loginAttempts.delete(clientIp);

    // Issue JWT Session Token
    const token = jwt.sign(
      { role: 'admin', user: ADMIN_USERNAME, loginTime: Date.now() },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    // Set secure HttpOnly Cookie
    const serializedCookie = cookie.serialize('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 8 * 60 * 60, // 8 hours
      path: '/'
    });

    res.setHeader('Set-Cookie', serializedCookie);

    return res.status(200).json({
      success: true,
      message: "Admin panelga muvaffaqiyatli kirdingiz!"
    });
  } catch (error) {
    console.error("Login Handler Error:", error);
    return res.status(500).json({
      success: false,
      message: "Serverda ichki xatolik yuz berdi."
    });
  }
};
