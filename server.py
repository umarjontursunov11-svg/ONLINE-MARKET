import http.server
import socketserver
import json
import urllib.parse
import os
import time
import urllib.request
import hmac
import hashlib
import secrets
from http import cookies


def load_env_file(path):
    # Minimal .env loader (KEY=VALUE per line) so secrets never live in source code
    if not os.path.exists(path):
        return
    with open(path, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            key, value = line.split('=', 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


load_env_file(os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env'))

PORT = int(os.environ.get("PORT", 3000))
# Without ADMIN_JWT_SECRET a random key is used, so sessions reset on every restart
SECRET_KEY = os.environ.get("ADMIN_JWT_SECRET", "").encode('utf-8') or secrets.token_bytes(32)

# In-memory rate limiting map: ip -> { count: number, resetAt: timestamp }
login_attempts = {}
MAX_ATTEMPTS = 5
LOCKOUT_SECONDS = 15 * 60

ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "admin").lower()
# Plain password for local development only; set it in .env (see .env.example)
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "")

# Telegram xabarnomalari (api/notify.js ning lokal nusxasi) — token faqat .env da
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "")
NOTIFY_LIMIT = 10
NOTIFY_WINDOW_SECONDS = 10 * 60
notify_attempts = {}

def generate_token(username):
    payload = f"{username}:{int(time.time())}"
    signature = hmac.new(SECRET_KEY, payload.encode('utf-8'), hashlib.sha256).hexdigest()
    return f"{payload}:{signature}"

def verify_token(token):
    if not token:
        return False
    parts = token.split(":")
    if len(parts) != 3:
        return False
    username, timestamp, signature = parts
    payload = f"{username}:{timestamp}"
    expected_sig = hmac.new(SECRET_KEY, payload.encode('utf-8'), hashlib.sha256).hexdigest()
    if hmac.compare_digest(signature, expected_sig):
        # 8 hour expiry
        if time.time() - int(timestamp) < 8 * 3600:
            return username
    return False

class LocalAppHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching for fresh local dev
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path

        if path == '/api/admin/verify':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            
            cookie_header = self.headers.get('Cookie')
            is_authenticated = False
            user = None

            if cookie_header:
                C = cookies.SimpleCookie()
                C.load(cookie_header)
                if 'admin_token' in C:
                    token_val = C['admin_token'].value
                    authenticated_user = verify_token(token_val)
                    if authenticated_user:
                        is_authenticated = True
                        user = authenticated_user

            self.end_headers()
            response_data = {"authenticated": is_authenticated}
            if user:
                response_data["user"] = user
            self.wfile.write(json.dumps(response_data).encode('utf-8'))
            return

        # Clean URL rewrites
        if path == '/' or path == '':
            self.path = '/index.html'
        elif path in ['/admin', '/admin/']:
            self.path = '/admin.html'
        elif path in ['/admin/login', '/login', '/login/']:
            self.path = '/login.html'

        return super().do_GET()

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path

        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else '{}'
        
        try:
            body = json.loads(post_data)
        except Exception:
            body = {}

        client_ip = self.client_address[0]
        now = time.time()

        if path == '/api/admin/login':
            # Rate limiting
            attempt = login_attempts.get(client_ip, {"count": 0, "resetAt": now + LOCKOUT_SECONDS})
            if attempt["resetAt"] < now:
                attempt["count"] = 0
                attempt["resetAt"] = now + LOCKOUT_SECONDS

            if attempt["count"] >= MAX_ATTEMPTS:
                minutes_left = int((attempt["resetAt"] - now) // 60) + 1
                self.send_response(429)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                res = {"success": False, "message": f"Juda ko'p xato urinishlar! {minutes_left} daqiqaga bloklandingiz."}
                self.wfile.write(json.dumps(res).encode('utf-8'))
                return

            username = body.get('username', '').strip()
            password = body.get('password', '')

            if not ADMIN_PASSWORD:
                self.send_response(503)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                res = {"success": False, "message": "Admin paroli sozlanmagan. .env faylida ADMIN_PASSWORD ni belgilang."}
                self.wfile.write(json.dumps(res).encode('utf-8'))
                return

            if username.lower() == ADMIN_USERNAME and hmac.compare_digest(password.encode('utf-8'), ADMIN_PASSWORD.encode('utf-8')):
                if client_ip in login_attempts:
                    del login_attempts[client_ip]

                token = generate_token(ADMIN_USERNAME)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Set-Cookie', f'admin_token={token}; Path=/; HttpOnly; SameSite=Lax')
                self.end_headers()
                res = {"success": True, "message": "Admin panelga muvaffaqiyatli kirdingiz!"}
                self.wfile.write(json.dumps(res).encode('utf-8'))
            else:
                attempt["count"] += 1
                login_attempts[client_ip] = attempt

                self.send_response(401)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                res = {"success": False, "message": "Foydalanuvchi nomi yoki parol noto'g'ri."}
                self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        if path == '/api/notify':
            self.handle_notify(body, client_ip, now)
            return

        if path == '/api/admin/logout':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Set-Cookie', 'admin_token=; Path=/; HttpOnly; Max-Age=0')
            self.end_headers()
            res = {"success": True, "message": "Tizimdan chiqildi"}
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

    def send_json(self, status, payload):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode('utf-8'))

    def handle_notify(self, body, client_ip, now):
        if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
            return self.send_json(503, {"ok": False, "message": "Telegram sozlanmagan (.env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)"})

        origin = self.headers.get('Origin', '')
        if not origin or urllib.parse.urlparse(origin).netloc != self.headers.get('Host', ''):
            return self.send_json(403, {"ok": False, "message": "Forbidden"})

        attempt = notify_attempts.get(client_ip, {"count": 0, "resetAt": now + NOTIFY_WINDOW_SECONDS})
        if attempt["resetAt"] < now:
            attempt = {"count": 0, "resetAt": now + NOTIFY_WINDOW_SECONDS}
        if attempt["count"] >= NOTIFY_LIMIT:
            return self.send_json(429, {"ok": False, "message": "Juda ko'p so'rov. Birozdan keyin qayta urinib ko'ring."})

        text = body.get('text')
        if not isinstance(text, str) or not text.strip() or len(text) > 4000:
            return self.send_json(400, {"ok": False, "message": "Xabar bo'sh yoki juda uzun"})

        attempt["count"] += 1
        notify_attempts[client_ip] = attempt

        req = urllib.request.Request(
            f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage",
            data=json.dumps({"chat_id": TELEGRAM_CHAT_ID, "text": text, "parse_mode": "HTML",
                             "disable_web_page_preview": True}).encode('utf-8'),
            headers={'Content-Type': 'application/json'}, method='POST')
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                data = json.loads(r.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            data = json.loads(e.read().decode('utf-8') or '{}')
        except Exception as e:
            print("Telegram request failed:", e)
            return self.send_json(502, {"ok": False, "message": "Telegram bilan ulanib bo'lmadi"})

        if not data.get("ok"):
            print(f"Telegram API error {data.get('error_code')}: {data.get('description')}")
            return self.send_json(502, {"ok": False, "message": "Telegram xatoligi", "code": data.get("error_code")})
        return self.send_json(200, {"ok": True})

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), LocalAppHandler) as httpd:
        print(f"ONLINE MARKET Server running on http://localhost:{PORT}")
        if not ADMIN_PASSWORD:
            print("OGOHLANTIRISH: ADMIN_PASSWORD o'rnatilmagan - admin login o'chirilgan (.env.example ga qarang)")
        httpd.serve_forever()
