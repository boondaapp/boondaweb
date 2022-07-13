'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "03a6ecc1dbc74cfaacfeb8b1f09b8998",
".git/config": "fdd33af6e0f5647210867c7e5182a0bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a77bc53a6c2433f66a4836156c8c2fc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "625df213d1cebd3735ced0e25eaf3d95",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "927f872aff6a0e8155f03fde57e5d364",
".git/logs/refs/heads/master": "6f7baefd9f5c8e6337ccfd67f17f2e86",
".git/logs/refs/remotes/origin/master": "69c93c24716e028958f4c584b003b12a",
".git/objects/02/a0d7482cfc3509d2824c15c3dce158a9cdcd3e": "cdf18c6ba1aeb91ff30eaf1cb68f86be",
".git/objects/03/bf88e62a74a38074fa59b95daaa5b4a4145b80": "a682b354377a860b10881d564fce4219",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/952bd7973d8785157f60899c479df58e14f526": "a9857a8214c4072d7e12be20dd9c2c72",
".git/objects/08/f91842c6ff10ab62511ceb07a91da362a9b4d1": "fd644d2b10a6c2a9df68844be992e74d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/15/62608fba1cfe2510f9879e3b8ea5d1ade5580d": "be39b8231b5c0f5137b7ffb9e866e523",
".git/objects/1b/828c23dc4eb4e33f7667cb2110e07620b66557": "e21942e403b6756ae55769581ee75a01",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/3ee357072698649ef343e4db9f24c8f2159080": "b36f22403f8c18602ca9ad84b73fe276",
".git/objects/39/a37f90049ca01b73e4fd7dca3c4e4b639463c1": "52ac7a9927cdb9261ab7f8334d8c9cf9",
".git/objects/43/72d3a0d8b68d21ed75307106c875e6d6ae4863": "22d3b6bfc7db7e806e3f5d933d2e65de",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/6c4a532d2c928e874a397c9914bc9033f84f9b": "a996940fe09d461e2f139af0c443c726",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/6f8949a0c69a848fd4060faf16e4e8404efad7": "8c6372e65c6572886855feebc4b04317",
".git/objects/51/9ee7fc6b6022cad82748daee8160cec59109f0": "669df4b5147814280ccf7d107fe77df2",
".git/objects/59/63e841ff26366e2a18b42916a86401ce38a686": "01887c357e36881268cf64e67d497e6d",
".git/objects/62/ff6549d1f31e2c4f53267727b7610b48378c15": "2922c8bf2adbf99d726a04fcbc35df9a",
".git/objects/66/5381c4af3dc1aea4a9772d3ee0e50ca97183f2": "5948591b2d00f63b0a3e437e8c8006d3",
".git/objects/6d/e14239437ce9d37e0283861a4a85dc5542fd44": "37e182c59126a9e8fa0e5bb2eaa7464e",
".git/objects/6f/cb82e71deb8dc34c7ee11d14e56e2bc7a6b933": "79188bdc194f5e046af37b25c456469d",
".git/objects/70/36bbd38a74cb4982714da808ce5026268cd4a9": "47a260e34a721c7790f4f405b2ef0bb2",
".git/objects/73/b03a7e3139932bde9c41f5899fecf2a94a3b21": "f039da7f1c3de5803fd3dc10b9c57815",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/d24d338b0df67f91f020486f933528c14b3635": "f0779f3b818d3bd0d64734d74ef1fed4",
".git/objects/78/cee2790aaf1b2192d3a7c8aece1c85f90a17cc": "37a3601b3051411f1026bc131f79356b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/1716e5159dfad79e50db3f94b86881c21bc524": "2959a78b89d2b64e5b79c6849d6f0ddd",
".git/objects/7a/74b12bba385fd9772399a0f46ffbe5681f75af": "b3a125ded9e50e3d09fdd3767945f016",
".git/objects/7a/c322bcfbaee3c7c53a5c8e3619ce12f41bfd7a": "002ebcf348e57cfb5629d05c72d2ab5f",
".git/objects/87/2d78daf782ef16702c612f00a562017c8aca35": "526a951cbeab2a585d8e0864e4d7cf96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5afea49b765b3c609363808d4dd7131e18b1b7": "847d1df59f0a6f6cd2fc12ebe5feeed8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e9b1198c39cd49f8ebc105cf0ea896014f9447": "a55dc3be93dce760bb49d16127186f89",
".git/objects/90/5d45b5dbbb9cedf7014bdf8f8580c997684f54": "8ea716c835f94876ffc3a90dbf341394",
".git/objects/95/48c9daa02fa2590f063ad7d2694800a2c60114": "4f5dc81ae210c9b10cbdad0a98b6496f",
".git/objects/96/95e81dede57e8bbb436bc9b769b59d3a01db09": "bf9c4e53cd46a70247d4085cc4933cce",
".git/objects/9b/3d54569e8bc17505d0635757ace88f08e3f328": "37805ac2a585c8e17b126ee4edd8ad32",
".git/objects/9c/75e9e7d4fef1ebf1c8ba8bdf951d186c8f5076": "42e40aa6f005c757f925243c7660d1e5",
".git/objects/9f/ab29712b5e9025c2b131b73a6584d6adce836d": "eae7d5722011e903d205afff8fec5e25",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/b6248af207322a7f9a34a31cb838b330fa4d82": "7aedbf32cdb6e4cad7d577848d536479",
".git/objects/a4/e8d4e2fbb99ba8aca0bc4320fe9714b80e126b": "4350496e5bb5062060e7a0c46f8f2ad1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d1a4b1a9a44b259941d537c58d860b838b9786": "aaac7b2c7615c1b1621feb09da1f05d8",
".git/objects/ae/fc91cdb9f0da4ad014304ed26109ce0324cba6": "077946d9e60d91617a698d5db47637f8",
".git/objects/b1/bec68d74d23795dfcb05fddc459c034bf9731d": "a305a4564d9d1636f314d7e428e5068a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6538c13cca2a6dca29905a904170c71914f82c": "2dbd2431e7a384d906e020f40f69be09",
".git/objects/b8/129f244d1fe247c978add829e339fca2414957": "0f390ff0be6dab0e070943cfa2fe7d1a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ca/2b083baa7509b9f2b60666d0e404e247200b16": "ba7f6479b507c21b8135f707883618cc",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/cb5afca1c60ca7b3dce84e7200b7593c1cabfc": "5a0c50c93779493d86e2c5de41c04f57",
".git/objects/e3/3ff0b42a51f7c4fed557e137dc746aeef33a52": "29076298562d9a72250b6afac2948571",
".git/objects/e4/05b5862428ab5dbcadc0d12a6dc52a095df5c8": "c41e07a7205da86e9c0487a85df8e4b4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/595374e8ca24616e998fbfe116416a7982036f": "f2ae95f0ead5fb6f25ba44fdb433451e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/022faa6ebea203b0e58c3963934cf0bd0728c7": "b2999d72f9a23d37fae26e8cb869cd50",
".git/objects/eb/75f2f724b67d185591bcc705c093a5a38ebdd7": "201a214f0215133f8927044de68d8644",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fafbf48d12ae43b47c179fe0da49f8d7db30c3": "1cf70d0a6de7f9b596c15157332c957b",
".git/objects/ec/dde158dd19693adddda5f123bb3766eb6f72da": "11459c253b5fe2a920f3bfd9b4712033",
".git/objects/ee/51bdf4ae7b7d98fbdaf93bca2608cf1326f282": "1df273f159867975c141ad2cb03829e6",
".git/objects/f4/23f9c861bed9836a275d57806fa70894105cd7": "a75d9959db6fe183e886e4fab075318a",
".git/ORIG_HEAD": "1857543d8573455f9c5406031ebce811",
".git/refs/heads/master": "7a87bbb97747508441eb5646bc711300",
".git/refs/remotes/origin/master": "7a87bbb97747508441eb5646bc711300",
".git/sourcetreeconfig.json": "2abc43a424f5e47b62d0c99580d66c6c",
"assets/AssetManifest.json": "615e0c3eb92a4f8d42ddacda60fbe172",
"assets/assets/onboarding.png": "b67855e85db5b3cea12ef10441529241",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9068f53d15c57d2d2923b310c7474a86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "280bc1ec6766eb9ea3d856f307a1df55",
"/": "280bc1ec6766eb9ea3d856f307a1df55",
"main.dart.js": "d34d104921d306986d3510729981deef",
"manifest.json": "2f503ba7afcc2a35399236e736de1e2b",
"README.md": "0f743d3be9d0f9d6f17ef8f89fe68e13",
"version.json": "dccd89c2d26d10908fb3d7bfb1196f83"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
