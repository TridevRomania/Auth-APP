<script setup></script>

<template>
  <main
    class="text-center max-w-[366px] h-screen mx-auto flex items-center justify-center flex-col"
  >
    <h1 className="text-3xl font-bold font-slate-800">Log in</h1>
    <form class="flex flex-col items-center justify-center px-8 mt-6 w-full">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="john.doe@emai.com"
        class="border border-gray-400 w-full px-4 py-2 rounded"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="********"
        class="border border-gray-400 w-full px-4 py-2 rounded mt-2"
        required
      />
      <p class="underline text-end w-full font-bold tracking-wide text-xs mt-2">Forgot password?</p>
      <button
        type="submit"
        class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full rounded py-2 mt-4"
      >
        Log in
      </button>
    </form>
    <p class="text-gray-400 mt-8">
      Don't have an account?
      <RouterLink :to="{ name: 'register' }" class="underline text-slate-800">Sign up</RouterLink>
      for free
    </p>
  </main>
</template>
