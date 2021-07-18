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
    "revision": "876076b68b2a889d74e73c3aa1d17f64"
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
    "url": "assets/js/11.2c09cbc6.js",
    "revision": "ffc3eb4bf65747cf489d4d6345598b45"
  },
  {
    "url": "assets/js/12.75df4ed4.js",
    "revision": "ba337dd987e2fa02575536b0d672632b"
  },
  {
    "url": "assets/js/13.09d95cf5.js",
    "revision": "d2a25e12e2f6427de54515d626d6561b"
  },
  {
    "url": "assets/js/14.a84815cc.js",
    "revision": "ff3af165c969247602ce4ab33160b432"
  },
  {
    "url": "assets/js/15.dc6a761b.js",
    "revision": "b2a89b607bf63ab7eaed8859d039d7f1"
  },
  {
    "url": "assets/js/16.ba523ef1.js",
    "revision": "0b610e2ff1c2d9a6c40d9366160d6c60"
  },
  {
    "url": "assets/js/17.197a33e3.js",
    "revision": "2c496560e65e5b403ae20b27b66b8d28"
  },
  {
    "url": "assets/js/18.45af1f60.js",
    "revision": "aea69290c8245d2e0a7715bab364f1ac"
  },
  {
    "url": "assets/js/19.d85cdee5.js",
    "revision": "aad64ca1a20fc35bed3393b2a73e7b56"
  },
  {
    "url": "assets/js/2.b2651e34.js",
    "revision": "173a8820b1eba21b158b2be612b8f605"
  },
  {
    "url": "assets/js/3.b171b085.js",
    "revision": "1e9ea22f8024f7198b92c035da38f94d"
  },
  {
    "url": "assets/js/4.52bc112a.js",
    "revision": "0946b22267fd184ed27604435d5917bc"
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
    "url": "assets/js/9.ffcbac45.js",
    "revision": "a34c835d5c2f9b775d4946e7bcab1748"
  },
  {
    "url": "assets/js/app.14447cc7.js",
    "revision": "864bd955c6fb72d50a29af65ba4d4904"
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
    "revision": "131aa20cd8f0e51cb6d6044d8e515bdf"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "449365cdfa1223a06de22fc123a8c315"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "5a5d186293c99f9cfb995c68b95bde73"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "860969991324a969defde4f8e61142ec"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "b531043592cecdf9ea2d0d3d472489ce"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "22a046fc9558e2e4b7e468117f86f090"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "f850931bdb46402e18124186f5f2acec"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "deac998b065f7c294a730ca689cfade2"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "20b0f5917a7ec71ad42c17a142644c8a"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "41af4399c4d845fd910880fdd9f36762"
  },
  {
    "url": "view/preface/index.html",
    "revision": "e9f43cefc1dee9150e4aa48f2bfed60e"
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
