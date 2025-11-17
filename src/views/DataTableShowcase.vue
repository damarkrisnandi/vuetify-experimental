<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <div class="text-center mb-6">
                    <h1 class="text-h3 font-weight-bold mb-2">Data Table Showcase</h1>
                    <p class="text-h6 text-medium-emphasis">
                        Customizable server-side data table with font sizing and column management
                    </p>
                </div>

                <!-- Custom Data Table Component -->
                <CustomDataTable />

                <!-- Features Information -->
                <v-row class="mt-8">
                    <v-col cols="12" md="6">
                        <v-card elevation="2">
                            <v-card-title>
                                <v-icon start color="success">mdi-check-circle</v-icon>
                                Key Features
                            </v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>📊 Server-side pagination & sorting</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>🔍 Real-time search functionality</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>📝 Customizable font sizes (XS, SM, MD,
                                            LG)</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>📱 Responsive design & mobile-friendly</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>🎯 Dynamic column visibility</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>⚡ Performance optimized for large
                                            datasets</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card elevation="2">
                            <v-card-title>
                                <v-icon start color="info">mdi-cog</v-icon>
                                Customization Options
                            </v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>🎨 Multiple font sizes for dense layouts</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>📋 Show/hide columns dynamically</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>📏 Adjustable table density</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>🔢 Configurable items per page</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>🎭 Custom cell renderers</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>🚀 Loading states & animations</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Font Size Examples -->
                <v-card class="mt-8" elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-format-size</v-icon>
                        Font Size Comparison
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="3">
                                <div class="text-center pa-4 border rounded">
                                    <div class="text-caption mb-2">Extra Small (XS)</div>
                                    <div style="font-size: 0.75rem; line-height: 1.2;">
                                        Perfect for dense tables with many columns. Maximizes data visibility.
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-center pa-4 border rounded">
                                    <div class="text-caption mb-2">Small (SM)</div>
                                    <div style="font-size: 0.875rem; line-height: 1.3;">
                                        Good balance between readability and space efficiency.
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-center pa-4 border rounded">
                                    <div class="text-caption mb-2">Medium (MD)</div>
                                    <div style="font-size: 1rem; line-height: 1.4;">
                                        Standard size for comfortable reading and interaction.
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-center pa-4 border rounded">
                                    <div class="text-caption mb-2">Large (LG)</div>
                                    <div style="font-size: 1.125rem; line-height: 1.5;">
                                        Enhanced readability for accessibility and comfort.
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!-- Usage Instructions -->
                <v-card class="mt-8" elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-book-open-variant</v-icon>
                        How to Use
                    </v-card-title>
                    <v-card-text>
                        <v-stepper alt-labels>
                            <v-stepper-header>
                                <v-stepper-item title="Adjust Font Size" value="1" icon="mdi-format-size" />
                                <v-divider />
                                <v-stepper-item title="Select Columns" value="2" icon="mdi-view-column" />
                                <v-divider />
                                <v-stepper-item title="Configure Display" value="3" icon="mdi-tune" />
                                <v-divider />
                                <v-stepper-item title="Search & Sort" value="4" icon="mdi-sort-alphabetical" />
                            </v-stepper-header>
                        </v-stepper>

                        <v-row class="mt-4">
                            <v-col cols="12" md="3">
                                <div class="text-body-2">
                                    <strong>1. Font Size:</strong> Use the XS/SM/MD/LG buttons to adjust table font size
                                    for optimal density.
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-body-2">
                                    <strong>2. Columns:</strong> Select which columns to display using the multi-select
                                    dropdown.
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-body-2">
                                    <strong>3. Display:</strong> Adjust table density and items per page for your needs.
                                </div>
                            </v-col>
                            <v-col cols="12" md="3">
                                <div class="text-body-2">
                                    <strong>4. Interact:</strong> Search, sort, and navigate through large datasets
                                    efficiently.
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import CustomDataTable from '../components/CustomDataTable.vue';
</script>

<style scoped>
.border {
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}
</style>
