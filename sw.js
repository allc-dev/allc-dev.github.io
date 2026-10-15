/**
 * ALLC Dev - Service Worker
 * Incremente CACHE_VERSION a cada deploy que altere CSS/JS/imagens.
 */

const CACHE_VERSION = "allc-jade-v3";

const PRECACHE = [
  "/",
  "/index.html",
  "/privacy-policy.html",
  "/css/modern.css",
  "/js/i18n.js",
  "/js/main.js",
  "/site.webmanifest",
  "/imagens/allc.png",
  "/imagens/favicon-32x32.png",
  "/imagens/android-chrome-192x192.png",
  "/imagens/android-chrome-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

// Remove caches de versões anteriores
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Terceiros (fontes, FontAwesome, Play Store) seguem direto para a rede
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  // Páginas: rede primeiro, para o visitante sempre ver a versão publicada
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("/index.html")))
    );
    return;
  }

  // Estáticos: cache primeiro
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
