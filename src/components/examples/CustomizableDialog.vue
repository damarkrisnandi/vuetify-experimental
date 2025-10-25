<template>
  <div class="pa-6">
    <!-- Custom Header with Close Button (since dialog is headerless) -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <v-icon icon="mdi-palette" size="32" color="orange" class="mr-3" />
        <div>
          <h2 class="text-h5 mb-1">Fully Customizable Dialog</h2>
          <p class="text-body-2 text-grey mb-0">All Features Demonstration</p>
        </div>
      </div>
      <v-btn
        icon="mdi-close"
        variant="text"
        size="small"
        @click="handleCancel"
      />
    </div>

    <v-divider class="mb-4" />

    <!-- Header Section -->
    <v-alert type="info" variant="tonal" class="mb-4">
      <div class="d-flex align-center">
        <v-icon icon="mdi-information" class="mr-2" />
        <strong>Dialog Service - Complete Example</strong>
      </div>
      <p class="text-body-2 mt-2 mb-0">
        This dialog demonstrates all customization options available in the Dialog Service.
      </p>
    </v-alert>

    <!-- Main Content Tabs -->
    <v-tabs v-model="currentTab" bg-color="primary" class="mb-4">
      <v-tab value="config">Configuration</v-tab>
      <v-tab value="content">Content</v-tab>
      <v-tab value="actions">Actions</v-tab>
    </v-tabs>

    <v-window v-model="currentTab">
      <!-- Configuration Tab -->
      <v-window-item value="config">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-3">Dialog Configuration</h3>
            
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-ruler" color="primary" />
                </template>
                <v-list-item-title>Width</v-list-item-title>
                <v-list-item-subtitle>{{ dialogConfig.width }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-lock" color="warning" />
                </template>
                <v-list-item-title>Persistent</v-list-item-title>
                <v-list-item-subtitle>{{ dialogConfig.persistent ? 'Yes' : 'No' }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-arrow-vertical-lock" color="info" />
                </template>
                <v-list-item-title>Scrollable</v-list-item-title>
                <v-list-item-subtitle>{{ dialogConfig.scrollable ? 'Yes' : 'No' }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-fullscreen" color="success" />
                </template>
                <v-list-item-title>Fullscreen</v-list-item-title>
                <v-list-item-subtitle>{{ dialogConfig.fullscreen ? 'Yes' : 'No' }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-layers" color="purple" />
                </template>
                <v-list-item-title>Z-Index</v-list-item-title>
                <v-list-item-subtitle>{{ dialogConfig.zIndex || 'Default' }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-window-item>

      <!-- Content Tab -->
      <v-window-item value="content">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-3">Custom Content</h3>

            <v-text-field
              v-model="formData.title"
              label="Title"
              variant="outlined"
              prepend-inner-icon="mdi-format-title"
              class="mb-3"
            />

            <v-textarea
              v-model="formData.description"
              label="Description"
              variant="outlined"
              prepend-inner-icon="mdi-text"
              rows="4"
              class="mb-3"
            />

            <v-select
              v-model="formData.category"
              :items="categories"
              label="Category"
              variant="outlined"
              prepend-inner-icon="mdi-tag"
              class="mb-3"
            />

            <v-slider
              v-model="formData.priority"
              label="Priority"
              :min="1"
              :max="10"
              :step="1"
              thumb-label
              show-ticks="always"
              class="mb-3"
            />

            <v-switch
              v-model="formData.enabled"
              label="Enable Feature"
              color="primary"
              class="mb-3"
            />

            <v-file-input
              v-model="formData.attachments"
              label="Attachments"
              variant="outlined"
              prepend-icon="mdi-paperclip"
              multiple
              chips
            />
          </v-card-text>
        </v-card>
      </v-window-item>

      <!-- Actions Tab -->
      <v-window-item value="actions">
        <v-card flat>
          <v-card-text>
            <h3 class="text-h6 mb-3">Available Actions</h3>

            <v-card variant="outlined" class="mb-3">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-open-in-new" color="primary" class="mr-2" />
                  <strong>Open Nested Dialog</strong>
                </div>
                <p class="text-body-2 mb-2">
                  Demonstrate opening another dialog from this one.
                </p>
                <v-btn
                  color="primary"
                  variant="outlined"
                  size="small"
                  @click="openNestedDialog"
                >
                  Open Nested
                </v-btn>
              </v-card-text>
            </v-card>

            <v-card variant="outlined" class="mb-3">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-content-copy" color="info" class="mr-2" />
                  <strong>Copy Configuration</strong>
                </div>
                <p class="text-body-2 mb-2">
                  Copy the dialog configuration to clipboard.
                </p>
                <v-btn
                  color="info"
                  variant="outlined"
                  size="small"
                  @click="copyConfig"
                >
                  Copy Config
                </v-btn>
              </v-card-text>
            </v-card>

            <v-card variant="outlined">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-refresh" color="warning" class="mr-2" />
                  <strong>Reset Form</strong>
                </div>
                <p class="text-body-2 mb-2">
                  Reset all form fields to default values.
                </p>
                <v-btn
                  color="warning"
                  variant="outlined"
                  size="small"
                  @click="resetForm"
                >
                  Reset
                </v-btn>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>

    <!-- Props Display -->
    <v-card variant="outlined" class="mt-4 mb-4 bg-grey-lighten-5">
      <v-card-text>
        <div class="d-flex align-center mb-2">
          <v-icon icon="mdi-code-json" color="orange" class="mr-2" />
          <strong>Received Props</strong>
        </div>
        <pre class="text-body-2">{{ JSON.stringify(receivedProps, null, 2) }}</pre>
      </v-card-text>
    </v-card>

    <!-- Progress Section -->
    <v-card variant="outlined" class="mb-4">
      <v-card-text>
        <h4 class="text-subtitle-1 mb-2">Form Completion</h4>
        <v-progress-linear
          :model-value="completionPercentage"
          :color="completionColor"
          height="20"
          rounded
        >
          <template #default>
            <strong>{{ completionPercentage }}%</strong>
          </template>
        </v-progress-linear>
      </v-card-text>
    </v-card>

    <!-- Action Buttons -->
    <v-divider class="my-4" />

    <div class="d-flex flex-wrap gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        prepend-icon="mdi-cancel"
        @click="handleCancel"
      >
        Cancel
      </v-btn>
      
      <v-btn
        color="orange"
        variant="outlined"
        prepend-icon="mdi-content-save-outline"
        @click="handleSaveDraft"
      >
        Save Draft
      </v-btn>

      <v-btn
        color="info"
        variant="outlined"
        prepend-icon="mdi-eye"
        @click="handlePreview"
      >
        Preview
      </v-btn>

      <v-btn
        color="success"
        variant="flat"
        prepend-icon="mdi-check-circle"
        @click="handleSubmit"
        :disabled="completionPercentage < 50"
      >
        Submit
      </v-btn>
    </div>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.message }}
      <template #actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { dialogService } from '@/services'
import type { DialogRef } from '@/services'
import SimpleDialog from './SimpleDialog.vue'

interface Props {
  dialogRef: DialogRef
  customTitle?: string
  customMessage?: string
  theme?: string
  showAdvanced?: boolean
  initialData?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  customTitle: 'Default Title',
  customMessage: 'Default message',
  theme: 'default',
  showAdvanced: true,
  initialData: () => ({})
})

// Store received props for display
const receivedProps = {
  customTitle: props.customTitle,
  customMessage: props.customMessage,
  theme: props.theme,
  showAdvanced: props.showAdvanced,
  initialData: props.initialData
}

// Current tab
const currentTab = ref('config')

// Dialog configuration
const dialogConfig = reactive({
  width: '800px',
  maxWidth: '90vw',
  persistent: false,
  scrollable: true,
  fullscreen: false,
  zIndex: undefined
})

// Form data
const formData = reactive({
  title: props.initialData.title || '',
  description: props.initialData.description || '',
  category: props.initialData.category || '',
  priority: props.initialData.priority || 5,
  enabled: props.initialData.enabled || false,
  attachments: [] as File[]
})

// Categories
const categories = [
  'Development',
  'Design',
  'Marketing',
  'Sales',
  'Support',
  'Other'
]

// Snackbar
const snackbar = reactive({
  show: false,
  message: '',
  color: 'success'
})

// Computed completion percentage
const completionPercentage = computed(() => {
  let completed = 0
  const total = 6

  if (formData.title) completed++
  if (formData.description) completed++
  if (formData.category) completed++
  if (formData.priority !== 5) completed++
  if (formData.enabled) completed++
  if (formData.attachments.length > 0) completed++

  return Math.round((completed / total) * 100)
})

// Completion color
const completionColor = computed(() => {
  if (completionPercentage.value < 30) return 'error'
  if (completionPercentage.value < 70) return 'warning'
  return 'success'
})

// Open nested dialog
const openNestedDialog = () => {
  const nestedRef = dialogService.open(SimpleDialog, {
    title: 'Nested Dialog from Customizable Dialog',
    width: '500px',
    props: {
      defaultMessage: 'This dialog was opened from the customizable dialog!'
    }
  })

  nestedRef.onClose((data) => {
    if (data?.confirmed) {
      showSnackbar('Nested dialog confirmed!', 'success')
    }
  })
}

// Copy configuration
const copyConfig = () => {
  const config = {
    dialogConfig,
    formData: { ...formData, attachments: formData.attachments.length }
  }
  
  navigator.clipboard.writeText(JSON.stringify(config, null, 2))
  showSnackbar('Configuration copied to clipboard!', 'info')
}

// Reset form
const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.category = ''
  formData.priority = 5
  formData.enabled = false
  formData.attachments = []
  showSnackbar('Form reset to defaults', 'warning')
}

// Show snackbar
const showSnackbar = (message: string, color: string) => {
  snackbar.message = message
  snackbar.color = color
  snackbar.show = true
}

// Handle cancel
const handleCancel = () => {
  props.dialogRef.close({
    action: 'cancelled',
    timestamp: new Date().toISOString()
  })
}

// Handle save draft
const handleSaveDraft = () => {
  showSnackbar('Draft saved successfully!', 'success')
  
  setTimeout(() => {
    props.dialogRef.close({
      action: 'draft_saved',
      data: { ...formData },
      timestamp: new Date().toISOString()
    })
  }, 1000)
}

// Handle preview
const handlePreview = () => {
  showSnackbar('Preview mode activated', 'info')
  currentTab.value = 'content'
}

// Handle submit
const handleSubmit = () => {
  if (completionPercentage.value < 50) {
    showSnackbar('Please complete at least 50% of the form', 'error')
    return
  }

  showSnackbar('Submitting...', 'success')

  setTimeout(() => {
    props.dialogRef.close({
      action: 'submitted',
      data: { ...formData },
      config: { ...dialogConfig },
      receivedProps,
      completionPercentage: completionPercentage.value,
      timestamp: new Date().toISOString()
    })
  }, 1000)
}
</script>

<style scoped>
pre {
  overflow-x: auto;
  font-size: 0.75rem;
  line-height: 1.4;
  background-color: transparent;
  padding: 8px;
  border-radius: 4px;
}

.gap-2 {
  gap: 8px;
}
</style>
