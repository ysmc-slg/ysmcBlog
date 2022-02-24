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
    "revision": "b2dee1dd67fb0cee639b00ef8f03cda1"
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
    "url": "assets/js/100.715f4923.js",
    "revision": "4a2a42fccf78fdb32931f75fdfc18346"
  },
  {
    "url": "assets/js/101.4987560f.js",
    "revision": "95dfa3875d572c64fe7f9dac4a6871fb"
  },
  {
    "url": "assets/js/102.b75e914f.js",
    "revision": "b6c6a078b084ef579db98c267f6b9d56"
  },
  {
    "url": "assets/js/103.387e3c6b.js",
    "revision": "83e464e52efc4468e2a990960f1e0dc9"
  },
  {
    "url": "assets/js/104.65795d56.js",
    "revision": "8004f1b5d78fc703aefcad613924c49c"
  },
  {
    "url": "assets/js/105.1834d2e7.js",
    "revision": "fb2ab30d5e13d99927ff0c4c80ca1ab8"
  },
  {
    "url": "assets/js/106.d5bb3ea7.js",
    "revision": "33aed1fa444c06f69f070311b7746730"
  },
  {
    "url": "assets/js/107.0f3fae57.js",
    "revision": "955d5dff9f3a9106bdd21377568e9d0e"
  },
  {
    "url": "assets/js/108.d453a065.js",
    "revision": "6c55eb17c41f72e9b303ad01d73e3e28"
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
    "url": "assets/js/13.dafbbcc9.js",
    "revision": "9056062b629980d26fc01cea1d503d65"
  },
  {
    "url": "assets/js/14.c04d0e4a.js",
    "revision": "7d46f630c3ec6aee1976bface95bc642"
  },
  {
    "url": "assets/js/15.04fd83ef.js",
    "revision": "01f3267f5b94358a72dfd18fcb5fc91d"
  },
  {
    "url": "assets/js/16.e619cb39.js",
    "revision": "9df46e6bd655b9dc338431ea317ec52d"
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
    "url": "assets/js/19.cb8f10a7.js",
    "revision": "6cffb2bdf4f7e4f88971da668c5094f0"
  },
  {
    "url": "assets/js/2.3a807b85.js",
    "revision": "97a62308384cc0ef2026f8f6aa10e16f"
  },
  {
    "url": "assets/js/20.654184f6.js",
    "revision": "ea336b6b637e7d7a640d20e4073ed880"
  },
  {
    "url": "assets/js/21.793d7966.js",
    "revision": "e554cea1f695df32d0a7d7248493f83c"
  },
  {
    "url": "assets/js/22.0824e083.js",
    "revision": "fad217da84d219178acf220490ba350b"
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
    "url": "assets/js/32.610cb5c7.js",
    "revision": "352136f240df83fd78aab1b8f5775e3e"
  },
  {
    "url": "assets/js/33.55f803a5.js",
    "revision": "6267519f999d0b8dc6d9a0a4262c0f05"
  },
  {
    "url": "assets/js/34.6d7ab2fb.js",
    "revision": "408285445ac15e4e0b10536f7e9c3976"
  },
  {
    "url": "assets/js/35.0cdd2f26.js",
    "revision": "9505f5891c2765d2c7b12d7cc625114e"
  },
  {
    "url": "assets/js/36.db842219.js",
    "revision": "3739367887ef6b1689315263a62641d4"
  },
  {
    "url": "assets/js/37.c0cdf40b.js",
    "revision": "5fd7647c5e932c6afc29be52900ae57e"
  },
  {
    "url": "assets/js/38.8c8b031b.js",
    "revision": "63918730eb0e1f12ba69d88b25e0400e"
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
    "url": "assets/js/40.c449506e.js",
    "revision": "44719d1c1a8b2be3b8ba3ee056b9bc7d"
  },
  {
    "url": "assets/js/41.bbacdff9.js",
    "revision": "507dcf6fee78a2d3bb44b9d1f557bdb6"
  },
  {
    "url": "assets/js/42.542625e4.js",
    "revision": "33ee259fb7a2d4695918e20c0818bdaf"
  },
  {
    "url": "assets/js/43.91729417.js",
    "revision": "945ba3844dacc1db3e0516dd1339e523"
  },
  {
    "url": "assets/js/44.79942687.js",
    "revision": "f6ee52bc120c058c3b04db8790f4ec67"
  },
  {
    "url": "assets/js/45.940c52bf.js",
    "revision": "92d223d48cf3cc3b54dac85a2b32ed48"
  },
  {
    "url": "assets/js/46.e41d20f0.js",
    "revision": "5a5998dece41668134a7400c0ea4107b"
  },
  {
    "url": "assets/js/47.9e53204d.js",
    "revision": "997ed16d54e36e236a29f30613472a00"
  },
  {
    "url": "assets/js/48.c44ed5ab.js",
    "revision": "14bedbe50244d88a2f3cdab335f18935"
  },
  {
    "url": "assets/js/49.7fc2ace3.js",
    "revision": "433c28f4292d5d86fc59ac188c129812"
  },
  {
    "url": "assets/js/5.851d534f.js",
    "revision": "fedde939b5ea210bfce396878cd5281d"
  },
  {
    "url": "assets/js/50.066dd8e7.js",
    "revision": "6ca4eb8fe67fc74c8683850083c195fe"
  },
  {
    "url": "assets/js/51.1be557a2.js",
    "revision": "0b1b44d1a4fefb634c920f1df5093861"
  },
  {
    "url": "assets/js/52.cf50e16b.js",
    "revision": "ce49c1baacea1a7c1d366711eaec04e0"
  },
  {
    "url": "assets/js/53.4101ed38.js",
    "revision": "d2542c05abc2438ed913271cf9304075"
  },
  {
    "url": "assets/js/54.7d149576.js",
    "revision": "bc87c612b22148e256e06fb611f7cde6"
  },
  {
    "url": "assets/js/55.4523fe59.js",
    "revision": "e8449778e7840159abb4bfeeb0bacf17"
  },
  {
    "url": "assets/js/56.b42d2e58.js",
    "revision": "47a5f5126ff5a044373bfe063f3ccd50"
  },
  {
    "url": "assets/js/57.9317400e.js",
    "revision": "f914281ed15169c51c278ef203a223e6"
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
    "url": "assets/js/61.8142af1b.js",
    "revision": "f93e0ee4e1ea0163aae2f44e998cbda4"
  },
  {
    "url": "assets/js/62.8291ab1e.js",
    "revision": "41be077b8d414d675e634016443964bd"
  },
  {
    "url": "assets/js/63.c662f718.js",
    "revision": "dcdcccd5121c2821a0593564e1f9bd03"
  },
  {
    "url": "assets/js/64.16e8f6d1.js",
    "revision": "f1ff2d65935549bc063d107f9d5bd193"
  },
  {
    "url": "assets/js/65.4187afca.js",
    "revision": "0f10031f628d3dbf6c3bf569821e36be"
  },
  {
    "url": "assets/js/66.020662ae.js",
    "revision": "ef5e6b1e15cee05fd0b08ff732ae51cb"
  },
  {
    "url": "assets/js/67.af6f7e9f.js",
    "revision": "d149fca34625aae56f2e19b75e3d6766"
  },
  {
    "url": "assets/js/68.07ef3d68.js",
    "revision": "6a4277041404b814157b3242c32fb78a"
  },
  {
    "url": "assets/js/69.c3b1ad0e.js",
    "revision": "123b6707fbdcabf02db2e54ab7004826"
  },
  {
    "url": "assets/js/7.1cc9bea6.js",
    "revision": "7e615f351d6d827de91208bfa74affe5"
  },
  {
    "url": "assets/js/70.880fd1cd.js",
    "revision": "c8b5015756e4cc24a8577188a4da273d"
  },
  {
    "url": "assets/js/71.8fda6eb5.js",
    "revision": "0f7d206f14ded04fdf9756c5f45e0c27"
  },
  {
    "url": "assets/js/72.9d094fd2.js",
    "revision": "bab5d60f7aa070b71009759d42b7af1c"
  },
  {
    "url": "assets/js/73.ded8ab32.js",
    "revision": "866d227a50f3c71a58ed55925485c6d5"
  },
  {
    "url": "assets/js/74.bf0b3729.js",
    "revision": "4734a4a84a3abea89abe63c2e1cb068c"
  },
  {
    "url": "assets/js/75.69123a5a.js",
    "revision": "0ebef357b81a950dbc8ae1ad9ded0965"
  },
  {
    "url": "assets/js/76.877caebd.js",
    "revision": "a3eb5343bc76f02a02d141802fc7a888"
  },
  {
    "url": "assets/js/77.bd4c0c1d.js",
    "revision": "ad54eac79ad5bc434f46467e4d1bcce6"
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
    "url": "assets/js/80.e728e4f9.js",
    "revision": "7b3ae2aefdbb194a44a9a6e20e3d96cd"
  },
  {
    "url": "assets/js/81.8f8acb56.js",
    "revision": "f3692a5b509f6e4bb48e1c984c9ecfb9"
  },
  {
    "url": "assets/js/82.3bb3e5da.js",
    "revision": "58e411b9f809c4323c0e97346612bfb7"
  },
  {
    "url": "assets/js/83.3a2230a3.js",
    "revision": "4e9c0b45108f54023ee5b5ed0e29bfe3"
  },
  {
    "url": "assets/js/84.ce9f3f1d.js",
    "revision": "fbc225ca1eca89f8549c6f27e136a321"
  },
  {
    "url": "assets/js/85.a0bbd08a.js",
    "revision": "8be3e85a9d39a1af48c2d5a3566575ef"
  },
  {
    "url": "assets/js/86.5ac6e493.js",
    "revision": "add79d91c40866a6751fcababb7649f2"
  },
  {
    "url": "assets/js/87.8eb8504f.js",
    "revision": "7dd22e8aa67b93b63a0500b5eecdefed"
  },
  {
    "url": "assets/js/88.f5925c74.js",
    "revision": "cc4aaf271d6a3d1258d28eb4bf47de47"
  },
  {
    "url": "assets/js/89.5dbcc911.js",
    "revision": "e2d4a835713abdaa953df6ab4a37c7c9"
  },
  {
    "url": "assets/js/9.2ae44f2f.js",
    "revision": "a897558751073f57cc4cef3972aea594"
  },
  {
    "url": "assets/js/90.508e425d.js",
    "revision": "31006dfe2a7559aa66d04b75bc378f6e"
  },
  {
    "url": "assets/js/91.07a68c92.js",
    "revision": "bc3d8f46e9cadb1693e79c378ec2ac2c"
  },
  {
    "url": "assets/js/92.b76aa3c6.js",
    "revision": "12f1d7264b44474b14cfbed8a9374942"
  },
  {
    "url": "assets/js/93.91b3b925.js",
    "revision": "9827bb7f265a5e913562cee7c391c7d3"
  },
  {
    "url": "assets/js/94.d5a99305.js",
    "revision": "18a2f483b9530d568df5a4caac4b3661"
  },
  {
    "url": "assets/js/95.45b948d7.js",
    "revision": "dcb4c04bd90a604b9f135080ffbda6a2"
  },
  {
    "url": "assets/js/96.dfbad36d.js",
    "revision": "1b7452a1aba63e99a237b3eb2c9eb2df"
  },
  {
    "url": "assets/js/97.44084739.js",
    "revision": "c5a163fbdf72b84c7bd96013211a4b46"
  },
  {
    "url": "assets/js/98.1f260c20.js",
    "revision": "660f8c1624dc3300d2cda9254d9330fc"
  },
  {
    "url": "assets/js/99.83c3c10c.js",
    "revision": "5310a91a1e571f8e4c1aa2a7d15e4fb3"
  },
  {
    "url": "assets/js/app.fc05a438.js",
    "revision": "b7aad96244a8479ce3190d5d12d141e6"
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
    "revision": "aad11ef5ce325ea386eb0d56e692c601"
  },
  {
    "url": "lizhi.png",
    "revision": "bb610baaf40f9679244e06f1909457f5"
  },
  {
    "url": "view/database/mysql/index.html",
    "revision": "67852ae0eb0cd4d756e34b62de188c5a"
  },
  {
    "url": "view/database/redis/aof.html",
    "revision": "0b0d99f08d69ff7cce729beeed370056"
  },
  {
    "url": "view/database/redis/configuration.html",
    "revision": "0e75333aeb5e1dd5823b6c332c7a710e"
  },
  {
    "url": "view/database/redis/hash.html",
    "revision": "a30ff65c5b7631ef0925fab622a9099c"
  },
  {
    "url": "view/database/redis/index.html",
    "revision": "8d6266109c931eb7ed5a65c55e44a30e"
  },
  {
    "url": "view/database/redis/install.html",
    "revision": "6bb16440a49fd2635f088f3b39e23294"
  },
  {
    "url": "view/database/redis/key.html",
    "revision": "f289c449b03d4d2716ffdd66b1aa2039"
  },
  {
    "url": "view/database/redis/list.html",
    "revision": "da5d27884fa3f76b39ca2f6f9e266aaa"
  },
  {
    "url": "view/database/redis/masterSlave.html",
    "revision": "596a34af57a18f2c18f9ddc33feb78d5"
  },
  {
    "url": "view/database/redis/rdb.html",
    "revision": "f05d4ad6cbed4c9b0c30dbd89dd71a7b"
  },
  {
    "url": "view/database/redis/sentinel.html",
    "revision": "78de3a91fb0cc4d7da7d2c44fd34b6c8"
  },
  {
    "url": "view/database/redis/set.html",
    "revision": "e710fdff2e6e769f9c7306662bec066a"
  },
  {
    "url": "view/database/redis/springbootredis.html",
    "revision": "596e4108cca9d0e52dc7496651925d86"
  },
  {
    "url": "view/database/redis/string.html",
    "revision": "9298fa5e7c532412aed2aaa79a692eb5"
  },
  {
    "url": "view/database/redis/zset.html",
    "revision": "e8ae53c6352b4f7867aaab08cec08e9f"
  },
  {
    "url": "view/Front-end/es6/const.html",
    "revision": "3d4b2892b8f3ad2b135da925706b5559"
  },
  {
    "url": "view/Front-end/es6/Destructuring.html",
    "revision": "4da83792cf2c1d418da6b5ca64405b81"
  },
  {
    "url": "view/Front-end/es6/function.html",
    "revision": "ad9e1e8e6bd4015230f4cc125fc7c359"
  },
  {
    "url": "view/Front-end/es6/index.html",
    "revision": "1f8a8accd15417d06d64ecc69fd23c5b"
  },
  {
    "url": "view/Front-end/es6/Iterator.html",
    "revision": "1db00b288eefe5e6ad96376354a4de7d"
  },
  {
    "url": "view/Front-end/es6/let.html",
    "revision": "14f18bf6e7f1e3e690bbae87d1670bd6"
  },
  {
    "url": "view/Front-end/es6/setMap.html",
    "revision": "6438d547d0fdc7870670ee09d2e11fd9"
  },
  {
    "url": "view/Front-end/es6/string.html",
    "revision": "bc7d32fc7d4491bc7dd9ba6129f0828e"
  },
  {
    "url": "view/Front-end/es6/symbol.html",
    "revision": "e25b1c4ac118e77f2d7c63893443a7da"
  },
  {
    "url": "view/Front-end/vue/command.html",
    "revision": "6c333804503297c125a9c22b024028d1"
  },
  {
    "url": "view/Front-end/vue/component.html",
    "revision": "04acc9b86941a0ed544b12981232e64c"
  },
  {
    "url": "view/Front-end/vue/computed.html",
    "revision": "17939753966678e58beb85aef07f4861"
  },
  {
    "url": "view/Front-end/vue/declarationPeriod.html",
    "revision": "fc0c04578c231831735de100ab1932e2"
  },
  {
    "url": "view/Front-end/vue/diyCommand.html",
    "revision": "e85ff3dfef8559714d322cd6edd449e7"
  },
  {
    "url": "view/Front-end/vue/filter.html",
    "revision": "fd35b82c13e9dcc038dd6e31a7979524"
  },
  {
    "url": "view/Front-end/vue/index.html",
    "revision": "4f070887adbe45ab70ec970df44517fa"
  },
  {
    "url": "view/Front-end/vue/interpolation.html",
    "revision": "558916fa23f4adfcfd4cc4a764199375"
  },
  {
    "url": "view/Front-end/vue/ref.html",
    "revision": "0156e704eaf829bfb7f9605b8ff91ce3"
  },
  {
    "url": "view/Front-end/vue/render.html",
    "revision": "b04eeed2d207d5577780d408e3ccc99a"
  },
  {
    "url": "view/Front-end/vue/style.html",
    "revision": "65a51a9e53b680c514182362447dd401"
  },
  {
    "url": "view/Front-end/vue/tabView.html",
    "revision": "f9c28ddf088183289bcaec0bec7592d6"
  },
  {
    "url": "view/Front-end/vue/view.html",
    "revision": "fb16458be25d648406918087a9551fd0"
  },
  {
    "url": "view/Front-end/vue/VueCli.html",
    "revision": "c6ddd1d82e8c7f0e8e085be34d44022d"
  },
  {
    "url": "view/Front-end/vue/watch.html",
    "revision": "01c4deace53e9693692d9f70bdb3e267"
  },
  {
    "url": "view/Java/basics/enum.html",
    "revision": "a795b56a8b2118709875d2d45df28f90"
  },
  {
    "url": "view/Java/basics/index.html",
    "revision": "4651a43a8d0fed1146bbcb9541179424"
  },
  {
    "url": "view/Java/basics/io.html",
    "revision": "11d091a5ad7b373718c7657a4b5ad490"
  },
  {
    "url": "view/Java/jdk8/CollectorsApi.html",
    "revision": "0bd80ad78d915b844a39d227ceaa45d5"
  },
  {
    "url": "view/Java/jdk8/Date.html",
    "revision": "e2203fbf9166c7244285a8ea2711fa8a"
  },
  {
    "url": "view/Java/jdk8/functional.html",
    "revision": "d92ee01f904bee147df5fb615bd2907d"
  },
  {
    "url": "view/Java/jdk8/index.html",
    "revision": "87b6e6577ae2958aa20fc2803adb2b27"
  },
  {
    "url": "view/Java/jdk8/Lambda.html",
    "revision": "d2d4e37589364e96e0564ecb5edf83fc"
  },
  {
    "url": "view/Java/jdk8/method-reference.html",
    "revision": "a33480aec87bfaf448502a9bc6e5dd01"
  },
  {
    "url": "view/Java/jdk8/StreamAPI.html",
    "revision": "d21ed4a3785118d1a68075b5ab4942c4"
  },
  {
    "url": "view/Java/reflection/class.html",
    "revision": "5873c20988c79d0634dca6e5c5306e96"
  },
  {
    "url": "view/Java/reflection/ClassLoader.html",
    "revision": "adcfc8a912e35f71b94c8552528ddb62"
  },
  {
    "url": "view/Java/reflection/index.html",
    "revision": "b8bd450c41175eef57420307d6e96b5f"
  },
  {
    "url": "view/mq/rabbitmq/direct.html",
    "revision": "f7308ed78794fd3f1e3a5cd6eef02cea"
  },
  {
    "url": "view/mq/rabbitmq/fanout.html",
    "revision": "8749205c317fc60d85eff7ffe36a27e7"
  },
  {
    "url": "view/mq/rabbitmq/HelloWorld.html",
    "revision": "6ce742ef47bfd8869bfbf66e763f8e83"
  },
  {
    "url": "view/mq/rabbitmq/index.html",
    "revision": "d83931513cf753d5ae32227c20279a9f"
  },
  {
    "url": "view/mq/rabbitmq/install.html",
    "revision": "5dbf37c3eb3b6d6744398eb9ea5b89a2"
  },
  {
    "url": "view/mq/rabbitmq/integrationspringboot.html",
    "revision": "156395a23f3d75be06028f0c7d5352a3"
  },
  {
    "url": "view/mq/rabbitmq/message_delay.html",
    "revision": "535b5b19064e6b9c0eac5316fe929868"
  },
  {
    "url": "view/mq/rabbitmq/messageConfirmation.html",
    "revision": "23c7a36b7f15b20fedb69b5202fa26bc"
  },
  {
    "url": "view/mq/rabbitmq/messageDistribution.html",
    "revision": "94509b6561fb67a8095449aacdcfb850"
  },
  {
    "url": "view/mq/rabbitmq/messageResponse.html",
    "revision": "0d34560e5289aa510e0e9296e086d977"
  },
  {
    "url": "view/mq/rabbitmq/MessageSuccessfullyConsumed.html",
    "revision": "15143097d5482b000a02030ef8d35aa8"
  },
  {
    "url": "view/mq/rabbitmq/pattern.html",
    "revision": "6c5d70185effff83446dbef6341a1ba5"
  },
  {
    "url": "view/mq/rabbitmq/persistence.html",
    "revision": "582f3d3b4f6d6c10a05f7e9e38af3d15"
  },
  {
    "url": "view/mq/rabbitmq/rabbitmq.html",
    "revision": "3ee41164ee529d2304bf7585404ffb2a"
  },
  {
    "url": "view/mq/rabbitmq/topic.html",
    "revision": "c656927abff31b623857e74e727cd36d"
  },
  {
    "url": "view/mq/rabbitmq/web.html",
    "revision": "a234e406fba10da900f40c50927de050"
  },
  {
    "url": "view/mq/rabbitmq/workquene.html",
    "revision": "08876214b0d17f06c17a288c1d06c97c"
  },
  {
    "url": "view/preface/index.html",
    "revision": "88bfee043a5dc17471f91352f3f1198e"
  },
  {
    "url": "view/springboot/basicconfig.html",
    "revision": "682f52f3dedef3156ecc4d53778e31c3"
  },
  {
    "url": "view/springboot/index.html",
    "revision": "afa89e9a8f2468a78a1b0cd599f58185"
  },
  {
    "url": "view/springboot/spring-web.html",
    "revision": "7c5dab918820c88b628ec0f1cb70f748"
  },
  {
    "url": "view/springboot/springboot-view.html",
    "revision": "c0004fb8d65ceed4be9ff8b067e05a09"
  },
  {
    "url": "view/ssm/integration/index.html",
    "revision": "0f8127bcdbd01b55d0d6375fcf9af9f9"
  },
  {
    "url": "view/ssm/mybatis/advanced.html",
    "revision": "e3c606e98d318fcaa1af0a52a601e7d1"
  },
  {
    "url": "view/ssm/mybatis/index.html",
    "revision": "141ecfae9332a01e0eb5d8af2375f07e"
  },
  {
    "url": "view/ssm/mybatis/mapper.html",
    "revision": "7505e357db2c5c3f69b3bb18a05edcb5"
  },
  {
    "url": "view/ssm/mybatis/Primarykey.html",
    "revision": "d6eb94eb0bfbe46895a29c07e745e6e5"
  },
  {
    "url": "view/ssm/mybatis/select.html",
    "revision": "604c36c316baa1bdecbfdfe089c2e6ed"
  },
  {
    "url": "view/ssm/mybatis/typeHandler.html",
    "revision": "44d8485b26b713d7f1e675a050d4be53"
  },
  {
    "url": "view/ssm/spring/AOP.html",
    "revision": "5e4b2d34d1203f0c7ab6bea1f7972893"
  },
  {
    "url": "view/ssm/spring/authConfigure.html",
    "revision": "f451956e195276b79d1235e136e4edda"
  },
  {
    "url": "view/ssm/spring/Aware.html",
    "revision": "521fdf67d8d6e3690a359e03ce105258"
  },
  {
    "url": "view/ssm/spring/beanScope.html",
    "revision": "f14fc438b8fd8469620731d39c74128a"
  },
  {
    "url": "view/ssm/spring/conditionalAnnotation.html",
    "revision": "65c1e27366c5807f4546c2cbce63b9c1"
  },
  {
    "url": "view/ssm/spring/index.html",
    "revision": "925d299c40df1e2605c4c2054238323c"
  },
  {
    "url": "view/ssm/spring/IOC.html",
    "revision": "810dbfc2775d608ae64fd1b91d14582e"
  },
  {
    "url": "view/ssm/spring/JavaConfiguration.html",
    "revision": "c540b708229843e0f8570a30863e7609"
  },
  {
    "url": "view/ssm/spring/XML.html",
    "revision": "18df626a75524840c329173e5ba45b94"
  },
  {
    "url": "view/ssm/springmvc/DispatcherServlet.html",
    "revision": "7f5846405357b968e49451f7deb6e6b0"
  },
  {
    "url": "view/ssm/springmvc/exceptionAndValidator.html",
    "revision": "6021d16ac81abb06a782f9d8509d6c3a"
  },
  {
    "url": "view/ssm/springmvc/FileUpload.html",
    "revision": "63dd8624aa67f3d02e88f86eae8f580c"
  },
  {
    "url": "view/ssm/springmvc/handler.html",
    "revision": "87b65193b72cea047bc23c73dc3cbdd0"
  },
  {
    "url": "view/ssm/springmvc/index.html",
    "revision": "900f171205fe3557259b5fa777c6aaf3"
  },
  {
    "url": "view/ssm/springmvc/json.html",
    "revision": "5bd577cc233fc38759a1ed5d39f857e0"
  },
  {
    "url": "view/ssm/springmvc/requestmapping.html",
    "revision": "4b9b6aa2e57a48e3a83dcba2ddec0f61"
  },
  {
    "url": "view/ssm/springmvc/static.html",
    "revision": "4c017f2378a5ac0da6047f175d43fc8f"
  },
  {
    "url": "view/ssm/ssm-senior/spring/index.html",
    "revision": "5bba6bb0600f3877b50df3f4bbe76650"
  },
  {
    "url": "view/ssm/ssm-senior/springmvc/index.html",
    "revision": "f7731a5ebd5391c5ffa22051a67ad2f9"
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
