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
    "revision": "5a95cf3ed6e98742a14924d9f31aafa2"
  },
  {
    "url": "about.html",
    "revision": "fb0a2b60f28e17e896a365be2ab4267d"
  },
  {
    "url": "about1.html",
    "revision": "8e4192d08a1d29df8ed4e30a14d5e456"
  },
  {
    "url": "assets/css/0.styles.e1c4ab57.css",
    "revision": "32da19db70b07188c558d5f9c78a2650"
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
    "url": "assets/js/10.0a447db4.js",
    "revision": "1aa728f4a1000fa4b299c24318444c97"
  },
  {
    "url": "assets/js/11.b66468e1.js",
    "revision": "41c3cde88582fa269b6333d344bf0703"
  },
  {
    "url": "assets/js/12.019302fd.js",
    "revision": "a8e72bdf1c4c6c94182f0ec4f5c1269f"
  },
  {
    "url": "assets/js/13.d58e572d.js",
    "revision": "73f7a316efd9e75e3d5f1712f5570e54"
  },
  {
    "url": "assets/js/14.f53b494b.js",
    "revision": "6a609aa3f17d38f6d9712d0fc3f63727"
  },
  {
    "url": "assets/js/15.21e7852b.js",
    "revision": "dca88a03eb39f493eeb6492d417745b9"
  },
  {
    "url": "assets/js/16.c9139950.js",
    "revision": "bc8de21d6ca36c05b22aa80b9b368479"
  },
  {
    "url": "assets/js/17.2416e1ce.js",
    "revision": "c1255f4704b99e027ea8b3ab5ec0f8a7"
  },
  {
    "url": "assets/js/18.4f36a15d.js",
    "revision": "bccb6e52a5b0a96ed33b562a94517647"
  },
  {
    "url": "assets/js/19.99a97c04.js",
    "revision": "f1cb097398b935552a5bde5ac9c638b8"
  },
  {
    "url": "assets/js/2.8edea759.js",
    "revision": "2ca58e6cf3be2ece33257a8bfd021add"
  },
  {
    "url": "assets/js/3.87788bf3.js",
    "revision": "5897c6b3f64044097c7bd129c5eab192"
  },
  {
    "url": "assets/js/4.d5fb8ae7.js",
    "revision": "4ffc818c9df1bfb5c9686fd4381c2ab2"
  },
  {
    "url": "assets/js/5.a5e58171.js",
    "revision": "970a16af049564dacba1f505643e1a6b"
  },
  {
    "url": "assets/js/6.d86e523d.js",
    "revision": "4f541a207d8e0ff3f188fae266c65804"
  },
  {
    "url": "assets/js/7.2d548d28.js",
    "revision": "078a3be0f804f5d4b2724b9708384abe"
  },
  {
    "url": "assets/js/8.4eef6507.js",
    "revision": "45ccc46228e4c17e1e84af931db7f85c"
  },
  {
    "url": "assets/js/9.f0b90b9c.js",
    "revision": "22f7ab516923b9ec961cc0be6b0ceab6"
  },
  {
    "url": "assets/js/app.e4133bbe.js",
    "revision": "6bb73147ab3e82cf6c15a352f3a546a4"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "fbca3f1035ddfab9e91aaa5d5348fc4a"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "b132acbbcd956e9a2935948b45877f13"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "5ab9781de3a6323a59c0eb13b918ca9e"
  },
  {
    "url": "css/index.html",
    "revision": "77ad0bfc6ab71d2fba19d8ce5a1cc026"
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
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "a57198425ddb4a5dbcf6970731084f2b"
  },
  {
    "url": "javascript/index.html",
    "revision": "486581ebb065459ed7954df86ef08955"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "45e1d8421dea4ac08deaea08b5645b8a"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d7981feaf739c10e1b7db2e8116b7253"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "deac4e8cb9845f6e0815cbe998d3be38"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
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
