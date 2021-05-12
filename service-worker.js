importScripts("https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js", "precache-manifest.fd4905773ee316926b856ec5f75a2223.js");

// workbox.precaching([
//     // 注册成功后要立即缓存的资源列表
// ])
// //

// //

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.core.skipWaiting(); // 强制等待中的 Service Worker 被激活
workbox.core.clientsClaim(); // Service Worker 被激活后使其立即获得页面控制权


// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css)'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.networkFirst()
);
