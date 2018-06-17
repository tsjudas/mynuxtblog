importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.b9129f583ec8549ab299.js",
    "revision": "3f9b0fc783296c02d3813129c76cf146"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.e8a516d56831660dd6e4.js",
    "revision": "c55d3018fca022804f0ec6193e9432d8"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.fa980256700bb6d5b764.js",
    "revision": "9677101a53aae3f22828e0122ee0598c"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/about.6dad60d97d1fd6294ea7.js",
    "revision": "cb3243c7661d794a6acc1a1ed7dd3bdb"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/index.f0f848040debf7e721b6.js",
    "revision": "47866b9982af2082f4cff8b1f0f623e3"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.429963acde8a0d96b405.js",
    "revision": "4b1a1cf557d169a6e50747e9fb890324"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.17ea40b8fcba55ad1fce.js",
    "revision": "8ca383ddc2a0fd9b2ea49cde916e8e7c"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

