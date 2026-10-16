// Cache do PWA: identidade Jade e catálogo disponível sem rede após instalação.
const CACHE_VERSION = 'allc-indie-v7';
const PRECACHE = [
  "/",
  "/index.html",
  "/privacy-policy.html",
  "/css/modern.css?v=indie-v7",
  "/js/i18n.js?v=indie-v7",
  "/js/main.js?v=indie-v7",
  "/site.webmanifest",
  "/imagens/brand/studio.webp",
  "/imagens/favicon-32x32.png",
  "/imagens/android-chrome-192x192.png",
  "/imagens/android-chrome-512x512.png",
  "/apps/biblia/index.html",
  "/apps/biblia/",
  "/imagens/apps/biblia.png",
  "/apps/bookquest/index.html",
  "/apps/bookquest/",
  "/imagens/apps/bookquest.png",
  "/apps/chesstime/index.html",
  "/apps/chesstime/",
  "/imagens/apps/chesstime.png",
  "/apps/exactime/index.html",
  "/apps/exactime/",
  "/imagens/apps/exactime.png",
  "/apps/focodoro/index.html",
  "/apps/focodoro/",
  "/imagens/apps/focodoro.png",
  "/apps/habitus/index.html",
  "/apps/habitus/",
  "/imagens/apps/habitus.png",
  "/apps/multicounter/index.html",
  "/apps/multicounter/",
  "/imagens/apps/multicounter.png",
  "/apps/nexus/index.html",
  "/apps/nexus/",
  "/imagens/apps/nexus.png",
  "/apps/petlog/index.html",
  "/apps/petlog/",
  "/imagens/apps/petlog.png",
  "/apps/quietude/index.html",
  "/apps/quietude/",
  "/imagens/apps/quietude.png",
  "/apps/serena/index.html",
  "/apps/serena/",
  "/imagens/apps/serena.png"
];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(PRECACHE))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('allc-') && key !== CACHE_VERSION).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => { if (response.ok) { const copy = response.clone(); event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.put(request, copy))); } return response; }).catch(async () => (await caches.match(request)) || caches.match('/index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && response.type === 'basic') { const copy = response.clone(); event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.put(request, copy))); }
    return response;
  })));
});
