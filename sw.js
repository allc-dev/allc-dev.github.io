// Service worker do allc.dev: shell offline, estratégias por tipo de recurso e cache com limite.
const VERSION = 'everyday-v10-bookquest';
const PRECACHE_NAME = `allc-precache-${VERSION}`;
const PAGES_NAME = `allc-pages-${VERSION}`;
const ASSETS_NAME = `allc-assets-${VERSION}`;
const IMAGES_NAME = `allc-images-${VERSION}`;
const CURRENT = [PRECACHE_NAME, PAGES_NAME, ASSETS_NAME, IMAGES_NAME];
const LIMITS = { [PAGES_NAME]: 40, [IMAGES_NAME]: 60 };
const NAVIGATION_TIMEOUT = 3500;
// Imagens grandes usadas só em compartilhamento social nunca entram no cache.
const NEVER_CACHE = [/^\/imagens\/brand\/social\./, /^\/sw\.js$/, /^\/google[0-9a-f]+\.html$/];

const PRECACHE = [
  "/",
  "/privacy-policy.html",
  "/css/modern.css?v=everyday-v10",
  "/js/i18n.js?v=everyday-v10",
  "/js/main.js?v=everyday-v10",
  "/site.webmanifest",
  "/imagens/brand/studio.webp",
  "/imagens/favicon-32x32.png",
  "/imagens/android-chrome-192x192.png",
  "/imagens/android-chrome-512x512.png",
  "/apps/biblia/",
  "/imagens/apps/biblia.png",
  "/apps/bookquest/",
  "/imagens/apps/bookquest.png",
  "/apps/chesstime/",
  "/imagens/apps/chesstime.png",
  "/apps/exactime/",
  "/imagens/apps/exactime.png",
  "/apps/focodoro/",
  "/imagens/apps/focodoro.png",
  "/apps/habitus/",
  "/imagens/apps/habitus.png",
  "/apps/multicounter/",
  "/imagens/apps/multicounter.png",
  "/apps/nexus/",
  "/imagens/apps/nexus.png",
  "/apps/petlog/",
  "/imagens/apps/petlog.png",
  "/apps/quietude/",
  "/imagens/apps/quietude.png",
  "/apps/serena/",
  "/imagens/apps/serena.png",
  "/imagens/apple-touch-icon.png",
  "/imagens/maskable-512x512.png",
  "/imagens/favicon.ico"
];

// Remove query string e "index.html" para que /apps/x/, /apps/x/index.html e /apps/x/?utm=... compartilhem a mesma entrada.
function pageKey(url) {
  const u = new URL(url);
  let path = u.pathname.replace(/index\.html$/, '');
  if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) path += '/';
  return new Request(u.origin + path);
}

async function trim(cacheName) {
  const max = LIMITS[cacheName];
  if (!max) return;
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  // Cache API preserva ordem de inserção: remove as entradas mais antigas (FIFO).
  await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map(key => cache.delete(key)));
}

async function put(cacheName, key, response) {
  if (!response || !response.ok || response.type !== 'basic') return;
  const cache = await caches.open(cacheName);
  await cache.put(key, response);
  await trim(cacheName);
}

self.addEventListener('install', event => {
  // Cada arquivo é tolerante a falha: um 404 isolado não invalida o restante do shell offline.
  event.waitUntil(caches.open(PRECACHE_NAME).then(cache => Promise.allSettled(
    PRECACHE.map(url => fetch(url, { cache: 'reload' }).then(response => {
      if (!response.ok) throw new Error(`${url} → ${response.status}`);
      const key = response.headers.get('content-type')?.includes('text/html') ? pageKey(new URL(url, location.origin).href) : url;
      return cache.put(key, response);
    }))
  )));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('allc-') && !CURRENT.includes(key)).map(key => caches.delete(key)));
    if (self.registration.navigationPreload) await self.registration.navigationPreload.enable();
    await self.clients.claim();
  })());
});

// A página pede a ativação quando o visitante aceita atualizar.
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

async function handleNavigation(event) {
  const key = pageKey(event.request.url);
  const network = (async () => {
    const response = (await event.preloadResponse) || (await fetch(event.request));
    event.waitUntil(put(PAGES_NAME, key, response.clone()));
    return response;
  })();
  // Network-first com timeout: em rede ruim (comum no celular) o cache responde sem travar a tela.
  const timeout = new Promise(resolve => setTimeout(resolve, NAVIGATION_TIMEOUT));
  try {
    const fast = await Promise.race([network, timeout]);
    if (fast) return fast;
    const cached = await caches.match(key);
    if (cached) { event.waitUntil(network.catch(() => {})); return cached; }
    return await network;
  } catch (_) {
    const cached = await caches.match(key);
    if (cached) return cached;
    // Página sem cópia offline: redireciona para a home (servir o HTML direto quebraria os caminhos relativos).
    const home = pageKey(location.origin + '/');
    return key.url !== home.url && (await caches.match(home)) ? Response.redirect(home.url, 302) : Response.error();
  }
}

// Stale-while-revalidate: resposta imediata do cache e atualização em segundo plano.
async function staleWhileRevalidate(event, cacheName) {
  const cached = await caches.match(event.request);
  const network = fetch(event.request).then(response => {
    event.waitUntil(put(cacheName, event.request, response.clone()));
    return response;
  });
  if (cached) { event.waitUntil(network.catch(() => {})); return cached; }
  return network;
}

// Cache-first para imagens: mudam pouco e são o que mais pesa na cota de armazenamento.
async function cacheFirst(event, cacheName) {
  const cached = await caches.match(event.request);
  if (cached) return cached;
  const response = await fetch(event.request);
  event.waitUntil(put(cacheName, event.request, response.clone()));
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== location.origin) return;
  if (NEVER_CACHE.some(pattern => pattern.test(url.pathname))) return;
  if (request.mode === 'navigate') return event.respondWith(handleNavigation(event));
  if (request.destination === 'image') return event.respondWith(cacheFirst(event, IMAGES_NAME));
  if (['style', 'script', 'manifest', 'font'].includes(request.destination) || /\.webmanifest$/.test(url.pathname)) {
    return event.respondWith(staleWhileRevalidate(event, ASSETS_NAME));
  }
});
