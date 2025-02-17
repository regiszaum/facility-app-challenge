import Login from '@/modules/public/views/Login.vue';
import ForgotPassword from '@/modules/public/views/ForgotPassword.vue';
import ErrorView from '@/modules/public/views/Error.vue';

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
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: ErrorView,
  },
];

export default publicRoutes;