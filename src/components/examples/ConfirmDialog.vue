<template>
  <div class="pa-4">
    <v-card-text class="px-0">
      <div class="text-center mb-4">
        <v-icon
          icon="mdi-alert-circle"
          size="64"
          color="warning"
        />
      </div>

      <h3 class="text-h6 mb-2 text-center">
        {{ title }}
      </h3>

      <p class="text-body-2 text-center mb-4">
        {{ message }}
      </p>

      <v-alert
        v-if="details"
        type="info"
        variant="tonal"
        density="compact"
      >
        {{ details }}
      </v-alert>
    </v-card-text>

    <div class="d-flex gap-2 justify-center">
      <v-btn
        color="grey"
        variant="text"
        @click="handleCancel"
      >
        {{ cancelText }}
      </v-btn>
      <v-btn
        :color="confirmColor"
        variant="flat"
        @click="handleConfirm"
      >
        {{ confirmText }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  title?: string
  message?: string
  details?: string
  confirmText?: string
  cancelText?: string
  confirmColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Confirm Action',
  message: 'Are you sure you want to proceed?',
  details: '',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmColor: 'warning'
})

const handleConfirm = () => {
  props.dialogRef.close({ confirmed: true })
}

const handleCancel = () => {
  props.dialogRef.close({ confirmed: false })
}
</script>
