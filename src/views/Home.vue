<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="10" class="mx-auto">
          <v-card-title class="text-h3 text-center bg-primary pa-8">
            <v-icon icon="mdi-vuetify" size="64" class="mr-4" />
            Vuetify Experimental
          </v-card-title>

          <v-card-text class="pa-8">
            <h2 class="text-h4 mb-4 text-center">Welcome!</h2>
            <p class="text-h6 text-center mb-6 text-grey">
              Vue 3 + Vuetify 3 + TypeScript
            </p>

            <v-divider class="my-6" />

            <h3 class="text-h5 mb-4">Featured: Dialog Service</h3>
            <p class="text-body-1 mb-4">
              This project includes a powerful Dialog Service similar to PrimeNG's DynamicDialog,
              built specifically for Vuetify 3. It allows you to programmatically open dialogs
              with any Vue component.
            </p>

            <v-alert type="info" variant="tonal" class="mb-6">
              <strong>Key Features:</strong>
              <ul class="mt-2">
                <li>Programmatic dialog opening</li>
                <li>Pass props and receive data back</li>
                <li>Multiple dialogs support</li>
                <li>Nested dialogs (2-3 levels deep)</li>
                <li>Full TypeScript support</li>
                <li>Highly configurable</li>
              </ul>
            </v-alert>

            <div class="d-flex flex-column gap-3">
              <v-btn
                color="primary"
                size="x-large"
                variant="flat"
                prepend-icon="mdi-open-in-new"
                :to="{ name: 'Dialogs' }"
                block
              >
                View Dialog Showcase
              </v-btn>

              <v-btn
                color="secondary"
                size="large"
                variant="outlined"
                prepend-icon="mdi-github"
                href="https://github.com/vuetifyjs/vuetify"
                target="_blank"
                block
              >
                Vuetify Documentation
              </v-btn>
            </div>
          </v-card-text>

          <v-card-actions class="bg-grey-lighten-4 pa-4">
            <v-spacer />
            <span class="text-caption text-grey">
              Built with ❤️ using Vue 3 + Vuetify 3
            </span>
            <v-spacer />
          </v-card-actions>
        </v-card>

        <!-- Quick Info Cards -->
        <v-row class="mt-8">
          <v-col cols="12" sm="4">
            <v-card class="text-center" elevation="2">
              <v-card-text>
                <v-icon icon="mdi-vuejs" size="48" color="success" class="mb-2" />
                <h3 class="text-h6">Vue 3</h3>
                <p class="text-caption">Composition API</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="text-center" elevation="2">
              <v-card-text>
                <v-icon icon="mdi-vuetify" size="48" color="primary" class="mb-2" />
                <h3 class="text-h6">Vuetify 3</h3>
                <p class="text-caption">Material Design</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="text-center" elevation="2">
              <v-card-text>
                <v-icon icon="mdi-language-typescript" size="48" color="info" class="mb-2" />
                <h3 class="text-h6">TypeScript</h3>
                <p class="text-caption">Type Safety</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
