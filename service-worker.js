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
    "revision": "2e913268320b3e677bafb5ede8d0451b"
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
    "url": "assets/js/10.d581a827.js",
    "revision": "9546f97f7e5cd835a8a186d7243c9fbe"
  },
  {
    "url": "assets/js/11.d4a9e7a7.js",
    "revision": "7a460f675735cd8bc6c460e469d7afb9"
  },
  {
    "url": "assets/js/12.e823df19.js",
    "revision": "44aa83675c672cc47543859ff2f976c6"
  },
  {
    "url": "assets/js/2.935f028d.js",
    "revision": "92848c9dd2b54a0a2f8c8f59b42e31d0"
  },
  {
    "url": "assets/js/3.0e1db1f2.js",
    "revision": "7500b6923103ffafefd8ce9c8b2a5c69"
  },
  {
    "url": "assets/js/4.68ce8301.js",
    "revision": "43ad60031e57a3f386b65349da6bc273"
  },
  {
    "url": "assets/js/5.3b05a339.js",
    "revision": "aff5b61d7d069bf2d392e392ccd3ef39"
  },
  {
    "url": "assets/js/6.ee31ce75.js",
    "revision": "6e48c205446aca8bf4c9baf6544e9e4f"
  },
  {
    "url": "assets/js/7.2d548d28.js",
    "revision": "078a3be0f804f5d4b2724b9708384abe"
  },
  {
    "url": "assets/js/8.6af619c6.js",
    "revision": "781dab0ab7221902c9791f84480701bf"
  },
  {
    "url": "assets/js/9.36678214.js",
    "revision": "40e579944ce79bc760b35febcffd070e"
  },
  {
    "url": "assets/js/app.fc11ced6.js",
    "revision": "338e1ebfefa9c003d4b9a00168a59403"
  },
  {
    "url": "database/redis/index.html",
    "revision": "a9b8c5f26233750e2469c304374f0b8e"
  },
  {
    "url": "database/redis/install.html",
    "revision": "aa5b15a5e6cd14b447741ba8d6014021"
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
    "revision": "0a9ca807717823133bee76b489ed4ae4"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "preface/index.html",
    "revision": "a087b5766711d7e19cca7dc658c983cf"
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
