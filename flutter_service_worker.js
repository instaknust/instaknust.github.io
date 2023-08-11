'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73db9e64870a0e55f86f52ae680ba88a",
"assets/AssetManifest.json": "87c787a27c4eded6542b8ae99c66bcd6",
"assets/assets/fonts/AvenyTMedium.otf": "fa9886c662fff04977de1bc3fef5b974",
"assets/assets/fonts/AvenyTRegular.otf": "3e271f1b663e1d7d3eb0f2923529a8d3",
"assets/assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"assets/FontManifest.json": "20faf8b4b661df94d5dbacb9e924e058",
"assets/fonts/MaterialIcons-Regular.otf": "f760359d0bb555b44a0fc9f9314dd768",
"assets/images/captures/2023-07-28-13-54-16-578.PNG": "45949f910b64ee85987718a2adeb4266",
"assets/images/captures/2023-07-28-13-54-27-022.PNG": "1345d005b53f305d97daea693dfa0ed9",
"assets/images/captures/2023-07-28-13-54-55-279.PNG": "fc1abac3764dce2d16ddc1d7c1c5d7ae",
"assets/images/captures/2023-07-28-13-56-22-334.PNG": "1f89ce258d9edb87d5417bb0d99acab0",
"assets/images/captures/2023-07-28-14-07-51-561.PNG": "c5f75e0f66fc2e3dc081855170258e26",
"assets/images/captures/2023-07-28-14-30-59-663.PNG": "210316bfc24a3c5f029ae37efc86f230",
"assets/images/captures/2023-07-28-14-31-23-791.PNG": "fcca899915114c3b41a96001ec6f330f",
"assets/images/captures/2023-07-28-14-31-36-094.PNG": "163fe6acbbc01758467efcc416a21646",
"assets/images/captures/2023-07-28-14-32-27-939.PNG": "f977e7710c897238d55dbb7d1ef38533",
"assets/images/captures/2023-07-28-14-32-30-152.PNG": "40d0f79317504e0b538f7176677d2f9d",
"assets/images/captures/2023-07-28-14-32-46-754.PNG": "b0788ab9c4a74ee28e28ec871a1c4f7d",
"assets/images/captures/2023-07-28-14-32-48-522.PNG": "12e54007ef5141e0c7a63ffd01bf6210",
"assets/images/captures/2023-07-28-14-33-17-322.PNG": "3be6b45e8e0bb95856114293fc70e459",
"assets/images/captures/2023-07-28-14-33-21-254.PNG": "9a6c7d2d1a092d16ad0e2a9dc467c4ff",
"assets/images/captures/2023-07-28-14-33-28-696.PNG": "51887d6d78957f0888500cddb1751ba8",
"assets/images/captures/2023-07-28-14-33-37-276.PNG": "cedaaacb89b1515e462afe9271198bce",
"assets/images/captures/2023-07-28-14-33-52-245.PNG": "0d2c78f1ac7f3619280747744b56e20c",
"assets/images/captures/2023-07-28-14-33-59-183.PNG": "146a91d3f31f3ab8d2d9170571995180",
"assets/images/captures/2023-07-28-14-34-08-735.PNG": "da7f263998258608f2b7a135dd89f8c3",
"assets/images/captures/2023-07-28-14-34-17-079.PNG": "753b0c5e75a59376287af0b930eed9c1",
"assets/images/captures/2023-07-28-14-34-19-308.PNG": "5824e7478bfb13078483a0c7421ace78",
"assets/images/captures/2023-07-28-14-35-09-714.PNG": "f10269dc42b0c10a13911ca9cb34fbb7",
"assets/images/captures/2023-07-28-14-35-29-654.PNG": "5b2cb34b4ea2b7fb551414721c817a73",
"assets/images/captures/2023-07-28-14-35-36-437.PNG": "d8e884fdeb45e15e3635e9b73788c790",
"assets/images/captures/2023-07-28-14-35-41-070.PNG": "3aad192f3f5bff4761268b575d7cc0cf",
"assets/images/captures/2023-07-28-14-35-56-258.PNG": "10cc16567d962a4c0024a553b49750c2",
"assets/images/captures/2023-07-28-14-36-08-596.PNG": "7e58132e78a94388abe75aa6233a3e33",
"assets/images/captures/2023-07-28-14-36-31-584.PNG": "75acf638edb624d5618ce619c65c55fc",
"assets/images/captures/2023-07-28-14-44-56-093.PNG": "ed956cf88b747874829ffd5e121e9b07",
"assets/images/captures/2023-07-28-14-50-20-131.PNG": "f7202346871c316cc05b9e8d3b5f9318",
"assets/images/captures/2023-07-28-14-50-35-201.PNG": "b8a2378e14c13ace4083a2ce02e7458f",
"assets/images/captures/2023-07-28-14-51-13-732.PNG": "5492bd770f811fcc2ef4e2081d3aad7a",
"assets/images/captures/2023-07-28-15-10-01-242.PNG": "e7c10f58d694a4a6ba5d83348d0c755f",
"assets/images/captures/2023-07-28-15-10-43-444.PNG": "bb8cc8a22209370e7d34d7e1c28f21c6",
"assets/images/captures/2023-07-28-15-11-58-956.PNG": "b7d5a64aead827e88be305e57c8b1909",
"assets/images/captures/2023-07-28-15-12-02-038.PNG": "9cd9f92a20a8f8172be0d664f94871be",
"assets/images/captures/2023-07-28-15-12-10-731.PNG": "8e1bc8362618862bce08d9381a78e003",
"assets/images/captures/2023-07-28-15-38-41-542.PNG": "7ad95c3bd5b59b7d9627ca6500c365d7",
"assets/images/captures/2023-07-28-15-39-03-531.PNG": "93b25e5fcf5d3ad037513339e63d6e4d",
"assets/images/captures/2023-07-28-15-39-13-183.PNG": "ee9e99bd9e0d85203bcff63ba690c3e1",
"assets/images/captures/2023-07-28-15-39-40-695.PNG": "d95ffeda4f78c6a4a2faf6ff1331497c",
"assets/images/captures/2023-08-08-16-11-25-218.jpg": "fa25b7386a52171719042b5b7171d716",
"assets/images/captures/2023-08-08-16-12-46-033.jpg": "e30dd00a8f3c91b52246538e9dd488fa",
"assets/images/captures/2023-08-08-16-12-57-441.jpg": "08bd06dc63acee14f93dd89253c9aa3a",
"assets/images/captures/2023-08-08-17-39-51-531.jpg": "ffdbc0b6ab17f6ab7a5be3e3e7e886bc",
"assets/images/captures/2023-08-08-17-43-55-433.PNG": "d4ee5f5c18e37a360227a15b03db993b",
"assets/images/captures/2023-08-08-17-44-47-328.jpg": "0528a8c2be24583e8e54b1537b687261",
"assets/images/captures/20230505_222745.jpg": "63801dbc761f9535e6531c27133fd98e",
"assets/images/captures/20230730_191039.jpg": "8e4761e52ef21061076cf63a081efca0",
"assets/images/captures/20230730_191706.jpg": "456e5fe9ff9ff4440f551b3321f8044c",
"assets/images/captures/20230730_192102.jpg": "e4eb9a9b97879ae8ccfb0d9729440522",
"assets/images/captures/20230730_192232.jpg": "d0ebd639224f70fe9458f0be6b72e4be",
"assets/images/captures/20230730_192618.jpg": "a7bb548d90342d1310cf22511dc7a05e",
"assets/images/captures/20230730_193302.jpg": "70d14ae66ca8f8c85e86fd39271d48dc",
"assets/images/captures/20230730_193454.jpg": "2291a251c4762e783ed9bc98aee9bd6e",
"assets/images/captures/20230808_145619.jpg": "6b9e19a539c05ae0e84565a2acbc26bc",
"assets/images/captures/20230808_145740.jpg": "30707fc4c0a0cdbe6a23de7fcbcf2b79",
"assets/images/captures/20230810_171713.jpg": "adb9883ab814884fd60b06856880590e",
"assets/images/captures/20230810_172039.jpg": "0550dc532733058f94d816f4ab6d473d",
"assets/images/captures/20230810_172601.jpg": "50b82b7fd3ab3f22a780f3d199d75fbc",
"assets/images/captures/DJI_0158.JPG": "28cc83ee10a50b1b9724ee0b0c740783",
"assets/images/captures/DJI_0161.MP4": "839660f8f1030b171fc706e1b8c5a874",
"assets/images/captures/DJI_0162.JPG": "bbde4c451caca160e0d185b2ff653bc2",
"assets/images/captures/DJI_0163.JPG": "b829cd19cdc1c8b36178025252fb4329",
"assets/images/captures/DJI_0168.JPG": "62bb5aaf4fc62b9024942806b4ebfed4",
"assets/images/captures/DJI_0171.DNG": "9967fe2a3e01fdd2a35fcbeb90db7458",
"assets/images/captures/DJI_0171.JPG": "be2efcb2fb2c093b0af73169c0e8e743",
"assets/images/captures/DJI_0172.JPG": "06594bdea911563184ddebdb45b771cb",
"assets/images/captures/DJI_0176.JPG": "5429d3e8e25367d51af8ce0875ebd209",
"assets/images/captures/DJI_0188.MP4": "331704539c28903ae5e10f0efcc07c9f",
"assets/images/captures/IMG_0773.jpg": "188a8e3b4ff26d44a3fbcccfc68db91b",
"assets/images/captures/IMG_0775.jpg": "159e5b0e06111b2abef9a24f6148e380",
"assets/images/captures/IMG_0810.jpeg": "b8223eb239953522a470fae2f210c2d1",
"assets/images/captures/IMG_0811.jpg": "57ef519a4458a18457867bd972cb2745",
"assets/images/captures/IMG_0818.jpg": "192669a07921685dbdb77c913e069656",
"assets/images/captures/IMG_0821.jpg": "cbb4354dbb99a99f49aa4ddc90435a7b",
"assets/images/captures/IMG_0828.jpg": "325d555dc154cee3d0f80c140a8e10e0",
"assets/images/captures/IMG_0831.jpg": "a676dcb137cc2eb09645528ccc6ea69f",
"assets/images/captures/IMG_0835.jpg": "6c5f914c510a03a3d6e84b6537245994",
"assets/images/captures/IMG_0838.jpg": "88244c15672630d6b92ac7950fc3d38f",
"assets/images/captures/IMG_0876.jpg.jpg": "d94050b29ac24814a4ef4b6aadf98fa0",
"assets/images/captures/IMG_0882.jpg": "d2cfe8307e114a47973a4da1a3ef8c31",
"assets/images/captures/IMG_0889.jpg": "e09e4e8f03f32b40019a9d2ebcb6f23b",
"assets/images/captures/IMG_0893.jpg": "53d98078a3206acc139202d5b2ab7aa3",
"assets/images/captures/IMG_0898.jpg": "6761e3f3b5d2dc33a93a5d6b2986962d",
"assets/images/captures/IMG_0901.jpg": "22fe915493a5bb1aeed043c02598042b",
"assets/images/captures/IMG_0907.jpg": "7f612c9df81714ffaa00b021c3744550",
"assets/images/captures/IMG_0910.jpg": "7a1103320cc5ae8936bf3618f23ec5ee",
"assets/images/captures/IMG_0912.jpg": "d1f887094de93c80f03afdb81695ec3b",
"assets/images/captures/IMG_0915.jpg": "b45e4aa17df42c9de90375f073ac34fd",
"assets/images/captures/IMG_0918.jpg": "fa2bb13494499fad5a6726e79b4a7e71",
"assets/images/captures/IMG_0923.jpg": "a9e73f492f7eb9a93067274fd1378537",
"assets/images/captures/IMG_0926.jpg": "a60c7c4a972ee590055b452f1dbfd3ad",
"assets/images/captures/IMG_0932.jpg": "e170d5c5257778d9bdf8aa1d4b953946",
"assets/images/captures/IMG_0933.jpg": "a96a80125e9d04f6678e9cef2c680e19",
"assets/images/captures/IMG_0945.jpg": "569706e539bce96fa28bf12f285160c5",
"assets/images/captures/IMG_0949.jpg": "cdb8d1578aa753805c61cc7591bb9a7d",
"assets/images/captures/IMG_0956.jpg": "6f639f3e8808edc106fe585eac7c7ced",
"assets/images/captures/IMG_0959.jpg": "ef7680cfad736a7fd28ee25e1885d5b8",
"assets/images/captures/IMG_0969.jpg": "45f90b7a90fe755b304db462a0eea081",
"assets/images/captures/IMG_0974.jpg": "cd321ebb5cf347c87db681ec1e868d3b",
"assets/images/captures/IMG_1397.jpg": "d35cbc7f0985e5364b099ee873d1660a",
"assets/images/captures/IMG_1404.jpg": "c4846450ae16de2adaf0689c51cc730d",
"assets/images/captures/IMG_1405.jpg": "d2e9b5e5991ff8c9edb995a8a76e1394",
"assets/images/captures/IMG_1406.jpg": "a398c64e020ce892640986080fc4066f",
"assets/images/captures/IMG_1407.jpg": "ca7b94d0067aa47cadf46ed845dd4ca8",
"assets/images/captures/IMG_1410.jpg": "ca4d4553d160490c7f18f7b1037c343d",
"assets/images/captures/IMG_1411.jpg": "8d8871fe0a837f75447bec866b8c87b9",
"assets/images/captures/IMG_1412.jpg": "29e513c3386efca0566c0e9b87f5d8ec",
"assets/images/captures/IMG_1416.jpg": "37789480825c97a231d0a3e77535a509",
"assets/images/captures/IMG_1418.jpg": "ff8e3c4379df4bf2e533ff20f55808d6",
"assets/images/captures/IMG_1419.jpg": "b12d32ff217c913bec4abbcba428fa69",
"assets/images/captures/IMG_1420.jpg": "1f6e01455bd7eb953c0fbcbc4dc2c6c3",
"assets/images/captures/IMG_1424.jpg": "a6c1a35750bd992acfccd37a6b580abc",
"assets/images/captures/IMG_1425.jpg": "6b0a5582add3384504d96a8a58ad61c8",
"assets/images/captures/IMG_1431.jpg": "5fc59f191c0675629783c6267cc70a6b",
"assets/images/captures/IMG_1432.jpg": "95b61c0e77d7aa391dece9fa8fba9082",
"assets/images/captures/IMG_1433.jpg": "6e56628111bfe1ede047bb32e632717e",
"assets/images/captures/IMG_1434.jpg": "e3ea9bc2308406938d8acf87d096956b",
"assets/images/captures/IMG_1438.jpg": "db8f17f1ecc46fada2ecd3dd9b7452ab",
"assets/images/captures/IMG_1440.jpg": "c62aa84ffa7b6c9f18ab3119f9e2ee48",
"assets/images/captures/IMG_1441.jpg": "20205ebb68ed9bec20911d23a9af1256",
"assets/images/captures/IMG_1443.jpg": "ef2bd7b61c24400dbd87d8977358e54e",
"assets/images/captures/IMG_1445.jpg": "4459cf930eef53488d264b4eb02bf9a3",
"assets/images/captures/IMG_1446.jpg": "64ffff323b404b45985264be4d404ea8",
"assets/images/captures/IMG_1449.jpg": "95448e91fef46804c0193b0fe59f9e07",
"assets/images/captures/IMG_1451.jpg": "bd92ac5d2a1a1e16adc0e328556d30a0",
"assets/images/captures/IMG_1452.jpg": "30ee61c1d711282256db5152f045b708",
"assets/images/captures/IMG_1453.jpg": "e043edbb1a4a02896e85b92432447738",
"assets/images/captures/IMG_1456.jpg": "b089947f667b266ed2411cbc6d601335",
"assets/images/captures/IMG_1457.jpg": "edbbc6a3121a5b9c8fcdf6c2c064a8ce",
"assets/images/captures/IMG_1459.jpg": "286b54db2649073c78a1b98a8248d5cd",
"assets/images/captures/IMG_1461.jpg": "b173e5075c9ea8ec2f4dd49dc09fe0f3",
"assets/images/captures/IMG_1463.jpg": "dc2f69334450d7be2b6042fb9e56bf81",
"assets/images/captures/IMG_1464.jpg": "0a7fb93569e2367fb899542a8a9fb3eb",
"assets/images/captures/IMG_1468.jpg": "e5b07ac6efc65065d0457150400cbd36",
"assets/images/captures/IMG_1472.jpg": "31d356591b92db4fd06295f0e244ec25",
"assets/images/captures/IMG_1473.jpg": "2603633baa8b7fce895db42c3987cd2d",
"assets/images/captures/IMG_1475.jpg": "754639f896ce76867085d44ff243c5e1",
"assets/images/captures/IMG_1476.jpg": "7a1178c5eb22566f2b205a963d4c9af1",
"assets/images/captures/IMG_1479.jpg": "3335dc3f46db0004cb73a339dea286e3",
"assets/images/captures/IMG_1480.jpg": "76952b87f51b6846192ab135de0a4d9a",
"assets/images/captures/IMG_1481.jpg": "b3c0774e141c2feeca95888067d6f9a2",
"assets/images/captures/IMG_1484.jpg": "5f53461af1883b5fbb662046f3c7a625",
"assets/images/captures/IMG_1486.jpg": "18942ea8bd6ccae86cb35b79a811efc1",
"assets/images/captures/IMG_1487.jpg": "b84e920c1c674de12a872ca1cff1579a",
"assets/images/captures/IMG_1489.jpg": "5b90d3b6e3b9819e338ef468a619f49c",
"assets/images/captures/IMG_1491.jpg": "2530c3dde63b656b213124d460905d16",
"assets/images/captures/IMG_1492.jpg": "94441ccef8b091f201f7108c2fdaef14",
"assets/images/captures/IMG_1493.jpg": "86c7e953b23b4696c21732ee210a1a90",
"assets/images/captures/IMG_1495.jpg": "5b2487aadd7d897005a5c77cc3d3c657",
"assets/images/captures/IMG_1497.jpg": "faadefe3ce50d8f39048e977313bf253",
"assets/images/captures/Snapchat-82923644.jpg": "2c7dd366dc5c7695ca86949afb8859c7",
"assets/images/captures/VideoCapture_20230724-132415.jpg": "a299f7945adfe7930b9b42f54e745047",
"assets/images/dennis.jpg": "28492660fce040500743a7d024b89717",
"assets/images/hamida.jpg": "36d85c074e6cdad5b94f6a58eb727e6d",
"assets/images/jedidiah.jpg": "0ad6bf46ecd068f9811218beb13bd99e",
"assets/images/logo1black.png": "1c62d2cf338afc44a4d5bb74669bcd64",
"assets/images/logo1blacktrans.png": "c76ab3105a5f5a307aee4e5ae8380af6",
"assets/images/logo1white.png": "334468f0b8b774db3ff4019e8e6a9ef6",
"assets/images/logo2black.png": "40cff07400bad8e9cc34d2b0306993c8",
"assets/images/logo2blacktrans.png": "81ed0ebd0c254421f927c39ab946befa",
"assets/images/logo2white.png": "b43359bdc0b3fc3adc64b74230337ab6",
"assets/images/logo2whitetrans.png": "27e391cd418915330c187f3b73d6affe",
"assets/images/logo2_trans.png": "27e391cd418915330c187f3b73d6affe",
"assets/images/logonone.png": "572ff6ea81fc46ab0b4bf3f4e8e48641",
"assets/images/logononetrans.png": "9699b841099ba8022c8b976c87d68fc6",
"assets/images/map.png": "d183289cb667d3854d97e17d83d9e0bd",
"assets/images/name.png": "67b2d257255e34911d596b0bba95d020",
"assets/images/nametrans.png": "a8a0708cc207f0c7e2fe7ea63a01a6e0",
"assets/images/shardow.jpg": "38e60d8e4bafec6b3b0ff3e2f5e197f2",
"assets/NOTICES": "9d7fce3674a895658f3b1d248ee85c60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "11e466431814c9132b02fe08f435508b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "4a68faeb878f4aa45d591ef18dd07532",
"icons/android-chrome-512x512.png": "b536b4a78f5ae277130f5fc48af8d89a",
"icons/apple-touch-icon.png": "fb3e4c21dd1a3a5e6108735e45df444a",
"icons/favicon-16x16.png": "5695366665da146e82f0c35edd0632cb",
"icons/favicon-32x32.png": "904cec53115d5f60bdb3ac955b04881a",
"index.html": "13ec84853d612ebad57508fe5c719adf",
"/": "13ec84853d612ebad57508fe5c719adf",
"main.dart.js": "bca762f10f7c3e78780fda50afdb56cf",
"manifest.json": "69cbac2c80ac8ccba2634a7d512284de",
"version.json": "ed1f2143abf4837182dcf4b48897aee0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
