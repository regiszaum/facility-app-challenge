import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: Dashboard,
    },
  ],
})

export default router
