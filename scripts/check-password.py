# Checks locally whether a password matches the ADMIN_PASSWORD_HASH stored in Vercel.
# Usage: python scripts/check-password.py   (paste the hash from Vercel, then type the password)
# Requires: pip install bcrypt
import getpass
import sys

import bcrypt

raw = input("Vercel'dagi ADMIN_PASSWORD_HASH qiymati: ")
hashed = raw.strip().removeprefix("ADMIN_PASSWORD_HASH=").strip().strip("'\"")

print(f"Uzunligi: {len(hashed)} (60 bo'lishi kerak), boshlanishi: {hashed[:7]!r} ($2a$10$ bo'lishi kerak)")
if raw != hashed:
    print("Diqqat: qiymatda ortiqcha bo'sh joy, qo'shtirnoq yoki 'ADMIN_PASSWORD_HASH=' bor edi")
if len(hashed) != 60 or not hashed.startswith("$2"):
    sys.exit("Hash noto'g'ri formatda - qayta nusxalang yoki qaytadan yarating.")

password = getpass.getpass("Kirishda yozayotgan parolingiz: ")
if bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8")):
    print("MOS KELDI - hash to'g'ri. Vercel'da Redeploy qilinganini tekshiring.")
else:
    print("MOS KELMADI - bu hash boshqa parol uchun yaratilgan.")
