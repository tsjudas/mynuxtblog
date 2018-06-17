importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.738a4e7a9ff052f7ce71.js",
    "revision": "5acd01ada387dc4a67f67ce3b1f961e3"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.e8a516d56831660dd6e4.js",
    "revision": "c55d3018fca022804f0ec6193e9432d8"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.e6e86e6d00893325f640.js",
    "revision": "88fb17608c807cb1344cdb96763d49b4"
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
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.e86c581b68b2e20808af.js",
    "revision": "331ed561fdb9ca873dfe0511fba177c5"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.17ea40b8fcba55ad1fce.js",
    "revision": "8ca383ddc2a0fd9b2ea49cde916e8e7c"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

