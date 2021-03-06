const { sourceFileArray } = require('./content/json/summary.json');

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    const matched = sourceFileName.match(new RegExp("(.+)/([^/]+).md"));
    const path = matched[1].replace(new RegExp("/", "g"), "_");
    const fileName = matched[2];
    
    return "/post/" + path + "/" + fileName;
  });
  callback(null, routes);
};

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/mynuxtblog/',
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
} : {
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
};

module.exports = {
  mode: 'spa',
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-120957035-1'
    }]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Useless-exercise-book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Tech Blog using Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mynuxtblog/favicon.ico' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' }
    ],
  },
  css: [
    'material-design-lite/material.min.css',
    'typicons.font/src/font/typicons.css',
    'markdown-it-highlight/dist/index.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  generate: {
    routes: generateDynamicRoutes,
  },
  build: {
    /*
    ** Run ESLint on save
    */
  extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [ 'material-design-lite/material.min.js' ]
  },
  router: routerBase,
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://tsjudas.github.io/mynuxtblog/',
    generate: true,
    exclude: ['/404'],
    routes: generateDynamicRoutes
  },
  workbox: {
    dev: true, //開発環境でもPWAできるように
  }
};
