const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'SM_METROLOGIYA_SUPER_SECURE_JWT_SECRET_2026_983742';

module.exports = async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.admin_token;

  if (!token) {
    return res.status(401).json({ authenticated: false, message: 'Unauthenticated' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded && decoded.role === 'admin') {
      return res.status(200).json({ authenticated: true, user: decoded.user });
    } else {
      return res.status(401).json({ authenticated: false, message: 'Invalid session' });
    }
  } catch (err) {
    return res.status(401).json({ authenticated: false, message: 'Session expired or invalid' });
  }
};
