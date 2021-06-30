/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b85906b05ecda8ab2f4025628be045a2"
  },
  {
    "url": "assets/css/0.styles.4f331948.css",
    "revision": "daa11e3621435b280222da96221b8857"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.76333f16.js",
    "revision": "ed1550964d20021920590fa53f62511e"
  },
  {
    "url": "assets/js/11.efaf3828.js",
    "revision": "6f0a6bd47469e4755e5188555b691427"
  },
  {
    "url": "assets/js/12.aed0a3ad.js",
    "revision": "e90393fb84e4cce6b0eb4e743e45da9a"
  },
  {
    "url": "assets/js/13.62f94199.js",
    "revision": "6b4457d07c5d6c9816508545079b9dc6"
  },
  {
    "url": "assets/js/14.481e1109.js",
    "revision": "505a90a55b13362c54808321708ee10f"
  },
  {
    "url": "assets/js/2.428f67e7.js",
    "revision": "92848c9dd2b54a0a2f8c8f59b42e31d0"
  },
  {
    "url": "assets/js/3.d8c87093.js",
    "revision": "7500b6923103ffafefd8ce9c8b2a5c69"
  },
  {
    "url": "assets/js/4.4db0290c.js",
    "revision": "fcfa3577d25c01c5905904edee1836f2"
  },
  {
    "url": "assets/js/5.91ce0b45.js",
    "revision": "aff5b61d7d069bf2d392e392ccd3ef39"
  },
  {
    "url": "assets/js/6.9b0dfd80.js",
    "revision": "6e48c205446aca8bf4c9baf6544e9e4f"
  },
  {
    "url": "assets/js/7.fc11477b.js",
    "revision": "078a3be0f804f5d4b2724b9708384abe"
  },
  {
    "url": "assets/js/8.29e85975.js",
    "revision": "781dab0ab7221902c9791f84480701bf"
  },
  {
    "url": "assets/js/9.b27016d3.js",
    "revision": "40e579944ce79bc760b35febcffd070e"
  },
  {
    "url": "assets/js/app.a0355a12.js",
    "revision": "ff05e6a68f0a597c240ffc50c0b77bc8"
  },
  {
    "url": "blogImg/20210519105652.png",
    "revision": "2db600da386daa028a4b3faf8f06d6fc"
  },
  {
    "url": "blogImg/20210526121800.png",
    "revision": "8fa31a20b31537666d07c860a660c552"
  },
  {
    "url": "blogImg/20210526122014.png",
    "revision": "4a19522fd9544151cf93c6a47d9d5f0a"
  },
  {
    "url": "blogImg/20210526122914.png",
    "revision": "29e8378923723c2696ffc25f12bf7be8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a77d0b554cefbaaef9783bcc1781ec57"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "6c04680525d248cd2554fa8bc8a152df"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "53ac9fefc6cdf9e4bfa194d6a71f3544"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "99bc670ec052c9b34bffeee5b1fd3190"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "2142982adff44609864cd682dd5cf36a"
  },
  {
    "url": "view/preface/index.html",
    "revision": "75e47a6eba1b540689f27433513ead6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
