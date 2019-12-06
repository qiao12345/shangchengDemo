import Vue from 'vue'
import VueRouter from 'vue-router'
import Qhome from '../views/Qhome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/qhome'
  },
  {
    path: '/qhome',
    name: 'qhome',
    component: Qhome
  },
  {
    path: '/qcontact',
    name: 'qcontact',
    // route level code-splitting
    // this generates a separate chunk (qcontact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "qcontact" */ '../views/Qcontact.vue')
  },
  {
    path: '/qcart',
    name: 'qcart',
    component: () => import(/* webpackChunkName: "qcart" */ '../views/Qcart.vue')
  },
  {
    path: '/qsearch',
    name: 'qsearch',
    component: () => import(/* webpackChunkName: "qsearch" */ '../views/Qsearch.vue')
  },
  {
    path: '/qhome/newslist',
    component: () => import(/* webpackChunkName: "newslist" */ '../components/NewsList.vue')
  },
  {
    path: '/qhome/newlistinfo/:id',
    component: () => import(/* webpackChunkName: "newlistinfo" */ '../components/NewsListInfo.vue')
  },
  {
    path: '/qhome/photolist',
    component: () => import(/* webpackChunkName: "photolist" */ '../components/PhotoList.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active'
})

export default router
