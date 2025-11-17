<template>
  <v-container>
    <v-tabs v-model="activeTab" color="primary" class="custom-tabs" show-arrows height="auto">
      <v-tab value="tab1" class="tab-item">
        <v-icon start>mdi-home</v-icon>
        Home
      </v-tab>

      <v-tab value="tab2" class="tab-item">
        <v-icon start>mdi-account</v-icon>
        Profile
      </v-tab>

      <v-tab value="tab3" class="tab-item">
        <v-icon start>mdi-settings</v-icon>
        Settings
      </v-tab>

      <v-tab value="tab4" class="tab-item">
        <v-icon start>mdi-help-circle</v-icon>
        Help
      </v-tab>
    </v-tabs>

    <!-- Tab Content -->
    <v-window v-model="activeTab" class="mt-6">
      <v-window-item value="tab1">
        <v-card elevation="2">
          <v-card-text class="tab-content">
            <h2 class="mb-4">Home Dashboard</h2>
            <p>Welcome to your home dashboard. Here you can see an overview of your account and recent activities.</p>
            <v-chip color="success" class="mt-2">
              <v-icon start>mdi-check</v-icon>
              All systems operational
            </v-chip>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="tab2">
        <v-card elevation="2">
          <v-card-text class="tab-content">
            <h2 class="mb-4">User Profile</h2>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Full Name" variant="outlined" value="John Doe" readonly />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Email" variant="outlined" value="john.doe@example.com" readonly />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="tab3">
        <v-card elevation="2">
          <v-card-text class="tab-content">
            <h2 class="mb-4">Settings</h2>
            <v-list>
              <v-list-item>
                <v-list-item-title>Notifications</v-list-item-title>
                <template #append>
                  <v-switch color="primary" />
                </template>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Dark Mode</v-list-item-title>
                <template #append>
                  <v-switch color="primary" />
                </template>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Auto-save</v-list-item-title>
                <template #append>
                  <v-switch color="primary" model-value />
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="tab4">
        <v-card elevation="2">
          <v-card-text class="tab-content">
            <h2 class="mb-4">Help & Support</h2>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <v-icon start>mdi-frequently-asked-questions</v-icon>
                  Frequently Asked Questions
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Find answers to the most common questions about our platform.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <v-icon start>mdi-message</v-icon>
                  Contact Support
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Get in touch with our support team for personalized assistance.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('tab1')
</script>

<style scoped>
.custom-tabs {
  background: transparent;
  height: auto !important;
  min-height: auto !important;
}

/* Override Vuetify's default tab container behavior */
.custom-tabs :deep(.v-tabs) {
  height: auto !important;
}

.custom-tabs :deep(.v-slide-group) {
  height: auto !important;
}

.custom-tabs :deep(.v-slide-group__wrapper) {
  height: auto !important;
}

.custom-tabs :deep(.v-slide-group__content) {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center;
  gap: 8px;
  width: 100% !important;
  height: auto !important;
  align-items: flex-start;
}

.tab-content {
  min-height: 300px;
}

.tab-item {
  flex: 1 1 auto;
  min-width: 140px;
  max-width: 200px;
  height: 56px !important;
  min-height: 56px !important;
  margin: 0 !important;
}

/* Desktop: Prefer single row but allow wrapping */
@media (min-width: 768px) {
  .tab-item {
    flex: 1 1 200px;
    min-width: 180px;
    max-width: 250px;
    height: 56px !important;
    min-height: 56px !important;
  }
}

/* Mobile: Force 2x2 grid layout */
@media (max-width: 767px) {
  .tab-item {
    flex: 1 1 calc(50% - 4px);
    min-width: calc(50% - 4px);
    max-width: calc(50% - 4px);
    height: 56px !important;
    min-height: 56px !important;
  }
}

/* Smooth transitions */
.tab-button {
  transition: all 0.3s ease;
}

.tab-content {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
