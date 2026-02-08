const CACHE_NAME = 'eka-indulgence-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetching content
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
