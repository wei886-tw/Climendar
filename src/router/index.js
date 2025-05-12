import { createRouter, createWebHashHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import HomeView from '@/views/HomeView.vue';
import CalendarView from '@/views/CalendarView.vue';
import SignInView from '@/views/SignInView.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
  ],
});

export default router;
