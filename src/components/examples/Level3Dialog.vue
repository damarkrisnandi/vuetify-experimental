<template>
  <div class="pa-4">
    <v-alert type="success" variant="tonal" class="mb-4">
      <div class="d-flex align-center">
        <v-icon icon="mdi-layers-triple" class="mr-2" />
        <strong>Level 3 Dialog (Final Level)</strong>
      </div>
    </v-alert>

    <v-card variant="outlined" class="mb-4">
      <v-card-text>
        <h3 class="text-h6 mb-3">Final Confirmation</h3>
        <p class="mb-3">
          This is the deepest level of nested dialogs. You can collect final
          information here before closing all dialogs.
        </p>

        <v-text-field
          v-model="finalData"
          label="Final Data"
          variant="outlined"
          placeholder="Enter final confirmation data"
          class="mb-3"
        />

        <v-alert type="info" variant="tonal" density="compact">
          <strong>Tip:</strong> When this dialog closes, data will cascade back
          through Level 2 → Level 1 → Parent component
        </v-alert>
      </v-card-text>
    </v-card>

    <v-timeline side="end" density="compact" class="mb-4">
      <v-timeline-item
        dot-color="success"
        size="small"
        icon="mdi-check"
      >
        <strong>Parent Component</strong>
      </v-timeline-item>
      <v-timeline-item
        dot-color="success"
        size="small"
        icon="mdi-check"
      >
        <strong>Level 1 Dialog</strong>
      </v-timeline-item>
      <v-timeline-item
        dot-color="success"
        size="small"
        icon="mdi-check"
      >
        <strong>Level 2 Dialog</strong>
      </v-timeline-item>
      <v-timeline-item
        dot-color="primary"
        size="small"
        icon="mdi-cursor-pointer"
      >
        <strong>Level 3 Dialog (Current)</strong>
      </v-timeline-item>
    </v-timeline>

    <div class="d-flex gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        @click="handleCancel"
      >
        Cancel
      </v-btn>
      <v-btn
        color="success"
        variant="flat"
        prepend-icon="mdi-check-all"
        @click="handleConfirm"
      >
        Confirm & Close All
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  level1Data?: string
  level2Data?: string
}

const props = defineProps<Props>()

const finalData = ref('Final confirmation')

const handleConfirm = () => {
  props.dialogRef.close({
    confirmed: true,
    level: 3,
    finalData: finalData.value,
    level1Data: props.level1Data,
    level2Data: props.level2Data,
    timestamp: new Date().toISOString()
  })
}

const handleCancel = () => {
  props.dialogRef.close({
    confirmed: false,
    level: 3,
    cancelled: true
  })
}
</script>
