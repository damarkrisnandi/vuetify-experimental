<template>
  <v-card>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Navigation Drawer Example</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer - Disable Swipe Gesture -->
    <v-navigation-drawer v-model="drawer" :temporary="true" :disable-resize-watcher="true" :disable-route-watcher="true"
      :touchless="true" location="left" width="280" class="no-swipe-drawer">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>

        <v-list-item prepend-icon="mdi-account" title="Profile" value="profile"></v-list-item>

        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
      </v-list>

      <v-divider class="my-3"></v-divider>

      <v-list density="compact" nav>
        <v-list-group value="Products">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-package-variant" title="Products"></v-list-item>
          </template>

          <v-list-item v-for="product in products" :key="product.id" :title="product.name" :value="product.id"
            class="pl-8">
            <template v-slot:prepend>
              <v-icon>{{ product.icon }}</v-icon>
            </template>
          </v-list-item>
        </v-list-group>

        <v-list-group value="Reports">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-chart-bar" title="Reports"></v-list-item>
          </template>

          <v-list-item v-for="report in reports" :key="report.id" :title="report.name" :value="report.id" class="pl-8">
            <template v-slot:prepend>
              <v-icon>{{ report.icon }}</v-icon>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider class="my-3"></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-help-circle" title="Help & Support" value="help"></v-list-item>

        <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-4">
          <v-btn block color="primary" variant="outlined" @click="drawer = false">
            <v-icon start>mdi-close</v-icon>
            Close Menu
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main class="main-content">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-alert type="info" variant="tonal" prominent border="start" icon="mdi-information">
              <v-alert-title class="text-h6 mb-2">Drawer Behavior</v-alert-title>
              <div class="text-body-2">
                <ul class="ml-4">
                  <li><strong>Swipe gesture disabled:</strong> Drawer tidak dapat dibuka dengan swipe gesture di mobile
                  </li>
                  <li><strong>Button only:</strong> Drawer hanya bisa dibuka/ditutup melalui tombol menu di app bar</li>
                  <li><strong>Temporary mode:</strong> Drawer akan menutup otomatis saat click di luar area drawer</li>
                  <li><strong>No auto-open:</strong> Resize dan route changes tidak akan membuka drawer secara otomatis
                  </li>
                </ul>
              </div>
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                <v-icon start color="primary">mdi-gesture-swipe-horizontal</v-icon>
                Swipe Protection
              </v-card-title>
              <v-card-text>
                <p class="mb-3">Drawer ini menggunakan beberapa teknik untuk mencegah pembukaan via gesture:</p>
                <v-list density="compact" bg-color="transparent">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title><code>:touchless="true"</code></v-list-item-title>
                    <v-list-item-subtitle>Disable touch swipe gesture untuk membuka drawer</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title><code>:temporary="true"</code></v-list-item-title>
                    <v-list-item-subtitle>Drawer menutup saat click di luar area</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title><code>:disable-resize-watcher="true"</code></v-list-item-title>
                    <v-list-item-subtitle>Tidak auto-open saat resize window</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title><code>:disable-route-watcher="true"</code></v-list-item-title>
                    <v-list-item-subtitle>Tidak auto-open saat route berubah</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title><code>CSS touch-action</code></v-list-item-title>
                    <v-list-item-subtitle>Mencegah touch gesture dengan CSS</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                <v-icon start color="primary">mdi-toggle-switch</v-icon>
                Control Panel
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-btn block size="large" color="primary" prepend-icon="mdi-menu-open" @click="toggleDrawer">
                      Toggle Drawer
                    </v-btn>
                  </v-col>

                  <v-col cols="12">
                    <v-btn block size="large" color="success" prepend-icon="mdi-menu" @click="drawer = true">
                      Open Drawer
                    </v-btn>
                  </v-col>

                  <v-col cols="12">
                    <v-btn block size="large" color="error" prepend-icon="mdi-close" @click="drawer = false">
                      Close Drawer
                    </v-btn>
                  </v-col>
                </v-row>

                <v-divider class="my-4"></v-divider>

                <div class="text-center">
                  <v-chip :color="drawer ? 'success' : 'error'" size="large" label>
                    <v-icon start>{{ drawer ? 'mdi-check' : 'mdi-close' }}</v-icon>
                    Drawer Status: {{ drawer ? 'OPEN' : 'CLOSED' }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                <v-icon start color="primary">mdi-code-tags</v-icon>
                Implementation Code
              </v-card-title>
              <v-card-text>
                <pre class="code-block">{{ codeExample }}</pre>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// State
const drawer = ref(false)

// Data
const products = ref([
  { id: 1, name: 'Laptops', icon: 'mdi-laptop' },
  { id: 2, name: 'Smartphones', icon: 'mdi-cellphone' },
  { id: 3, name: 'Tablets', icon: 'mdi-tablet' },
  { id: 4, name: 'Accessories', icon: 'mdi-headphones' }
])

const reports = ref([
  { id: 1, name: 'Sales Report', icon: 'mdi-chart-line' },
  { id: 2, name: 'Inventory Report', icon: 'mdi-package-variant' },
  { id: 3, name: 'Customer Analytics', icon: 'mdi-account-group' },
  { id: 4, name: 'Financial Summary', icon: 'mdi-cash-multiple' }
])

// Methods
const toggleDrawer = () => {
  drawer.value = !drawer.value
}

// Code example for display
const codeExample = computed(() => '<v-navigation-drawer\\n  v-model="drawer"\\n  :temporary="true"\\n  :disable-resize-watcher="true"\\n  :disable-route-watcher="true"\\n  :touchless="true"\\n  location="left"\\n  width="280"\\n  class="no-swipe-drawer"\\n>\\n  <!-- Your menu items here -->\\n</v-navigation-drawer>\\n\\n<' + 'script setup lang="ts">\\nimport { ref } from \'vue\'\\n\\nconst drawer = ref(false)\\n\\nconst toggleDrawer = () => {\\n  drawer.value = !drawer.value\\n}\\n<' + '/script>\\n\\n<style scoped>\\n.no-swipe-drawer {\\n  touch-action: none !important;\\n  -webkit-user-drag: none;\\n  user-select: none;\\n}\\n</style>')
</script>

<style scoped>
/* Prevent swipe gesture pada drawer */
.no-swipe-drawer {
  touch-action: none !important;
  -webkit-user-drag: none;
  user-select: none;
  overscroll-behavior: none;
}

/* Prevent touch events pada overlay */
:deep(.v-overlay__scrim) {
  touch-action: none;
  -webkit-touch-callout: none;
}

/* Main content styling */
.main-content {
  min-height: calc(100vh - 48px);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Code block styling */
.code-block {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #333;
}

/* Custom scrollbar */
.code-block::-webkit-scrollbar {
  height: 8px;
}

.code-block::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.code-block::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.code-block::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Mobile optimizations */
@media (max-width: 600px) {
  .code-block {
    font-size: 0.75rem;
  }
}
</style>
