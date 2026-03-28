const s = "fitfast-offline-v1",
  o = "/offline.html";
self.addEventListener("install", (t) => {
  t.waitUntil(caches.open(s).then((e) => e.add(o)));
});
self.addEventListener("activate", (t) => {
  (t.waitUntil(
    caches.keys().then((e) => Promise.all(e.filter((n) => n !== s).map((n) => caches.delete(n)))),
  ),
    self.clients.claim());
});
self.addEventListener("fetch", (t) => {
  t.request.mode === "navigate" &&
    t.respondWith(
      fetch(t.request).catch(() =>
        caches.match(o).then((e) => e || new Response("Offline", { status: 503 })),
      ),
    );
});
self.addEventListener("message", (t) => {
  var e;
  ((e = t.data) == null ? void 0 : e.action) === "SKIP_WAITING" && self.skipWaiting();
});
self.addEventListener("push", (t) => {
  const e = { en: "You have a new notification", ar: "لديك إشعار جديد" };
  let n = { title: "FitFast", body: e.en, lang: "en" };
  if (t.data)
    try {
      n = t.data.json();
    } catch (l) {
      (console.warn("[SW] Push payload parse error:", l), (n.body = t.data.text()));
    }
  const a = n.lang || "en",
    i = n.body || e[a] || e.en;
  t.waitUntil(
    self.registration.showNotification(n.title || "FitFast", {
      body: i,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-192x192.png",
      data: { url: n.url || "/" },
    }),
  );
});
self.addEventListener("notificationclick", (t) => {
  var n;
  t.notification.close();
  const e = ((n = t.notification.data) == null ? void 0 : n.url) || "/";
  t.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then((a) => {
      for (const i of a)
        if (i.url.includes(self.location.origin) && "focus" in i) return (i.navigate(e), i.focus());
      return self.clients.openWindow(e);
    }),
  );
});
