'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f8092e9b4121f40c8187b14ab1fe7af7",
"/": "f8092e9b4121f40c8187b14ab1fe7af7",
"main.dart.js": "433e8681a0796bc3931f89052e95e6b8",
"favicon.png": "bd59c9df361103f47c35ec378e5d1cc6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e1344ef2d1e118af6b7ca0efaf394867",
"favicon@2x.png": "15fcf0900da8d49c682dc7e17331d58b",
"assets/LICENSE": "68a3f97acddad51e6f814a7fbdda253c",
"assets/AssetManifest.json": "ae1d20ccf08772780f136ecaf364d3e0",
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
"assets/assets/images/phone.png": "fe66b8adc7d10afee0f1d39d84352644"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
