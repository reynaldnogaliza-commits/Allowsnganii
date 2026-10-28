const C='allowtrack-v1',A=['./','index.html','manifest.json','icon.svg','vendor/tesseract.min.js','vendor/worker.min.js','vendor/tesseract-core-lstm.wasm.js','vendor/tesseract-core-simd-lstm.wasm.js','vendor/eng.traineddata.gz'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
