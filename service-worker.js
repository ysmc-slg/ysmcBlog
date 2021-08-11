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
    "revision": "c53900d2127c80a50869e397966bc8b0"
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
    "url": "assets/js/10.76c7bae5.js",
    "revision": "5090c2c200fb6be33fb4fb7609e7ad64"
  },
  {
    "url": "assets/js/11.4c88b3a4.js",
    "revision": "acf6391efa7ee28e98c33ae10c7f4148"
  },
  {
    "url": "assets/js/12.ca300b2f.js",
    "revision": "4ad8290924d1135e58d1054e52ecc7a7"
  },
  {
    "url": "assets/js/13.fa736952.js",
    "revision": "b339b0a58a53a71e3d094823ca49e12b"
  },
  {
    "url": "assets/js/14.c6fc0345.js",
    "revision": "b258966fa12e718f1d14c005d95488f0"
  },
  {
    "url": "assets/js/15.bb0d3e83.js",
    "revision": "25cc95cbbd4ddc82a53f2056c66a6137"
  },
  {
    "url": "assets/js/16.eae0a2db.js",
    "revision": "8f0efaf297d02196c454c5ba35f3570d"
  },
  {
    "url": "assets/js/17.da9af0f4.js",
    "revision": "0a49589c544b20afdfb2e457ba9cbba3"
  },
  {
    "url": "assets/js/18.aba29759.js",
    "revision": "67121f08f579d90d73b8d588262fb8cf"
  },
  {
    "url": "assets/js/19.f2c9a98e.js",
    "revision": "b7492ca2a49a3849e3f7a4586d114482"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.2146a986.js",
    "revision": "86081c58e2c9440d190d853afcd7abac"
  },
  {
    "url": "assets/js/21.7922e174.js",
    "revision": "fe89da929826680d0fa43be78b4ed7cb"
  },
  {
    "url": "assets/js/22.9183b23f.js",
    "revision": "c16ef239ec17f190a993ce2d4aca2933"
  },
  {
    "url": "assets/js/23.249e33f8.js",
    "revision": "64669490f976d966f2caa081e0dfc267"
  },
  {
    "url": "assets/js/24.c848830a.js",
    "revision": "9b6b908015deb7d55171b9634551725a"
  },
  {
    "url": "assets/js/25.0e52a68f.js",
    "revision": "aababec28934f5ba9962894469832f00"
  },
  {
    "url": "assets/js/26.e332ddcd.js",
    "revision": "94a037f697354340ba1f658a25ba5f06"
  },
  {
    "url": "assets/js/27.97199360.js",
    "revision": "2a672824f59b188b62d9537398c4931d"
  },
  {
    "url": "assets/js/28.51ce7b9c.js",
    "revision": "1b12356bd21645539343676853b20ef3"
  },
  {
    "url": "assets/js/29.dc58f6ce.js",
    "revision": "6482a6167ad0f61fba809472d7715f39"
  },
  {
    "url": "assets/js/3.b55fc8fc.js",
    "revision": "f0cd3f83a6bdaa98c04ff1c34b03370d"
  },
  {
    "url": "assets/js/30.82d0b0d5.js",
    "revision": "ed60a4f7d5eb615d514b40d264e04b97"
  },
  {
    "url": "assets/js/31.6530d409.js",
    "revision": "dce620a85a3337ce794d1b89398f664a"
  },
  {
    "url": "assets/js/32.a06c9c40.js",
    "revision": "44c4035ecdfe5b8511e5bdc8309ef2dd"
  },
  {
    "url": "assets/js/33.69b88b2d.js",
    "revision": "0ebacbd955eeaa844c0b1c604cc1f53a"
  },
  {
    "url": "assets/js/34.82a77e06.js",
    "revision": "d8a49c4d3a6033b61f9be0aa6758ced3"
  },
  {
    "url": "assets/js/35.349e083a.js",
    "revision": "d2eec5a0f55a9d92241b3fd0451b57b4"
  },
  {
    "url": "assets/js/36.0c8c51bd.js",
    "revision": "696bf89f39d838171b8e335c557252f5"
  },
  {
    "url": "assets/js/37.d9269fb4.js",
    "revision": "1d05b44d9e04540dee069cb3fb994469"
  },
  {
    "url": "assets/js/38.45073be1.js",
    "revision": "6c6d4ba512c310f16eceb19a12951acf"
  },
  {
    "url": "assets/js/4.33637ec7.js",
    "revision": "4958680e03c920a0ef43fc47d3203e16"
  },
  {
    "url": "assets/js/5.851d534f.js",
    "revision": "fedde939b5ea210bfce396878cd5281d"
  },
  {
    "url": "assets/js/6.0a2e90c4.js",
    "revision": "e6e665d2660fdbd93ea509b910d9b788"
  },
  {
    "url": "assets/js/7.1cc9bea6.js",
    "revision": "7e615f351d6d827de91208bfa74affe5"
  },
  {
    "url": "assets/js/8.2247b01d.js",
    "revision": "2ab7f28f3f79e134f06f3927814e7093"
  },
  {
    "url": "assets/js/9.c8eb9319.js",
    "revision": "e8e8626549ff261cda47708db545c302"
  },
  {
    "url": "assets/js/app.cc37bb06.js",
    "revision": "d1756afb756cafb71c8099ec3d5ff38a"
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
    "url": "blogImg/rabbitmq/2021-08-09_10-37-31.png",
    "revision": "c0f962f82d69f2b0b4d7f44ee1a13d18"
  },
  {
    "url": "blogImg/rabbitmq/20210807124514.png",
    "revision": "e76be57bf9a9bc34c053c713e7bb5220"
  },
  {
    "url": "blogImg/rabbitmq/500.png",
    "revision": "5041a6f4c6cc1ae73e59deb70a1b4862"
  },
  {
    "url": "blogImg/rabbitmq/600.png",
    "revision": "80cbad97d19da1611ea7d82cc09f92b4"
  },
  {
    "url": "blogImg/rabbitmq/640.png",
    "revision": "5b270c2212091cc748401e67f605b6c7"
  },
  {
    "url": "blogImg/rabbitmq/700.png",
    "revision": "1c4adda6affe11989be6a550ae3fa60f"
  },
  {
    "url": "blogImg/rabbitmq/binding.png",
    "revision": "21c7e975886e8c283183c397d567be07"
  },
  {
    "url": "blogImg/rabbitmq/binding2.png",
    "revision": "c64d4a45b0c2d95dcb5602a1c0279f8d"
  },
  {
    "url": "blogImg/rabbitmq/direct.png",
    "revision": "746f86d750730421e98bab14be6d82e1"
  },
  {
    "url": "blogImg/rabbitmq/direct2.png",
    "revision": "71c98fdbeaf822a07769a190f165518d"
  },
  {
    "url": "blogImg/rabbitmq/durable.png",
    "revision": "2ded7f4a49cde89e0d0e1b0b6eff5e08"
  },
  {
    "url": "blogImg/rabbitmq/haha.png",
    "revision": "fcbdece96ca8b9f7fc31916962f3bbda"
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
    "url": "blogImg/rabbitmq/image-20191126213115873.png",
    "revision": "ad7375f731b9c26bbaf1c9bc5290bc47"
  },
  {
    "url": "blogImg/rabbitmq/image-20191126220145375.png",
    "revision": "51f2c6e9e002de7d1607c4c6870609a9"
  },
  {
    "url": "blogImg/rabbitmq/image-20191127121900255.png",
    "revision": "ca4b1fd8e9ac13e0fe7d4364fbb6d565"
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
    "url": "blogImg/rabbitmq/props.png",
    "revision": "4cbe58b191623a6beab2eef12409d5b9"
  },
  {
    "url": "blogImg/rabbitmq/rabbitmq02.png",
    "revision": "199364a67da3258f925833356dbd8c61"
  },
  {
    "url": "blogImg/rabbitmq/tag.png",
    "revision": "dd34a5b14c5d73d2037c77fb0582d8ce"
  },
  {
    "url": "blogImg/rabbitmq/tag2.png",
    "revision": "48ad1d423cae2be70dce64e736c4cd83"
  },
  {
    "url": "blogImg/rabbitmq/topic2.png",
    "revision": "c271f2c04274dfe3bba6484cbdd0ec2b"
  },
  {
    "url": "blogImg/rabbitmq/topic3.png",
    "revision": "631432b4344120e840abc45fe3eec1b4"
  },
  {
    "url": "blogImg/rabbitmq/ui.png",
    "revision": "c7a4fa6241f1801b94725fe243532ab4"
  },
  {
    "url": "blogImg/rabbitmq/默认交换机.png",
    "revision": "fb1e6ac1274128fe36fe955f521ec54e"
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
    "revision": "34431cf2fb809b43891e4a915c8d452f"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "d99414367a4b117a11f7c593d48993a5"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "eeaeea425dde1cf37fcc1bea317dab72"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "88bccd1b4113c73643106f784c4c6ce8"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "50f65ea46fe2d0b14a0cdc2ddfc8d2f3"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "086efe8d54f90eae69b8e522d1ad2539"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "ea4744f15ade2d961617bdc61be3a1c3"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "3aa04aad16a2a9b8d67177bc79ead0d8"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "1b1db668e84742697839e9d9aa61a5be"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "b6b6daf7384cbbb91a252840e720eecd"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "045d55986d2e77b7d8d28f280d52ef56"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "a8c67c1b8f3fd0ad563790f51a9edf17"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "017887ed73e41fd2be092634c76cf2cf"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "467d3978a59eb15d34fb31861996dd6e"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "c6ed27a4d5c39ed2b8da047afb22a79d"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "06b1d44109b8bc6561ea36376c76899f"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "720d2f8888be46b41b8e593fd81ca08d"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "8b75367c96a17dbe23a49ceeadbe40aa"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "5b6a6d8131a9560a4c352ba12bcd6a1a"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "e26b7a637fce2ec0b78c65b85c4463ce"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "2c501fc86da7518e24ef8e7218291753"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "70883768ebe3a69fef790d7dea31ad2c"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "cae0b6a406aef87700b5766941305873"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "a07bbda2c07d4264fbcd5bb2b318d0f6"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "94b4601b35c6cf0352af6099b6bd1fcc"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "55ad0e60e28b16a86165ff8daa1937c0"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "c94d20097b943a3f48e1eedf886970ff"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "3e06c2c1a4e0cec859ea5bd5def5d0a0"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "f927f9c0c782d7d0b17d1e6cd0143bd3"
  },
  {
    "url": "view/preface/index.html",
    "revision": "8de0530b718c46ccd390446317cbe809"
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
