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
    "revision": "1f0a4f70c195021801d00aa0d5ab727e"
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
    "url": "assets/js/18.27787372.js",
    "revision": "eae7137e14f388864ecc30054ea279e8"
  },
  {
    "url": "assets/js/19.b4cde7c9.js",
    "revision": "5e2a538770c6216a6d0f67462d2749bc"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.61e047e0.js",
    "revision": "8def73677f2bc0cfc523b63cf6f76b92"
  },
  {
    "url": "assets/js/21.694a27e8.js",
    "revision": "85159e55a7a84bdef12dd2e2e3142b6e"
  },
  {
    "url": "assets/js/22.96b38f3f.js",
    "revision": "3218af064f64ac12ab26c8d928570585"
  },
  {
    "url": "assets/js/23.65fa6066.js",
    "revision": "a8b6b79e6ea534a6f2fa0419c43ac6af"
  },
  {
    "url": "assets/js/24.6fd50ff6.js",
    "revision": "ed94cae2c96c47603c491e3854de5661"
  },
  {
    "url": "assets/js/25.ea447d4c.js",
    "revision": "7d344133727041658d6fb92aab23b3ef"
  },
  {
    "url": "assets/js/26.c04de857.js",
    "revision": "6501600c0999ac7cd2d1179f9eb60ea4"
  },
  {
    "url": "assets/js/27.7ba66396.js",
    "revision": "a1d0ec70b752f5b012bc252f76b4fcb6"
  },
  {
    "url": "assets/js/28.1ef28825.js",
    "revision": "f4ac3467f10a3e2c3a00b499293a7f75"
  },
  {
    "url": "assets/js/29.214d4385.js",
    "revision": "b430450dd918e21140f390bc82ae3601"
  },
  {
    "url": "assets/js/3.b55fc8fc.js",
    "revision": "f0cd3f83a6bdaa98c04ff1c34b03370d"
  },
  {
    "url": "assets/js/30.63de929d.js",
    "revision": "810be7a28085f10d9e48f37fdfed2101"
  },
  {
    "url": "assets/js/31.c28ba0ab.js",
    "revision": "8bcd87d9a576b9fa7f5e7a44f85d80ca"
  },
  {
    "url": "assets/js/32.aa192393.js",
    "revision": "a54eb852fab0e95f5295bb21e728fcc0"
  },
  {
    "url": "assets/js/33.427eff93.js",
    "revision": "7b51d0f78dfc3d9c5246a68b495ca135"
  },
  {
    "url": "assets/js/34.fc46ef97.js",
    "revision": "104f5c1b08731369c1ce5681859e7f1c"
  },
  {
    "url": "assets/js/35.f18a0443.js",
    "revision": "debcfaf07a540279bbf93da605c7b0c1"
  },
  {
    "url": "assets/js/36.5ea01b6c.js",
    "revision": "76ddd7335f71dc17430f2342cd87ab85"
  },
  {
    "url": "assets/js/37.12e1ea83.js",
    "revision": "ab62f4edbfb07b3571881d4a46d46731"
  },
  {
    "url": "assets/js/38.44a7adda.js",
    "revision": "4e650e8f6e767e7e34da98c6f7357aa3"
  },
  {
    "url": "assets/js/39.590b0a80.js",
    "revision": "c4dd1b6626be8b8d0e54481f3f64319b"
  },
  {
    "url": "assets/js/4.9945201a.js",
    "revision": "41c6d0455c31608ea2b2ee76f9b10296"
  },
  {
    "url": "assets/js/40.2bd98bcc.js",
    "revision": "30f7c9890076cebfd862cedb0fc03a7b"
  },
  {
    "url": "assets/js/41.56e2f614.js",
    "revision": "dccd9b2bdabe35fda794b6ade71cc6ff"
  },
  {
    "url": "assets/js/42.86e05df0.js",
    "revision": "74abb713cbd90cecbf02ad4940c68c36"
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
    "url": "assets/js/app.fbf28bbf.js",
    "revision": "f8396edc2f4396133e7170164f5169c3"
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
    "revision": "310ff2caf8fea2c5de34d5f8974c31b0"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "742d98b941ee0e612d56f66584f3019b"
  },
  {
    "url": "view/database/redis/configuration.html",
    "revision": "8e5f7642d4b20b00b546905a2dab5043"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "bccc8a8fc15472c9371157af4a8ce0e9"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "7a8bd85b3708bc12b8ca0f84c6978340"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "3a1a3b62cc69aa0a233f51467a0cd5da"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "2bac6e7563271ddba743759d4cd30fe8"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "c73b74bf56090e92274f5bb0e057dcf1"
  },
  {
    "url": "view/database/redis/rdb.html",
    "revision": "5027f5dfe1c3876570ca7ce0c9b3a52c"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "c2525bd37f665ea0cd20e7ebfa579af5"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "cffbba3d658f0e21d60645ace91b9dc2"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "fa95c0f48692f4ee8e86b18b1119acf9"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "e8fcc4475dbd17908f65a11497f4133c"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "aff32059d26124cd8784e60d1c6815d5"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "e597ad75b249854fd57741cea6f38db2"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "96082be8a9b65b281bb64aa4447f7afa"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "482c30992a9042427bf2d74bf054d8b0"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "2066b8b21e5b45f4b656d146612b0621"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "74a5b0e92773c65a3ca960b1f370f515"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "2ae4758b68eda30b1448af4947db4732"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "bb42331c2ff0d36e6a33e816218dfd7a"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "132f11579d94328dfc3a2e0b773a21f2"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "46690686bfff22264500c494ac6b48a4"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "d5cdd9c405c7c96b3fc5338996eaba90"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "8517881e13f24b0f4470ce7ff782f6c5"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "ebe3c91df00eea8fda15caa72a7e8b18"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "f06597bc528578c78625dd1f7b1f9f42"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "fdf8bf6db1fcb56c5042151afaee025d"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "56c678c7ade4cb57b9d022a412da3369"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "69c84261142d84a3beb67dc0a55b6e73"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "e882f10bd131c25fce3f599651d05b72"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "adbab4fdc54218cdbc84f968cfc7dc88"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "986a25e4182b73321453d042441ede04"
  },
  {
    "url": "view/preface/index.html",
    "revision": "3cbcf43c1054691f397f6e6a68526856"
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
