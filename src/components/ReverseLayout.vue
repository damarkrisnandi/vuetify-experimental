<template>
  <v-container>
    <div class="text-center mb-6">
      <h1 class="text-h4 font-weight-bold mb-2">Reverse Layout Demo</h1>
      <p class="text-body-1 text-medium-emphasis">
        Desktop: A B C (Row) → Mobile: C B A (Column)
      </p>
    </div>

    <!-- Method 1: Using Vuetify order classes -->
    <v-card class="mb-8" elevation="2">
      <v-card-title class="bg-primary">
        <v-icon start>mdi-sort-variant</v-icon>
        Method 1: Vuetify Order Classes
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row class="reverse-container">
          <v-col 
            cols="12" 
            md="4" 
            class="order-1 order-md-1"
          >
            <v-card color="red-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="red">mdi-alpha-a</v-icon>
                <h3 class="mt-2">Component A</h3>
                <p class="text-caption">First on desktop</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col 
            cols="12" 
            md="4" 
            class="order-2 order-md-2"
          >
            <v-card color="blue-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="blue">mdi-alpha-b</v-icon>
                <h3 class="mt-2">Component B</h3>
                <p class="text-caption">Middle on both</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col 
            cols="12" 
            md="4" 
            class="order-0 order-md-3"
          >
            <v-card color="green-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="green">mdi-alpha-c</v-icon>
                <h3 class="mt-2">Component C</h3>
                <p class="text-caption">Last on desktop, First on mobile</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Method 2: Using CSS Flexbox -->
    <v-card class="mb-8" elevation="2">
      <v-card-title class="bg-secondary">
        <v-icon start>mdi-auto-fix</v-icon>
        Method 2: CSS Flexbox
      </v-card-title>
      <v-card-text class="pa-6">
        <div class="flex-reverse-container">
          <div class="flex-item">
            <v-card color="purple-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="purple">mdi-numeric-1</v-icon>
                <h3 class="mt-2">Item 1</h3>
                <p class="text-caption">First on desktop</p>
              </v-card-text>
            </v-card>
          </div>

          <div class="flex-item">
            <v-card color="orange-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="orange">mdi-numeric-2</v-icon>
                <h3 class="mt-2">Item 2</h3>
                <p class="text-caption">Middle on both</p>
              </v-card-text>
            </v-card>
          </div>

          <div class="flex-item">
            <v-card color="teal-lighten-4" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" color="teal">mdi-numeric-3</v-icon>
                <h3 class="mt-2">Item 3</h3>
                <p class="text-caption">Last on desktop, First on mobile</p>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Method 3: Dynamic component ordering -->
    <v-card class="mb-8" elevation="2">
      <v-card-title class="bg-success">
        <v-icon start>mdi-shuffle-variant</v-icon>
        Method 3: Dynamic Component Order
      </v-card-title>
      <v-card-text class="pa-6">
        <div class="mb-4 text-center">
          <v-btn 
            color="primary" 
            @click="toggleOrder"
            prepend-icon="mdi-swap-horizontal"
          >
            Toggle Order (Current: {{ isReversed ? 'C-B-A' : 'A-B-C' }})
          </v-btn>
        </div>
        
        <v-row>
          <v-col
            v-for="(component, index) in orderedComponents"
            :key="component.id"
            cols="12"
            md="4"
          >
            <v-card :color="component.color" class="component-card">
              <v-card-text class="text-center">
                <v-icon size="48" :color="component.iconColor">{{ component.icon }}</v-icon>
                <h3 class="mt-2">{{ component.title }}</h3>
                <p class="text-caption">{{ component.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Information Card -->
    <v-card variant="outlined">
      <v-card-title>
        <v-icon start>mdi-information</v-icon>
        Implementation Methods
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <strong>Method 1: Vuetify Order Classes</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
              Uses `order-{breakpoint}-{number}` classes for responsive ordering
            </v-list-item-subtitle>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>
              <strong>Method 2: CSS Flexbox</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
              Uses `flex-direction: column-reverse` on mobile and `flex-direction: row` on desktop
            </v-list-item-subtitle>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>
              <strong>Method 3: Dynamic Ordering</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
              Uses Vue computed properties to dynamically reorder components
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isReversed = ref(false)

const components = [
  {
    id: 'a',
    title: 'Component Alpha',
    description: 'Dynamic component A',
    icon: 'mdi-alpha-a-circle',
    color: 'red-lighten-4',
    iconColor: 'red'
  },
  {
    id: 'b',
    title: 'Component Beta',
    description: 'Dynamic component B',
    icon: 'mdi-alpha-b-circle',
    color: 'blue-lighten-4',
    iconColor: 'blue'
  },
  {
    id: 'c',
    title: 'Component Charlie',
    description: 'Dynamic component C',
    icon: 'mdi-alpha-c-circle',
    color: 'green-lighten-4',
    iconColor: 'green'
  }
]

const orderedComponents = computed(() => {
  return isReversed.value ? [...components].reverse() : components
})

const toggleOrder = () => {
  isReversed.value = !isReversed.value
}
</script>

<style scoped>
.component-card {
  height: 100%;
  min-height: 160px;
  transition: transform 0.2s ease;
}

.component-card:hover {
  transform: translateY(-4px);
}

/* Method 2: CSS Flexbox Implementation */
.flex-reverse-container {
  display: flex;
  gap: 16px;
}

.flex-item {
  flex: 1;
}

/* Desktop: Row layout (A B C) */
@media (min-width: 768px) {
  .flex-reverse-container {
    flex-direction: row;
  }
}

/* Mobile: Column reverse layout (C B A) */
@media (max-width: 767px) {
  .flex-reverse-container {
    flex-direction: column-reverse;
  }
  
  .flex-item {
    width: 100%;
  }
}

/* Animation for dynamic ordering */
.v-col {
  transition: all 0.3s ease;
}
</style>