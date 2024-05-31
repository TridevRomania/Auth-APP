import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useLocalStorage('token', ''),
      userId: useLocalStorage('userId', '')
    }
  },

  actions: {
    save(tokenValue, userId) {
      console.log('save', tokenValue, userId)
      this.token = tokenValue
      this.userId = userId
      router.push({ name: 'home' })
    },

    logout() {
      this.token = ''
      this.userId = ''
      router.push({ name: 'login' })
    }
  }
})
