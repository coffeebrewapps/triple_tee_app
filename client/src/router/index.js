import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import useConfig from '@/config';

const config = useConfig();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      beforeEnter() { location.href = config.demoUrl },
      component: () => import('../views/RedirectView.vue'),
    },
  ],
});

export default router;
