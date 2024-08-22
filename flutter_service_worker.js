'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dff4f0b6b7ac3c7ea13cc77ba5f3098b",
".git/config": "1cf824d12e66a9ef55967f07cb33638e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "28253ca47d1f5599b8d3d37f50377b11",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bbb90bacd59d48d32357ac8f8b351ab4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa92162695baf5262eb0456efe8aa3e0",
".git/logs/refs/heads/main": "59484d744752dec845dbc02146172db1",
".git/logs/refs/remotes/origin/main": "7767823a2b5b3a4616c8980ee37bde74",
".git/objects/00/27ebfad9488b328953fc5624879862814d7982": "6f03a54bc6e01a5f647fe056592712d7",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/10d488948f4098c27c9d1b556e696693947297": "00b0d2426fcbed0f0ac8d02c1c3305b8",
".git/objects/0c/b8dc6757f43ef62f5c80e4e09e7b8bd15cab82": "8c3deded266fcdfabecf63c6208747ef",
".git/objects/13/b3aa641eb6ffe4960afaf42e46e70f9458c093": "d10a5b996922ab87572192b1f05c73bf",
".git/objects/13/b80f15927dc6c0539ce9ee3ecb299b1f471eef": "7881c4dd9438e342ee0137875c565fb2",
".git/objects/16/11317cdf7db3564cde19248352802bbe851540": "7eb64088f6bd279264a46d7240fff472",
".git/objects/17/e6ac114f2fae315d30c17cb30ff448241f3f4d": "fb75ab43ba3f2b9e3833658eebfdbcac",
".git/objects/17/f1ec690c7152bad4ae794f875cb69289e56d01": "8c18495a447cafbf41b2a33ec349436d",
".git/objects/18/2b6136585a7f5cd0a01baba4361808c726f484": "7e3f73a2e61db883fa019681c31759c4",
".git/objects/19/8fa5eb423d52d62db70a4147e18baf47e4480a": "2dbd01424409a6d156d045d717281232",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/f1a16a78f8cbc5fe503d981caa6a3253b32e19": "ec744cc8e39fb5ffa65098a8dadd346d",
".git/objects/2a/59adcaee648d7e19c4acf05d4b14e7107f3a86": "8c5797deb143cf13ee20dfaaff9a5053",
".git/objects/30/8204949fd4022d2ff3c408093025b77d0b6707": "cb45e9ad22f17a9e7ad9b4b552ada4da",
".git/objects/32/c57de0fe257119d0d4414beb2218a76f51cfa2": "db10a722b0a59496c83770d53490d662",
".git/objects/35/2535c8c36b7922d93a1ce1128e74d372d0c56c": "3424b2c410b450ef5257f50dee0b7403",
".git/objects/37/bf3c4687a650f1092599fbcaf892e87dbf2520": "144ae08a04ffc73cbe60cd5f65a0f66d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/ea2ae5fe262efb23dfc5b648400a5dd88cb2b3": "864ddd6c53b71851e8fc5fb59488b8ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d23d5713b81c4572f87bf12fb9fddd917574b5": "23c4d90deb0303ddc5a1acf67a142ba8",
".git/objects/5d/c2f742c45028101772f59b97d9e68c69597cc9": "2d5e27a000e68eb8e2a63e0502bdbdcf",
".git/objects/61/d2dbed4a83ac82bb06ada3e0cdf51ca3ad87a6": "4c6827ecb118fcef6f73c4cf677255fb",
".git/objects/64/14385c0b9af6eeabe5138d2bbcab4353085e4f": "474f062750145f47b8a5ffe9ae3cda85",
".git/objects/65/0c603be299d98b858ee21045a292a9a38fdd1c": "9e2c792430294543316d7da37b9a5f85",
".git/objects/68/d0f3dba3947bd3dfc29320af1cc38d5cb7fcce": "1e9850c1399158272c9305722b44535b",
".git/objects/69/88317b28e0fea322facbf01ae0334b22956fee": "4b664427e32d08ed3ecc40cfdc9101f4",
".git/objects/6e/ed4a14aa4e492cf300d79d8d4790ed4dcae2ab": "b96ff78f2c4d7cd35a5c3fac5798c1a9",
".git/objects/75/12034b8b706046d582a91628b63c3bca817b10": "a8cc0b394b7db3fe2df0f9402b5f9e50",
".git/objects/75/e39862d5133ef95cc041452a606c2bda146b32": "bb8a6985d43b805c369c6d865659d6a7",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/79/ef06eb26a72073af1ac99e1f419560eea3cfc9": "ee952783b3dc1e836618ff19aaf1f194",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/f627677fb1650b737ccab7ad27835503025d94": "c2a7cf37f52cce867a1131f7b7207578",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ddb883d904ac455225906eb943ed044eb72f09": "3fc894af0afc3ab349b1d17e5beb81e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8e/a0caa76e96b1efc6d37c9d8febf7f348d0ba79": "4364829767ddeaed771f76faea668119",
".git/objects/97/71564fe804f85f6f32db328f007946cec13288": "724796b5cf15e3e41c9b2302b6edb96f",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9d/91e7f6c20b0602eadff2f09fe8448ad695f6a2": "0f2b7ef05fb3ffd371178033d04b4fa0",
".git/objects/9e/a5582ec0f668562cbb8f944dbd9052daa52a5c": "f80ff67c96c074a1eb26061414fcce4e",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/ad/114fa9d0c9e4f963b23622ec1806acbe032a9c": "de528085cfebbd941f5110328915d38d",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/ae/c8fa5075237d6d57f53a922f0d457fc9de1e14": "954ceecc4c66eab24da16d96bfbb0d9f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/a7e3a151cf5defc810be423ec69176075eb889": "15d75f6d7c62c2df342ac2d417740d43",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e5857ac3acdd156c7bdcce2f0535815f96fc31": "be5052f4fe123cf894f4d3a5d5a24ac7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9df54bba1590700a51b1fc45fb03d7129f48f3": "ac55455c7dc303b189636577bdff4055",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/51ed42d163bd74a90f036a74840464bb4e6995": "5d663e6c319a6abc4d232f866cc5aa02",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c9/33a3c80b3b7d2f4d6d0d36f2f9733259c01797": "5aa44e7008bcec43f312f7880d585a4e",
".git/objects/c9/cff3a75b40686cc9f27c4f335e4ec358a86dcc": "3ceb331efb5503576b5180e9213d46c2",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cf/d43b10c9e6cd0d6a3f9a9a08aa3f4b9a0ef278": "7fd893e37dffb9df8b4953ee96589587",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fa6fd267bd6aba7b5614bf97b95d12dc0f7171": "3ccb6b0210fd48a2b5761f13a752d933",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8e65496f803fb73fc283de771a26e5ee7ce1be": "58794e2516258e3f036d7665726549cc",
".git/objects/da/52386a83a32e655ccd76b386702009c815c821": "d275ef2eb4573d588051bb0c508eb02c",
".git/objects/e0/5d1bf254c156bc6e5eb05efe25774d4c6f52c9": "0374650466d119784622ca5858c5ec4b",
".git/objects/e1/1ac6bf1470816bdedd4d3851f87248a92895e3": "c28b053d4ab5182e40fc77ddba8cd306",
".git/objects/e3/04d9084ac7278e12119e97b16a764df78e9845": "46d310cc32b1674ef70b567b88aec694",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/74b221cc8025875e43133a2d39cf76f6a9f5ec": "a0943a4905b0986ef8698890744e2bb9",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/c6ce4e475d3a6c68cd67ad40ec6c4f9a858472": "79a7006fdd2d6f2d27363ef084084547",
".git/objects/fd/c40a2f3d63056bd35673acd503c5fdffb10162": "34335dde8d66b768fd485be7d6bb601b",
".git/objects/ff/badfcf51fb6db0e50518478b07c8e15e100439": "e18358d8d71413c584315bf8467db309",
".git/ORIG_HEAD": "63623e7e5fd5380f34ff923fb7441f54",
".git/refs/heads/main": "0c05a3adc9c14470a6b6069e1e1c862e",
".git/refs/remotes/origin/main": "0c05a3adc9c14470a6b6069e1e1c862e",
"assets/AssetManifest.bin": "82757527a8215a188996659aba19c7af",
"assets/AssetManifest.bin.json": "659ffdabf5ea1715cc68839263407c6b",
"assets/AssetManifest.json": "82f91cb651da584aa1a5fda5a1e1a5b7",
"assets/assets/images/56.jpg": "fd8cd98f4cec1705f7596d87e577db40",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f3489e4343b39da541b3fef172f7fb52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9b1aa03c02c8c43d2e4ef1d5b8ce28b3",
"canvaskit/canvaskit.wasm": "8746eddf4e2883ac7fd123f0b1bee206",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "da50d68f5eb953d52e04e153d06e0ef0",
"canvaskit/chromium/canvaskit.wasm": "0e4d90773c8d34af4a4edf6cafbff669",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "b6cbd9b442394230920768fcdce9c0fd",
"canvaskit/skwasm.wasm": "4638927a0fcbdf3d934bfcc670d433a2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "52e0151416dea2aaa670356f5c2e1386",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f237fd9505408fd459d12faf8e93e47",
"/": "8f237fd9505408fd459d12faf8e93e47",
"main.dart.js": "4880b6365f0a5b2e5f3fee55042bf82b",
"manifest.json": "ba465a01a4f4ad1d066cde804afd679c",
"version.json": "95f4213fa1a040bbe90923e86d0bc7e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
