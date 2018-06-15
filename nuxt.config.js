const { sourceFileArray } = require('./content/json/summary.json');

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    // "content/posts/game/2018-06-15-about-me.md",
    // "content/posts/poem/2018-06-15-about-me.md"
    const matched = sourceFileName.match(new RegExp("(.+)/([^/]+).md"));
    const path = matched[1].replace(new RegExp("/", "g"), "_");
    const fileName = matched[2];
    
    return "/post/" + path + "/" + fileName;
  });
  callback(null, routes);
};
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
    }
  },
  router: {
    base: '/mynuxtblog/'
  }
}
