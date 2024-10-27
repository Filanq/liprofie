import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profession/:professionId',
      name: 'profession',
      component: () => import('@/views/ProfessionView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminView.vue')
    },
  ]
})

export default router
