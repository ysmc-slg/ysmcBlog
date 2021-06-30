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
    "revision": "e5c3a625dc9ed8eddeeaaf2995ea224b"
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
    "url": "assets/js/10.52f60854.js",
    "revision": "6187fc15dfa870dd1a0b75cba9bcbf67"
  },
  {
    "url": "assets/js/11.daebd2c0.js",
    "revision": "ebac89a638904f7cd350d5f7e2643060"
  },
  {
    "url": "assets/js/12.8c58016b.js",
    "revision": "63b86f95978ef0133281f243ad985061"
  },
  {
    "url": "assets/js/13.ed2406a4.js",
    "revision": "175df31309a54c80c2f1a6112ffa846c"
  },
  {
    "url": "assets/js/14.409c3da8.js",
    "revision": "4c8f43484fc75fbaf73d0d62519ffbd8"
  },
  {
    "url": "assets/js/15.c7260fa8.js",
    "revision": "f6bc6b5815411a0011466c9d63908f3c"
  },
  {
    "url": "assets/js/2.463fe33c.js",
    "revision": "03707736938d116787e2c8a85870536f"
  },
  {
    "url": "assets/js/3.e2ffd594.js",
    "revision": "673b7a94de4ea06d60b37d6555c43c24"
  },
  {
    "url": "assets/js/4.389c5133.js",
    "revision": "45908e649cf654da884abb955bacd650"
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
    "url": "assets/js/9.757c2375.js",
    "revision": "c65ce1977ccd50868152c82e962fac0b"
  },
  {
    "url": "assets/js/app.d5d492f9.js",
    "revision": "8caae392bbd5ba1def42eefd9098e8cc"
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
    "revision": "347fd71c8018a9ea935b5b775c840a67"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "a1c437e17fd490fd32e720f003c5ae51"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "0775d4e54d78606da75a59bc185415e1"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "a533f817aa1c68de5a8ce3ca35b12e1e"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "d0b8801467ac87e715de96c217dffd29"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "1c4c7a4ee4abfeaf9fb8190f97bfb374"
  },
  {
    "url": "view/preface/index.html",
    "revision": "43510ee540f797a3fb43815b38e516ab"
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
