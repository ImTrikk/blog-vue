<!-- pages/Login.vue -->
<template>
 <div class="min-h-screen flex items-center justify-center bg-violet-50 px-4">
  <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
   <h2 class="text-2xl font-bold mb-4 text-center">Login to MinBlogs</h2>

   <form @submit.prevent="handleLogin" class="space-y-4">
    <input
     v-model="email"
     type="email"
     placeholder="Email"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     required
    />

    <input
     v-model="password"
     type="password"
     placeholder="Password"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     required
    />

    <button
     type="submit"
     class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
     Login
    </button>
   </form>

   <p class="text-center mt-4 text-gray-600">
    Don't have an account yet?
    <router-link to="/register" class="text-blue-600 hover:underline">
     Register here
    </router-link>
   </p>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
 console.log("Logging in with", email.value, password.value);
 // You can replace this with real login logic
};
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 name: "Login",
});
</script>
