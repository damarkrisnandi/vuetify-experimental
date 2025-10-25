/**
 * router/index.ts
 *
 * Vue Router configuration
 */

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/dialogs',
    name: 'Dialogs',
    component: () => import('@/views/DialogShowcase.vue'),
    meta: {
      title: 'Dialog Showcase'
    }
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('@/views/CardShowcase.vue'),
    meta: {
      title: 'Card Showcase'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Set page title based on route meta
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = `${title} - Vuetify Experimental`
  }
  next()
})

export default router
