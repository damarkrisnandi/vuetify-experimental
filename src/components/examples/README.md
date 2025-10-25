# Dialog Examples

This folder contains example dialog components that demonstrate various use cases for the DialogService.

## Examples

### SimpleDialog.vue
A basic dialog with text input and action buttons. Demonstrates:
- Basic dialog structure
- Passing props
- Returning data when closing
- Form controls in dialogs

### UserFormDialog.vue
A complex form dialog with validation. Demonstrates:
- Form validation
- Multiple field types (text, email, select, textarea, switch)
- Form submission handling
- Validation rules
- Error handling

### ConfirmDialog.vue
A reusable confirmation dialog. Demonstrates:
- Reusable dialog patterns
- Customizable messages
- Icon usage
- Warning/destructive actions
- Configurable button colors and text

### ComplexDialog.vue
An advanced dialog with multiple features. Demonstrates:
- Tabs (v-tabs)
- Expansion panels
- Multiple sections
- Complex state management
- Various Vuetify components
- Returning complex data structures

## Creating Your Own Dialog Component

All dialog components should follow this pattern:

```vue
<template>
  <div class="pa-4">
    <!-- Your dialog content -->
    <v-btn @click="dialogRef.close()">Close</v-btn>
  </div>
</template>

<script setup lang="ts">
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  // Your custom props
}

const props = defineProps<Props>()
</script>
```

## Key Points

1. **Always accept `dialogRef` prop** - This is how you close the dialog and pass data back
2. **Use padding** - Add padding to your content (e.g., `pa-4`)
3. **Close with data** - Use `dialogRef.close(data)` to pass data back
4. **TypeScript types** - Define proper prop types for better DX
5. **Vuetify components** - Use any Vuetify components in your dialog

## Tips

- Keep dialogs focused on a single task
- Use clear action buttons
- Provide visual feedback for actions
- Handle both success and cancel scenarios
- Return meaningful data when closing
- Use validation for forms
- Consider mobile/responsive design
