<template>
  <div class="pa-4">
    <v-tabs v-model="tab" bg-color="primary" class="mb-4">
      <v-tab value="info">Info</v-tab>
      <v-tab value="settings">Settings</v-tab>
      <v-tab value="advanced">Advanced</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="info">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-2">Product Information</h3>
            <p class="mb-4">
              This dialog demonstrates complex content with multiple tabs,
              cards, and interactive elements.
            </p>

            <v-list>
              <v-list-item
                prepend-icon="mdi-package-variant"
                title="Product Name"
                subtitle="Vuetify Dialog Service"
              />
              <v-list-item
                prepend-icon="mdi-tag"
                title="Version"
                subtitle="1.0.0"
              />
              <v-list-item
                prepend-icon="mdi-account"
                title="Created By"
                subtitle="Dialog Service Team"
              />
            </v-list>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="settings">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-4">Settings</h3>

            <v-switch
              v-model="settings.darkMode"
              label="Dark Mode"
              color="primary"
              class="mb-2"
            />

            <v-switch
              v-model="settings.notifications"
              label="Enable Notifications"
              color="primary"
              class="mb-2"
            />

            <v-slider
              v-model="settings.volume"
              label="Volume"
              :min="0"
              :max="100"
              :step="1"
              thumb-label
              class="mb-4"
            />

            <v-select
              v-model="settings.language"
              :items="['English', 'Spanish', 'French', 'German']"
              label="Language"
              variant="outlined"
            />
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="advanced">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-4">Advanced Options</h3>

            <v-expansion-panels>
              <v-expansion-panel title="Developer Options">
                <v-expansion-panel-text>
                  <v-checkbox
                    v-model="advanced.debugMode"
                    label="Debug Mode"
                    color="primary"
                  />
                  <v-checkbox
                    v-model="advanced.verboseLogs"
                    label="Verbose Logs"
                    color="primary"
                  />
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel title="Performance">
                <v-expansion-panel-text>
                  <v-checkbox
                    v-model="advanced.caching"
                    label="Enable Caching"
                    color="primary"
                  />
                  <v-checkbox
                    v-model="advanced.lazyLoad"
                    label="Lazy Loading"
                    color="primary"
                  />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>

    <v-divider class="my-4" />

    <div class="d-flex gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        @click="dialogRef.close()"
      >
        Close
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        @click="handleApply"
      >
        Apply Changes
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
}

const props = defineProps<Props>()

const tab = ref('info')

const settings = reactive({
  darkMode: false,
  notifications: true,
  volume: 50,
  language: 'English'
})

const advanced = reactive({
  debugMode: false,
  verboseLogs: false,
  caching: true,
  lazyLoad: true
})

const handleApply = () => {
  props.dialogRef.close({
    settings,
    advanced
  })
}
</script>
