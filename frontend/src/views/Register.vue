<template>
 <div class="max-w-md mx-auto">
  <h2 class="text-2xl font-bold mb-4">Create Your Account</h2>

  <form @submit.prevent="handleRegister" class="space-y-4">
   <div>
    <input
     v-model="username"
     type="text"
     placeholder="User Name"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     required
    />
   </div>

   <div>
    <input
     v-model="email"
     type="email"
     placeholder="Email"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     required
    />
   </div>

   <div>
    <input
     v-model="password"
     type="password"
     placeholder="Password"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     required
     minlength="8"
    />
   </div>

   <div>
    <input
     v-model="confirmPassword"
     type="password"
     placeholder="Confirm Password"
     class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
     :class="{
      'border-red-500': password !== confirmPassword && confirmPassword !== '',
     }"
     required
    />
    <p
     v-if="password !== confirmPassword && confirmPassword !== ''"
     class="text-red-500 text-sm mt-1"
    >
     Passwords do not match
    </p>
   </div>

   <button
    type="submit"
    :disabled="!isFormValid"
    class="w-full py-2 rounded font-medium transition-colors"
    :class="
     isFormValid
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
    "
   >
    Create Account
   </button>
  </form>

  <p class="text-center mt-4 text-gray-600">
   Already have an account?
   <router-link to="/login" class="text-blue-600 hover:underline">
    Sign in here
   </router-link>
  </p>
 </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isFormValid = computed(() => {
 return (
  username.value.trim() !== "" &&
  email.value.trim() !== "" &&
  password.value.length >= 8 &&
  password.value === confirmPassword.value
 );
});

const handleRegister = () => {
 if (!isFormValid.value) {
  alert("Please fill in all fields correctly");
  return;
 }

 console.log("Registering user with:", {
  username: username.value,
  email: email.value,
  password: password.value,
 });

 // You can replace this with real registration logic
 alert("Registration successful! (This is just a demo)");
};
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 name: "Register",
});
</script>
