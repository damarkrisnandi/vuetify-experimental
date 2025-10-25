<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="primary" elevation="4">
      <v-app-bar-title>
        <v-icon icon="mdi-vuetify" class="mr-2" />
        Vuetify Experimental
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        :to="{ name: 'Home' }"
        variant="text"
        prepend-icon="mdi-home"
      >
        Home
      </v-btn>

      <v-btn
        :to="{ name: 'Dialogs' }"
        variant="text"
        prepend-icon="mdi-message"
      >
        Dialogs
      </v-btn>

      <v-btn
        :to="{ name: 'Cards' }"
        variant="text"
        prepend-icon="mdi-card"
      >
        Cards
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    
    <!-- Dialog Container - Required for DialogService -->
    <DialogContainer />
  </v-app>
</template>

<script setup lang="ts">
import DialogContainer from '@/components/DialogContainer.vue'
</script>
