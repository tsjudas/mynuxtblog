import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _337d73a4 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _1c1d6844 = () => import('../pages/post/_path/_url/index.vue' /* webpackChunkName: "pages/post/_path/_url/index" */).then(m => m.default || m)
const _53354e69 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/mynuxtblog/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _337d73a4,
			name: "about"
		},
		{
			path: "/post/:path?/:url?",
			component: _1c1d6844,
			name: "post-path-url"
		},
		{
			path: "/",
			component: _53354e69,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
