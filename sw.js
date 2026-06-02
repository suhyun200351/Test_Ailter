const CACHE = 'ailter-v1';
const ASSETS = [
  '/Test_Ailter/',
  '/Test_Ailter/index.html',
  '/Test_Ailter/manifest.json',
  '/Test_Ailter/colors_and_type.css',
  '/Test_Ailter/ios-frame.jsx',
  '/Test_Ailter/logo.jsx',
  '/Test_Ailter/screens.jsx',
  '/Test_Ailter/assets/splash-logo.png',
  '/Test_Ailter/assets/logo-mark.svg',
  '/Test_Ailter/assets/petal.svg',
  '/Test_Ailter/assets/stem.svg',
  '/Test_Ailter/assets/stem-outline.svg',
  '/Test_Ailter/assets/eye-1.svg',
  '/Test_Ailter/assets/eye-2.svg',
  '/Test_Ailter/assets/apple.svg',
  '/Test_Ailter/assets/google.png',
  '/Test_Ailter/icons/icon-192.png',
  '/Test_Ailter/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request))
  );
});
