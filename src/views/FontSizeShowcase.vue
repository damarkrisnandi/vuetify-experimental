<template>
    <v-container fluid>
        <div class="text-center mb-6">
            <h1 class="text-h3 font-weight-bold mb-2">Global Font Size Settings</h1>
            <p class="text-h6 text-medium-emphasis">
                Customize font size for the entire application
            </p>
        </div>

        <!-- Font Size Control Component -->
        <v-row justify="center">
            <v-col cols="12" lg="8">
                <FontSizeControl />
            </v-col>
        </v-row>

        <!-- Content Examples to show font size impact -->
        <v-row class="mt-8">
            <v-col cols="12" md="6">
                <v-card elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-format-text</v-icon>
                        Text Content Example
                    </v-card-title>
                    <v-card-text>
                        <h4 class="mb-3">Typography Samples</h4>
                        <p class="text-body-1 mb-3">
                            This is a paragraph of body text that demonstrates how the global font size setting
                            affects regular content throughout the application. The text should scale appropriately
                            based on your selection.
                        </p>

                        <h5 class="mb-2">Key Features:</h5>
                        <v-list density="compact">
                            <v-list-item>
                                <v-list-item-title>Real-time font size updates</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Affects entire application</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Accessibility improvements</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Responsive scaling</v-list-item-title>
                            </v-list-item>
                        </v-list>

                        <div class="text-caption mt-3">
                            Caption text and fine print also scale with the global setting.
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-form-select</v-icon>
                        Interactive Elements
                    </v-card-title>
                    <v-card-text>
                        <h4 class="mb-3">Form Components</h4>

                        <v-text-field label="Sample Text Field" placeholder="Text scales with global setting"
                            variant="outlined" class="mb-3" />

                        <v-select label="Sample Select" :items="['Option 1', 'Option 2', 'Option 3']" variant="outlined"
                            class="mb-3" />

                        <div class="mb-3">
                            <v-btn color="primary" class="mr-2">Primary Button</v-btn>
                            <v-btn variant="outlined">Outlined Button</v-btn>
                        </div>

                        <v-alert type="info" variant="tonal" class="text-body-2">
                            <strong>Note:</strong> All text in buttons, form fields, and other components
                            will automatically scale with your font size preference.
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Data Table Example -->
        <v-row class="mt-8">
            <v-col cols="12">
                <v-card elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-table</v-icon>
                        Data Table with Global Font Size
                    </v-card-title>
                    <v-card-text>
                        <p class="text-body-2 mb-4">
                            This table demonstrates how the global font size affects dense content like data tables:
                        </p>

                        <v-data-table :headers="sampleHeaders" :items="sampleData" :items-per-page="5"
                            class="global-font-table">
                            <template v-slot:item.status="{ item }">
                                <v-chip :color="item.status === 'Active' ? 'success' : 'warning'" size="small"
                                    variant="tonal">
                                    {{ item.status }}
                                </v-chip>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Usage Guide -->
        <v-row class="mt-8">
            <v-col cols="12">
                <v-card elevation="2">
                    <v-card-title>
                        <v-icon start>mdi-information</v-icon>
                        How It Works
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <h5 class="mb-3">Global Font Size System</h5>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>🎯 Affects entire application</v-list-item-title>
                                        <v-list-item-subtitle>All text elements scale
                                            proportionally</v-list-item-subtitle>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>♿ Accessibility focused</v-list-item-title>
                                        <v-list-item-subtitle>Helps users with visual impairments</v-list-item-subtitle>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>⚡ Real-time updates</v-list-item-title>
                                        <v-list-item-subtitle>Changes apply immediately</v-list-item-subtitle>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>📱 Responsive design</v-list-item-title>
                                        <v-list-item-subtitle>Works across all screen sizes</v-list-item-subtitle>
                                    </v-list-item>
                                </v-list>
                            </v-col>

                            <v-col cols="12" md="6">
                                <h5 class="mb-3">Available Sizes</h5>
                                <v-timeline density="compact" side="end">
                                    <v-timeline-item dot-color="error" size="small">
                                        <div>
                                            <strong>Extra Small (XS)</strong>
                                            <div class="text-caption">0.75rem base - Maximum density</div>
                                        </div>
                                    </v-timeline-item>

                                    <v-timeline-item dot-color="warning" size="small">
                                        <div>
                                            <strong>Small (SM)</strong>
                                            <div class="text-caption">0.875rem base - Compact view</div>
                                        </div>
                                    </v-timeline-item>

                                    <v-timeline-item dot-color="primary" size="small">
                                        <div>
                                            <strong>Medium (MD)</strong>
                                            <div class="text-caption">1rem base - Default size</div>
                                        </div>
                                    </v-timeline-item>

                                    <v-timeline-item dot-color="success" size="small">
                                        <div>
                                            <strong>Large (LG)</strong>
                                            <div class="text-caption">1.125rem base - Enhanced readability</div>
                                        </div>
                                    </v-timeline-item>

                                    <v-timeline-item dot-color="info" size="small">
                                        <div>
                                            <strong>Extra Large (XL)</strong>
                                            <div class="text-caption">1.25rem base - Maximum accessibility</div>
                                        </div>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import FontSizeControl from '../components/FontSizeControl.vue'
import { useGlobalFontSize } from '../composables/useGlobalFontSize'

const { initGlobalFontSize } = useGlobalFontSize()

// Sample data for the table
const sampleHeaders = [
    { title: 'Name', key: 'name', sortable: true },
    { title: 'Role', key: 'role', sortable: true },
    { title: 'Email', key: 'email', sortable: false },
    { title: 'Status', key: 'status', sortable: true },
    { title: 'Department', key: 'department', sortable: true }
]

const sampleData = [
    {
        name: 'John Smith',
        role: 'Developer',
        email: 'john.smith@company.com',
        status: 'Active',
        department: 'Engineering'
    },
    {
        name: 'Jane Doe',
        role: 'Designer',
        email: 'jane.doe@company.com',
        status: 'Active',
        department: 'Design'
    },
    {
        name: 'Mike Johnson',
        role: 'Manager',
        email: 'mike.johnson@company.com',
        status: 'Active',
        department: 'Operations'
    },
    {
        name: 'Sarah Wilson',
        role: 'Analyst',
        email: 'sarah.wilson@company.com',
        status: 'Inactive',
        department: 'Finance'
    },
    {
        name: 'David Brown',
        role: 'Coordinator',
        email: 'david.brown@company.com',
        status: 'Active',
        department: 'Marketing'
    }
]

// Initialize global font size system
onMounted(() => {
    initGlobalFontSize()
})
</script>

<style scoped>
/* Global font size classes will be applied via CSS variables */
.global-font-table {
    font-size: var(--global-font-size-base, 1rem);
}

.global-font-table :deep(.v-data-table__td),
.global-font-table :deep(.v-data-table__th) {
    font-size: var(--global-font-size-sm, 0.875rem);
}
</style>
