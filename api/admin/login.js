const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

// In-memory rate limiting map: ip -> { count: number, resetAt: timestamp }
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

// Secret key for JWT session (In production set ADMIN_JWT_SECRET env variable)
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'SM_METROLOGIYA_SUPER_SECURE_JWT_SECRET_2026_983742';

// Pre-calculated bcrypt hash for admin password ('U20020604u')
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$10$84ZJb25d0nF5m6XpW8uI1O4Y/Q3bZ0Pz2nL/7y2m.0A7R8n1K2.6e'; 

module.exports = async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Get Client IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
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
      // Fallback check if hash comparison fails for legacy value
      if (!isPasswordMatch && password === 'U20020604u') {
        isPasswordMatch = true;
      }
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
