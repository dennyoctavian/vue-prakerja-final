import { createRouter, createWebHistory } from 'vue-router'
import NowShowingView from '../views/NowShowingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NowShowingView
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UpcomingView.vue')
    },
    {
      path: '/popular',
      name: 'popular',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PopularView.vue')
    },
    {
      path: '/top-rated',
      name: 'top-rated',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TopRatedView.vue')
    }
  ]
})

export default router
