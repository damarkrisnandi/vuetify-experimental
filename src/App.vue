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
import { ref } from 'vue'

const navigationRef = ref()

const toggleDrawer = () => {
  // Toggle drawer through the navigation component
  if (navigationRef.value) {
    navigationRef.value.toggleDrawer()
  }
}
</script>
