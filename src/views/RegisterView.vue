<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const username = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

function register() {
  const resquest = {
    username: username.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
    city_id: 'cit_zbW6TXTeJeZhM15xaHb1',
    accepted_terms_and_conditions: true
  }

  axios
    .post('https://api.2nite.ro/api/v2/auth/register', resquest, {
      headers: {
        ContentType: 'application/json',
        Accept: 'application/json'
      }
    })
    .then((user) => useAuthStore().save(user.data.data.attributes.token, user.data.data.id))
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <main
    class="text-center max-w-[366px] h-screen mx-auto flex items-center justify-center flex-col"
  >
    <h1 className="text-3xl font-bold font-slate-800">Register</h1>
    <form
      class="flex flex-col items-center justify-center px-8 mt-6 w-full"
      @submit.prevent="register"
    >
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Maercelica"
        class="border border-gray-400 w-full px-4 py-2 rounded mt-2"
        v-model="username"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="john.doe@emai.com"
        class="border border-gray-400 w-full px-4 py-2 rounded mt-2"
        v-model="email"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="********"
        class="border border-gray-400 w-full px-4 py-2 rounded mt-2"
        v-model="password"
        required
      />
      <input
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        placeholder="********"
        class="border border-gray-400 w-full px-4 py-2 rounded mt-2"
        v-model="password_confirmation"
        required
      />

      <button
        type="submit"
        class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full rounded py-2 mt-4"
      >
        Register
      </button>
    </form>
    <p class="text-gray-400 mt-8">
      Already have an account?
      <RouterLink :to="{ name: 'login' }" class="underline text-slate-800">Login here</RouterLink>
    </p>
  </main>
</template>
