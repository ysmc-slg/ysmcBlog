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
    "revision": "7b53bf7fd16781e943e3184e041b66af"
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
    "url": "assets/js/9.ba335070.js",
    "revision": "f2f892e69b03b83cb108e2e686015d29"
  },
  {
    "url": "assets/js/app.7ea29d3b.js",
    "revision": "491ae5028f4a9e5aeae219c079ad0123"
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
    "revision": "3078c4407bfe1ac8ed916c363698c878"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "3921c6eaa897bf62fda66ac4f4c08ecc"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "609cb8b4ddbe5112517b5d132a6ba541"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "d8d0c604778f7a9b9483b68f685ffda2"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "c3ad7774678637e60558c8acd3d965cd"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "8eed3a948d90b4cec4845162af72a697"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "a754c36ae50b837c88de32dc2eda40b3"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "bf98c4246506aecafbc5b0c36a2f4aa1"
  },
  {
    "url": "view/preface/index.html",
    "revision": "54fd132c6904ee2826f512e6b6249add"
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
