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
    "revision": "e218a33e54e81e145cf1ecc59ace94d4"
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
    "url": "assets/js/10.dc2f5578.js",
    "revision": "34dfb526e17e5ba0d8cf217ac0725463"
  },
  {
    "url": "assets/js/100.0b62e36d.js",
    "revision": "cc1784b799ec1c3621d5b066c6186c32"
  },
  {
    "url": "assets/js/101.cd931fae.js",
    "revision": "1fff44cc21d79118a28233c3f4983a34"
  },
  {
    "url": "assets/js/102.f4185b81.js",
    "revision": "5e3aaab67acf8b076cc3572cd36b4865"
  },
  {
    "url": "assets/js/103.9a5cab33.js",
    "revision": "26c5745e4fedaa5c7f930580f3803df4"
  },
  {
    "url": "assets/js/104.ff6d5da6.js",
    "revision": "5620b609c3b7191ca8554f95e083c525"
  },
  {
    "url": "assets/js/105.1834d2e7.js",
    "revision": "fb2ab30d5e13d99927ff0c4c80ca1ab8"
  },
  {
    "url": "assets/js/106.62ea471d.js",
    "revision": "246a4bb940ec301ab647c1e8d1cad86a"
  },
  {
    "url": "assets/js/107.88dd3987.js",
    "revision": "23737762742d5180fce46e62a17d3ecd"
  },
  {
    "url": "assets/js/108.81602daf.js",
    "revision": "3fb77606be9631b08f68feacdd4490f3"
  },
  {
    "url": "assets/js/109.4b513bbb.js",
    "revision": "9c5b9aaaa0371723322ac176d6ff32d7"
  },
  {
    "url": "assets/js/11.4c348ee2.js",
    "revision": "0bb7fcf8385da7c40ed0f720ae5c5f6b"
  },
  {
    "url": "assets/js/12.866bb68b.js",
    "revision": "0e2b0e16d1d6dff374c4bf849e738d62"
  },
  {
    "url": "assets/js/13.d42cd6e9.js",
    "revision": "649eca6f9c278f50658b6401da0d689a"
  },
  {
    "url": "assets/js/14.0e762220.js",
    "revision": "97953084a2c4d50bd49683345c06436c"
  },
  {
    "url": "assets/js/15.66e6808c.js",
    "revision": "d2250dfdddd108dee9cb2818c94b244e"
  },
  {
    "url": "assets/js/16.8e83ee75.js",
    "revision": "b8143aea01ce7e2c9f919dbd567afd4c"
  },
  {
    "url": "assets/js/17.5d483e8d.js",
    "revision": "b80a746384dfb2745b64bfd257bde0b5"
  },
  {
    "url": "assets/js/18.8b867bde.js",
    "revision": "68bf807920725a2045f1902e1e9ba5a8"
  },
  {
    "url": "assets/js/19.2867d2a0.js",
    "revision": "20647f121572f7610cef30fbf3146d54"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.c260b63c.js",
    "revision": "484d70a90cda59380883e364ff1cc54a"
  },
  {
    "url": "assets/js/21.3401c591.js",
    "revision": "0545045f7627f2e74ce21d0e9bbcca82"
  },
  {
    "url": "assets/js/22.4c258852.js",
    "revision": "7ae10d74fb96aa106cf4f23c434406cb"
  },
  {
    "url": "assets/js/23.7ef8d845.js",
    "revision": "b65ccaa689c13f562094e8c64a4aee9b"
  },
  {
    "url": "assets/js/24.7cd5cddc.js",
    "revision": "2ab362fece51b7ffaecfe69a6cbd7960"
  },
  {
    "url": "assets/js/25.8f85ce66.js",
    "revision": "bb24f6f2eaacf870d63cf3a185021b8f"
  },
  {
    "url": "assets/js/26.f71b7f57.js",
    "revision": "a5befc9e3b476ab1e09b10eb283eb32c"
  },
  {
    "url": "assets/js/27.6bdc9b43.js",
    "revision": "c4be7f12875f9192b2db82f4eaecd21a"
  },
  {
    "url": "assets/js/28.e6fe520b.js",
    "revision": "ade7ac529c30b41f2ba3f540ddafa752"
  },
  {
    "url": "assets/js/29.18b9056d.js",
    "revision": "c339f6fc2c10591e4cd386385b2ca25d"
  },
  {
    "url": "assets/js/3.dcc3d320.js",
    "revision": "531df9fa234b974d0f5b6eae34ab7d57"
  },
  {
    "url": "assets/js/30.e00a14d4.js",
    "revision": "c773018fec4196062169d06e5467e30e"
  },
  {
    "url": "assets/js/31.8efa177c.js",
    "revision": "880bc47497c4e4c6c3bd00d1d4472fe1"
  },
  {
    "url": "assets/js/32.8aae662e.js",
    "revision": "ac494382a0ec946eee26ddddd4d1e617"
  },
  {
    "url": "assets/js/33.8456c1cb.js",
    "revision": "c9e9492f68587226e833063f8db7ee0a"
  },
  {
    "url": "assets/js/34.50bc7166.js",
    "revision": "0157180bab7349a3f432277d5600cc09"
  },
  {
    "url": "assets/js/35.c2480794.js",
    "revision": "d8bae67127952f204cd39afc329b2495"
  },
  {
    "url": "assets/js/36.f9b8525a.js",
    "revision": "3dee8ee9a974d9d55738b267daaef48a"
  },
  {
    "url": "assets/js/37.7cf7ccd1.js",
    "revision": "144dcd5ceffe804df397c2208e564180"
  },
  {
    "url": "assets/js/38.335d2a00.js",
    "revision": "4db921f8c8c942f918c9179ce9e0677c"
  },
  {
    "url": "assets/js/39.954b15b7.js",
    "revision": "40d77596fdf39224178d858e4f09b5c7"
  },
  {
    "url": "assets/js/4.f0756cef.js",
    "revision": "367536212756cc30ea40b95f74be4d0e"
  },
  {
    "url": "assets/js/40.c7f12249.js",
    "revision": "d9a15fd2869e15c08191326cd9f2de78"
  },
  {
    "url": "assets/js/41.be96406c.js",
    "revision": "194c6d17f2c0a7c1493ace58e80d4c30"
  },
  {
    "url": "assets/js/42.7c327632.js",
    "revision": "a433152f95e595d89d08ea4e2ea18f60"
  },
  {
    "url": "assets/js/43.f446672e.js",
    "revision": "846fdec68b3b17964a2d2c4b4f276fb3"
  },
  {
    "url": "assets/js/44.64269bca.js",
    "revision": "fd0b938fc9f429257d146fdda0cd89b7"
  },
  {
    "url": "assets/js/45.524f1d54.js",
    "revision": "288addd9887c632128bb886222ac5fa8"
  },
  {
    "url": "assets/js/46.8caa34e0.js",
    "revision": "c744fbb2be54d805249661f6912d0a8f"
  },
  {
    "url": "assets/js/47.27e12c87.js",
    "revision": "134075e260a5afdad9ff3f5b9dcef93b"
  },
  {
    "url": "assets/js/48.dc6ea492.js",
    "revision": "2d21a399405d9bc36f152947a5042640"
  },
  {
    "url": "assets/js/49.0dd17ebd.js",
    "revision": "013fafa4ef621a776b10c491e1209adb"
  },
  {
    "url": "assets/js/5.851d534f.js",
    "revision": "fedde939b5ea210bfce396878cd5281d"
  },
  {
    "url": "assets/js/50.c69f4a21.js",
    "revision": "e17e6040461ecef2dd34e61af6b2b828"
  },
  {
    "url": "assets/js/51.477beec0.js",
    "revision": "7dbfa71e51c6db5ec4f7b18d1a9be740"
  },
  {
    "url": "assets/js/52.af28a26c.js",
    "revision": "6d02c213fe4024cf4d06a0f261161912"
  },
  {
    "url": "assets/js/53.ec7b36fd.js",
    "revision": "ed2b9f59a965a2e48ac125b09097b220"
  },
  {
    "url": "assets/js/54.ef6282c7.js",
    "revision": "446277e6ee4372fc38081ed6fc5e78d2"
  },
  {
    "url": "assets/js/55.82f62dec.js",
    "revision": "26b1d342706c8a5339079e5374f87fd5"
  },
  {
    "url": "assets/js/56.d54aa260.js",
    "revision": "6d11c0ba0b8239b6a043a588468f969d"
  },
  {
    "url": "assets/js/57.4bbb886b.js",
    "revision": "d90b1af1e46dfcfe6053d6871a65ffca"
  },
  {
    "url": "assets/js/58.88596f96.js",
    "revision": "ac650e1927508634b8b9977b2d59a3f5"
  },
  {
    "url": "assets/js/59.691d5295.js",
    "revision": "6ed7b980d81a4847deb583b8dd90e06e"
  },
  {
    "url": "assets/js/6.0a2e90c4.js",
    "revision": "e6e665d2660fdbd93ea509b910d9b788"
  },
  {
    "url": "assets/js/60.c85104aa.js",
    "revision": "90500110cfdc336418839056928912c2"
  },
  {
    "url": "assets/js/61.98f38c83.js",
    "revision": "187d8eb4b7c67e17926817615c01837b"
  },
  {
    "url": "assets/js/62.cf90677a.js",
    "revision": "0f842303d2e543290b7bd98bdeab1a61"
  },
  {
    "url": "assets/js/63.d20fec91.js",
    "revision": "974e6c6c536abe3ae24f18ca38d1b9ef"
  },
  {
    "url": "assets/js/64.33554904.js",
    "revision": "af838008fc2146ab4b1ee59fc7cf9d3d"
  },
  {
    "url": "assets/js/65.ecf0b080.js",
    "revision": "a60112451dec00414f65f63f9e812ab1"
  },
  {
    "url": "assets/js/66.674d5aa2.js",
    "revision": "6749ec882273ebe14cd62d47f8a2b98f"
  },
  {
    "url": "assets/js/67.224f626e.js",
    "revision": "0d21ee13d55f96914c2fdb8c8f7a315a"
  },
  {
    "url": "assets/js/68.144ee88a.js",
    "revision": "8a471f48b2562e47b9a98f437273e0b4"
  },
  {
    "url": "assets/js/69.5ea1e751.js",
    "revision": "a68d86d869d75d86b9133e579cd73c84"
  },
  {
    "url": "assets/js/7.1cc9bea6.js",
    "revision": "7e615f351d6d827de91208bfa74affe5"
  },
  {
    "url": "assets/js/70.5205d194.js",
    "revision": "2cd1793e95d3466e77f75b0ec718fe33"
  },
  {
    "url": "assets/js/71.94800d7d.js",
    "revision": "c357932534658fc518c393c9ac8e33df"
  },
  {
    "url": "assets/js/72.c7817dbd.js",
    "revision": "c843bdece55ac2a00b434ba0bab7a104"
  },
  {
    "url": "assets/js/73.42a2d584.js",
    "revision": "e2edd1f048667599d2114095f259df71"
  },
  {
    "url": "assets/js/74.08775914.js",
    "revision": "2010f73d4a7f5791d2a9144d38df894b"
  },
  {
    "url": "assets/js/75.20d0c4f2.js",
    "revision": "61ef799274a8121448b9f5837067c021"
  },
  {
    "url": "assets/js/76.70985451.js",
    "revision": "bafcb45321bfdd8e4cf1fc3a4f65288f"
  },
  {
    "url": "assets/js/77.667eb70f.js",
    "revision": "4067d63d3861fd808915194b8d085255"
  },
  {
    "url": "assets/js/78.b1eb8a02.js",
    "revision": "d695ac5152f0bd9948171cc1ca4da31c"
  },
  {
    "url": "assets/js/79.2edc5a17.js",
    "revision": "ac2f45208cca8c4308774dbb68cf40cd"
  },
  {
    "url": "assets/js/8.2247b01d.js",
    "revision": "2ab7f28f3f79e134f06f3927814e7093"
  },
  {
    "url": "assets/js/80.1435495a.js",
    "revision": "ff0d51108ad65069efdad99e41a19c19"
  },
  {
    "url": "assets/js/81.42f37216.js",
    "revision": "5a5b6d2ac3d4cf391cebb3c66a9a72dc"
  },
  {
    "url": "assets/js/82.68e82cc9.js",
    "revision": "a78a4f92aacc41f97f3deb8a69a99339"
  },
  {
    "url": "assets/js/83.fda64cfa.js",
    "revision": "773d8d27b5ca3dfbdd667effb013ece0"
  },
  {
    "url": "assets/js/84.b91828ae.js",
    "revision": "da11743c6e68723f7751b2115877eeaa"
  },
  {
    "url": "assets/js/85.654c7b2b.js",
    "revision": "e78034d01766f6360d6464ae3f15a8ae"
  },
  {
    "url": "assets/js/86.2b9ec142.js",
    "revision": "ed9105df3d68347977694872ad64e781"
  },
  {
    "url": "assets/js/87.03c32d47.js",
    "revision": "190f9831c017a37aede5b4aae8c79843"
  },
  {
    "url": "assets/js/88.4a9d3ccd.js",
    "revision": "823fc0b1fbb8bbec082a780520ae3d5f"
  },
  {
    "url": "assets/js/89.9412d633.js",
    "revision": "6c9c3df99932272b490374659124cdfb"
  },
  {
    "url": "assets/js/9.2ae44f2f.js",
    "revision": "a897558751073f57cc4cef3972aea594"
  },
  {
    "url": "assets/js/90.15549fa5.js",
    "revision": "361ce21f1507716678ba29eb31755fdf"
  },
  {
    "url": "assets/js/91.4aad8ef5.js",
    "revision": "9a57e1eef310aebab09b7e6093030f81"
  },
  {
    "url": "assets/js/92.83ffae72.js",
    "revision": "03e25127865d43554ad94311344b76e7"
  },
  {
    "url": "assets/js/93.5474542c.js",
    "revision": "941529e5b83c3d9965363adc01db9f52"
  },
  {
    "url": "assets/js/94.14256f23.js",
    "revision": "42c7d6f3fffff227537613e7d69bb203"
  },
  {
    "url": "assets/js/95.54ff8c80.js",
    "revision": "d5d736f8d94425f3535d337ad8624303"
  },
  {
    "url": "assets/js/96.feb6779e.js",
    "revision": "56787eddd50a2cf82f028fd8a01a2afb"
  },
  {
    "url": "assets/js/97.9540a08f.js",
    "revision": "5ee21c2a3220955b63f7870c23e61990"
  },
  {
    "url": "assets/js/98.fe109a1a.js",
    "revision": "a5808bb216265ae4a96509724ddd3631"
  },
  {
    "url": "assets/js/99.27bb5f53.js",
    "revision": "56aa22f7ad26b535303899629e279c90"
  },
  {
    "url": "assets/js/app.f7954cee.js",
    "revision": "fbd6f399e73c3cf41ddbb79eac03eaec"
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
    "url": "blogImg/java/io.jpg",
    "revision": "4dae86b5b4e126dcc8494c2ac4ba5212"
  },
  {
    "url": "blogImg/java/java1.png",
    "revision": "34badfa08817104baeba8bf991094297"
  },
  {
    "url": "blogImg/java/java2.png",
    "revision": "85e3648d8106e7f7b89887949ff41da6"
  },
  {
    "url": "blogImg/java/Screenshot_1.png",
    "revision": "8f5291a95268d70ccac62c78477b3266"
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
    "url": "blogImg/rabbitmq/640.jpg",
    "revision": "a627ff5bd6bd78a174f989fa7af5088d"
  },
  {
    "url": "blogImg/rabbitmq/640.png",
    "revision": "5b270c2212091cc748401e67f605b6c7"
  },
  {
    "url": "blogImg/rabbitmq/641.jpg",
    "revision": "4bc8bb0bfed58d0c83378539b5745fcf"
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
    "url": "blogImg/rabbitmq/springbootRabbitmq1.png",
    "revision": "68636c54071d610f06a88b7072e82540"
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
    "url": "blogImg/redis/20210608124219.png",
    "revision": "129f82d694bd99ccd088ad46f7b0d64a"
  },
  {
    "url": "blogImg/redis/20210608133211.png",
    "revision": "a9631e7a8a9fdbe80487e29807068a66"
  },
  {
    "url": "blogImg/redis/20210610160547.png",
    "revision": "24bea9a325689b7a0da9846959da644f"
  },
  {
    "url": "blogImg/redis/20210610162011.png",
    "revision": "f2e1ea4533b60999fb29e0e49176df96"
  },
  {
    "url": "blogImg/redis/20210610162510.png",
    "revision": "2a27dc642f9cc742ec008936242fc58b"
  },
  {
    "url": "blogImg/redis/20210610162545.png",
    "revision": "22c110379ef9c5698b03095591ae5bf5"
  },
  {
    "url": "blogImg/redis/20210615103543.png",
    "revision": "f456ef9ed2f03590a5ea2e29f7ef9380"
  },
  {
    "url": "blogImg/redis/20210615113338.png",
    "revision": "31899ec25b5e4e19c4f0a667102f6288"
  },
  {
    "url": "blogImg/redis/20210616143855.png",
    "revision": "c6b0b9ad08a40e1cabbae3ac6e4dc8f7"
  },
  {
    "url": "blogImg/redis/20210617132409.png",
    "revision": "39e2b33f05768bdc12f2231d4a74295e"
  },
  {
    "url": "blogImg/redis/20210617132746.png",
    "revision": "42049c958cb2bff46ddc88583c99acca"
  },
  {
    "url": "blogImg/redis/20210617133013.png",
    "revision": "228c0e3eb41fec3196cad31321c64495"
  },
  {
    "url": "blogImg/redis/20210617133044.png",
    "revision": "3a792d35c76e94dc1e09644b31a2541e"
  },
  {
    "url": "blogImg/redis/20210617152207.png",
    "revision": "0f141054b7fb9fb97405966bd54b6031"
  },
  {
    "url": "blogImg/redis/20210617152307.png",
    "revision": "b78c8d13df683eb43ade5468afac01d4"
  },
  {
    "url": "blogImg/redis/20210617160013.png",
    "revision": "042dfd2307fd0a0f4c670744e0ff7caa"
  },
  {
    "url": "blogImg/redis/20210617160331.png",
    "revision": "895302c7c5063e237c009a7b16778a41"
  },
  {
    "url": "blogImg/redis/Snipaste_2021-12-24_15-06-55.png",
    "revision": "d7afc480769f2e829477306326bba945"
  },
  {
    "url": "blogImg/spring/Aware.png",
    "revision": "8ec81a4e68381830f190ad78d736c960"
  },
  {
    "url": "blogImg/springboot/Screenshot_5.png",
    "revision": "7b3ad289e613cb1592d997fb2942f6f1"
  },
  {
    "url": "blogImg/ssm/20190219000805162.png",
    "revision": "0c2ca0e5929e433710d77643877708d0"
  },
  {
    "url": "blogImg/ssm/2021-12-16_16-40-02.png",
    "revision": "cccde7386440428beab48faf261d982a"
  },
  {
    "url": "blogImg/ssm/2021-12-16_16-44-40.png",
    "revision": "74e6fdd0a8734da855cd13aa49f4ca5d"
  },
  {
    "url": "blogImg/ssm/mybatis-4-1.png",
    "revision": "ad4845e6c93c81aa57694c87f902beb3"
  },
  {
    "url": "blogImg/ssm/mybatis-7-1-1.png",
    "revision": "c9b4e2b5b93ecde4d5ce5ad7c1da74a2"
  },
  {
    "url": "blogImg/ssm/mybatis-7-1-2.png",
    "revision": "84db8f8090b54870d08d4ef58b3e91a5"
  },
  {
    "url": "blogImg/ssm/Snipaste_2021-11-03_09-27-39.png",
    "revision": "d020367dc191d9f1e9ee266fb8546a24"
  },
  {
    "url": "blogImg/ssm/Snipaste_2021-11-03_15-16-21.png",
    "revision": "97a3abc9953343a83a8e0948833892b6"
  },
  {
    "url": "blogImg/ssm/Snipaste_2021-11-08_11-39-36.png",
    "revision": "58d33d476420735aef15fc4d6812aed5"
  },
  {
    "url": "blogImg/ssm/Snipaste_2021-11-08_11-48-02.png",
    "revision": "b8f95ac10a736b33f10c7cdb5100eeff"
  },
  {
    "url": "blogImg/ssm/Snipaste_2021-12-20_16-35-53.png",
    "revision": "74483bbadd9b5ffed651d12ee77f9b22"
  },
  {
    "url": "blogImg/ssm/spring1.png",
    "revision": "0d924fbba5d90588ad222a75c7f13b0a"
  },
  {
    "url": "blogImg/ssm/springmvc-3-1.png",
    "revision": "8cbd53f1280bf2c65af4808e49ab10f5"
  },
  {
    "url": "blogImg/ssm/springmvc-5-4-1.png",
    "revision": "81f62b21e91f7ad6976656c4ca4539c4"
  },
  {
    "url": "blogImg/ssm/springmvc2.png",
    "revision": "06dacf73f03b168f295de94f9c18ee89"
  },
  {
    "url": "blogImg/ssm/springmvc3.png",
    "revision": "ed78cd0bba7529991df8f36edb79d412"
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
    "url": "blogImg/vue/before.jpg",
    "revision": "7e26a69ed58c623449fd163cc78c91c2"
  },
  {
    "url": "blogImg/vue/component1.jpg",
    "revision": "c7b535e898bc597be0098040c2402f8b"
  },
  {
    "url": "blogImg/vue/component2.jpg",
    "revision": "0863f1b97de8e13f040d1f37ff6afb34"
  },
  {
    "url": "blogImg/vue/diff1.jpg",
    "revision": "55424d66d1a5e6f467598c13286eb64f"
  },
  {
    "url": "blogImg/vue/diff2.jpg",
    "revision": "cdf7d9b875a7b63507b850a8fa80350e"
  },
  {
    "url": "blogImg/vue/diff3.jpg",
    "revision": "8a2f4e0a9329ea2c5c0f051357e355f7"
  },
  {
    "url": "blogImg/vue/diff4.jpg",
    "revision": "7a998136aaf7300e011f43d3ca4199b9"
  },
  {
    "url": "blogImg/vue/diff5.jpg",
    "revision": "7da5e0bfed7d39e4e92edebd9a9446a3"
  },
  {
    "url": "blogImg/vue/diff6.jpg",
    "revision": "b13362331118d2f7621164f28c8a2b5b"
  },
  {
    "url": "blogImg/vue/render1.jpg",
    "revision": "9f296e4f9579ebbbd6aa1d08a1e4e951"
  },
  {
    "url": "blogImg/vue/生命周期.jpg",
    "revision": "6eba8c66dc16b2a1ec024aad49e20600"
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
    "revision": "57ea2c534fd8cc6babc8aaf8e8f4317f"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "5fdb9893985079e77e71d50b080e2771"
  },
  {
    "url": "view/database/redis/aof.html",
    "revision": "9d1df7ca4e8c46c4dc1efc98848f8f73"
  },
  {
    "url": "view/database/redis/configuration.html",
    "revision": "f473ad52292afdd207b95fff837f618e"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "e921a85bf450bcb66046e116735ecd83"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "bea8c05fe02006fc0f7d39dc5d154e20"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "3d736bfdd8b1a7d78c0bb6daae832904"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "912c3d822b75cd8fc03705e2e0807066"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "d8f7bc97de29997e9caad3d8b04fb5c3"
  },
  {
    "url": "view/database/redis/masterSlave.html",
    "revision": "b34d77c9fe99831411c3d9a6eaf2d823"
  },
  {
    "url": "view/database/redis/rdb.html",
    "revision": "a43724ab419d0d1f8776fe700535d5f7"
  },
  {
    "url": "view/database/redis/sentinel.html",
    "revision": "25d106a0ddb263bfc91a5db510dce4d4"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "2938f9be2f8477f46f1506a7a38c24ba"
  },
  {
    "url": "view/database/redis/springbootredis.html",
    "revision": "ce0819c8e3c6a761a6052d4b66322968"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "2710dcb43469c72732d893670bef8129"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "b98f42416fe9b565e89635f6e64eac25"
  },
  {
    "url": "view/Front-end/es6/const.html",
    "revision": "1d0dfb4243b646a37af404a2096c1748"
  },
  {
    "url": "view/Front-end/es6/Destructuring.html",
    "revision": "e11d50949017c784598d88a1ed1dcd9c"
  },
  {
    "url": "view/Front-end/es6/function.html",
    "revision": "ce7cb591ac0ebe78c232d471f88a1067"
  },
  {
    "url": "view/Front-end/es6/index.html",
    "revision": "26bbf186c7b299725d87338a5ee8e1b3"
  },
  {
    "url": "view/Front-end/es6/Iterator.html",
    "revision": "b7f3f7fe21391b0c1460e943a1e831bd"
  },
  {
    "url": "view/Front-end/es6/let.html",
    "revision": "eb9856364d0b17f7811e8e688213f461"
  },
  {
    "url": "view/Front-end/es6/setMap.html",
    "revision": "dfcea44a8d9b24464f8eed280e8e204b"
  },
  {
    "url": "view/Front-end/es6/string.html",
    "revision": "d6fd4ce05b062b0eee183bd84e6359a6"
  },
  {
    "url": "view/Front-end/es6/symbol.html",
    "revision": "831a4e40b479e2a02286257aeaab20da"
  },
  {
    "url": "view/Front-end/vue/command.html",
    "revision": "e2ec37a31affcb679417e72929f5da29"
  },
  {
    "url": "view/Front-end/vue/component.html",
    "revision": "c894dc01eddfd0425cf64228211cd329"
  },
  {
    "url": "view/Front-end/vue/computed.html",
    "revision": "56172d2b12be89f318554f38ab752f28"
  },
  {
    "url": "view/Front-end/vue/declarationPeriod.html",
    "revision": "33f328bfe5b770fbf966d0bd73761f6b"
  },
  {
    "url": "view/Front-end/vue/diyCommand.html",
    "revision": "8f724e04c03351906a08227724aab1e2"
  },
  {
    "url": "view/Front-end/vue/filter.html",
    "revision": "8170f31a4696f05fcf19169aae267993"
  },
  {
    "url": "view/Front-end/vue/index.html",
    "revision": "2bc4b7e20a1ca584ddaee6a5250202e5"
  },
  {
    "url": "view/Front-end/vue/interpolation.html",
    "revision": "2a60d2d1e959bcfa30f77e4fe36629d1"
  },
  {
    "url": "view/Front-end/vue/ref.html",
    "revision": "d89a7b7f3f058877567f7e6b8ae5a00a"
  },
  {
    "url": "view/Front-end/vue/render.html",
    "revision": "fdcaed6cb630a9ba7a4c6c6f9baa2014"
  },
  {
    "url": "view/Front-end/vue/style.html",
    "revision": "afd0b401327e62123246e871a34ecd71"
  },
  {
    "url": "view/Front-end/vue/tabView.html",
    "revision": "75fd235deeb21d43dfc6de73f268851c"
  },
  {
    "url": "view/Front-end/vue/view.html",
    "revision": "8fceed4dc623b93bb3d004a81b73ee6e"
  },
  {
    "url": "view/Front-end/vue/VueCli.html",
    "revision": "c9b5b0303d9e893b0a6098388ae5824e"
  },
  {
    "url": "view/Front-end/vue/watch.html",
    "revision": "07dcae857ef29cb9906a1276cb1de060"
  },
  {
    "url": "view/Java/basics/enum.html",
    "revision": "bc39664eabb0bc327084fae61d48b776"
  },
  {
    "url": "view/Java/basics/index.html",
    "revision": "4d2e1a30b68cfcce9b952307abfb0689"
  },
  {
    "url": "view/Java/basics/io.html",
    "revision": "b8148367030cb092b2ba061de76ea92b"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "a0416b4e5ba37a37c93252aaa2d62444"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "6848faaba7b0a3318fe113efe7eca832"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "a73053a4f1a14d6e57abaeffb9524128"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "564e5ccd26b1accd4e78493363177164"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "be1d57ae13e9d4698c6cb9c120d9e2b7"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "32ed02fe9de61f52ebbb2bc34d50dce7"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "a879acf3e4e32d2518ea1ba99d5099e5"
  },
  {
    "url": "view/Java/reflection/class.html",
    "revision": "b32d02e125a27e2de72310dfafeefe92"
  },
  {
    "url": "view/Java/reflection/ClassLoader.html",
    "revision": "daacefc6df6d8a2fe94c7e60e71b5795"
  },
  {
    "url": "view/Java/reflection/index.html",
    "revision": "2ad49214fb6354481262194dccf31c09"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "0340cf87d9dabbe189840f982a069ee4"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "db5d274cae25efd488153a6f4fa87ec1"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "76125792092963189e324f30e052d5cf"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "f26da2623342dd5098332ee30890f594"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "ecace18952521b5490b83bede948c757"
  },
  {
    "url": "view/mq/rabbitmq/integrationspringboot.html",
    "revision": "0e2fd4f386b8c8ec3a0867a365316744"
  },
  {
    "url": "view/mq/rabbitmq/message_delay.html",
    "revision": "f9b2b2dd2ebd85286ac9e60784773ac2"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "f7af2003b7e1d01d77eaba1f853c4432"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "19043710558afb67d5e21a9b54ad337d"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "4ddcd8f49b2a3763e8e8a89a524de980"
  },
  {
    "url": "view/mq/rabbitmq/MessageSuccessfullyConsumed.html",
    "revision": "ac1deee0617ae8476f0b2baab63c255a"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "118b9aff8e9081cbe194e93a76971103"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "0bfb788dc7e341ec68f506fb8442bdb1"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "9d71ad1934cbc1f3e9fbbdc4c725da23"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "eae9d82cfe2ed676e549f47e67f2cd7d"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "45cf79dce2f5334ec69e23a0794c5a0d"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "726a9ef0adab8efe143b2d451db555f3"
  },
  {
    "url": "view/preface/index.html",
    "revision": "2ce829bd8e15aa7442e70913f9fed892"
  },
  {
    "url": "view/springboot/basicconfig.html",
    "revision": "1966dfb11746f1f9afd0b4b6d508aae7"
  },
  {
    "url": "view/springboot/index.html",
    "revision": "1ed1e723bf6518f0fcd16d4f03452590"
  },
  {
    "url": "view/springboot/spring-web.html",
    "revision": "ccee89f2a38c1b587b3aeaed5ecca3e8"
  },
  {
    "url": "view/springboot/springboot-view.html",
    "revision": "3bb2ad3746140690fc52eb0ba9e82bdb"
  },
  {
    "url": "view/ssm/integration/index.html",
    "revision": "84e5d8bfc7faf3c763b1ccb797a0eb1a"
  },
  {
    "url": "view/ssm/mybatis/advanced.html",
    "revision": "fb6f2fdae97ce3ab930fa3c3e831611f"
  },
  {
    "url": "view/ssm/mybatis/index.html",
    "revision": "4a562a7f895be73ecf577f580c1b2089"
  },
  {
    "url": "view/ssm/mybatis/mapper.html",
    "revision": "26177b78c02629f19184a781f22cff12"
  },
  {
    "url": "view/ssm/mybatis/Primarykey.html",
    "revision": "09eb6ce8b35243717125e03996fb297c"
  },
  {
    "url": "view/ssm/mybatis/select.html",
    "revision": "2bd2651876ef5114af705695121b72e5"
  },
  {
    "url": "view/ssm/mybatis/typeHandler.html",
    "revision": "1c760a026c7ea91978d7830d91d7e4df"
  },
  {
    "url": "view/ssm/spring/AOP.html",
    "revision": "f19be4009bb5685795ec48b69623dd7b"
  },
  {
    "url": "view/ssm/spring/authConfigure.html",
    "revision": "025621feb77c57fc57be342f023f0e32"
  },
  {
    "url": "view/ssm/spring/Aware.html",
    "revision": "45b8d8aeb8573c2051280e1961531256"
  },
  {
    "url": "view/ssm/spring/beanScope.html",
    "revision": "1456f04e124de28a7151e186a4e2aeb9"
  },
  {
    "url": "view/ssm/spring/conditionalAnnotation.html",
    "revision": "ec268daae22e154fcca78c8348b51516"
  },
  {
    "url": "view/ssm/spring/index.html",
    "revision": "5267df083ef93db142dc237963401b6f"
  },
  {
    "url": "view/ssm/spring/IOC.html",
    "revision": "3cfd599247b372a5bb55a5ef0a3d610d"
  },
  {
    "url": "view/ssm/spring/JavaConfiguration.html",
    "revision": "f50fa1a9a0b9c3f76d47069968f6be3f"
  },
  {
    "url": "view/ssm/spring/XML.html",
    "revision": "e3f90966ce2a4dc2f73c35b365a8525c"
  },
  {
    "url": "view/ssm/springmvc/DispatcherServlet.html",
    "revision": "852087cd40c3ec1923f2274428c0642b"
  },
  {
    "url": "view/ssm/springmvc/exceptionAndValidator.html",
    "revision": "6e67b87fa6b293f327e6c8089e2ed0ab"
  },
  {
    "url": "view/ssm/springmvc/FileUpload.html",
    "revision": "5f29e00abd39413ed87a02ed4f5ec657"
  },
  {
    "url": "view/ssm/springmvc/handler.html",
    "revision": "99e4e99683e7f47aafd005720a9be3f2"
  },
  {
    "url": "view/ssm/springmvc/index.html",
    "revision": "5d767a3c31289c0603dbb368d425df51"
  },
  {
    "url": "view/ssm/springmvc/json.html",
    "revision": "46a17d58d0a170b94be39d568de7a542"
  },
  {
    "url": "view/ssm/springmvc/requestmapping.html",
    "revision": "d71c54097b8ee1337f45fa707ca09f4c"
  },
  {
    "url": "view/ssm/springmvc/static.html",
    "revision": "47849547ca152702de82432471990515"
  },
  {
    "url": "view/ssm/ssm-senior/spring/index.html",
    "revision": "23283aa9297ae442550b4157d6e9c6cd"
  },
  {
    "url": "view/ssm/ssm-senior/springmvc/index.html",
    "revision": "aa5555fd7efecc06e25fb3d47e53a9be"
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
