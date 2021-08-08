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
    "revision": "b0c23eeefce4a32ff379bbd84ce46fcd"
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
    "url": "assets/js/22.4191d5e5.js",
    "revision": "42f8551d2e8356475ef19e9846757fe5"
  },
  {
    "url": "assets/js/23.07164467.js",
    "revision": "60c5b0fa552f4829b02726748ed88a5a"
  },
  {
    "url": "assets/js/24.44ace0e3.js",
    "revision": "1d084f5b434d72787141d3f27101937b"
  },
  {
    "url": "assets/js/25.3a018d43.js",
    "revision": "e119878cc65a96fac805980a6dbf0cd1"
  },
  {
    "url": "assets/js/26.726ef871.js",
    "revision": "2fc7643a155104435a07270f39fd812f"
  },
  {
    "url": "assets/js/27.10612b45.js",
    "revision": "0df1245ec497be4d4ed776dfb5b6bae1"
  },
  {
    "url": "assets/js/28.2f4b3508.js",
    "revision": "8f6711b593ea7697f1f863b6a5132c8e"
  },
  {
    "url": "assets/js/29.4bbae75d.js",
    "revision": "5f72fc34c3252a61abc2021834f45246"
  },
  {
    "url": "assets/js/3.5bf914f4.js",
    "revision": "053a3a741b7852b97e20666677a54f9c"
  },
  {
    "url": "assets/js/30.27f9e764.js",
    "revision": "b47547be90f2e56ef4b755f1f07d2dc1"
  },
  {
    "url": "assets/js/31.7f926402.js",
    "revision": "50df83c9d2a0415dca2cc6ff59c7bc97"
  },
  {
    "url": "assets/js/4.a092cfb7.js",
    "revision": "0327c5c1017dffa0df6a204e40c912be"
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
    "url": "assets/js/app.d5ae8aac.js",
    "revision": "033e53c8232efd7833505878470e6358"
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
    "url": "blogImg/rabbitmq/20210807124514.png",
    "revision": "e76be57bf9a9bc34c053c713e7bb5220"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126162026720.png",
    "revision": "2062b5f8223fc81fa9b5cb0b354f2f31"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126162617280.png",
    "revision": "0c7514361625a0dc2ade1196a5d06346"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126163023153.png",
    "revision": "6cb3d9e237fe5aabb5426be2eecb1bc3"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126163506795.png",
    "revision": "081f0f6861ed857730a7bc0a46e3f011"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126163631889.png",
    "revision": "5bbbb7103b25ae693055d31210c86abc"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126165434784.png",
    "revision": "c4067225697e35fdb7c150a593301dbe"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126165459282.png",
    "revision": "63c1e629a3212eda9fa6f349c507e323"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126165840602.png",
    "revision": "8547b82738acb141b25f77ca77126d6a"
  },
  {
    "url": "blogImg/rabbitmq/image-20200311182438041.png",
    "revision": "371c25c089acef971a0f4289ed5c3137"
  },
  {
    "url": "blogImg/rabbitmq/image-20200314221002008.png",
    "revision": "2f7806179f0edeb6bdb85d5013e094af"
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
    "revision": "743d9c4e7bbaf7a6b07db7ad432a0274"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "379b0391ae15468675f70853f6e45d6a"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "0fe804823b80df4db62437dcbae9d4a2"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "ae5255c811606492bd03fbadbc1fb59c"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "27e74cba7ea6d557e4d71bad2967ce3e"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "61c628dcd9f0e8a5f020b70d34c4f79c"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "9109969fd451d459a56f15481b64ba63"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "11ff62b5a2039f700f24e896f88eb5ea"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "ef718209c3b47cb472dafb656600108c"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "14922cb9dd60a57c6e88474c3a4f82f3"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "6707ba789ece4fcb44a7d94e2ffbc932"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "e95f4d29522ffe4ab7a1717a4e7926ec"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "c6073b54916e8b9f4d9cf4b1dc4dbb14"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "ede73ec77ad6808d48b1315227e7f529"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "997dc7962e313ce4d8b043602212be5f"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "b360e6a64455ab7ab81a9984a628c42c"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "72c4b30f6a911e536aa9dc5ee123fdf8"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "b7898b13daedc4ff8a5d5cc0629d862f"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "8bf0248fc60240ccb73ada74f3afba7f"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "f6025df1ed37242033a5839f482d189d"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "a05184cec6d642a595a633a354a39771"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "a0c94d56095420df4903747c10deed70"
  },
  {
    "url": "view/preface/index.html",
    "revision": "da778c0f251714bce9937ea8c25e14a3"
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
