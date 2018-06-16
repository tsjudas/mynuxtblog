importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.9ca80b3dee7b28643540.js",
    "revision": "b993a1aca1180e82e8087fc157d9ee90"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.e8a516d56831660dd6e4.js",
    "revision": "c55d3018fca022804f0ec6193e9432d8"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.ea9ca9944f6780fea9a2.js",
    "revision": "8c0b20d8fd8682d66bacf6bde3ec47d7"
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
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.f3c3c2a64850ac36e59f.js",
    "revision": "149ed2b785d0758a7e8f4bb36cf87253"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.17ea40b8fcba55ad1fce.js",
    "revision": "8ca383ddc2a0fd9b2ea49cde916e8e7c"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

