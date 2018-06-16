importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.6e1189416006501fef25.js",
    "revision": "fc59d304a8beb9c502d32b59bb1eac8b"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.ec4d1232710bccbb528e.js",
    "revision": "ee3c95e6e12d683dba5a168f8a24b730"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.579e62b8830dd70e0ba5.js",
    "revision": "3c6ab09bfc6a119cf3cacf09ee0f6cdb"
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
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.085cdd69b786653f1011.js",
    "revision": "b49525414f3a8de9591ae725283b0130"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.d7a8f7cdaeb78f58ea98.js",
    "revision": "936468a8ee31b2c94b0e0c87f96092e6"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

