import http.server
import socketserver
import os
import sys

# Ensure UTF-8 output on Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

PORTS_TO_TRY = [5500, 8080, 3000, 5000, 8001, 8888]
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def start_server():
    os.chdir(DIRECTORY)
    for port in PORTS_TO_TRY:
        try:
            httpd = socketserver.TCPServer(("", port), Handler)
            print(f"[Gyanexia] Platform server running at http://localhost:{port}")
            print(f"[Gyanexia] Serving directory: {DIRECTORY}")
            sys.stdout.flush()
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nShutting down server.")
            return
        except OSError:
            print(f"Port {port} in use, trying next...")
            continue

if __name__ == "__main__":
    start_server()
