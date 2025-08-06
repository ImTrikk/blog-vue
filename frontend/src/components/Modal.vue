<script setup lang="ts">
import { Teleport } from "vue";

defineProps<{
 isOpen: boolean;
 onClose: () => void;
 onConfirm?: () => void; // Optional confirm action
 content?: string;
 label: string;
 showConfirmButton?: boolean;
 confirmLabel?: string;
 showCloseButton?: boolean;
}>();
</script>

<template>
 <Teleport to="body">
  <div
   v-if="isOpen"
   class="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
   @click="onClose"
  >
   <div
    class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
    @click.stop
   >
    <h2 class="text-xl font-bold mb-4">{{ label }}</h2>
    <slot>
     <p>{{ content }}</p>
    </slot>
   </div>
  </div>
 </Teleport>
</template>
