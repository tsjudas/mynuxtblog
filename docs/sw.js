importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.2b9a979b179f300f43e9.js",
    "revision": "3a8e5f3d0539ee877a4af0f14c2f9475"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.e8a516d56831660dd6e4.js",
    "revision": "c55d3018fca022804f0ec6193e9432d8"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.b9c6bfd418f59d041cb5.js",
    "revision": "b2b6a75233385ea1e3e60be0ad26e466"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/about.599d7a0d387718f45d35.js",
    "revision": "1ff91234ad6c3b045e8e69ddac6d83a1"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/index.f0f848040debf7e721b6.js",
    "revision": "47866b9982af2082f4cff8b1f0f623e3"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.4ac02ddd3770a8f6b495.js",
    "revision": "80c25e85ead88cfc2ad3afef5b885208"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.d7a8f7cdaeb78f58ea98.js",
    "revision": "936468a8ee31b2c94b0e0c87f96092e6"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

