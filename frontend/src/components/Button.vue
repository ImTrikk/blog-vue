<script setup lang="ts">
defineProps<{
 label?: string;
 type?: 'button' | 'submit' | 'reset';
}>();

defineEmits<{
 click: [];
}>();
</script>

<template>
 <button 
  :type="type || 'button'"
  @click="$emit('click')"
  class="text-xs h-8 px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
 >
  <slot>{{ label }}</slot>
 </button>
</template>