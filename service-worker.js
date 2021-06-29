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
    "revision": "1247deaeb28735ee8aa49c27c91efc0c"
  },
  {
    "url": "about.html",
    "revision": "136f7b677fe59b84418c20455815fda2"
  },
  {
    "url": "about1.html",
    "revision": "62680449da942853305cb910177c4cb5"
  },
  {
    "url": "assets/css/0.styles.158ccfcd.css",
    "revision": "3438389bda47e25fee55e10d53a5f0a3"
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
    "url": "assets/js/12.043cf17d.js",
    "revision": "d4a8768c6780fe60036854005de7c5af"
  },
  {
    "url": "assets/js/13.cc6880b5.js",
    "revision": "1e03232e1e1b0f4a97654ad6276dabb7"
  },
  {
    "url": "assets/js/14.fcf0afac.js",
    "revision": "98288c7eaa7b9b748901067efcf14080"
  },
  {
    "url": "assets/js/15.51215226.js",
    "revision": "01a5f5b297568873e0d54ace33d4a66d"
  },
  {
    "url": "assets/js/16.7503b7e0.js",
    "revision": "1e9d87be38c33ed8af6070ea665faf79"
  },
  {
    "url": "assets/js/17.f4f5e4e5.js",
    "revision": "615159ecb288c7c9e1485f77af8e8238"
  },
  {
    "url": "assets/js/18.aa93a989.js",
    "revision": "cef4baebfbd6aade4708df9a32a8a9b3"
  },
  {
    "url": "assets/js/19.99a97c04.js",
    "revision": "f1cb097398b935552a5bde5ac9c638b8"
  },
  {
    "url": "assets/js/2.43ccabf9.js",
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
    "url": "assets/js/5.3b05a339.js",
    "revision": "aff5b61d7d069bf2d392e392ccd3ef39"
  },
  {
    "url": "assets/js/6.ee31ce75.js",
    "revision": "6e48c205446aca8bf4c9baf6544e9e4f"
  },
  {
    "url": "assets/js/7.2d548d28.js",
    "revision": "078a3be0f804f5d4b2724b9708384abe"
  },
  {
    "url": "assets/js/8.883433b7.js",
    "revision": "b2bf69495092ee63e04d7cb5e3b87e1a"
  },
  {
    "url": "assets/js/9.f0b90b9c.js",
    "revision": "22f7ab516923b9ec961cc0be6b0ceab6"
  },
  {
    "url": "assets/js/app.57739e6e.js",
    "revision": "215993006a0fe35928798b6a60690237"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "b65ada61d53185bba2731db25a12f75c"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "bd6469db540172038fd5fdf8d75ec9d3"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "c5a7e7dc13ad92e835b74fc0db0c94a3"
  },
  {
    "url": "css/index.html",
    "revision": "144b435b58d0edd222f27b99b0dfdbd2"
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
    "revision": "885a6fc8fa66620a7a319f968cb57933"
  },
  {
    "url": "javascript/index.html",
    "revision": "86dbec97b8a707c0c8306749655a1386"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "f537a363fa55d60477afb925acfb424d"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "13d4e9762b6f9698624ca9219e4fc8f6"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "d12252e93d3f10a8bce9c960b4c87d60"
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
