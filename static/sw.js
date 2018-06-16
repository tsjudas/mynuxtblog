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
    "url": "/mynuxtblog/_nuxt/layouts/default.ec4d1232710bccbb528e.js",
    "revision": "ee3c95e6e12d683dba5a168f8a24b730"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.b0af08de9a572f0517cf.js",
    "revision": "7439d0d02bef4a87097c0af9b539c4c4"
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
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.6d66028d95f5b7e89601.js",
    "revision": "816061a740ea7840f636fc247e421e84"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.d7a8f7cdaeb78f58ea98.js",
    "revision": "936468a8ee31b2c94b0e0c87f96092e6"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

