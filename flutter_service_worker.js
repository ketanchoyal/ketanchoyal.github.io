'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f8092e9b4121f40c8187b14ab1fe7af7",
"/": "50f18fda71300b6c6d7a0ee3ceb1faea",
"main.dart.js": "15fa0699df9a1eb06a9818a68c8d48f3",
"flutterportfolio/index.html": "f8092e9b4121f40c8187b14ab1fe7af7",
"flutterportfolio/main.dart.js": "d70d0f45027d4c40e882f200dceb2cad",
"flutterportfolio/favicon.png": "bd59c9df361103f47c35ec378e5d1cc6",
"flutterportfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutterportfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutterportfolio/manifest.json": "e1344ef2d1e118af6b7ca0efaf394867",
"flutterportfolio/favicon@2x.png": "15fcf0900da8d49c682dc7e17331d58b",
"flutterportfolio/assets/LICENSE": "68a3f97acddad51e6f814a7fbdda253c",
"flutterportfolio/assets/AssetManifest.json": "018ed28d7b0265a06c68d3914ea37f7c",
"flutterportfolio/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"flutterportfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"flutterportfolio/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"flutterportfolio/assets/assets/images/support.png": "2e547499e121cb8a5154b62b0df65f6d",
"flutterportfolio/assets/assets/images/gitHubDart.png": "5e46aa7478bcfd2fec7bc4f9c4738f13",
"flutterportfolio/assets/assets/images/adobeXD.png": "e2a9e8a76e0e4673bd6ba34684a0bac3",
"flutterportfolio/assets/assets/images/mail.png": "613f6988fa77b12c0813b40cae07d64f",
"flutterportfolio/assets/assets/images/instagram.png": "b474c6ab99e2dafcd8b318f2801a6915",
"flutterportfolio/assets/assets/images/github.png": "6de090b64da789e7a2c29c1d4be4a5c9",
"flutterportfolio/assets/assets/images/firebase.png": "f1dd4af4cee0d71496089917c6e8e917",
"flutterportfolio/assets/assets/images/github_logo.png": "adde82d1bba00be3ce0ced57fc2dd550",
"flutterportfolio/assets/assets/images/background.jpg": "1340021d67fc389a2eeac6772ac7818b",
"flutterportfolio/assets/assets/images/medium.png": "83e0bee8363db406a315a98979b5b75b",
"flutterportfolio/assets/assets/images/gitHubAndroid.png": "079d4738b494423be259dc1010804e5e",
"flutterportfolio/assets/assets/images/gitHubiOS.png": "f24fd84e68d01d153c167c1ba48fc108",
"flutterportfolio/assets/assets/images/twitter.png": "1cfc168c0c22027e407e31ba31e058d6",
"flutterportfolio/assets/assets/images/swift.png": "b4ff9ad279081638c65ec671ced4acd9",
"flutterportfolio/assets/assets/images/linkedin.png": "0f37658cd037522a8339964955812838",
"flutterportfolio/assets/assets/images/profile.jpg": "849a8635c5a4bfe2cbefd52dad0fc205",
"flutterportfolio/assets/assets/images/location.png": "e206f2991be1fab1ebd7c6479def4912",
"flutterportfolio/assets/assets/images/phone.png": "fe66b8adc7d10afee0f1d39d84352644",
"flutterportfolio/assets/assets/images/playstore.png": "d62d34907a65ec4014f2e5e85282c4d0",
"old/index.html": "50f18fda71300b6c6d7a0ee3ceb1faea",
"old/bootstrap/css/bootstrap.min.css": "ef322bbb022adb4f1ebe57414e676ea6",
"old/bootstrap/js/bootstrap.min.js": "5869c96cc8f19086aee625d670d741f9",
"old/css/styles.css": "95fe76dd8d153c771c03bcf66163e54f",
"old/CNAME": "501eaf58ffcec8ad20a1a45275ceec91",
"old/js/wufoo0.js": "a91665229805c921ee6d8e0a1354cfa2",
"old/js/jquery.min.js": "0fca26b5a37a66d68d0f4406976be4b5",
"old/js/modal.js": "7eb8a32ed375c609fa5ae7d3e06e6dd7",
"old/resume/resume.pdf": "e3fa7152271fd18146050725c208a03d",
"old/img/index/dev-chat.png": "0491c3f4712879068769b9005e5fbc8a",
"old/img/index/email-icon.png": "264855712b0bf72128f8e1a5efad94a5",
"old/img/index/footer-background-dulll.jpg": "587535ad26700372fcc78fd93bfde0f7",
"old/img/index/the-parkeriOS-2.png": "34985966be8c772029414fa863772864",
"old/img/index/linkedin-icon1.png": "86b61ef3acce4c1f108238e2ea4f5d1c",
"old/img/index/the-parkeriOS-3.png": "51f8f49e6fdc19724471ca8e2f8268e8",
"old/img/index/the-parkeriOS-1.png": "e8c642b2fe369d0a2575de3a67d53c14",
"old/img/index/footer-pic.png": "440a60b01d2b3227bbbc874f700e40f9",
"old/img/index/github-icon.png": "472739dfb5857b1f659f4c4c6b4568d0",
"old/img/index/twitter-icon.png": "244bbf614d3e018e33734c92c5ebeffc",
"old/img/index/medium.png": "cbb5955e1e726a24b0cf05130b27a747",
"old/img/index/macbook-hero.jpg": "e11dcc53c3c5f83450ae0b7ec52ac28f",
"old/img/index/cv-icon.png": "f33e132ce3b7812ef1a799548299a64a",
"old/img/index/bitcoin-tracker.png": "cbb221183903fac9f039a222e5847d39",
"old/img/index/crossfire-1.png": "f7a90ec363e976af79f1751b9fd3add3",
"old/img/index/favicon.png": "7f4bab8906b225d0409bf6af29771503",
"old/img/index/crossfire-3.png": "1b02aee25b2829dec42404244ce80623",
"old/img/index/crossfire-2.png": "ce43f9d34149883d84349940a79e1abe",
"old/img/index/now-image.png": "e638ab1f4b806c34e21ba44ba085bb31",
"old/img/index/crossfire-4.png": "b5ab1e32046956147440dd1ad26ce287",
"old/img/index/breakpoint-3.png": "51289f734316cf89a6f0b9645d3a0333",
"old/img/index/breakpoint-2.png": "05950f8f37142915d818fc39653ab11d",
"old/img/index/macbook-hero1.jpg": "cd5a456992435ac57157e48eed0ff5a0",
"old/img/index/breakpoint-1.png": "c5a9657c145e3944e4278fcb08aab33f",
"old/img/index/footer-background-dull.jpg": "8c07096460201d3fe87cce2bee11f968",
"old/img/index/linkedin-icon.png": "b22f345ab8d1696c78c8e2d1b00a1505",
"favicon.png": "bd59c9df361103f47c35ec378e5d1cc6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/FUNDING.yml": "ddf3fcddb4c35e347b3cc432e47df168",
".github/workflows/main.yml": "6450a667343b9a8abe3f4bf267983fa7",
"manifest.json": "e1344ef2d1e118af6b7ca0efaf394867",
"favicon@2x.png": "15fcf0900da8d49c682dc7e17331d58b",
"assets/AssetManifest.json": "0b3cf93014725b5e833e383a2809cba6",
"assets/NOTICES": "1bfc44380a1ee42fabc18bcdf9be615a",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/support.png": "2e547499e121cb8a5154b62b0df65f6d",
"assets/assets/images/gitHubDart.png": "5e46aa7478bcfd2fec7bc4f9c4738f13",
"assets/assets/images/adobeXD.png": "e2a9e8a76e0e4673bd6ba34684a0bac3",
"assets/assets/images/mail.png": "613f6988fa77b12c0813b40cae07d64f",
"assets/assets/images/instagram.png": "b474c6ab99e2dafcd8b318f2801a6915",
"assets/assets/images/github.png": "6de090b64da789e7a2c29c1d4be4a5c9",
"assets/assets/images/firebase.png": "f1dd4af4cee0d71496089917c6e8e917",
"assets/assets/images/android.png": "7b7ba8b062e644fd4e5e03015f45dce4",
"assets/assets/images/github_logo.png": "adde82d1bba00be3ce0ced57fc2dd550",
"assets/assets/images/background.jpg": "1340021d67fc389a2eeac6772ac7818b",
"assets/assets/images/medium.png": "83e0bee8363db406a315a98979b5b75b",
"assets/assets/images/gitHubAndroid.png": "079d4738b494423be259dc1010804e5e",
"assets/assets/images/gitHubiOS.png": "f24fd84e68d01d153c167c1ba48fc108",
"assets/assets/images/twitter.png": "1cfc168c0c22027e407e31ba31e058d6",
"assets/assets/images/swift.png": "b4ff9ad279081638c65ec671ced4acd9",
"assets/assets/images/linkedin.png": "0f37658cd037522a8339964955812838",
"assets/assets/images/profile.jpg": "849a8635c5a4bfe2cbefd52dad0fc205",
"assets/assets/images/location.png": "e206f2991be1fab1ebd7c6479def4912",
"assets/assets/images/phone.png": "fe66b8adc7d10afee0f1d39d84352644",
"assets/assets/images/playstore.png": "d62d34907a65ec4014f2e5e85282c4d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
