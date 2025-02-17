import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/user'; // Importando o Vuex store
import publicRoutes from '@/modules/public/index';
import authRoutes from '@/modules/auth/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...authRoutes],
});

// Guarda de navegação
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.authenticated; // Verifica se o usuário está autenticado

  if (isAuthenticated && to.meta.requiresAuth === false) {
    next({ name: 'DashboardView' }); // Redireciona para o dashboard se já estiver logado
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LoginView' }); // Redireciona para login se não estiver autenticado
  } else {
    next();
  }
});

export default router;
