<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="rail ? '' : 'Vuetify Experimental'" :subtitle="rail ? '' : 'Vue 3 + Vuetify 3'" nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <!-- Home -->
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" :to="{ name: 'Home' }" exact></v-list-item>

      <!-- Components Group -->
      <v-list-group value="components">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-view-dashboard" title="Components"></v-list-item>
        </template>

        <v-list-item prepend-icon="mdi-message-reply" title="Dialog Showcase" value="dialogs"
          :to="{ name: 'Dialogs' }"></v-list-item>

        <v-list-item prepend-icon="mdi-card" title="Card Showcase" value="cards" :to="{ name: 'Cards' }"></v-list-item>

        <v-list-item prepend-icon="mdi-label-multiple" title="Scrollable Chips" value="chips"
          :to="{ name: 'ScrollableChips' }"></v-list-item>

        <v-list-item prepend-icon="mdi-table" title="Data Table" value="datatable"
          :to="{ name: 'DataTable' }"></v-list-item>

        <v-list-item prepend-icon="mdi-account-group" title="Responsive Profile Table" value="profiletable"
          :to="{ name: 'ProfileTable' }"></v-list-item>

        <v-list-item prepend-icon="mdi-tab-plus" title="Tabs Scrollable Tables" value="tabsscrollable"
          :to="{ name: 'TabsScrollable' }"></v-list-item>

        <v-list-item prepend-icon="mdi-menu" title="Navigation Drawer" value="navdrawer"
          :to="{ name: 'NavigationDrawer' }"></v-list-item>
      </v-list-group>

      <!-- Settings Group -->
      <v-list-group value="settings">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cog" title="Settings"></v-list-item>
        </template>

        <v-list-item prepend-icon="mdi-format-size" title="Global Font Size" value="fontsize"
          :to="{ name: 'FontSize' }"></v-list-item>
      </v-list-group>

      <!-- Layout Group -->
      <v-list-group value="layout">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-view-grid" title="Layout"></v-list-item>
        </template>

        <v-list-item prepend-icon="mdi-tab" title="Two Row Tabs" value="tabs"
          :to="{ name: 'TwoRowTabs' }"></v-list-item>

        <v-list-item prepend-icon="mdi-swap-horizontal" title="Reverse Layout" value="reverse"
          :to="{ name: 'ReverseLayout' }"></v-list-item>
      </v-list-group>

      <v-divider class="my-2"></v-divider>

      <!-- External Links -->
      <v-list-item prepend-icon="mdi-github" title="GitHub" value="github" href="https://github.com/vuetifyjs/vuetify"
        target="_blank"></v-list-item>

      <v-list-item prepend-icon="mdi-book-open-variant" title="Documentation" value="docs" href="https://vuetifyjs.com/"
        target="_blank"></v-list-item>
    </v-list>

    <!-- Footer -->
    <template v-slot:append>
      <div class="pa-2" v-if="!rail">
        <v-btn block variant="outlined" size="small" prepend-icon="mdi-information"
          href="https://github.com/vuetifyjs/vuetify" target="_blank">
          About Vuetify
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true)
const rail = ref(false)

// Expose methods for parent component
defineExpose({
  toggleDrawer: () => {
    drawer.value = !drawer.value
  },
  toggleRail: () => {
    rail.value = !rail.value
  }
})
</script>

<style scoped>
/* Custom styles for navigation */
:deep(.v-navigation-drawer__content) {
  overflow-y: auto;
}

:deep(.v-list-item--active) {
  color: rgb(var(--v-theme-primary));
}
</style>
