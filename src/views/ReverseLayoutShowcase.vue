<template>
    <v-app>
        <v-main>
            <v-container>
                <div class="text-center mb-6">
                    <h1 class="text-h3 font-weight-bold mb-2">Reverse Layout Showcase</h1>
                    <p class="text-h6 text-medium-emphasis">
                        Desktop: A → B → C (Row) | Mobile: C → B → A (Column)
                    </p>
                </div>

                <!-- Reverse Layout Component -->
                <ReverseLayout />

                <!-- Device Preview Info -->
                <v-row class="mt-8">
                    <v-col cols="12" md="6">
                        <v-card color="blue-grey-lighten-5" elevation="2">
                            <v-card-title class="text-h6">
                                <v-icon start color="primary">mdi-desktop-mac</v-icon>
                                Desktop Layout
                            </v-card-title>
                            <v-card-text>
                                <div class="d-flex align-center justify-center ga-2 mb-2">
                                    <v-chip color="red" size="small">A</v-chip>
                                    <v-icon>mdi-arrow-right</v-icon>
                                    <v-chip color="blue" size="small">B</v-chip>
                                    <v-icon>mdi-arrow-right</v-icon>
                                    <v-chip color="green" size="small">C</v-chip>
                                </div>
                                <p class="text-body-2">
                                    Components arranged horizontally in normal order (flex-direction: row)
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card color="orange-lighten-5" elevation="2">
                            <v-card-title class="text-h6">
                                <v-icon start color="orange">mdi-cellphone</v-icon>
                                Mobile Layout
                            </v-card-title>
                            <v-card-text>
                                <div class="d-flex flex-column align-center justify-center ga-2 mb-2">
                                    <v-chip color="green" size="small">C</v-chip>
                                    <v-icon>mdi-arrow-down</v-icon>
                                    <v-chip color="blue" size="small">B</v-chip>
                                    <v-icon>mdi-arrow-down</v-icon>
                                    <v-chip color="red" size="small">A</v-chip>
                                </div>
                                <p class="text-body-2">
                                    Components stacked vertically in reverse order (flex-direction: column-reverse)
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Code Examples -->
                <v-card class="mt-8" elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-code-tags</v-icon>
                        Implementation Examples
                    </v-card-title>
                    <v-card-text>
                        <v-tabs v-model="activeCodeTab" color="primary">
                            <v-tab value="vuetify">Vuetify Classes</v-tab>
                            <v-tab value="css">CSS Flexbox</v-tab>
                            <v-tab value="vue">Vue Dynamic</v-tab>
                        </v-tabs>

                        <v-window v-model="activeCodeTab" class="mt-4">
                            <v-window-item value="vuetify">
                                <v-code>
                                    &lt;v-row&gt;
                                    &lt;v-col cols="12" md="4" class="order-1 order-md-1"&gt;Component A&lt;/v-col&gt;
                                    &lt;v-col cols="12" md="4" class="order-2 order-md-2"&gt;Component B&lt;/v-col&gt;
                                    &lt;v-col cols="12" md="4" class="order-0 order-md-3"&gt;Component C&lt;/v-col&gt;
                                    &lt;/v-row&gt;
                                </v-code>
                            </v-window-item>

                            <v-window-item value="css">
                                <v-code>
                                    .flex-container {
                                    display: flex;
                                    gap: 16px;
                                    }

                                    /* Desktop: Row (A B C) */
                                    @media (min-width: 768px) {
                                    .flex-container {
                                    flex-direction: row;
                                    }
                                    }

                                    /* Mobile: Column Reverse (C B A) */
                                    @media (max-width: 767px) {
                                    .flex-container {
                                    flex-direction: column-reverse;
                                    }
                                    }
                                </v-code>
                            </v-window-item>

                            <v-window-item value="vue">
                                <v-code>
                                    const components = ref([A, B, C])
                                    const isReversed = ref(false)

                                    const orderedComponents = computed(() => {
                                    return isReversed.value ? [...components].reverse() : components
                                    })
                                </v-code>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ReverseLayout from '../components/ReverseLayout.vue';

const activeCodeTab = ref('vuetify')
</script>

<style scoped>
/* Additional styling if needed */
</style>
