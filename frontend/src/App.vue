<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
 <div class="min-h-screen">
  <Navbar />
  <!-- Page Content -->
  <router-view class="pt-10"/>
 </div>
</template>
