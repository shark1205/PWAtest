self.addEventListener('install', e => {
  e.waitUntil(
      caches.open('task-cache').then(cache => {
          return cache.addAll([
              '/PWAtest/',
              '/PWAtest/index.html',
              '/PWAtest/app.js'
          ]);
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
      caches.match(e.request).then(response => {
          return response || fetch(e.request);
      })
  );
});
