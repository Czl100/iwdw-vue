import Vue from 'vue'
import Router from 'vue-router'
import HomeText from "@/components/pages/HomeText";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeText
    },
    {
      path: '/committee',
      name: 'committee',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/pages/Committee')
    }
  ]
})
