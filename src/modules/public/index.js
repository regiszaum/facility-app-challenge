import Login from '@/modules/public/views/Login.vue';
import ForgotPassword from '@/modules/public/views/ForgotPassword.vue';

const publicRoutes = [
  {
    path: '/',
    name: 'LoginView',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPasswordView',
    component: ForgotPassword,
    meta: { requiresAuth: false },
  },
];

export default publicRoutes;