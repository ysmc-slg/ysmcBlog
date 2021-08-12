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
    "revision": "1cfcbf7267fb6905b45ea5433fbfac8c"
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
    "url": "assets/js/18.0c7bf555.js",
    "revision": "10e14804e18ea2f36ced3e600e120523"
  },
  {
    "url": "assets/js/19.012b17e5.js",
    "revision": "16e725c5c04f18e842fe356880a8c81e"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.92d382cb.js",
    "revision": "1e2c5c7c6dbe917bdfa7b681becefd2c"
  },
  {
    "url": "assets/js/21.1b5d98b4.js",
    "revision": "e1a3728faaf4ac3896b0f8994bb1c7ed"
  },
  {
    "url": "assets/js/22.847d778b.js",
    "revision": "a6a0473fe9464fba01120d43acf02f9d"
  },
  {
    "url": "assets/js/23.45542a85.js",
    "revision": "9e31590e8bbe963765a5117bb91eb73d"
  },
  {
    "url": "assets/js/24.3c01a39f.js",
    "revision": "d54e91f8314cad86195b5764420b2fe4"
  },
  {
    "url": "assets/js/25.79596dc6.js",
    "revision": "2364a11f4f0f83e4098c16e402127525"
  },
  {
    "url": "assets/js/26.d7b345ea.js",
    "revision": "4de8e705712e1e400051cefb8a4c8fdd"
  },
  {
    "url": "assets/js/27.ea8188e9.js",
    "revision": "c6857f4e27b363d7501fdfd68d934b2c"
  },
  {
    "url": "assets/js/28.0f3c0a64.js",
    "revision": "ee2210802873f805bffaa8f6c036f5aa"
  },
  {
    "url": "assets/js/29.075bcb14.js",
    "revision": "b52c65616941fc23cd879c6939544905"
  },
  {
    "url": "assets/js/3.b55fc8fc.js",
    "revision": "f0cd3f83a6bdaa98c04ff1c34b03370d"
  },
  {
    "url": "assets/js/30.3cf761fa.js",
    "revision": "462bb2926c19bd05833c260abd571c2c"
  },
  {
    "url": "assets/js/31.8ade6700.js",
    "revision": "e7a640790b754bfc2988f0f34c603eaa"
  },
  {
    "url": "assets/js/32.5206d887.js",
    "revision": "7fe21f42f406d829f97e02aa773841dc"
  },
  {
    "url": "assets/js/33.62baff0e.js",
    "revision": "46888949bf0dc7267fc5efed1296ec2b"
  },
  {
    "url": "assets/js/34.9a94f748.js",
    "revision": "84e1f1d1b04fb6106246c0cbedd1c66a"
  },
  {
    "url": "assets/js/35.988ea63a.js",
    "revision": "a2162b2bfab1b9f390fc0c1ffd69ce2d"
  },
  {
    "url": "assets/js/36.eb2ae8f3.js",
    "revision": "d1bbde902fd30e8b336d45524d01d114"
  },
  {
    "url": "assets/js/37.ff20bcd6.js",
    "revision": "5bb265cd5dd155570d385b0f5d02c645"
  },
  {
    "url": "assets/js/38.82328414.js",
    "revision": "28b7eef876865cfa55de600ac405b06d"
  },
  {
    "url": "assets/js/39.9d21402b.js",
    "revision": "252477913255381a2b710846b035a977"
  },
  {
    "url": "assets/js/4.2ad17211.js",
    "revision": "919d623fcc18afdce4465be17ffbdea3"
  },
  {
    "url": "assets/js/40.d0f19e02.js",
    "revision": "61c61bf182f085cb0ebedb38f81369c8"
  },
  {
    "url": "assets/js/41.d0b0e7a8.js",
    "revision": "e4c2f3bf382bc56409134ddd94858d82"
  },
  {
    "url": "assets/js/42.5c95c8f0.js",
    "revision": "276190759ebfb52c373bdb547c8e2219"
  },
  {
    "url": "assets/js/43.bf0d66f0.js",
    "revision": "905717bb8d4c867a04ac767dae4f34c2"
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
    "url": "assets/js/app.b56a57e8.js",
    "revision": "444c0ede41e33a2f5c8e7e5beb8e8c5c"
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
    "url": "blogImg/redis/20210602125649.png",
    "revision": "7fb6906eead43ddf2a0e10ba6ffe7373"
  },
  {
    "url": "blogImg/redis/20210602132132.png",
    "revision": "fa8d2522c6bc852a0b139c6a970c5fab"
  },
  {
    "url": "blogImg/redis/20210602143238.png",
    "revision": "6d114788c72802648ed848909bf8d505"
  },
  {
    "url": "blogImg/redis/20210603104758.png",
    "revision": "2e40c337cb340740d09b30d218bfc667"
  },
  {
    "url": "blogImg/redis/20210603105810.png",
    "revision": "e9352271b3cb6dc4210f60b828ab61ba"
  },
  {
    "url": "blogImg/redis/20210603110300.png",
    "revision": "33f565c1acf928d916bb29a4298f5bf6"
  },
  {
    "url": "blogImg/redis/20210603111635.png",
    "revision": "c7620b1dcfedd9a7ea7ccef5ee25a586"
  },
  {
    "url": "blogImg/redis/20210603112446.png",
    "revision": "5be43e875ee13b874483644af61d0420"
  },
  {
    "url": "blogImg/redis/20210603114317.png",
    "revision": "a19edf5eed095ce4baa73be548a45e13"
  },
  {
    "url": "blogImg/redis/20210603132717.png",
    "revision": "db68a1be73663b3e453c2eeb63c2582e"
  },
  {
    "url": "blogImg/redis/20210603135519.png",
    "revision": "9932ddcf02a83cb016f862148315098c"
  },
  {
    "url": "blogImg/redis/20210603140744.png",
    "revision": "86c358e8493de3f21f29049676ee6898"
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
    "revision": "52a764be0e79c86cd0c8b53e5d445945"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "cf889df258988bf530c460f9b3d2133a"
  },
  {
    "url": "view/database/redis/aof.html",
    "revision": "5a6c1d00c083c6d13bf1fbc768730235"
  },
  {
    "url": "view/database/redis/configuration.html",
    "revision": "fe9408b4a1cfd1d0fcbb87f46b189711"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "8bf12d9da137a5e27322e5a06dd6d5f3"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "c2df871b22ce64cdda563baa471c9972"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "ea7388577fa1e0aacfd4b1eb63d48a1a"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "168c3d11b3a7a4cd8430483286f62f92"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "c39b2a8fe55c09a638bc5abdcb776e24"
  },
  {
    "url": "view/database/redis/rdb.html",
    "revision": "573093d108fd36183f8124439d43e74c"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "c32d6f3b20ca08c7d9891dd5937e7172"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "b29852a14f4c4cd1ae634d71f99528d0"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "e51f46d8d5a20e2b0679c5f6932c6215"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "4056eaf220567a499e5240ff55ceca5c"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "1be9a3403c3112a3a58f8790a4567025"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "3d5f3b156cebe4154a60c9f8eba884e7"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "b8efb79f3eb48b67ace49d7d6d3e7820"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "dd5d5c03d7dff5069ddcb140506d9c87"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "68052c07722b0dc575df2b052ca3c76f"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "6e44104841114d2ff0d04981fab3f008"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "a5432c03b485d1f41fbf7dc45ee04939"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "77e17009ae04d79b4c2170f7bd7ba02b"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "cee2642867ee4f34b3d7d08e5af77edf"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "f57c26a12aa5f0f6e0e5b7d24f526270"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "1e2d0b4a66c692b1cb9ce5812c39225e"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "b7f314a3df799cadb216b55af64b19d9"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "aa5e946fa2df3d033c6edf5cc7f85344"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "656c6d78579dbea520a22347558477fd"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "bab6c678358a98d2d601873cec5595b9"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "7437ab79d0603316788faa2de006d9cc"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "77d3abaef696ba245a966621b7141453"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "a9c40e25e047d12ddd900ce9d85498d7"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "c0d544e0d4789c250b3e3586677ded28"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "71182667a1d3180c553c4a961294efee"
  },
  {
    "url": "view/preface/index.html",
    "revision": "17e0723488b67ee01c45c4481b711f4a"
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
