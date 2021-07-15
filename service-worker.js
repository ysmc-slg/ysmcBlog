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
    "revision": "e165a41ce4c77247495c1246d860eb81"
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
    "url": "assets/js/11.48c672e7.js",
    "revision": "0f565b2bc96382fc334eb415b25e8bde"
  },
  {
    "url": "assets/js/12.ddab174e.js",
    "revision": "e7b1a06407b5f0ac4dd28803bfbb8b30"
  },
  {
    "url": "assets/js/13.097f127b.js",
    "revision": "e4b4272833ff276d9a9632bc1b31a0f8"
  },
  {
    "url": "assets/js/14.e872e556.js",
    "revision": "87d993a1642cb4bfcdbc86be816032dc"
  },
  {
    "url": "assets/js/15.85b7d227.js",
    "revision": "4229112a48e4db38f16fefa80b88c3ad"
  },
  {
    "url": "assets/js/16.8014d358.js",
    "revision": "bed901db19de84b1db9edc9c8dcd0d0f"
  },
  {
    "url": "assets/js/17.85e0f48f.js",
    "revision": "21a6858c2dd6acb939689265f5e830c3"
  },
  {
    "url": "assets/js/18.a5dad222.js",
    "revision": "d2a4942f703e61e96037d59e83914e0f"
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
    "url": "assets/js/4.2a5bd55b.js",
    "revision": "32540ab4db504fef358e7ca4b5c37836"
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
    "url": "assets/js/app.558a543e.js",
    "revision": "afece50dd8157f0e8735c292fad6a359"
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
    "revision": "930547aba6dd42ae1d537108d3844dae"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "cee927f76fe8a7353223d4a263ac7fbc"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "7fbac6ef5a1ea2a15f730ac00e0ed674"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "d200247156ae630dd989f580ff7521a3"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "ab0809fe17f984b1fc9fa7183756455b"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "3d3459d0e4a508596133f8c2baa2c12a"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "95338eb0af1b56f5ba1d8d5cc32dd54a"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "69f6085294f9d13121475d320d89dbc3"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "7cd842f170115dd6b88ca73d45fbe371"
  },
  {
    "url": "view/preface/index.html",
    "revision": "1cc569b044c0f15aa551d98a1030df83"
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
