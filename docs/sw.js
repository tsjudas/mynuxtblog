importScripts('/mynuxtblog/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-example",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/mynuxtblog/_nuxt/app.a6f9dbe8322279443c2b.js",
    "revision": "89843e2d1b8ede7a8bb102091ac20f29"
  },
  {
    "url": "/mynuxtblog/_nuxt/layouts/default.875831cad1e3b7b9574b.js",
    "revision": "460ddb4faca7be004de720413c0571cb"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.1712eabb992aae5d1eac.js",
    "revision": "b080c6625ab06c67b41243b5c5396103"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/about.956bbc672b93459588e1.js",
    "revision": "757643924b4dc633e3e7fd609e6a18e8"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/index.ef093355828705e491e6.js",
    "revision": "62c0e88a61ad91f42fd95aa156ac6c07"
  },
  {
    "url": "/mynuxtblog/_nuxt/pages/post/_path/_url/index.7cdd7d9b67fc8c0aa4fe.js",
    "revision": "e60cd3940feb52b08a9ebd2d7a323c69"
  },
  {
    "url": "/mynuxtblog/_nuxt/vendor.17ea40b8fcba55ad1fce.js",
    "revision": "8ca383ddc2a0fd9b2ea49cde916e8e7c"
  }
])


workboxSW.router.registerRoute(new RegExp('/mynuxtblog/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/mynuxtblog/.*'), workboxSW.strategies.networkFirst({}), 'GET')

