import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About/index.vue'),
  },
  {
    path: '/programming',
    name: 'Programming',
    component: () =>
      import(
        /* webpackChunkName: "programming" */ '@/views/Programming/index.vue'
      ),
  },
  {
    path: '/musics',
    name: 'Musics',
    component: () =>
      import(/* webpackChunkName: "music" */ '@/views/Musics/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
