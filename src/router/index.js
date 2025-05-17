import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => {
    // always scroll to top
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/lancamentos/index.vue'),
      meta: {
        layout: 'content',
      },
      
    },
       {
      path: '/create',
      name: 'create',
      component: () => import('@/views/lancamentos/create.vue'),
      meta: {
        layout: 'content',
      },
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/Blank.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        layout: 'blank',
      },
    },
  ],
})

export default router
