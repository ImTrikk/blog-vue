<template>
 <header class="bg-white shadow-sm py-2 px-6 lg:px-40">
  <div class="flex justify-between items-center">
   <!-- Logo/Brand -->
   <h1 class="text-xl font-bold text-blue-600">MinBlogs</h1>

   <!-- Main Navigation -->
   <nav class="flex gap-6 text-blue-600 font-medium">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blogs">Blogs</router-link>
    <router-link to="/confessions">Confessions</router-link>
   </nav>

   <!-- Auth Links -->
   <div class="flex items-center gap-4 text-sm text-gray-600">
    <router-link
     to="/login"
     class="hover:underline h-10 bg-blue-500 rounded-md text-white flex items-center px-4"
     >Login</router-link
    >
    <router-link to="/register">Register</router-link>
   </div>
  </div>
 </header>
</template>
