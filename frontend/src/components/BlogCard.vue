<template>
 <article
  class=" bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
 >
  <!-- Card Header -->
  <div class="p-6">
   <div class="flex items-start justify-between mb-4">
    <h2
     class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer line-clamp-2"
    >
     {{ title }}
    </h2>
    <div class="flex space-x-2 ml-4">
     <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors">
      <EyeIcon class="w-4 h-4" />
     </button>
     <button class="p-2 text-gray-400 hover:text-green-600 transition-colors">
      <PencilIcon class="w-4 h-4" />
     </button>
     <button class="p-2 text-gray-400 hover:text-red-600 transition-colors">
      <TrashIcon class="w-4 h-4" />
     </button>
    </div>
   </div>

   <!-- Post Content -->
   <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
    {{ post }}
   </p>

   <!-- Card Footer -->
   <div class="flex items-center justify-between pt-4 border-t border-gray-100">
    <div class="flex items-center space-x-3">
     <!-- Avatar -->
     <div
      class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
     >
      <span class="text-white text-sm font-medium">
       {{ getInitials(username) }}
      </span>
     </div>
     <!-- Author Info -->
     <div>
      <p class="text-sm font-medium text-gray-900">{{ username }}</p>
      <p class="text-xs text-gray-500">{{ formatDate(date) }}</p>
     </div>
    </div>

    <!-- Read More Button -->
    <button
     class="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
    >
     Read More
    </button>
   </div>
  </div>
 </article>
</template>

<script setup lang="ts">
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";

defineProps<{
 id: number | string;
 title: string;
 post: string;
 username: string;
 date: Date | string;
}>();

// Helper function to get user initials
const getInitials = (name: string): string => {
 return name
  .split("_")
  .map((word) => word.charAt(0).toUpperCase())
  .join("")
  .slice(0, 2);
};

// Helper function to format date
const formatDate = (date: Date | string): string => {
 const dateObj = typeof date === "string" ? new Date(date) : date;
 return dateObj.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
 });
};
</script>

<style scoped>
.line-clamp-2 {
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 overflow: hidden;
}

.line-clamp-3 {
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
 overflow: hidden;
}
</style>
