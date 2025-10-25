<template>
  <div class="pa-4">
    <v-form ref="formRef" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="formData.name"
        label="Name *"
        :rules="[rules.required]"
        variant="outlined"
        class="mb-3"
      />

      <v-text-field
        v-model="formData.email"
        label="Email *"
        type="email"
        :rules="[rules.required, rules.email]"
        variant="outlined"
        class="mb-3"
      />

      <v-select
        v-model="formData.role"
        :items="roles"
        label="Role *"
        :rules="[rules.required]"
        variant="outlined"
        class="mb-3"
      />

      <v-textarea
        v-model="formData.bio"
        label="Bio"
        variant="outlined"
        rows="3"
        class="mb-3"
      />

      <v-switch
        v-model="formData.notifications"
        label="Enable notifications"
        color="primary"
        class="mb-4"
      />

      <div class="d-flex gap-2 justify-end">
        <v-btn
          color="grey"
          variant="text"
          @click="dialogRef.close()"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          variant="flat"
          type="submit"
        >
          Save User
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  user?: {
    name?: string
    email?: string
    role?: string
    bio?: string
    notifications?: boolean
  }
}

const props = withDefaults(defineProps<Props>(), {
  user: () => ({})
})

const formRef = ref()
const roles = ['Admin', 'User', 'Manager', 'Developer']

const formData = reactive({
  name: props.user?.name || '',
  email: props.user?.email || '',
  role: props.user?.role || '',
  bio: props.user?.bio || '',
  notifications: props.user?.notifications || false
})

const rules = {
  required: (value: string) => !!value || 'This field is required',
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Invalid email address'
  }
}

const handleSubmit = async () => {
  const { valid } = await formRef.value.validate()
  
  if (valid) {
    props.dialogRef.close({
      success: true,
      data: { ...formData }
    })
  }
}
</script>
