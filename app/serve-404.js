/**
 * Triple A Gas — Simple 404-ready static server
 *
 * Run with Node.js: node serve-404.js
 * Serves the /app directory and uses 404.html for unknown routes.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  // Normalize URL — default to index.html for /
  let url = req.url.split("?")[0].split("#")[0];
  if (url === "/") url = "/index.html";

  const filePath = path.join(PUBLIC_DIR, url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // File not found → serve 404.html with 404 status
      const notFoundPath = path.join(PUBLIC_DIR, "404.html");
      fs.readFile(notFoundPath, (err2, notFoundData) => {
        if (err2) {
          // Last resort: plain text 404
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
          return;
        }
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(notFoundData);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  🏪 Triple A Gas — local server running\n`);
  console.log(`  → http://localhost:${PORT}`);
  console.log(
    `  → Custom 404 page at http://localhost:${PORT}/anything-you-type\n`,
  );
});
