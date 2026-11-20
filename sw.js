/* D76 — bộ nhớ đệm trang quét: đã mở 1 lần khi có sóng thì lần sau mở được KỂ CẢ KHI MẤT SÓNG.
   - Trang (index.html): lấy mạng trước (để luôn có bản mới), mất mạng thì lấy bản đã lưu.
   - Thư viện đọc QR (unpkg, đã ghi rõ phiên bản): lưu 1 lần, dùng mãi.
   - Gọi web app (POST script.google.com) KHÔNG đi qua bộ nhớ đệm — dữ liệu chờ gửi nằm trong localStorage của trang. */
var BAN = 'ktx-quet-v1';
var THU_VIEN = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';

self.addEventListener('install', function (ev) {
  ev.waitUntil(caches.open(BAN).then(function (c) {
    return Promise.all([
      c.add('./').catch(function () {}),
      fetch(new Request(THU_VIEN, { mode: 'no-cors' })).then(function (r) { return c.put(THU_VIEN, r); }).catch(function () {})
    ]);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (ev) {
  ev.waitUntil(caches.keys().then(function (ds) {
    return Promise.all(ds.filter(function (k) { return k !== BAN; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (ev) {
  var req = ev.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.href === THU_VIEN) {
    ev.respondWith(caches.match(THU_VIEN).then(function (r) {
      return r || fetch(new Request(THU_VIEN, { mode: 'no-cors' })).then(function (moi) {
        var ban = moi.clone(); caches.open(BAN).then(function (c) { c.put(THU_VIEN, ban); }); return moi;
      });
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;
  ev.respondWith(fetch(req).then(function (moi) {
    if (moi && moi.ok) { var ban = moi.clone(); caches.open(BAN).then(function (c) { c.put(req, ban); }); }
    return moi;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('./'); });
  }));
});
