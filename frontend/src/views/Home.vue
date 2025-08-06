<template>
 <main class="min-h-screen flex items-center justify-center bg-violet-50">
  <div class="text-center max-w-2xl mx-auto px-6">
   <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to MinBlogs</h1>
   <p class="text-lg text-gray-600 mb-2">Welcome to the home page!</p>
   <p class="text-gray-500">
    This is where you can find the latest updates and news.
   </p>

   <!-- Optional: Add call-to-action buttons -->
   <div class="mt-8 space-x-4">
    <router-link
     to="/blogs"
     class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
     View Blogs
    </router-link>
    <router-link
     to="/register"
     class="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
    >
     Get Started
    </router-link>
   </div>
  </div>
 </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 name: "Home",
 // Remove path property - it doesn't belong here
});
</script>
