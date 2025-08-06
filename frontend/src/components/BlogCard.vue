<template>
 <div class="border p-4 rounded shadow hover:shadow-lg transition">
  <h2 class="text-xl font-semibold text-blue-600">{{ title }}</h2>
  <p class="text-gray-600 mt-2">{{ post }}</p>
  <router-link
   :to="`/blogs/${id}`"
   class="text-blue-500 hover:underline mt-4 inline-block"
  >
   Read more →
  </router-link>
 </div>
</template>

<script setup lang="ts">
defineProps<{
 id: number | string;
 title: string;
 post: string;
 username: string;
 date: Date | string;
}>();
</script>
