/**
 * router/index.ts
 *
 * Vue Router configuration
 */

import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

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
  },
  {
    path: '/two-row-tabs',
    name: 'TwoRowTabs',
    component: () => import('@/views/TwoRowTabsShowcase.vue'),
    meta: {
      title: 'Two Row Tabs'
    }
  },
  {
    path: '/reverse-layout',
    name: 'ReverseLayout',
    component: () => import('@/views/ReverseLayoutShowcase.vue'),
    meta: {
      title: 'Reverse Layout'
    }
  },
  {
    path: '/data-table',
    name: 'DataTable',
    component: () => import('@/views/DataTableShowcase.vue'),
    meta: {
      title: 'Data Table'
    }
  },
  {
    path: '/font-size',
    name: 'FontSize',
    component: () => import('@/views/FontSizeShowcase.vue'),
    meta: {
      title: 'Global Font Size'
    }
  },
  {
    path: '/scrollable-chips',
    name: 'ScrollableChips',
    component: () => import('@/views/ScrollableChipsShowcase.vue'),
    meta: {
      title: 'Scrollable Chips'
    }
  },
  {
    path: '/profile-table',
    name: 'ProfileTable',
    component: () => import('@/views/ProfileTableShowcase.vue'),
    meta: {
      title: 'Responsive Profile Table'
    }
  },
  {
    path: '/tabs-scrollable',
    name: 'TabsScrollable',
    component: () => import('@/views/TabsScrollableShowcase.vue'),
    meta: {
      title: 'Tabs with Scrollable Tables'
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
