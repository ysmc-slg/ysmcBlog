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
    "revision": "9808eb8c4e0f8025466fdcd26b5bb905"
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
    "url": "assets/js/18.54625da7.js",
    "revision": "1f78f9a1b18168da1d16057eb2219ab0"
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
    "url": "assets/js/21.566b7c37.js",
    "revision": "fd4b27e5f626812dc8e546153a65af78"
  },
  {
    "url": "assets/js/22.b5bd45f4.js",
    "revision": "ff3746995f177fe8f9294b062011d7b2"
  },
  {
    "url": "assets/js/23.a8112e32.js",
    "revision": "89ff046164d50034d333c810595a548e"
  },
  {
    "url": "assets/js/24.e4be9ff6.js",
    "revision": "687dd80b25f9ff732d2c80abd1f2383a"
  },
  {
    "url": "assets/js/25.b60dd985.js",
    "revision": "1e4b1020ab6e8a2c27d509865ce5b6e5"
  },
  {
    "url": "assets/js/26.ed276a51.js",
    "revision": "64cacdd7dc8609168f14df396d9af381"
  },
  {
    "url": "assets/js/27.d3d0ec21.js",
    "revision": "c1953c9e2612dc9df4ddae030d150980"
  },
  {
    "url": "assets/js/28.276bd392.js",
    "revision": "9afa1e63000139beda8227e5afacf06c"
  },
  {
    "url": "assets/js/29.3eaad409.js",
    "revision": "eb414cb45ff0a7cf5ee6d9df095e234e"
  },
  {
    "url": "assets/js/3.5bf914f4.js",
    "revision": "053a3a741b7852b97e20666677a54f9c"
  },
  {
    "url": "assets/js/30.17de4cb7.js",
    "revision": "301c7d5931d9a94554a43ff070d469ab"
  },
  {
    "url": "assets/js/31.c84aa622.js",
    "revision": "e0ea2d5c40161f2ae657662bce1a5d96"
  },
  {
    "url": "assets/js/32.55ed5bde.js",
    "revision": "1e58af30bf488f2d02a91c53828e3905"
  },
  {
    "url": "assets/js/33.faa64636.js",
    "revision": "5643ce8fecb8e8f5d288d568b8186a67"
  },
  {
    "url": "assets/js/34.accb7311.js",
    "revision": "337d6518d51ad32dc7e2fb2109c50548"
  },
  {
    "url": "assets/js/35.0ab0f71b.js",
    "revision": "31327020f0b321426a4a3f784818c657"
  },
  {
    "url": "assets/js/36.3931b1dc.js",
    "revision": "207c3beeae244fb3d9d4c94a1a8b3735"
  },
  {
    "url": "assets/js/37.563b0689.js",
    "revision": "da0d70c09f1486c3d7330f7f2a3656f1"
  },
  {
    "url": "assets/js/38.3ec6cf6c.js",
    "revision": "daada906a336fb298e0391abfb0028da"
  },
  {
    "url": "assets/js/4.a92bf34d.js",
    "revision": "e27a0eddf53787f79279dcca9e86e5f9"
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
    "url": "assets/js/app.7ce091fe.js",
    "revision": "b47b11fd78994e406568262e1aa28b0e"
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
    "revision": "f7466368da2e0a38ad091241931907df"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "71e515a939742402caea5dc5e6cbddfe"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "6ed89cb46858f13f4d20a1d7c0ff5424"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "904fcb1d80fca50264ede13d81593df1"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "c2753a0463c6dab5ae145659b979d4e6"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "a4b050eef4a464f0c2cabda91fdb9473"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "cf2845d29618d17072996e5c182fd934"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "c5fb48e21a3b90312969e300271abf47"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "f219a5e421be237b576d5e432a5699fc"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "551faab976a6e410f45f69c3cb1def77"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "b9b810074fb0d7d442ca619db301ecac"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "d8ea289c71bad2aada39f71f2f5a5356"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "dba31f27e0325a62ac242d41c76e8712"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "8d4e7bdf90004f35b4008fe4c1b2e713"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "ee190f80086ff7c66e5c55458566e099"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "f0f98a2c035dc4f6b54fda733034c963"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "65e98fa5061cb25e481519704801cf58"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "e6b93f514fa56a59a7ec2b4c8c6e7fd2"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "817a39d43bdfefa5c12a005c8d0f439f"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "d16f4f9a75ba34798b2f58b8e509e9ee"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "f473d0576a14a226e58854f86adb8da2"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "657addf3d8f1d4d4195fa4cf9c165d02"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "e6864ea53c543a7cad913ed9124d4c56"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "781b555810d04dbb27a4cdd8a6f5772a"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "d8d3325074a866b87b813505093ff8b3"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "0e294aef3e4315aec454752f425dbff7"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "4977903fdbcd337c7cc447ad9c6fddbc"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "fa301484d95915fc0f325467f6f02bb0"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "d9945667f84d3cb20ea5f1e9961b2f50"
  },
  {
    "url": "view/preface/index.html",
    "revision": "31cf71cd81f8a7fabaee4ab80694a54a"
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
