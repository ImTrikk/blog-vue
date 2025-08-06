<script setup lang="ts">
defineProps<{
 label?: string;
 type?: "button" | "submit" | "reset";
}>();

defineEmits<{
 click: [];
}>();
</script>

<template>
 <button
  :type="type || 'button'"
  @click="$emit('click')"
  class="text-xs h-12 w-12 flex items-center justify-center px-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
 >
  <slot>{{ label }}</slot>
 </button>
</template>
