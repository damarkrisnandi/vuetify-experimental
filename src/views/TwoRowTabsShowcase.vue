<template>
    <v-app>
        <v-main>
            <v-container>
                <div class="text-center mb-6">
                    <h1 class="text-h3 font-weight-bold mb-2">Two Row Tabs Demo</h1>
                    <p class="text-h6 text-medium-emphasis">
                        Vuetify tabs arranged in 2 rows with 2 tabs each
                    </p>
                </div>

                <!-- Two Row Tabs Component -->
                <TwoRowTabs />

                <!-- Additional Information Card -->
                <v-card class="mt-8" variant="outlined">
                    <v-card-title>
                        <v-icon start>mdi-information</v-icon>
                        Component Features
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>✅ 4 tabs arranged in 2 rows (2x2 grid)</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>✅ Responsive design (stacks on mobile)</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>✅ Smooth transitions and animations</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>✅ Material Design icons</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>✅ Dynamic content for each tab</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import TwoRowTabs from '../components/TwoRowTabs.vue';
</script>

<style scoped>
/* Additional styling if needed */
</style>
