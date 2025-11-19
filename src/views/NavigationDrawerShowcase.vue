<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <v-col cols="12">
                <!-- Header Section -->
                <v-card class="mb-4" elevation="2">
                    <v-card-title class="text-h4 py-6 bg-gradient">
                        <v-icon size="large" color="white" class="mr-3">mdi-menu</v-icon>
                        <span class="text-white">Navigation Drawer - Button Only Control</span>
                    </v-card-title>
                </v-card>

                <!-- Description Card -->
                <v-card class="mb-4" elevation="2">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="8">
                                <h2 class="text-h5 mb-3">
                                    <v-icon color="primary" class="mr-2">mdi-information</v-icon>
                                    Tentang Component Ini
                                </h2>
                                <p class="text-body-1 mb-3">
                                    Component ini mendemonstrasikan v-navigation-drawer yang <strong>tidak dapat dibuka
                                        menggunakan swipe gesture</strong>
                                    di mobile device. Drawer hanya bisa dibuka dan ditutup melalui <strong>button action
                                        saja</strong>.
                                </p>
                                <p class="text-body-1">
                                    Ini sangat berguna untuk aplikasi yang membutuhkan kontrol ketat terhadap navigasi,
                                    atau ketika Anda ingin mencegah pembukaan drawer secara tidak sengaja saat user
                                    melakukan scroll horizontal.
                                </p>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card color="primary" variant="tonal">
                                    <v-card-text>
                                        <h3 class="text-h6 mb-3">
                                            <v-icon class="mr-2">mdi-feature-search</v-icon>
                                            Fitur Utama
                                        </h3>
                                        <v-list bg-color="transparent" density="compact">
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-gesture-swipe-horizontal-off</v-icon>
                                                </template>
                                                <v-list-item-title>No Swipe Gesture</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-cursor-pointer</v-icon>
                                                </template>
                                                <v-list-item-title>Button Control Only</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-cellphone-lock</v-icon>
                                                </template>
                                                <v-list-item-title>Mobile Optimized</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-auto-fix</v-icon>
                                                </template>
                                                <v-list-item-title>Auto-Close on Outside Click</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!-- Technical Implementation -->
                <v-card class="mb-4" elevation="2">
                    <v-card-title class="bg-grey-lighten-4">
                        <v-icon class="mr-2" color="primary">mdi-code-braces</v-icon>
                        Implementasi Teknis
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <h3 class="text-h6 mb-3">Props yang Digunakan</h3>
                                <v-table density="comfortable">
                                    <thead>
                                        <tr>
                                            <th>Prop</th>
                                            <th>Value</th>
                                            <th>Fungsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>:touchless</code></td>
                                            <td><v-chip size="small" color="primary">true</v-chip></td>
                                            <td>Disable swipe gesture</td>
                                        </tr>
                                        <tr>
                                            <td><code>:temporary</code></td>
                                            <td><v-chip size="small" color="primary">true</v-chip></td>
                                            <td>Close on outside click</td>
                                        </tr>
                                        <tr>
                                            <td><code>:disable-resize-watcher</code></td>
                                            <td><v-chip size="small" color="primary">true</v-chip></td>
                                            <td>No auto-open on resize</td>
                                        </tr>
                                        <tr>
                                            <td><code>:disable-route-watcher</code></td>
                                            <td><v-chip size="small" color="primary">true</v-chip></td>
                                            <td>No auto-open on route change</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-col>

                            <v-col cols="12" md="6">
                                <h3 class="text-h6 mb-3">CSS Protection</h3>
                                <v-alert type="info" variant="tonal" density="compact" class="mb-3">
                                    <v-alert-title>Touch Action Control</v-alert-title>
                                    CSS properties untuk mencegah touch gesture
                                </v-alert>
                                <pre class="code-snippet">{{ cssCode }}</pre>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!-- Live Demo -->
                <v-card class="mb-4" elevation="2">
                    <v-card-title class="bg-success-lighten-4">
                        <v-icon class="mr-2" color="success">mdi-play-circle</v-icon>
                        Live Demo
                    </v-card-title>
                    <v-card-text class="pa-0">
                        <NavigationDrawerExample />
                    </v-card-text>
                </v-card>

                <!-- How to Use -->
                <v-card class="mb-4" elevation="2">
                    <v-card-title class="bg-warning-lighten-4">
                        <v-icon class="mr-2" color="warning">mdi-book-open-variant</v-icon>
                        Cara Menggunakan
                    </v-card-title>
                    <v-card-text>
                        <v-stepper alt-labels :items="['Install', 'Setup', 'Customize']">
                            <template v-slot:item.1>
                                <v-card flat>
                                    <v-card-text>
                                        <h3 class="text-h6 mb-3">1. Copy Component</h3>
                                        <p>Copy file <code>NavigationDrawerExample.vue</code> ke project Anda</p>
                                        <v-alert type="info" variant="tonal" density="compact" class="mt-3">
                                            <code>src/components/NavigationDrawerExample.vue</code>
                                        </v-alert>
                                    </v-card-text>
                                </v-card>
                            </template>

                            <template v-slot:item.2>
                                <v-card flat>
                                    <v-card-text>
                                        <h3 class="text-h6 mb-3">2. Import & Use</h3>
                                        <pre class="code-snippet">{{ importCode }}</pre>
                                    </v-card-text>
                                </v-card>
                            </template>

                            <template v-slot:item.3>
                                <v-card flat>
                                    <v-card-text>
                                        <h3 class="text-h6 mb-3">3. Customize</h3>
                                        <v-list density="compact">
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="primary">mdi-palette</v-icon>
                                                </template>
                                                <v-list-item-title>Sesuaikan warna dan styling</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="primary">mdi-menu</v-icon>
                                                </template>
                                                <v-list-item-title>Tambahkan menu items sesuai
                                                    kebutuhan</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="primary">mdi-resize</v-icon>
                                                </template>
                                                <v-list-item-title>Atur width drawer (default:
                                                    280px)</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </template>
                        </v-stepper>
                    </v-card-text>
                </v-card>

                <!-- Testing Guide -->
                <v-card elevation="2">
                    <v-card-title class="bg-info-lighten-4">
                        <v-icon class="mr-2" color="info">mdi-test-tube</v-icon>
                        Testing Guide
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-card variant="outlined">
                                    <v-card-title class="text-h6">
                                        <v-icon class="mr-2" color="success">mdi-check-circle</v-icon>
                                        Expected Behavior
                                    </v-card-title>
                                    <v-card-text>
                                        <v-list density="compact">
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-check</v-icon>
                                                </template>
                                                <v-list-item-title>Drawer hanya bisa dibuka via
                                                    button</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-check</v-icon>
                                                </template>
                                                <v-list-item-title>Swipe dari edge screen tidak membuka
                                                    drawer</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-check</v-icon>
                                                </template>
                                                <v-list-item-title>Click outside drawer akan menutup
                                                    drawer</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="success">mdi-check</v-icon>
                                                </template>
                                                <v-list-item-title>Resize window tidak auto-open
                                                    drawer</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-card variant="outlined">
                                    <v-card-title class="text-h6">
                                        <v-icon class="mr-2" color="error">mdi-close-circle</v-icon>
                                        What NOT to Expect
                                    </v-card-title>
                                    <v-card-text>
                                        <v-list density="compact">
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="error">mdi-close</v-icon>
                                                </template>
                                                <v-list-item-title>Drawer TIDAK akan buka dengan swipe
                                                    gesture</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="error">mdi-close</v-icon>
                                                </template>
                                                <v-list-item-title>TIDAK ada edge swipe detection</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="error">mdi-close</v-icon>
                                                </template>
                                                <v-list-item-title>TIDAK auto-open saat navigasi</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon color="error">mdi-close</v-icon>
                                                </template>
                                                <v-list-item-title>TIDAK responsive auto-show di
                                                    desktop</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import NavigationDrawerExample from '@/components/NavigationDrawerExample.vue'
import { computed } from 'vue'

const cssCode = computed(() => `.no-swipe-drawer {
  touch-action: none !important;
  -webkit-user-drag: none;
  user-select: none;
  overscroll-behavior: none;
}

:deep(.v-overlay__scrim) {
  touch-action: none;
  -webkit-touch-callout: none;
}`)

const importCode = computed(() => '<template>\\n  <NavigationDrawerExample />\\n</template>\\n\\n<script setup lang="ts">\\nimport NavigationDrawerExample from \'@/components/NavigationDrawerExample.vue\'\\n<' + '/script>')
</script>

<style scoped>
.bg-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.code-snippet {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 12px;
    overflow-x: auto;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #333;
    margin: 0;
}

.code-snippet::-webkit-scrollbar {
    height: 6px;
}

.code-snippet::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.code-snippet::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
}
</style>
