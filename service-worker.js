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
    "revision": "ac91f82445c4148493e7715f660c8855"
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
    "url": "assets/js/23.897cc0f7.js",
    "revision": "2d2a1f5f52c66de7774e38501bdb5e87"
  },
  {
    "url": "assets/js/24.cd042408.js",
    "revision": "7cd3bde6a26e82170aa019c23aa74241"
  },
  {
    "url": "assets/js/25.fd457caf.js",
    "revision": "df2527f5407dc6006ae0be070ce3c0b5"
  },
  {
    "url": "assets/js/26.467dd6ee.js",
    "revision": "b3e90c4529dcd3b4f6b69f484d752e01"
  },
  {
    "url": "assets/js/27.7db341d3.js",
    "revision": "0e383ea3f8aca64e4079f14cdcd9ebf6"
  },
  {
    "url": "assets/js/28.4edf3e5e.js",
    "revision": "51608926621443f000ffead8e2301a1c"
  },
  {
    "url": "assets/js/29.1cc25c49.js",
    "revision": "2d960f441a57aae535d1a70ebea0cb95"
  },
  {
    "url": "assets/js/3.b55fc8fc.js",
    "revision": "f0cd3f83a6bdaa98c04ff1c34b03370d"
  },
  {
    "url": "assets/js/30.0a688cd3.js",
    "revision": "bc07e0f4c34412448f3a870d90e3ea18"
  },
  {
    "url": "assets/js/31.b9ea160c.js",
    "revision": "933e0d38d1232eac263a3f4530c8c607"
  },
  {
    "url": "assets/js/32.3830009e.js",
    "revision": "eb8b463942afc70e3aeb54549a55e44a"
  },
  {
    "url": "assets/js/33.6e13b67f.js",
    "revision": "983b24a152f88fc43403728f38c55e0d"
  },
  {
    "url": "assets/js/34.8192cb06.js",
    "revision": "b092075a1f58cdc66bbb537102ee132b"
  },
  {
    "url": "assets/js/35.8f372961.js",
    "revision": "aab12e076417b4702931c7d1cd0692d2"
  },
  {
    "url": "assets/js/36.8d5fc7bf.js",
    "revision": "295ec5685c47d838148c2f2484004589"
  },
  {
    "url": "assets/js/37.e9b1a59e.js",
    "revision": "ba1ee0582a44b59c6938f8f01799f604"
  },
  {
    "url": "assets/js/38.e81cff14.js",
    "revision": "d00212263804ac4fd38fa67d38b64407"
  },
  {
    "url": "assets/js/39.d3e0d114.js",
    "revision": "7ac0c216033f595b172a8c4a9a04c4df"
  },
  {
    "url": "assets/js/4.668f457d.js",
    "revision": "49ac11498ab2cf000508ac71b9ea89cd"
  },
  {
    "url": "assets/js/40.9958bb95.js",
    "revision": "b1076d2e355f09a0c0e5830edb345e3b"
  },
  {
    "url": "assets/js/41.26487514.js",
    "revision": "461ec77f049f376d2628470b75f1ec4b"
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
    "url": "assets/js/app.a8405b40.js",
    "revision": "2b890b650ab15588eb5d73390ba7d334"
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
    "revision": "d800c3517f501cb49a545e86d3a48047"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "394a48d30a9621c9745426ab76516774"
  },
  {
    "url": "view/database/redis/configuration.html",
    "revision": "0323ea5e9cd79cfc0ed75bbd9fe749f1"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "d1dfddcbe3832e4a042492371bb34bc6"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "9ef2eaf6116eea76b1fd7123b5a772b7"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "e8ca089e59e81162978c992e6ce29e1b"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "71d61bbe5919c7a34b4a4613409a4ba3"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "9a1b35c069675f5738a758c4f1d27f30"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "94cca71aa2518f1d30fa449679c7f946"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "947021cd3e0740c83a650fed9e8a6f5b"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "4034c066fc0f162b78bdc66d241925ab"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "d4712bf30a9c74f15fd2a8372bae041c"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "7dd34535fa72c195ebedf58fb6cac6e8"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "51e7a381a9cf7ebcf00c278e15cb673b"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "e4746b30820c64b2954ec6edb43c7e46"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "6313e8920ee6784f285d3aaf705d1223"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "d2b7f5d0d5f63ff6c96b2ea3970cbc2b"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "b5a478957f4ef62169b868fb4c1260fa"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "031ca00842aff9600c562a3796d9db10"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "0c1a29dc001cc7fd7531dc56c0b6151b"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "160e05927d09d8b14d7e0e3eb909e3cc"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "f3b4b81c5b53c54b77ea1fa8836a78c3"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "c3ce35d9483d123b553d75c079d57248"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "c469fca082e7025426ea55f7d0f88912"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "7e255dd409f247e6d3c7ec63c273c753"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "1434d13d21fa8d85eb9a87cc1ed8c1f4"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "8de1fb39e744f8bdb555306e8e14ab59"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "58977c3efce50f8430b1caf8ec4fad4a"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "79da0340be46f5e4f7b180c72129942d"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "2fb1a0931b9d1ad175725ee506ad9c7a"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "25fd1ea53735b7c53da4978525808be5"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "5f61ba833e63af5776fbb683449a81cb"
  },
  {
    "url": "view/preface/index.html",
    "revision": "60c2d15b59196d78e9e98d82d09de309"
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
