const cookie = require('cookie');

module.exports = async function handler(req, res) {
  const serializedCookie = cookie.serialize('admin_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0),
    path: '/'
  });

  res.setHeader('Set-Cookie', serializedCookie);
  return res.status(200).json({ success: true, message: 'Logged out successfully' });
};
