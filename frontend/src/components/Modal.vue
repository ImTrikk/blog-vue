<script setup lang="ts">
import { Teleport } from 'vue';

</script>

<template>
 <Teleport to="body">
  <div class="modal-overlay">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</Teleport>
</template>