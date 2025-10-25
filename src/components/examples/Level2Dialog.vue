<template>
  <div class="pa-4">
    <v-alert type="info" variant="tonal" class="mb-4">
      <div class="d-flex align-center">
        <v-icon icon="mdi-layers" class="mr-2" />
        <strong>Level 2 Dialog (Middle Level)</strong>
      </div>
    </v-alert>

    <v-card variant="outlined" class="mb-4">
      <v-card-text>
        <h3 class="text-h6 mb-3">Additional Information</h3>
        <p class="mb-3">
          This is the second level dialog. You can continue to a third level
          or close with the current data.
        </p>

        <v-text-field
          v-model="level2Data"
          label="Level 2 Data"
          variant="outlined"
          placeholder="Enter data for level 2"
          class="mb-3"
        />

        <v-select
          v-model="selectedOption"
          :items="options"
          label="Select an option"
          variant="outlined"
          class="mb-3"
        />

        <v-alert type="warning" variant="tonal" density="compact" class="mb-3">
          <strong>Data from Level 1:</strong> {{ level1Data }}
        </v-alert>
      </v-card-text>
    </v-card>

    <v-card variant="outlined" class="mb-4 bg-blue-lighten-5">
      <v-card-text>
        <div class="d-flex align-center mb-2">
          <v-icon icon="mdi-information" color="info" class="mr-2" />
          <strong>Nested Dialog Demo</strong>
        </div>
        <p class="text-body-2">
          Click "Open Level 3" to see a dialog open on top of this one.
          This demonstrates 3-level nested dialogs.
        </p>
      </v-card-text>
    </v-card>

    <v-expansion-panels class="mb-4">
      <v-expansion-panel title="View Current Dialog Stack">
        <v-expansion-panel-text>
          <v-list density="compact">
            <v-list-item
              prepend-icon="mdi-numeric-1-circle"
              title="Level 1 Dialog"
              subtitle="Initial dialog with basic info"
            />
            <v-list-item
              prepend-icon="mdi-numeric-2-circle"
              title="Level 2 Dialog (Current)"
              subtitle="Additional information collection"
            />
            <v-list-item
              prepend-icon="mdi-numeric-3-circle-outline"
              title="Level 3 Dialog"
              subtitle="Not yet opened"
              :disabled="true"
            />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="d-flex gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        @click="handleCancel"
      >
        Cancel
      </v-btn>
      <v-btn
        color="info"
        variant="outlined"
        prepend-icon="mdi-arrow-right"
        @click="openLevel3Dialog"
      >
        Open Level 3
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        @click="handleConfirm"
      >
        Confirm & Close
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { dialogService } from '@/services'
import type { DialogRef } from '@/services'
import Level3Dialog from './Level3Dialog.vue'

interface Props {
  dialogRef: DialogRef
  level1Data?: string
}

const props = defineProps<Props>()

const level2Data = ref('Level 2 information')
const selectedOption = ref('Option A')
const options = ['Option A', 'Option B', 'Option C', 'Option D']

const openLevel3Dialog = () => {
  const level3Ref = dialogService.open(Level3Dialog, {
    title: 'Level 3 Dialog - Final Confirmation',
    width: '550px',
    props: {
      level1Data: props.level1Data,
      level2Data: level2Data.value
    }
  })

  level3Ref.onClose((data) => {
    if (data?.confirmed) {
      // If level 3 confirmed, close this dialog with all accumulated data
      props.dialogRef.close({
        confirmed: true,
        level: 2,
        fromLevel3: true,
        level2Data: level2Data.value,
        level3Data: data
      })
    }
    // If level 3 was cancelled, just stay on level 2
  })
}

const handleConfirm = () => {
  props.dialogRef.close({
    confirmed: true,
    level: 2,
    level2Data: level2Data.value,
    selectedOption: selectedOption.value,
    level1Data: props.level1Data
  })
}

const handleCancel = () => {
  props.dialogRef.close({
    confirmed: false,
    level: 2,
    cancelled: true
  })
}
</script>
