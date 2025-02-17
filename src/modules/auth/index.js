import Index from '@/modules/auth/Index.vue';
import Dashboard from '@/modules/auth/views/Dashboard.vue';
import Tasks from '@/modules/auth/views/Tasks.vue';
import Settings from '@/modules/auth/views/Settings.vue';

const authRoutes = [
  {
    path: '/account',
    component: Index,
    name: 'account',
    meta: { requiresAuth: true },
    redirect: 'account/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'DashboardView',
        component: Dashboard,
      },
      {
        path: 'tasks',
        name: 'TasksView',
        component: Tasks,
      },
      {
        path: 'settings',
        name: 'SettingsView',
        component: Settings,
      },
    ],
  },
];

export default authRoutes;