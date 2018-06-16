importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.3e9a749b2d32fff1cec2.js",
    "revision": "361a919475bb19784440a80c641e8d53"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.ec4d1232710bccbb528e.js",
    "revision": "ee3c95e6e12d683dba5a168f8a24b730"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.753138b1b8607a560634.js",
    "revision": "83821919e43b2c7094242800602545e8"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/about.599d7a0d387718f45d35.js",
    "revision": "1ff91234ad6c3b045e8e69ddac6d83a1"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/index.b9c9051a80ea5b90547a.js",
    "revision": "52a67edd2ab42dbec0d630d39a4e7e25"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.0d0738beb96f52d70c9c.js",
    "revision": "3d1f828aa9679b58ac67e1be988b1eab"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.d7a8f7cdaeb78f58ea98.js",
    "revision": "936468a8ee31b2c94b0e0c87f96092e6"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

