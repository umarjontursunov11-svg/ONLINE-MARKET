import http.server
import socketserver
import json
import urllib.parse
import os
import time
import hmac
import hashlib
from http import cookies

PORT = 3000
SECRET_KEY = b"SM_METROLOGIYA_SUPER_SECURE_SECRET_2026"

# In-memory rate limiting map: ip -> { count: number, resetAt: timestamp }
login_attempts = {}
MAX_ATTEMPTS = 5
LOCKOUT_SECONDS = 15 * 60

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "U20020604u"

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

            if username.lower() == ADMIN_USERNAME and password == ADMIN_PASSWORD:
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

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), LocalAppHandler) as httpd:
        print(f"ONLINE MARKET Server running on http://localhost:{PORT}")
        httpd.serve_forever()
