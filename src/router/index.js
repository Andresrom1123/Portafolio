import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  {
    path: '/:slug/:name',
    name: 'Page',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/Page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
