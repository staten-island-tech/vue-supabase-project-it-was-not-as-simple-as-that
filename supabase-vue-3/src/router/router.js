import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CharacterIndex.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/ModalTest.vue')
    },
    {
      path: '/gacha',
      name: 'gacha',
      component: () => import('../views/GachaPull.vue')
    },
]
})

export default router
