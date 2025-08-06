<template>
 <header class="py-2 px-6 lg:px-40">
  <div class="flex justify-between items-center">
   <!-- Logo/Brand -->
   <router-link to="/" class="text-xl font-bold text-blue-600"
    >MinBlogs</router-link
   >

   <!-- Main Navigation -->
   <nav class="flex gap-6 text-blue-600 font-medium">
    <router-link to="/" class="text-sm font-light">Home</router-link>
    <router-link to="/about" class="text-sm font-light">About</router-link>
    <router-link to="/blogs" class="text-sm font-light">Blogs</router-link>
    <router-link to="/confessions" class="text-sm font-light"
     >Confessions</router-link
    >
   </nav>

   <!-- Auth Links -->
   <div class="flex items-center gap-4 text-sm text-gray-600">
    <router-link
     to="/login"
     class="hover:underline h-8 bg-blue-500 rounded-md text-white flex items-center px-4 text-xs font-medium"
     >Login</router-link
    >
    <router-link to="/register" class="text-xs font-medium">Register</router-link>
   </div>
  </div>
 </header>
</template>
