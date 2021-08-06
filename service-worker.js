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
    "revision": "8e3c382f31f14a0e2ed947c7a6dff6cb"
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
    "url": "assets/js/10.ebdfe297.js",
    "revision": "93002d0abd5376046a0001941a445a6a"
  },
  {
    "url": "assets/js/11.f214ccab.js",
    "revision": "975b2be75fff7c9902a6e34bbe1a1694"
  },
  {
    "url": "assets/js/12.6e8e0715.js",
    "revision": "67749a8c70401d345486999d931e324a"
  },
  {
    "url": "assets/js/13.b6d8622d.js",
    "revision": "c526f181d985bec8e1faf0ad0f681436"
  },
  {
    "url": "assets/js/14.8ecbaacd.js",
    "revision": "f3639f99f92803e123c61af28d7b3fa6"
  },
  {
    "url": "assets/js/15.2f338fa0.js",
    "revision": "b860549b5e65a005ec96bba6adacd082"
  },
  {
    "url": "assets/js/16.609fc6f6.js",
    "revision": "d5aa40016329f18afc924ed24ca16681"
  },
  {
    "url": "assets/js/17.4ada27f7.js",
    "revision": "80737ee925a29e98c4523476edf00704"
  },
  {
    "url": "assets/js/18.9694ee06.js",
    "revision": "475fe4a9db8c48484a848ab0219022d4"
  },
  {
    "url": "assets/js/19.dd867fe5.js",
    "revision": "86f30d65e73a6c1e4307eeeba27d3599"
  },
  {
    "url": "assets/js/2.9f0304db.js",
    "revision": "ee6008d144d3fffe4659d2ae3f91e9c4"
  },
  {
    "url": "assets/js/20.f07b7d11.js",
    "revision": "29d3f6ed50de8594145ec8713067715d"
  },
  {
    "url": "assets/js/21.f1ff82f4.js",
    "revision": "c12dbd513e3a723dac5a53275341ce8f"
  },
  {
    "url": "assets/js/22.1e98bb9e.js",
    "revision": "b2e494d88b9c6f892c3c64f95b6c1857"
  },
  {
    "url": "assets/js/23.9e9b320b.js",
    "revision": "fb0d4eaf8ce7745ca865eca54311852c"
  },
  {
    "url": "assets/js/24.a044dcc9.js",
    "revision": "b2fc7c76bae45ab15465ffe1e0578703"
  },
  {
    "url": "assets/js/25.65d0247d.js",
    "revision": "3f1c789ad2b6bef95996f53e4086951a"
  },
  {
    "url": "assets/js/26.70ef1afe.js",
    "revision": "0cd7725ee6dc4f0b8f43e12e5c3e5cbc"
  },
  {
    "url": "assets/js/3.5bf914f4.js",
    "revision": "053a3a741b7852b97e20666677a54f9c"
  },
  {
    "url": "assets/js/4.6e7700c1.js",
    "revision": "e50121c5034038097d9249b96fabc546"
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
    "url": "assets/js/9.09a5ce7f.js",
    "revision": "c92b0f55368cf1fca7e3386a18883d64"
  },
  {
    "url": "assets/js/app.322cb7f7.js",
    "revision": "a5c830a7c79eb92ff1460c3092176237"
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
    "url": "blogImg/rabbitmq/image-20200311182438041.png",
    "revision": "371c25c089acef971a0f4289ed5c3137"
  },
  {
    "url": "blogImg/rabbitmq/rabbitmq02.png",
    "revision": "199364a67da3258f925833356dbd8c61"
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
    "revision": "7ce30ba28390c476d15c3213e6e351b0"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "0e27b5575188bde4e1ef197f53f1b484"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "142dece5d7aa5965b4cb29d4ffa54b8d"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "bee8228b598a8cf02dedda161a33b69f"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "33fdca1f115603c542325d3d297ef5f2"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "f51d109966ca0617a88b0092d2b7f84d"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "9ee54dbe35b35ba2ad77e4101c1d7841"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "90296eb2418c76abc82bcfcba19f3811"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "9913d7df5745a673d1f2ce25a466d37d"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "292d260a6ad0577bd09499ba5ed21a7b"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "59148bd9a71bf5b23f1829ca5ac07794"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "882273d7b727cf513cd2b6a08d84b41e"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "ae23213cd04f4b6477f78cb432cb78d4"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "aa9c0ca8e9b08a9f1906cb7e3a618f94"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "87ebadf26bc3c4be371b2b2fb968abe9"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "c8ef524fcb76c6fc9842947878720e7a"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "e05ba144f972a8a85a4b8749f19d69f2"
  },
  {
    "url": "view/preface/index.html",
    "revision": "c6db087da0d4743523015efce454adc9"
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
