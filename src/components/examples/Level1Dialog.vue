<template>
  <div class="pa-4">
    <v-alert type="primary" variant="tonal" class="mb-4">
      <div class="d-flex align-center">
        <v-icon icon="mdi-layer-plus" class="mr-2" />
        <strong>Level 1 Dialog (Entry Point)</strong>
      </div>
    </v-alert>

    <v-card variant="outlined" class="mb-4">
      <v-card-text>
        <h3 class="text-h6 mb-3">Nested Dialog Example</h3>
        <p class="mb-3">
          This is the first level dialog. From here, you can open a second level
          dialog, which in turn can open a third level dialog.
        </p>

        <v-text-field
          v-model="level1Data"
          label="Level 1 Data"
          variant="outlined"
          placeholder="Enter initial data"
          class="mb-3"
        />

        <v-textarea
          v-model="description"
          label="Description"
          variant="outlined"
          rows="3"
          placeholder="Enter a description"
          class="mb-3"
        />

        <v-chip-group
          v-model="selectedTags"
          multiple
          column
          class="mb-3"
        >
          <v-chip
            v-for="tag in availableTags"
            :key="tag"
            :value="tag"
            filter
            variant="outlined"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>

    <v-card variant="outlined" class="mb-4 bg-purple-lighten-5">
      <v-card-text>
        <div class="d-flex align-center mb-2">
          <v-icon icon="mdi-layers-triple-outline" color="purple" class="mr-2" />
          <strong>Nested Dialogs Feature</strong>
        </div>
        <p class="text-body-2 mb-2">
          This demonstrates the ability to open dialogs within dialogs up to 3 levels deep:
        </p>
        <ul class="text-body-2">
          <li><strong>Level 1:</strong> Initial data collection (current)</li>
          <li><strong>Level 2:</strong> Additional information</li>
          <li><strong>Level 3:</strong> Final confirmation</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-alert type="info" variant="tonal" density="compact" class="mb-4">
      <strong>Try it:</strong> Click "Open Level 2" to see nested dialogs in action.
      Each level can pass data to the next and receive data back when closed.
    </v-alert>

    <div class="d-flex gap-2 justify-end">
      <v-btn
        color="grey"
        variant="text"
        @click="handleCancel"
      >
        Cancel
      </v-btn>
      <v-btn
        color="purple"
        variant="outlined"
        prepend-icon="mdi-arrow-right"
        @click="openLevel2Dialog"
        :disabled="!level1Data"
      >
        Open Level 2
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
import { dialogService } from '@/services'
import type { DialogRef } from '@/services'
import Level2Dialog from './Level2Dialog.vue'

interface Props {
  dialogRef: DialogRef
  initialData?: string
}

const props = defineProps<Props>()

const level1Data = ref(props.initialData || 'Level 1 data')
const description = ref('This is an example of nested dialogs working together.')
const selectedTags = ref<string[]>(['Important'])
const availableTags = ['Important', 'Urgent', 'Review', 'Approved', 'Pending']

const openLevel2Dialog = () => {
  const level2Ref = dialogService.open(Level2Dialog, {
    title: 'Level 2 Dialog - Additional Info',
    width: '600px',
    props: {
      level1Data: level1Data.value
    }
  })

  level2Ref.onClose((data) => {
    if (data?.confirmed) {
      // If level 2 confirmed (possibly after level 3), close this dialog too
      props.dialogRef.close({
        confirmed: true,
        level: 1,
        fromLevel2: true,
        level1Data: level1Data.value,
        description: description.value,
        tags: selectedTags.value,
        level2Data: data
      })
    }
    // If level 2 was cancelled, just stay on level 1
  })
}

const handleConfirm = () => {
  props.dialogRef.close({
    confirmed: true,
    level: 1,
    level1Data: level1Data.value,
    description: description.value,
    tags: selectedTags.value
  })
}

const handleCancel = () => {
  props.dialogRef.close({
    confirmed: false,
    level: 1,
    cancelled: true
  })
}
</script>
