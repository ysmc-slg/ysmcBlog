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
    "revision": "c1106b670968e8213f750867a15fae60"
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
    "url": "assets/js/22.0522d5ff.js",
    "revision": "e45aa4cace6cb9338caed005f5f2f253"
  },
  {
    "url": "assets/js/23.07164467.js",
    "revision": "60c5b0fa552f4829b02726748ed88a5a"
  },
  {
    "url": "assets/js/24.7f2a7fef.js",
    "revision": "6bd956c2697df77f56b3558653767f03"
  },
  {
    "url": "assets/js/25.d88132eb.js",
    "revision": "47c93e87da4f87afb6e9d66c491b6af0"
  },
  {
    "url": "assets/js/26.cf46e47c.js",
    "revision": "2c05b0abf28e7bef1d9cdf992eea883a"
  },
  {
    "url": "assets/js/27.d57e69f3.js",
    "revision": "d53d792a30d527043c43e10e2bb3f56d"
  },
  {
    "url": "assets/js/28.34a85b27.js",
    "revision": "ea1c7486037b459e28b4eb256f5077dc"
  },
  {
    "url": "assets/js/29.73696a22.js",
    "revision": "1b4598ae2e45eb710f889be1319c10db"
  },
  {
    "url": "assets/js/3.5bf914f4.js",
    "revision": "053a3a741b7852b97e20666677a54f9c"
  },
  {
    "url": "assets/js/30.0a34ec18.js",
    "revision": "f89678f6fd6118577ef80bb6b4e1a8ad"
  },
  {
    "url": "assets/js/4.1de40beb.js",
    "revision": "c5bca516cb4251e18294dc827553c75e"
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
    "url": "assets/js/app.1ddb17bc.js",
    "revision": "0042eaeb4f44564426e06e1bbfbe26da"
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
    "revision": "19edac23fe2db217a4c591ceea313c47"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "c7da445100508a622979260c8c791fc1"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "2d14936c51de509a997c348c979f0e8a"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "17142326ded919b67f3e9047ceedfcd3"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "45393f8102581925a38607ef2901a13e"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "d3e4ea0afc36a71de899f2b6756c07e9"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "5471313fd8d1eab0190b6ad6a309eecd"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "67db44b92602b4c7c83e11085a8745c8"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "e7b0bd9c1273106d5e25652e5de379cd"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "ea5b6b415cccebde32b45e3f1486cb36"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "1c1afcc5fee0a6cf0cd703b2b767f71b"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "fb00df11d8f3b84fb9d5764573eb2a74"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "ab2abba86f0046bd138df54de8d3c93a"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "97e930dea5ad972d3c1cbf03d2df1ddd"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "2183e8c0cfbac3e6e61d2e5d8b6569e7"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "e053f2607b032fed9ed8918aa1f89b95"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "226c751f548fc6229ce9e57b86d057b9"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "8aa2b468fae124a6b35b660b612c9b70"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "a8064a836701f20329988dbc87a65006"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "8e680d6d6f455eb6335be49c09b6bf57"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "f0a148e4b6d05d89c9a486e056e8ae5b"
  },
  {
    "url": "view/preface/index.html",
    "revision": "1a531c0557fe204aa063d3ac1078a00f"
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
