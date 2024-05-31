<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import axios from 'axios'

const username = ref('loading...')

function loadUser() {
  axios
    .get(`https://api.2nite.ro/api/v2/users/${useAuthStore().userId}`, {
      headers: {
        ContentType: 'application/json',
        Accept: 'application/json'
      }
    })
    .then((user) => (username.value = user.data.data.attributes.username))
}
loadUser()
</script>

<template>
  <main>
    Welcome, {{ username }}!
    <button @click="useAuthStore().logout()">logout</button>
  </main>
</template>
