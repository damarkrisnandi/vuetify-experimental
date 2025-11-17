<template>
  <v-app-bar
    :elevation="2"
    color="primary"
    density="compact"
  >
    <v-app-bar-nav-icon
      @click="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>

    <v-app-bar-title>
      <router-link to="/" class="text-decoration-none text-white">
        <v-icon start>mdi-vuetify</v-icon>
        Vuetify Experimental
      </router-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Breadcrumb -->
    <v-breadcrumbs
      v-if="breadcrumbs.length > 1"
      :items="breadcrumbs"
      class="d-none d-md-flex"
      color="white"
      divider="/"
    >
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :to="item.to"
          :disabled="item.disabled"
          class="text-white"
        >
          {{ item.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <!-- Theme Toggle -->
    <v-btn
      icon
      @click="toggleTheme"
      class="ml-2"
    >
      <v-icon>{{ isDark ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
    </v-btn>

    <!-- Settings Menu -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          v-bind="props"
          class="ml-2"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          @click="() => {}"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-help-circle"
          title="Help"
          @click="() => {}"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          prepend-icon="mdi-information"
          title="About"
          @click="() => {}"
        ></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

defineEmits<{
  'toggle-drawer': []
}>()

const route = useRoute()
const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const breadcrumbs = computed(() => {
  const items = [
    {
      title: 'Home',
      disabled: false,
      to: { name: 'Home' }
    }
  ]

  // Add current page breadcrumb
  if (route.name !== 'Home') {
    items.push({
      title: route.meta.title as string || route.name as string,
      disabled: true,
      to: route.path
    })
  }

  return items
})
</script>

<style scoped>
.v-app-bar-title a {
  text-decoration: none !important;
}
</style>