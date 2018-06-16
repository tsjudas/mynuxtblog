importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.634dec1f16f25b12c984.js",
    "revision": "9edbb9fd375d0743f071796730adb7a3"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.fd89d35a3708b95c1a31.js",
    "revision": "90a541042e2d0de6d6e995cad1681271"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.521710dd6a3f7edce342.js",
    "revision": "f08c5027d4a2cce61d1e363a5d5b0ffe"
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
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.cdf5fe18831fd3de6e57.js",
    "revision": "78357813087880e12e52e5abb095dbc5"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.d7a8f7cdaeb78f58ea98.js",
    "revision": "936468a8ee31b2c94b0e0c87f96092e6"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

