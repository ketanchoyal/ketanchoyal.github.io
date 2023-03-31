'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"old/img/index/favicon.png": "7f4bab8906b225d0409bf6af29771503",
"main.dart.js": "53d7f62ac0b238fc45cb3b4683891aa7",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"favicon.png": "bd59c9df361103f47c35ec378e5d1cc6",
"favicon@2x.png": "15fcf0900da8d49c682dc7e17331d58b",
"version.json": "c23a07d3b3f4d0fd1df0c3bfc175eac9",
"manifest.json": "e1344ef2d1e118af6b7ca0efaf394867",
"assets/AssetManifest.json": "246c75fe9597053061ff21485f05dafb",
"assets/assets/images/gitHubAndroid.png": "079d4738b494423be259dc1010804e5e",
"assets/assets/images/phone.png": "fe66b8adc7d10afee0f1d39d84352644",
"assets/assets/images/medium.png": "83e0bee8363db406a315a98979b5b75b",
"assets/assets/images/gitHubiOS.png": "f24fd84e68d01d153c167c1ba48fc108",
"assets/assets/images/linkedin.png": "0f37658cd037522a8339964955812838",
"assets/assets/images/instagram.png": "b474c6ab99e2dafcd8b318f2801a6915",
"assets/assets/images/gitHubDart.png": "5e46aa7478bcfd2fec7bc4f9c4738f13",
"assets/assets/images/mail.png": "613f6988fa77b12c0813b40cae07d64f",
"assets/assets/images/android.png": "7b7ba8b062e644fd4e5e03015f45dce4",
"assets/assets/images/nodejs.png": "3b12f93bf3d79dd7c4c045f9698912a2",
"assets/assets/images/support.png": "2e547499e121cb8a5154b62b0df65f6d",
"assets/assets/images/aws.webp": "2e43f81d14a8dfd30d29fea3126ff994",
"assets/assets/images/profile.jpg": "849a8635c5a4bfe2cbefd52dad0fc205",
"assets/assets/images/background.jpg": "1340021d67fc389a2eeac6772ac7818b",
"assets/assets/images/github_logo.png": "adde82d1bba00be3ce0ced57fc2dd550",
"assets/assets/images/serverless.png": "d277d303d9e0222b8c6c9091db3d4037",
"assets/assets/images/firebase.png": "f1dd4af4cee0d71496089917c6e8e917",
"assets/assets/images/adobeXD.png": "e2a9e8a76e0e4673bd6ba34684a0bac3",
"assets/assets/images/playstore.png": "d62d34907a65ec4014f2e5e85282c4d0",
"assets/assets/images/swift.png": "b4ff9ad279081638c65ec671ced4acd9",
"assets/assets/images/github.png": "6de090b64da789e7a2c29c1d4be4a5c9",
"assets/assets/images/location.png": "e206f2991be1fab1ebd7c6479def4912",
"assets/assets/images/twitter.png": "1cfc168c0c22027e407e31ba31e058d6",
"assets/assets/images/typescript.png": "bff6b2788849ed735b91799212e1d4c4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "e47111b3130d5464f2f6e803bd29a1b3",
"index.html": "354a5f5c3898efc79b7e6d0af0b57564",
"/": "354a5f5c3898efc79b7e6d0af0b57564",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
