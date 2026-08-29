/**
 * Node entry for hosts that run a long-lived Node process (Render, Fly, a VPS)
 * rather than a Cloudflare Worker.
 *
 * The Vite build is unchanged: it still emits the Workers-shaped bundle
 * (dist/server/server.js — `export default { fetch }`) plus dist/client. This
 * file only adapts that handler to node:http, and takes over the one job
 * Cloudflare's `assets` binding does for us in production: serve dist/client
 * asset-first, and fall through to SSR for everything else (including "/",
 * /robots.txt and /sitemap.xml, which are server routes).
 *
 * Deploy to Cloudflare and this file is simply unused.
 */
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

import handler from "./dist/server/server.js";

const PORT = Number(process.env.PORT ?? 10000);
const HOST = process.env.HOST ?? "0.0.0.0";
const CLIENT_DIR = resolve(fileURLToPath(new URL("./dist/client", import.meta.url)));

const MIME = {
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

/** Resolve a URL path inside dist/client, or null if it escapes or is missing. */
async function resolveAsset(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null; // malformed percent-encoding
  }
  if (decoded.endsWith("/")) return null;

  const candidate = resolve(join(CLIENT_DIR, normalize(decoded)));
  if (candidate !== CLIENT_DIR && !candidate.startsWith(CLIENT_DIR + sep)) {
    return null; // path traversal
  }

  try {
    const stats = await stat(candidate);
    return stats.isFile() ? { path: candidate, size: stats.size } : null;
  } catch {
    return null;
  }
}

function sendAsset(req, res, asset) {
  const type = MIME[extname(asset.path).toLowerCase()] ?? "application/octet-stream";
  // Vite fingerprints everything under /assets/, so those are safe to pin.
  const cacheControl = req.url.startsWith("/assets/")
    ? "public, max-age=31536000, immutable"
    : "public, max-age=3600";

  // Single-range support keeps native <video> seeking working for anything that
  // streams a clip instead of fetching it whole.
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? "");
  if (range && asset.size > 0) {
    const start = range[1] ? Number(range[1]) : Math.max(0, asset.size - Number(range[2]));
    const end = range[1] && range[2] ? Math.min(Number(range[2]), asset.size - 1) : asset.size - 1;
    if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= asset.size) {
      res.writeHead(416, { "Content-Range": `bytes */${asset.size}` }).end();
      return;
    }
    res.writeHead(206, {
      "Accept-Ranges": "bytes",
      "Cache-Control": cacheControl,
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${asset.size}`,
      "Content-Type": type,
    });
    if (req.method === "HEAD") return void res.end();
    createReadStream(asset.path, { end, start }).pipe(res);
    return;
  }

  res.writeHead(200, {
    "Accept-Ranges": "bytes",
    "Cache-Control": cacheControl,
    "Content-Length": asset.size,
    "Content-Type": type,
  });
  if (req.method === "HEAD") return void res.end();
  createReadStream(asset.path).pipe(res);
}

function toWebRequest(req) {
  const headers = new Headers();
  for (let i = 0; i < req.rawHeaders.length; i += 2) {
    headers.append(req.rawHeaders[i], req.rawHeaders[i + 1]);
  }
  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  return new Request(new URL(req.url, `http://${req.headers.host ?? `localhost:${PORT}`}`), {
    body: hasBody ? Readable.toWeb(req) : undefined,
    duplex: hasBody ? "half" : undefined,
    headers,
    method: req.method,
  });
}

async function sendWebResponse(res, response) {
  const headers = Object.fromEntries(response.headers);
  delete headers["set-cookie"];
  const cookies = response.headers.getSetCookie?.() ?? [];
  res.writeHead(response.status, cookies.length ? { ...headers, "set-cookie": cookies } : headers);

  if (!response.body) return void res.end();
  await Readable.fromWeb(response.body).pipe(res);
}

const server = createServer((req, res) => {
  void (async () => {
    try {
      const pathname = new URL(req.url, "http://localhost").pathname;
      const asset =
        req.method === "GET" || req.method === "HEAD" ? await resolveAsset(pathname) : null;
      if (asset) return sendAsset(req, res, asset);

      // env/ctx are Workers concepts; nothing in this site reads a binding.
      const response = await handler.fetch(toWebRequest(req), {}, { waitUntil: () => {} });
      await sendWebResponse(res, response);
    } catch (error) {
      console.error(error);
      if (!res.headersSent) res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  })();
});

server.listen(PORT, HOST, () => {
  console.log(`Eco Taxi Poreč listening on http://${HOST}:${PORT}`);
});
