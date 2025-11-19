<template>
  <div class="scrollable-chips-showcase">
    <ScrollableChips />
  </div>
</template>

<script setup lang="ts">
import ScrollableChips from '../components/ScrollableChips.vue'
</script>

<style scoped>
.scrollable-chips-showcase {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
}
</style>
