const CACHE_NAME = 'service-worker-test-precache'
const URLS_TO_CACHE = [
  '/static/drug.png',
  '/static/index.css',
  '/static/index.js',
]
self.addEventListener('install', e => {
 // 当确定要访问某些资源时，提前请求并添加到缓存中。
  // 这个模式叫做“预缓存”
  e.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(URLS_TO_CACHE)
  }))
})

self.addEventListener('activate', e => {
  console.log('SW is now activate')
})

self.addEventListener('fetch', e => {
  return e.respondWith(fetch(e.request))
})


// self.addEventListener('fetch', e => {
//   // 缓存中能找到就返回，找不到就网络请求，之后再写入缓存并返回。
//   // 这个称为 CacheFirst 的缓存策略。
//   return e.respondWith(
//     caches.open(CACHE_NAME).then(cache => {
//       return cache.match(e.request).then(matchedResponse => {
//         return matchedResponse || fetch(e.request).then(fetchResponse => {
//           // if(URLS_TO_CACHE.includes(e.request)){
//           cache.put(e.request, fetchResponse.clone())
//           // }
//           return fetchResponse
//         })
//       })
//     })
//   )
// })