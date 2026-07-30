/* ================================================================
 * Triple A Gas — Service Worker
 *
 * Strategy: Cache-first for static assets, network-first for API
 * ================================================================ */

const CACHE_NAME = "triple-a-gas-v1";

const PRECACHE_URLS = [
  "./index.html",
  "./products.html",
  "./stations.html",
  "./safety.html",
  "./faq.html",
  "./about.html",
  "./contact.html",
  "./404.html",
  "./css/tokens.css",
  "./css/public.css",
  "./js/site-config.js",
  "./js/i18n.js",
  "./js/main.js",
  "./js/company-info.js",
  "./js/testimonials.js",
  "./js/map.js",
  "./js/stock.js",
  "./images/offical_logo-removebg.png",
  "./images/offical_logo.png",
  "./images/favicon.ico",
  "./images/favicon-32x32.png",
  "./images/favicon-16x16.png",
  "./images/apple-touch-icon.png",
  "./images/site.webmanifest",
];

const API_BASE = "http://localhost:3001/api";

/* ---------- Install — pre-cache core assets ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        return self.skipWaiting();
      }),
  );
});

/* ---------- Activate — clean old caches ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        );
      })
      .then(() => {
        return self.clients.claim();
      }),
  );
});

/* ---------- Fetch — cache-first for static, network-first for API ---------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API requests — network first, fallback to cache
  if (url.href.startsWith(API_BASE) || url.pathname.startsWith("/api/")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Static assets — cache first
  if (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "font" ||
    request.destination === "image" ||
    request.mode === "navigate"
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Everything else — network only
  event.respondWith(fetch(request));
});

/* ---------- Cache-first strategy ---------- */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    // Return cached, then update in background
    updateCache(request);
    return cached;
  }
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Offline fallback for navigation requests
    if (request.mode === "navigate") {
      const fallback = await caches.match("./index.html");
      if (fallback) return fallback;
    }
    throw err;
  }
}

/* ---------- Network-first strategy (for API) ---------- */
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw err;
  }
}

/* ---------- Update cache in background ---------- */
async function updateCache(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
  } catch (err) {
    // Silently fail — cached version is still available
  }
}
