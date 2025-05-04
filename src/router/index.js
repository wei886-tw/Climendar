import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeViewView from '../views/WelcomeView.vue'
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcomeView',
      component: WelcomeViewView,
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView,
    },
  ],
})

export default router
