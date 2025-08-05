<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
 <div>
  <Navbar />
  <!-- Page Content -->
  <main class="px-6 lg:px-40 py-8">
   <router-view />
  </main>
 </div>
</template>
