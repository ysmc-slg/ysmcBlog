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
    "revision": "a85e99cad7739abc9eaacb3378eb7fec"
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
    "url": "assets/js/10.48ba280d.js",
    "revision": "89cc97a29b86036f3cb72ca552709981"
  },
  {
    "url": "assets/js/11.4c5f2c34.js",
    "revision": "f29ab3f9e479dfda04e57e65ca05deec"
  },
  {
    "url": "assets/js/12.8462a4a1.js",
    "revision": "ab017f9b89908717e5cdb701df991afe"
  },
  {
    "url": "assets/js/13.8a7b2418.js",
    "revision": "388716dd18431d49b0ee82d3fa145169"
  },
  {
    "url": "assets/js/14.13ae1efb.js",
    "revision": "8426ea159ad278ab6a7b250c1aae6111"
  },
  {
    "url": "assets/js/15.e05de678.js",
    "revision": "082102dc92b0ef79fe33a7cb55837a7c"
  },
  {
    "url": "assets/js/16.ea0b1841.js",
    "revision": "a4b144727b625cab8892c22d7ffd86ab"
  },
  {
    "url": "assets/js/17.fcf7a8e4.js",
    "revision": "2adbfe714efed6a856500bd3a77f676f"
  },
  {
    "url": "assets/js/18.652fa333.js",
    "revision": "7f94760c5d1a06cc37d4cd69adcb8cee"
  },
  {
    "url": "assets/js/19.8149b09c.js",
    "revision": "217151519503544d1c25dd4b39dd2fd5"
  },
  {
    "url": "assets/js/2.b2651e34.js",
    "revision": "173a8820b1eba21b158b2be612b8f605"
  },
  {
    "url": "assets/js/20.5f129d2f.js",
    "revision": "885f5abfd9641dfd675705013d3c814f"
  },
  {
    "url": "assets/js/21.7082e58d.js",
    "revision": "3dcde2584aed6d25bd56ac46e362af7b"
  },
  {
    "url": "assets/js/3.b171b085.js",
    "revision": "1e9ea22f8024f7198b92c035da38f94d"
  },
  {
    "url": "assets/js/4.3fede7b3.js",
    "revision": "bc856fb087cdeb29519f71cc0edc89f5"
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
    "url": "assets/js/9.c5229f4e.js",
    "revision": "a42315a2a01c6a4dcba11577bc2f0d38"
  },
  {
    "url": "assets/js/app.ee137b13.js",
    "revision": "07e71c3a36861b8dc57f0a56b13a2589"
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
    "url": "blogImg/Stream01.png",
    "revision": "aa02a1dd3328788b4aef36f2a8974767"
  },
  {
    "url": "blogImg/Stream2.png",
    "revision": "c971b61226ab5f3f291a169cfcef038f"
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
    "revision": "1e6aea9146e4235c3ca45877b80dad8c"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "3fe12f03731244b4db7625daded7e06d"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "63ee6098fecf2ee5b73b83f966a6d93c"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "5c11346dae8c22a4da5f6e59d99c4f56"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "bf9bcc958a2ee4fcfcd1402f8df23a55"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "48ef9e88ba0e7a4f1e45916acc313de0"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "a9181bbabac3b9239ffceb11a3219164"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "8fd910bd014461c26057920b53f888c9"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "fd60e89dcaed365409036add8c9c5f2a"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "8a719ff87cf23d185099fde5f7c69cdb"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "36b965c8430a29ca7f060579dacee095"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "98ffcb6c0a0443461f2f2985f3aa1180"
  },
  {
    "url": "view/preface/index.html",
    "revision": "33472cdce9043113ed64926608065a25"
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
