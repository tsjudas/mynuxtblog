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
    "url": "/mynuxtblog/_nuxt/layouts/default.df2e9f294d5e39f8ccb3.js",
    "revision": "18144271de8ee3c1051ec845e03474ac"
  },
  {
    "url": "/mynuxtblog/_nuxt/manifest.27313f9775a3c6af42a1.js",
    "revision": "e505ac7d968dcd9263313b5906df7816"
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

