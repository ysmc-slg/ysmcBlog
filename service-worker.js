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
    "revision": "ea4b84fcf9b1d634557166c24413ac0d"
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
    "url": "assets/js/18.ba606116.js",
    "revision": "1fba76f743ce716490f991d16ce3047b"
  },
  {
    "url": "assets/js/19.d9080d6d.js",
    "revision": "7ffdf778f98d48dc1791adcbbf30ae8c"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.0c699ab8.js",
    "revision": "cd1832d9b78f02e9fd677f9d8f5f7d84"
  },
  {
    "url": "assets/js/21.c2b73e22.js",
    "revision": "bba2f74dccfa763d41a6e4748055a80f"
  },
  {
    "url": "assets/js/22.027cfb70.js",
    "revision": "63f2757f2986344fa70c0a77f448909b"
  },
  {
    "url": "assets/js/23.853abb56.js",
    "revision": "05643f6eca61a8e967b00c72c43ff4ff"
  },
  {
    "url": "assets/js/24.0b7b5227.js",
    "revision": "ad0d3cab6857e01c0ba3efbadf671cf1"
  },
  {
    "url": "assets/js/25.c0148772.js",
    "revision": "9ea5ed8ee0957d138d07c556e0a81217"
  },
  {
    "url": "assets/js/26.f27f4a2e.js",
    "revision": "ca477b8d563183af3c3a109158214c01"
  },
  {
    "url": "assets/js/27.fa01db08.js",
    "revision": "27f82ecc7f533817d189f7ab7ff007f1"
  },
  {
    "url": "assets/js/28.26ace006.js",
    "revision": "982cdb940cf0d149a69a9c6b1fbb5b14"
  },
  {
    "url": "assets/js/29.6d44c3c7.js",
    "revision": "bf33214a217376060ed185d40a94d92b"
  },
  {
    "url": "assets/js/3.b55fc8fc.js",
    "revision": "f0cd3f83a6bdaa98c04ff1c34b03370d"
  },
  {
    "url": "assets/js/30.ccc1bad3.js",
    "revision": "d078d9421d0d17786cf27938d0e8ca81"
  },
  {
    "url": "assets/js/31.b0c2b32a.js",
    "revision": "ff4a8670eaf0d89baef75b7a6b7580ca"
  },
  {
    "url": "assets/js/32.25721995.js",
    "revision": "ab904ccc766edf178e5d9c776661508f"
  },
  {
    "url": "assets/js/33.293c59b9.js",
    "revision": "baa71a01b7893d6555841afc387c7d99"
  },
  {
    "url": "assets/js/34.e012896b.js",
    "revision": "969ce1aba510653b14e7d41c96597429"
  },
  {
    "url": "assets/js/35.3e3bb60b.js",
    "revision": "81ad0d7ffffb1f3317accaa559101ff1"
  },
  {
    "url": "assets/js/36.bd0fcb40.js",
    "revision": "d9db50f201274dd4aeae00e1ddee12f3"
  },
  {
    "url": "assets/js/37.fb6c518d.js",
    "revision": "8046293a3d58e452ee85bd129733965f"
  },
  {
    "url": "assets/js/38.38080261.js",
    "revision": "9ce1caac58237cd68c83ed150ca1c5aa"
  },
  {
    "url": "assets/js/39.cfb1f954.js",
    "revision": "2a0fcf3fbc424434a9a934d1d3903a08"
  },
  {
    "url": "assets/js/4.be4beefd.js",
    "revision": "78fac947c777b73a2c43a40ae59c23ad"
  },
  {
    "url": "assets/js/40.89a70404.js",
    "revision": "06a5aca0e5be1c94dfcb9186ab41117d"
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
    "url": "assets/js/app.58a255e9.js",
    "revision": "b8f97f21eba1d94169dedf6942ce4c29"
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
    "url": "blogImg/redis/20210528101002.png",
    "revision": "0fcbc549621072b87de728d02536244c"
  },
  {
    "url": "blogImg/redis/20210528101832.png",
    "revision": "340e02ba09a1065c6efd7a3cc8b52006"
  },
  {
    "url": "blogImg/redis/20210528104336.png",
    "revision": "6dfa7850dde1b8828b6a53260ce663a2"
  },
  {
    "url": "blogImg/redis/20210528105707.png",
    "revision": "a4eda4ac560af4cc1ca74adbd2965840"
  },
  {
    "url": "blogImg/redis/20210528153609.png",
    "revision": "b4649cb2197a323b4afdd448e40fba8d"
  },
  {
    "url": "blogImg/redis/20210528163037.png",
    "revision": "547216fa92125bbaf7a443974854c143"
  },
  {
    "url": "blogImg/redis/20210531113039.png",
    "revision": "b0ebed360e39d37fc776292ed4f0107b"
  },
  {
    "url": "blogImg/redis/20210531114031.png",
    "revision": "019b02ab144e3dc96bfbe46cfa9c92cb"
  },
  {
    "url": "blogImg/redis/20210531114653.png",
    "revision": "c0ba38282fa66d37d1eb635311166763"
  },
  {
    "url": "blogImg/redis/20210531132835.png",
    "revision": "ba2d0b2d25b36c14515707ceac907a21"
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
    "revision": "7b381e251072eb525963b36072da11f9"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "674f09c8d5654b95833bbaed04b807d2"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "b2652d8a4e77571c0dc2f109a334dc3c"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "0ab2ffeffc5431edfac5395721deafe8"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "dbfa357abe47202c5eea97531e019c7d"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "702c681ac129d17b0fdad5957ac78a1a"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "9fc072776a3aeedd59540e0d161b7879"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "cac5faea3ab115f74c7af8f99edd046d"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "ea43f87b29ccc8631c394f65f838668d"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "4555b46c29cabc5f141719d8cc473716"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "1ed6fe2bac94888e12979106f0b4fe05"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "16f3d90610758c7d33353e96486f80ea"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "c0a2f6ddf0e1206db987f778cd6ddefd"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "18f135317d74ef9e6894804dd9d68d33"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "9ae5e9a1091d33dcaf3f0a83a2ad06bc"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "149edfae60008071bf6ff84cf248e70f"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "9902d33bfdc22417e52d012ab5bb1993"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "bc81e234f476946d7c61b03417a8eb17"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "8679734c9ea4db6d44c943fee2a8eb78"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "e08bb72d9647024d626ace6c471ab70e"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "54d2451fe5963cab3171d327a894b263"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "e54f15fc2bfb993d86273da9952180a4"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "411f2450e5aa9a24cc3a836b1aff53f5"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "abadd2ba42329ad8d0d67bc25b598707"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "b3f9a269b3ca5675b0872d32ea6aac0d"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "dbe380e23ee8af3e8ff22494982bc8f2"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "c46b36aabda5e15dc7adb34316193fa6"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "37ab5c11317dfb27b12a7ef070543950"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "13d110c5c8a48fbbdd5e730641f152e4"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "638b9d94908e9c036ad9f376d5facd82"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "6f0b4842838c73bb659c0f827f3813c9"
  },
  {
    "url": "view/preface/index.html",
    "revision": "69cfff05e431c794a316c9c1305b53f3"
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
