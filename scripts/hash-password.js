// Generates the values needed for Vercel environment variables.
// Usage: node scripts/hash-password.js "<new-admin-password>"
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const password = process.argv[2];
if (!password || password.length < 10) {
  console.error('Foydalanish: node scripts/hash-password.js "<kamida 10 belgili yangi parol>"');
  process.exit(1);
}

console.log('ADMIN_PASSWORD_HASH=' + bcrypt.hashSync(password, 10));
console.log('ADMIN_JWT_SECRET=' + crypto.randomBytes(48).toString('hex'));
