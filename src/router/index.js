import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const auth = useAuthStore()

  if (auth.token === '' && !(to.name === 'login' || to.name === 'register'))
    return { name: 'login' }
  if (auth.token !== '' && to.name === 'login') return { name: from.name }
})

export default router
