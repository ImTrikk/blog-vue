<template>
 <button :type="type" class="h-10 bg-blue-500 text-white rounded-md px-4 cursor-pointer" @click="$emit('click')">
  <slot>{{ label }}</slot>
 </button>
</template>

<script setup lang="ts">
defineProps<{
 type: "button" | "submit" | "reset";
 label?: string;
}>();
</script>
