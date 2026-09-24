# Generates the values needed for Vercel environment variables (no Node.js required).
# Usage: python scripts/hash-password.py        (asks for the password without showing it)
# Requires: pip install bcrypt
import getpass
import secrets
import sys

import bcrypt

password = sys.argv[1] if len(sys.argv) > 1 else getpass.getpass("Yangi admin paroli: ")
if len(password) < 10:
    sys.exit("Parol kamida 10 belgidan iborat bo'lishi kerak.")

# $2a$ prefix for compatibility with bcryptjs used in api/admin/login.js
hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(10, prefix=b"2a")).decode("utf-8")
print("ADMIN_PASSWORD_HASH=" + hashed)
print("ADMIN_JWT_SECRET=" + secrets.token_hex(48))
