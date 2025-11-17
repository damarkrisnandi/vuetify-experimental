<template>
  <v-app>
    <!-- App Header -->
    <AppHeader @toggle-drawer="toggleDrawer" />

    <!-- Collapsible Sidebar Navigation -->
    <AppNavigation ref="navigationRef" />

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Dialog Container - Required for DialogService -->
    <DialogContainer />
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import DialogContainer from '@/components/DialogContainer.vue'
import { ref, onMounted } from 'vue'
import { useGlobalFontSize } from '@/composables/useGlobalFontSize'

const navigationRef = ref()
const { initGlobalFontSize } = useGlobalFontSize()

const toggleDrawer = () => {
  // Toggle drawer through the navigation component
  if (navigationRef.value) {
    navigationRef.value.toggleDrawer()
  }
}

// Initialize global font size system
onMounted(() => {
  initGlobalFontSize()
})
</script>

<style>
/* Global font size system CSS */
:root {
  --global-font-size-base: 1rem;
  --global-font-size-xs: 0.75rem;
  --global-font-size-sm: 0.875rem;
  --global-font-size-md: 1rem;
  --global-font-size-lg: 1.125rem;
  --global-font-size-xl: 1.25rem;
  --global-font-size-h1: 2rem;
  --global-font-size-h2: 1.75rem;
  --global-font-size-h3: 1.5rem;
  --global-font-size-h4: 1.25rem;
  --global-font-size-h5: 1.125rem;
  --global-font-size-h6: 1rem;
  --global-font-size-caption: 0.75rem;
  --global-font-size-button: 0.875rem;
  --global-spacing-scale: 1;
  --global-line-height: 1.4;
}

/* Apply global font size to common elements */
body.font-size-xs {
  font-size: var(--global-font-size-xs);
  line-height: var(--global-line-height);
}

body.font-size-sm {
  font-size: var(--global-font-size-sm);
  line-height: var(--global-line-height);
}

body.font-size-md {
  font-size: var(--global-font-size-base);
  line-height: var(--global-line-height);
}

body.font-size-lg {
  font-size: var(--global-font-size-lg);
  line-height: var(--global-line-height);
}

body.font-size-xl {
  font-size: var(--global-font-size-xl);
  line-height: var(--global-line-height);
}

/* Typography scaling */
body.font-size-xs h1, body.font-size-sm h1, body.font-size-md h1, body.font-size-lg h1, body.font-size-xl h1 {
  font-size: var(--global-font-size-h1) !important;
}

body.font-size-xs h2, body.font-size-sm h2, body.font-size-md h2, body.font-size-lg h2, body.font-size-xl h2 {
  font-size: var(--global-font-size-h2) !important;
}

body.font-size-xs h3, body.font-size-sm h3, body.font-size-md h3, body.font-size-lg h3, body.font-size-xl h3 {
  font-size: var(--global-font-size-h3) !important;
}

body.font-size-xs h4, body.font-size-sm h4, body.font-size-md h4, body.font-size-lg h4, body.font-size-xl h4 {
  font-size: var(--global-font-size-h4) !important;
}

body.font-size-xs h5, body.font-size-sm h5, body.font-size-md h5, body.font-size-lg h5, body.font-size-xl h5 {
  font-size: var(--global-font-size-h5) !important;
}

body.font-size-xs h6, body.font-size-sm h6, body.font-size-md h6, body.font-size-lg h6, body.font-size-xl h6 {
  font-size: var(--global-font-size-h6) !important;
}

/* Vuetify component overrides */
body.font-size-xs .v-btn, body.font-size-sm .v-btn, body.font-size-md .v-btn, body.font-size-lg .v-btn, body.font-size-xl .v-btn {
  font-size: var(--global-font-size-button) !important;
}

body.font-size-xs .v-field__input, body.font-size-sm .v-field__input, body.font-size-md .v-field__input, body.font-size-lg .v-field__input, body.font-size-xl .v-field__input {
  font-size: var(--global-font-size-base) !important;
}

body.font-size-xs .v-list-item-title, body.font-size-sm .v-list-item-title, body.font-size-md .v-list-item-title, body.font-size-lg .v-list-item-title, body.font-size-xl .v-list-item-title {
  font-size: var(--global-font-size-base) !important;
}

body.font-size-xs .v-list-item-subtitle, body.font-size-sm .v-list-item-subtitle, body.font-size-md .v-list-item-subtitle, body.font-size-lg .v-list-item-subtitle, body.font-size-xl .v-list-item-subtitle {
  font-size: var(--global-font-size-caption) !important;
}

body.font-size-xs .v-data-table th, body.font-size-sm .v-data-table th, body.font-size-md .v-data-table th, body.font-size-lg .v-data-table th, body.font-size-xl .v-data-table th,
body.font-size-xs .v-data-table td, body.font-size-sm .v-data-table td, body.font-size-md .v-data-table td, body.font-size-lg .v-data-table td, body.font-size-xl .v-data-table td {
  font-size: var(--global-font-size-sm) !important;
}

body.font-size-xs .v-card-title, body.font-size-sm .v-card-title, body.font-size-md .v-card-title, body.font-size-lg .v-card-title, body.font-size-xl .v-card-title {
  font-size: var(--global-font-size-h5) !important;
}

body.font-size-xs .v-card-subtitle, body.font-size-sm .v-card-subtitle, body.font-size-md .v-card-subtitle, body.font-size-lg .v-card-subtitle, body.font-size-xl .v-card-subtitle {
  font-size: var(--global-font-size-caption) !important;
}

/* Text utility classes */
.text-caption {
  font-size: var(--global-font-size-caption) !important;
}

.text-body-1, .text-body-2 {
  font-size: var(--global-font-size-base) !important;
}
</style>
