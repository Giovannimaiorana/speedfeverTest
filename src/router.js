import { createRouter, createWebHistory } from 'vue-router';
import AppPrivacy from './pages/privacyPolicyPage.vue';

import App from './App.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/privacy',
        name: 'sectionPrivacy',
        component: AppPrivacy,
    },
    {
        path: '/',
        name: 'Home',
        component: App,
      }

  ],
});


export default router;