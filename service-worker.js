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
    "revision": "698ff05dc7eb19ba5d3f602c9f4aa58c"
  },
  {
    "url": "assets/css/0.styles.b42adf48.css",
    "revision": "1c697eb00c57a93c966da70964ffd201"
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
    "url": "assets/js/10.288f75c5.js",
    "revision": "05c6cf98cc35d76c635002a48c7ccd99"
  },
  {
    "url": "assets/js/11.b17ce4d9.js",
    "revision": "0f0e298bfa3fb339de6706ae7e3992c0"
  },
  {
    "url": "assets/js/12.bb751487.js",
    "revision": "5acde5d0e5296edf6ce3101f2f95e7ba"
  },
  {
    "url": "assets/js/13.48b322fa.js",
    "revision": "a0145f99cdbb77b2c1d4148b0630a511"
  },
  {
    "url": "assets/js/14.87aa5288.js",
    "revision": "b0ace1eaba5f23cde954b498f0b1d5ce"
  },
  {
    "url": "assets/js/15.b8985409.js",
    "revision": "0e5bfa4756015b5b780bcd2537fa74f1"
  },
  {
    "url": "assets/js/16.581b81aa.js",
    "revision": "bab1e570aa85b12e475be71c4524ebe1"
  },
  {
    "url": "assets/js/17.99f095fa.js",
    "revision": "663b08f51a5de113e8cf4e8e530f1009"
  },
  {
    "url": "assets/js/2.4f981b6e.js",
    "revision": "ecac2b737911c25179fbb63d0251bd46"
  },
  {
    "url": "assets/js/3.93912248.js",
    "revision": "e694c80e992120b6a7968cfd5ce5b4b3"
  },
  {
    "url": "assets/js/4.8f0ed61b.js",
    "revision": "e93da7dfd829de909e707eb1c2101be7"
  },
  {
    "url": "assets/js/5.1cb9dfee.js",
    "revision": "d45bfa1db639c305f370659e2905d10b"
  },
  {
    "url": "assets/js/6.f87a66d5.js",
    "revision": "2337673a3119090f4092e1866e40ebab"
  },
  {
    "url": "assets/js/7.4aa75368.js",
    "revision": "2aeb73bbef2bdc1e65dd5c4a404cc292"
  },
  {
    "url": "assets/js/8.ce2d3850.js",
    "revision": "5e93522aee013b8c5cc893fe5217cc5c"
  },
  {
    "url": "assets/js/9.5efa5c5f.js",
    "revision": "90a86255c9df77531cd56697915f83f3"
  },
  {
    "url": "assets/js/app.d5b31ff0.js",
    "revision": "356fdefb231eeb6b0e87cb087e269426"
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
    "url": "blogImg/20210526143014.png",
    "revision": "b0feebec291e3d20515561f6b8594fad"
  },
  {
    "url": "blogImg/20210526143530.png",
    "revision": "79a73d21b20217105367a3ae40462f81"
  },
  {
    "url": "blogImg/20210526144109.png",
    "revision": "9d8308b9492b5fdc7d3d5ad535bdced4"
  },
  {
    "url": "blogImg/20210526145446.png",
    "revision": "db00c188b4a9e6ea34995e5010c31451"
  },
  {
    "url": "blogImg/20210526145728.png",
    "revision": "af86d94ee206819b1bd00865880fd7aa"
  },
  {
    "url": "blogImg/jdk8new.png",
    "revision": "7f2bdca891e2574d1adf578ef1104b2a"
  },
  {
    "url": "blogImg/图片1.png",
    "revision": "e5c73c34fb8fc036262e98dda28e1c4f"
  },
  {
    "url": "blogImg/图片2.png",
    "revision": "38169b6632fee0e7c2a906ee1af2155b"
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
    "revision": "29c2973187728de04ad7af1bb4c1e2a0"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "afcb089bc90e57fe90834ff6c59f0b89"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "4180f696051efdb01df87ba847204a3b"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "7181b832d1a487ceb7ec268c9c7a831b"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "8da0f2ab9a5660e8ce923120ac126de4"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "8223af0f941336e5efa907819c148239"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "b416a919d26f60603d921a16a65a0551"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "9e9c4da3a136ded49476fa6960e56784"
  },
  {
    "url": "view/preface/index.html",
    "revision": "645b43759a9782dd9610501d3dd451f9"
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
