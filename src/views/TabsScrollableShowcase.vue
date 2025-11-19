<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-2">Tabs with Scrollable Tables</h1>
          <p class="text-h6 text-medium-emphasis">
            3 Tabs dengan tabel yang memiliki horizontal scroll tanpa menggeser tab
          </p>
        </div>

        <!-- Component -->
        <TabsWithScrollableTables />

        <!-- Documentation -->
        <v-row class="mt-8">
          <v-col cols="12" md="6">
            <v-card elevation="2">
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
                      <strong>Independent Horizontal Scroll</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Scroll horizontal pada tabel tidak mempengaruhi tab navigation
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Sticky First Column</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Kolom pertama tetap visible saat scroll horizontal
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Sticky Actions Column</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Kolom actions di kanan tetap visible saat scroll
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Fixed Tab Header</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Tab navigation tetap fixed di atas, tidak ikut scroll
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>Touch-Friendly</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Support swipe horizontal untuk scroll tabel di mobile
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>
                      <strong>20+ Columns Per Table</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Setiap tab memiliki tabel dengan banyak kolom
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="2">
              <v-card-title class="bg-secondary">
                <v-icon start>mdi-code-braces</v-icon>
                Implementasi Teknis
              </v-card-title>
              <v-card-text>
                <h3 class="text-h6 mb-3">CSS Tricks</h3>
                <v-list density="compact">
                  <v-list-item>
                    <v-list-item-title>
                      <code>overflow-x: auto</code> - Horizontal scroll pada wrapper
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <code>touch-action: pan-x</code> - Hanya scroll horizontal
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <code>position: sticky</code> - Fixed kolom pertama & actions
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <code>z-index</code> - Layer management untuk sticky elements
                    </v-list-item-title>
                  </v-list-item>
                </v-list>

                <h3 class="text-h6 mb-3 mt-4">Struktur DOM</h3>
                <v-sheet class="pa-3 bg-grey-lighten-4 rounded">
                  <pre class="text-caption"><code>v-tabs (fixed-tabs)
            └── v-window
            ├── v-window-item
            │ └── .table-wrapper (overflow-x: auto)
            │ └── v-table (.wide-table)
            │ ├── sticky-col (left: 0)
            │ └── actions-col (right: 0)</code></pre>
                </v-sheet>

                <v-alert type="info" variant="tonal" class="mt-4">
                  <div class="text-subtitle-2 mb-2">Key Point</div>
                  <p class="text-body-2 mb-0">
                    Wrapper table menggunakan <code>touch-action: pan-x</code> untuk
                    memastikan horizontal scroll tidak trigger tab swipe gesture.
                  </p>
                </v-alert>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Details per Tab -->
        <v-card class="mt-8" elevation="2">
          <v-card-title class="bg-success">
            <v-icon start>mdi-table</v-icon>
            Detail Tabel per Tab
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="primary">mdi-cart</v-icon>
                  Sales Data Tab
                </h3>
                <div class="text-body-2">
                  <p><strong>20 Kolom:</strong></p>
                  <ul class="ml-4">
                    <li>Order ID (Sticky)</li>
                    <li>Customer Info (Name, Email, Phone)</li>
                    <li>Product Details</li>
                    <li>Pricing (Unit, Discount, Tax, Shipping)</li>
                    <li>Payment Info</li>
                    <li>Order Status & Dates</li>
                    <li>Shipping Details</li>
                    <li>Actions (Sticky Right)</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="secondary">mdi-warehouse</v-icon>
                  Inventory Tab
                </h3>
                <div class="text-body-2">
                  <p><strong>21 Kolom:</strong></p>
                  <ul class="ml-4">
                    <li>SKU (Sticky)</li>
                    <li>Product Details (Name, Brand, Category)</li>
                    <li>Supplier & Warehouse Info</li>
                    <li>Stock Levels (Current, Min, Max, Reorder)</li>
                    <li>Pricing (Cost, Selling, Margin)</li>
                    <li>Batch & Expiry Info</li>
                    <li>Barcode</li>
                    <li>Status & Actions (Sticky Right)</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <h3 class="text-h6 mb-3">
                  <v-icon start color="accent">mdi-chart-line</v-icon>
                  Analytics Tab
                </h3>
                <div class="text-body-2">
                  <p><strong>20 Kolom:</strong></p>
                  <ul class="ml-4">
                    <li>Date (Sticky)</li>
                    <li>Sales Metrics (Total, Orders, AOV)</li>
                    <li>Customer Metrics (New, Returning)</li>
                    <li>Revenue & Profit</li>
                    <li>Website Metrics (Views, Visitors, Bounce)</li>
                    <li>Marketing (Email, Click Rate)</li>
                    <li>Customer Satisfaction Rating</li>
                    <li>Trend Indicators</li>
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
              Import dan gunakan komponen:
            </p>
            <v-sheet class="pa-4 bg-grey-darken-4 rounded" dark>
              <pre class="text-caption"><code>&lt;template&gt;
          &lt;TabsWithScrollableTables /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import TabsWithScrollableTables from '@/components/TabsWithScrollableTables.vue'
          &lt;/script&gt;</code></pre>
            </v-sheet>

            <v-alert type="success" variant="tonal" class="mt-4">
              <div class="text-subtitle-2 mb-2">Tips Penggunaan</div>
              <ul class="text-body-2">
                <li>Scroll horizontal pada tabel untuk melihat semua kolom</li>
                <li>Kolom pertama dan actions akan tetap terlihat saat scroll</li>
                <li>Klik tab untuk berpindah antar tabel</li>
                <li>Di mobile, swipe horizontal hanya akan scroll tabel, bukan pindah tab</li>
                <li>Data sample di-generate otomatis untuk demo</li>
              </ul>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TabsWithScrollableTables from '@/components/TabsWithScrollableTables.vue';
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
</style>
