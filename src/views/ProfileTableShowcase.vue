<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- Page Header -->
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-2">Responsive Profile Table</h1>
          <p class="text-h6 text-medium-emphasis">
            Complex v-table with adaptive sizing for all devices
          </p>
        </div>

        <!-- Profile Table Component -->
        <ProfileTable />

        <!-- Features Documentation -->
        <v-row class="mt-8">
          <v-col cols="12" md="6">
            <v-card elevation="2" class="h-100">
              <v-card-title class="bg-primary">
                <v-icon start>mdi-star</v-icon>
                Fitur Utama
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Responsive Ratio Elements</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Semua elemen (text, image, div) menyesuaikan ukuran dengan device
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Adaptive Typography</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Font size, line height, dan spacing disesuaikan otomatis
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Dynamic Avatar Sizing</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      48px (mobile) → 56px (tablet) → 48px (desktop)
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Smart Layout Switch</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Card layout untuk mobile, table layout untuk desktop
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Proportional Spacing</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Gap dan padding menyesuaikan dengan ukuran layar
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Responsive Controls</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Button, icon, chip disesuaikan ukurannya per device
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2" class="h-100">
              <v-card-title class="bg-secondary">
                <v-icon start>mdi-cellphone-link</v-icon>
                Responsive Breakpoints
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="info">mdi-cellphone</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Mobile (< 600px)</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Card layout, Avatar 48px, Text caption/body-2, Padding 12px, Gap 8px
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="info">mdi-tablet</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Tablet (600px - 959px)</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Table compact, Avatar 40-44px, Text caption/body-2, Padding 8-12px
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="info">mdi-tablet</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Desktop (960px - 1279px)</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Table comfortable, Avatar 44-48px, Text body-2, Padding 12-16px
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="info">mdi-monitor</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Large Desktop (1280px+)</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Table default, Avatar 48px, Text body-1/body-2, Padding 16px, Full features
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-divider class="my-4" />

                <div class="pa-3 bg-grey-lighten-4 rounded">
                  <div class="text-subtitle-2 mb-2 d-flex align-center">
                    <v-icon start size="small">mdi-lightbulb</v-icon>
                    Tips
                  </div>
                  <p class="text-caption mb-0">
                    Resize browser Anda untuk melihat bagaimana semua elemen (text, gambar,
                    button, spacing) menyesuaikan proporsinya secara otomatis. Tidak ada elemen
                    yang terlalu besar atau terlalu kecil di device manapun.
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Implementation Details -->
        <v-card class="mt-8" elevation="2">
          <v-card-title class="bg-success">
            <v-icon start>mdi-code-braces</v-icon>
            Detail Implementasi Responsive Ratio
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="primary">mdi-format-size</v-icon>
                  Typography Scaling
                </h3>
                <div class="text-body-2">
                  <p><strong>Mobile:</strong></p>
                  <ul class="ml-4">
                    <li>Titles: text-h6</li>
                    <li>Names: text-body-2</li>
                    <li>Details: text-caption</li>
                  </ul>
                  <p class="mt-2"><strong>Desktop:</strong></p>
                  <ul class="ml-4">
                    <li>Titles: text-h4</li>
                    <li>Names: text-body-1</li>
                    <li>Details: text-body-2</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="secondary">mdi-image-size-select-actual</v-icon>
                  Image & Avatar Ratio
                </h3>
                <div class="text-body-2">
                  <p><strong>Avatar Sizes:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: 48px</li>
                    <li>Tablet SM: 40px</li>
                    <li>Tablet MD: 44px</li>
                    <li>Desktop: 48px</li>
                  </ul>
                  <p class="mt-2"><strong>Icons:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: 14-16px</li>
                    <li>Desktop: 16-20px</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="accent">mdi-border-all-variant</v-icon>
                  Spacing & Padding
                </h3>
                <div class="text-body-2">
                  <p><strong>Padding:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: 12px (pa-3)</li>
                    <li>Tablet: 16px (pa-4)</li>
                    <li>Desktop: 20px (pa-5)</li>
                  </ul>
                  <p class="mt-2"><strong>Gaps:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: 4-8px</li>
                    <li>Desktop: 8-12px</li>
                  </ul>
                </div>
              </v-col>
            </v-row>

            <v-divider class="my-4" />

            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="warning">mdi-gesture-tap-button</v-icon>
                  Button & Chip Sizing
                </h3>
                <div class="text-body-2">
                  <p><strong>Buttons:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: x-small</li>
                    <li>Tablet/Desktop: small</li>
                  </ul>
                  <p class="mt-2"><strong>Chips:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: x-small</li>
                    <li>Desktop: small</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="error">mdi-table-settings</v-icon>
                  Table Density
                </h3>
                <div class="text-body-2">
                  <p><strong>Density Options:</strong></p>
                  <ul class="ml-4">
                    <li>Mobile: Card layout (no table)</li>
                    <li>Tablet SM: compact</li>
                    <li>Tablet MD: comfortable</li>
                    <li>Desktop: default</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Usage Example -->
        <v-card class="mt-8" elevation="2">
          <v-card-title class="bg-info">
            <v-icon start>mdi-code-tags</v-icon>
            Cara Penggunaan
          </v-card-title>
          <v-card-text>
            <p class="mb-4">
              Komponen ini menggunakan <code>useDisplay()</code> dari Vuetify untuk mendeteksi ukuran layar
              dan menyesuaikan semua elemen secara otomatis:
            </p>
            <v-sheet class="pa-4 bg-grey-darken-4 rounded" dark>
              <pre class="text-caption"><code>import { useDisplay } from 'vuetify'

          const display = useDisplay()

          // Computed properties untuk responsive sizing
          const titleClasses = computed(() => {
          return display.xs.value
          ? 'text-h6'
          : display.sm.value
          ? 'text-h5'
          : 'text-h4'
          })

          const avatarSize = computed(() => {
          return display.xs.value ? 48 :
          display.sm.value ? 40 :
          display.md.value ? 44 : 48
          })</code></pre>
            </v-sheet>

            <v-alert type="success" variant="tonal" class="mt-4">
              <div class="text-subtitle-2 mb-2">Keuntungan Pendekatan Ini</div>
              <ul class="text-body-2">
                <li>Semua elemen proporsional di setiap device</li>
                <li>Tidak ada overflow atau elemen terpotong</li>
                <li>Touch-friendly pada mobile</li>
                <li>Readable pada semua ukuran layar</li>
                <li>Smooth transition antar breakpoint</li>
              </ul>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ProfileTable from '@/components/ProfileTable.vue';
</script>

<style scoped>
code {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

pre code {
  background-color: transparent;
  padding: 0;
}

pre {
  margin: 0;
  overflow-x: auto;
}

.h-100 {
  height: 100%;
}
</style>
