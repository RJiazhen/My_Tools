import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SakuraArms',
      name: 'SakuraArms',
      component: () => import('../views/SakuraArms.vue')
    }
  ]
})

export default router
