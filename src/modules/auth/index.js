import Dashboard from '@/modules/auth/views/Dashboard.vue';
import Tasks from '@/modules/auth/views/Tasks.vue';
import Settings from '@/modules/auth/views/Settings.vue';

const authRoutes = [
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks',
    name: 'TasksView',
    component: Tasks,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: Settings,
    meta: { requiresAuth: true },
  },
];

export default authRoutes;
