// Orla Skin Official — Service Worker
// ໜ້າທີ່: ໃຫ້ browser ຮັບຮູ້ວ່າເປັນ PWA ທີ່ຕິດຕັ້ງໄດ້ (installable) ແລະ cache ໜ້າຫຼັກໄວ້ໃຊ້ແບບ offline ພື້ນຖານ
const CACHE = "orla-skin-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, resClone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
