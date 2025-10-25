<template>
  <div class="dialog-container">
    <v-dialog
      v-for="[id, dialog] in dialogs"
      :key="id"
      v-model="dialog.visible"
      :width="dialog.config.width"
      :max-width="dialog.config.maxWidth"
      :persistent="dialog.config.persistent"
      :scrollable="dialog.config.scrollable"
      :fullscreen="dialog.config.fullscreen"
      :transition="dialog.config.transition || 'dialog-bottom-transition'"
      :class="dialog.config.class"
      :style="dialog.config.style"
      :z-index="dialog.config.zIndex"
    >
      <v-card class="dialog-card-animate">
        <v-card-title
          v-if="dialog.config.showHeader !== false"
          class="d-flex align-center justify-space-between"
        >
          <span>{{ dialog.config.title }}</span>
          <v-btn
            v-if="dialog.config.showCloseButton !== false"
            icon="mdi-close"
            variant="text"
            size="small"
            @click="dialog.dialogRef.close()"
          />
        </v-card-title>

        <v-divider v-if="dialog.config.showHeader !== false" />

        <v-card-text :class="{ 'pa-0': dialog.config.scrollable }">
          <component
            :is="dialog.component"
            v-bind="dialog.props"
            :dialog-ref="dialog.dialogRef"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { dialogService } from '@/services/dialog.service'
import { computed } from 'vue'

const dialogs = computed(() => dialogService.getDialogs())
</script>

<style scoped>
.dialog-container {
  /* Container for all dynamic dialogs */
}

/* Smooth card entrance animation */
.dialog-card-animate {
  animation: cardEnter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes cardEnter {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced backdrop blur effect */
:deep(.v-overlay__scrim) {
  backdrop-filter: blur(2px);
  transition: backdrop-filter 0.3s ease;
}
</style>
