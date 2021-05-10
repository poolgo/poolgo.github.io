importScripts("https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js", "precache-manifest.2381ce9cadf13a0c5b74942a727b4a41.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js');
workbox.precaching([
    // 注册成功后要立即缓存的资源列表
])

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css)'),
    workbox.strategies.networkFirst()
);

