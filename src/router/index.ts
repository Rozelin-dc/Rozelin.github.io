import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '/@/views/Home/index.vue')
  },
  {
    path: '/programming',
    name: 'Programming',
    component: () =>
      import(
        /* webpackChunkName: "programming" */ '/@/views/Programming/index.vue'
      )
  },
  {
    path: '/career',
    name: 'Career',
    component: () =>
      import(/* webpackChunkName: "career" */ '/@/views/Career/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
