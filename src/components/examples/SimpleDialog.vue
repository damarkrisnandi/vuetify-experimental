<template>
  <div class="pa-4">
    <v-alert type="info" variant="tonal" class="mb-4">
      This is a simple dialog example demonstrating basic usage.
    </v-alert>

    <v-text-field
      v-model="message"
      label="Enter a message"
      variant="outlined"
      class="mb-4"
    />

    <p class="mb-4">
      You can pass data back to the parent component when closing the dialog.
    </p>

    <div class="d-flex gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        @click="handleCancel"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        @click="handleConfirm"
      >
        Confirm
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  defaultMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultMessage: 'Hello from dialog!'
})

const message = ref(props.defaultMessage)

const handleConfirm = () => {
  props.dialogRef.close({
    confirmed: true,
    message: message.value
  })
}

const handleCancel = () => {
  props.dialogRef.close({
    confirmed: false
  })
}
</script>
