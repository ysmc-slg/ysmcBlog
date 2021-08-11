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
    "revision": "2ec478c0eaa941d5d00601df4cb7d60a"
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
    "url": "assets/js/21.9b35bd53.js",
    "revision": "d904ecef7228fa9672099e025cd584e4"
  },
  {
    "url": "assets/js/22.874f2005.js",
    "revision": "52c3633a6d738f93585570d7215bc6e0"
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
    "url": "assets/js/27.ebac23f4.js",
    "revision": "a12684a7624e653d01bac201b8b735b3"
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
    "url": "assets/js/30.58a7061d.js",
    "revision": "5482109f3fe235e6ddc2b47252f7626b"
  },
  {
    "url": "assets/js/31.7fdbd355.js",
    "revision": "819cf71240f31edbe55f59743d08305e"
  },
  {
    "url": "assets/js/32.7d65997d.js",
    "revision": "cbf6192fb1c9e6f3156ee5283d835341"
  },
  {
    "url": "assets/js/33.8e9f722b.js",
    "revision": "2d43f5ea37f9cd4cb4522f01f4e82506"
  },
  {
    "url": "assets/js/34.accb7311.js",
    "revision": "337d6518d51ad32dc7e2fb2109c50548"
  },
  {
    "url": "assets/js/35.b74d9f37.js",
    "revision": "b6f23c927c77a20dc4d3f0bfdca5c095"
  },
  {
    "url": "assets/js/36.3931b1dc.js",
    "revision": "207c3beeae244fb3d9d4c94a1a8b3735"
  },
  {
    "url": "assets/js/37.3ea2e119.js",
    "revision": "a3c18f5ad003e475d6369d232e8221ee"
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
    "url": "assets/js/app.df46c8ac.js",
    "revision": "06226dc28bd6a3838baddb335e408aab"
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
    "revision": "06dea53ed979b2c9224fb251576d520e"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "449916af5b65f745be2fbeba454a5ac7"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "96df1a85ea615d4ee7b36f92a7e59613"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "9cf98903447050813aaad7835548d2f7"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "1c9fb75796985e14ebfed4f0bbb4a7e2"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "1096b309f9e3fa599273005c493ebb30"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "59bba5640f0fac0c954e38efe2de30c9"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "7277a5df968fadfc5422b07e271cf1b4"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "3e5262a362d51e4f91dae04aa1453cb3"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "42895d709b84baf2dcbebc30de942a7f"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "74bd17b69dd527e6ec7a510a03abfc3e"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "fabc1bd4548488c9db69a68f54f7e5ee"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "87c0f331e27e4e18c9d7c51921208723"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "dcbc7b89dc4d6c73b4845e93ae65da8d"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "1ab053c3d340ecc92f70d292204f8221"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "8c57783e05cbc5da2e8d87e7c5673a67"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "5d97b596660255c0794f13d8856ae751"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "0e5043230fcefe19b921acfa0dff1a4e"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "e834a1f95c7e91ea93cd6e49957b3c12"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "1971f9e20ce9b91d70051f98c42de304"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "3f2b0b202806f9a741ad098f47418a34"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "a0a3dbd3b107afaff33d791d3c6b98d2"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "3419662905336e89b09e9707db455156"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "ab4dac843096f6b5f801bde9d618daed"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "c125a1a08097ba835bd572277333921a"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "eb374b6972a90509fe81317d7d851464"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "92baffbd88a31465499dbd50897812fd"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "289eae030cff5e4df3dab5a107302d04"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "639761eb6d771bcd01984628c8c5a0e9"
  },
  {
    "url": "view/preface/index.html",
    "revision": "788d27b0c740018fd0bbf3681b327351"
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
