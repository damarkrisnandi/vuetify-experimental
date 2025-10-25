# Dialog Service for Vuetify

A powerful and flexible Dialog Service for Vuetify 3, inspired by PrimeNG's DynamicDialog. This service allows you to programmatically open dialogs with any Vue component, making it easy to create dynamic, reusable dialog workflows in your application.

## Features

- 🚀 **Programmatic Dialog Opening** - Open dialogs from any component without template declarations
- 🎯 **Type-Safe** - Full TypeScript support with proper type definitions
- 🔄 **Data Exchange** - Pass props to dialogs and receive data back when they close
- 🎨 **Highly Configurable** - Control width, persistence, scrolling, fullscreen, and more
- 📦 **Multiple Dialogs** - Support for multiple simultaneous dialogs
- 🧩 **Component-Based** - Use any Vue component as dialog content
- ♻️ **Reusable** - Create reusable dialog components for common patterns

## Installation

The Dialog Service is already set up in this project. All necessary files are in place:

```
src/
├── services/
│   ├── dialog.service.ts    # Main service implementation
│   ├── dialog.types.ts       # TypeScript type definitions
│   └── index.ts              # Service exports
├── components/
│   ├── DialogContainer.vue   # Container component (required in App.vue)
│   └── examples/             # Example dialog components
└── views/
    └── DialogShowcase.vue    # Demo and documentation
```

## Quick Start

### 1. Setup DialogContainer

Add the `DialogContainer` component to your `App.vue`:

```vue
<template>
  <v-app>
    <v-main>
      <!-- Your app content -->
    </v-main>
    
    <!-- Required: Dialog Container -->
    <DialogContainer />
  </v-app>
</template>

<script setup lang="ts">
import DialogContainer from '@/components/DialogContainer.vue'
</script>
```

### 2. Create a Dialog Component

Create any Vue component to use as dialog content. The component will receive a `dialogRef` prop:

```vue
<!-- MyDialog.vue -->
<template>
  <div class="pa-4">
    <p>{{ message }}</p>
    <v-btn @click="handleClose">Close</v-btn>
  </div>
</template>

<script setup lang="ts">
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Hello!'
})

const handleClose = () => {
  props.dialogRef.close({ result: 'success' })
}
</script>
```

### 3. Open the Dialog

Use the `dialogService` to open your dialog from any component:

```vue
<script setup lang="ts">
import { dialogService } from '@/services'
import MyDialog from './MyDialog.vue'

const openDialog = () => {
  const dialogRef = dialogService.open(MyDialog, {
    title: 'My Dialog',
    width: '500px',
    props: {
      message: 'Custom message'
    }
  })

  // Optional: Listen for dialog close
  dialogRef.onClose((data) => {
    console.log('Dialog closed with:', data)
  })
}
</script>

<template>
  <v-btn @click="openDialog">Open Dialog</v-btn>
</template>
```

## API Reference

### DialogService

The main service for managing dialogs.

#### Methods

##### `open(component, config): DialogRef`

Opens a new dialog with the specified component.

**Parameters:**
- `component` (Component) - The Vue component to render in the dialog
- `config` (DialogConfig) - Configuration options for the dialog

**Returns:** `DialogRef` - A reference to control the dialog

**Example:**
```typescript
const dialogRef = dialogService.open(MyComponent, {
  title: 'Dialog Title',
  width: '600px',
  persistent: true,
  props: {
    customProp: 'value'
  }
})
```

##### `close(id, data?): void`

Closes a specific dialog by its ID.

**Parameters:**
- `id` (string) - The dialog ID
- `data` (any, optional) - Data to pass to the onClose callback

##### `closeAll(): void`

Closes all open dialogs.

### DialogConfig

Configuration options for opening a dialog.

```typescript
interface DialogConfig {
  title?: string              // Dialog title (default: 'Dialog')
  width?: string | number     // Dialog width (default: '500px')
  maxWidth?: string | number  // Maximum width (default: '90vw')
  persistent?: boolean        // Prevent closing by clicking outside (default: false)
  scrollable?: boolean        // Enable scrollable content (default: true)
  fullscreen?: boolean        // Show in fullscreen (default: false)
  transition?: string         // Animation transition type (default: 'dialog-bottom-transition')
  props?: Record<string, any> // Props to pass to the component (default: {})
  showHeader?: boolean        // Show dialog header (default: true)
  showCloseButton?: boolean   // Show close button (default: true)
  class?: string              // Custom CSS class
  style?: Record<string, any> // Custom inline styles
  zIndex?: number             // Z-index for the dialog
}
```

### DialogRef

A reference to control an open dialog.

#### Methods

##### `close(data?): void`

Closes the dialog and optionally passes data back.

**Parameters:**
- `data` (any, optional) - Data to pass to the onClose callback

**Example:**
```typescript
dialogRef.close({ success: true, message: 'Saved!' })
```

##### `onClose(callback): void`

Registers a callback to be called when the dialog closes.

**Parameters:**
- `callback` (Function) - Function to call when dialog closes

**Example:**
```typescript
dialogRef.onClose((data) => {
  console.log('Dialog closed with:', data)
  if (data?.success) {
    // Handle success
  }
})
```

## Usage Examples

### Simple Dialog

```typescript
import { dialogService } from '@/services'
import SimpleDialog from './SimpleDialog.vue'

const openSimpleDialog = () => {
  const dialogRef = dialogService.open(SimpleDialog, {
    title: 'Simple Dialog',
    width: '500px'
  })
  
  dialogRef.onClose((data) => {
    console.log('Result:', data)
  })
}
```

### Form Dialog

```typescript
const openFormDialog = () => {
  const dialogRef = dialogService.open(UserFormDialog, {
    title: 'Create User',
    width: '600px',
    persistent: true,
    props: {
      user: {
        name: '',
        email: ''
      }
    }
  })
  
  dialogRef.onClose((data) => {
    if (data?.success) {
      // Handle form submission
      saveUser(data.formData)
    }
  })
}
```

### Confirmation Dialog

```typescript
const confirmDelete = async () => {
  const dialogRef = dialogService.open(ConfirmDialog, {
    title: 'Confirm Delete',
    width: '450px',
    props: {
      message: 'Are you sure you want to delete this item?',
      confirmText: 'Delete',
      confirmColor: 'error'
    }
  })
  
  dialogRef.onClose((data) => {
    if (data?.confirmed) {
      deleteItem()
    }
  })
}
```

### Fullscreen Dialog

```typescript
const openFullscreen = () => {
  dialogService.open(ComplexDialog, {
    title: 'Settings',
    fullscreen: true
  })
}
```

### Persistent Dialog

```typescript
const openPersistent = () => {
  dialogService.open(MyDialog, {
    title: 'Important',
    persistent: true, // Can't close by clicking outside
    showCloseButton: false // Force user to use action buttons
  })
}
```

### Dialog with Custom Transition

The Dialog Service supports various animation transitions for smooth dialog appearance:

```typescript
const openWithTransition = () => {
  dialogService.open(MyDialog, {
    title: 'Animated Dialog',
    width: '500px',
    transition: 'scale-transition' // Scale animation
  })
}
```

**Available Transitions:**
- `dialog-bottom-transition` (default) - Slides up from bottom
- `dialog-top-transition` - Slides down from top
- `fade-transition` - Smooth fade in/out
- `scale-transition` - Scales up from center
- `scroll-x-transition` - Scrolls in from left
- `scroll-y-transition` - Scrolls up from bottom
- `slide-x-transition` - Slides in from right
- `slide-y-transition` - Slides down from top
- `scroll-x-reverse-transition` - Scrolls in from right
- `scroll-y-reverse-transition` - Scrolls down from top
- `slide-x-reverse-transition` - Slides in from left
- `slide-y-reverse-transition` - Slides up from bottom

**Example - Different Transitions:**
```typescript
// Fade effect
dialogService.open(MyDialog, {
  title: 'Fade Dialog',
  transition: 'fade-transition'
})

// Scale from center
dialogService.open(MyDialog, {
  title: 'Scale Dialog',
  transition: 'scale-transition'
})

// Slide from left
dialogService.open(MyDialog, {
  title: 'Slide Dialog',
  transition: 'slide-x-reverse-transition'
})
```

### Nested Dialogs (2-3 Levels)

The Dialog Service supports opening dialogs within dialogs, up to 3 levels deep. This is useful for complex workflows where you need to collect information in stages.

**Level 1 Dialog:**
```typescript
import Level2Dialog from './Level2Dialog.vue'

const openLevel1 = () => {
  const level1Ref = dialogService.open(Level1Dialog, {
    title: 'Step 1: Initial Information',
    width: '650px',
    props: {
      initialData: 'Starting workflow'
    }
  })

  level1Ref.onClose((data) => {
    if (data?.confirmed && data?.fromLevel2) {
      // Data cascaded from Level 2 (and possibly Level 3)
      console.log('All levels completed:', data)
    }
  })
}
```

**Level 2 Dialog (opened from Level 1):**
```typescript
// Inside Level1Dialog.vue
import { dialogService } from '@/services'
import Level3Dialog from './Level3Dialog.vue'

const openLevel2 = () => {
  const level2Ref = dialogService.open(Level2Dialog, {
    title: 'Step 2: Additional Details',
    width: '600px',
    props: {
      level1Data: level1Data.value
    }
  })

  level2Ref.onClose((data) => {
    if (data?.confirmed) {
      // Pass data back to parent
      dialogRef.close({
        confirmed: true,
        fromLevel2: true,
        allData: data
      })
    }
  })
}
```

**Level 3 Dialog (opened from Level 2):**
```typescript
// Inside Level2Dialog.vue
const openLevel3 = () => {
  const level3Ref = dialogService.open(Level3Dialog, {
    title: 'Step 3: Final Confirmation',
    width: '550px',
    props: {
      level1Data: props.level1Data,
      level2Data: level2Data.value
    }
  })

  level3Ref.onClose((data) => {
    if (data?.confirmed) {
      // Close Level 2 and cascade data back
      dialogRef.close({
        confirmed: true,
        fromLevel3: true,
        finalData: data
      })
    }
  })
}
```

**Key Points for Nested Dialogs:**
- Each level receives data from parent via props
- Data cascades back through `dialogRef.close(data)`
- Each level can decide whether to close based on child results
- Limit to 2-3 levels for better user experience
- Use clear titles to indicate the current step/level

## Best Practices

### 1. Always Use DialogRef Prop

Your dialog components should always accept a `dialogRef` prop:

```typescript
interface Props {
  dialogRef: DialogRef
  // your other props
}

const props = defineProps<Props>()
```

### 2. Close with Data

Always pass meaningful data when closing dialogs:

```typescript
// Good
dialogRef.close({ 
  success: true, 
  data: formData 
})

// Also good for cancellation
dialogRef.close({ 
  cancelled: true 
})
```

### 3. Handle Close Callbacks

Always check the data in close callbacks:

```typescript
dialogRef.onClose((data) => {
  if (!data) return // Dialog was dismissed
  
  if (data.success) {
    // Handle success
  }
})
```

### 4. Create Reusable Dialog Components

Create reusable dialog components for common patterns:

```typescript
// ConfirmDialog.vue - Reusable confirmation
// UserFormDialog.vue - Reusable user form
// SettingsDialog.vue - Reusable settings
```

### 5. Use TypeScript

Define proper types for your dialog props:

```typescript
interface MyDialogProps {
  dialogRef: DialogRef
  title: string
  items: Item[]
}

const props = defineProps<MyDialogProps>()
```

## Comparison with PrimeNG DynamicDialog

| Feature | PrimeNG DynamicDialog | This Implementation |
|---------|----------------------|---------------------|
| Programmatic Opening | ✅ | ✅ |
| Pass Props | ✅ | ✅ |
| Return Data | ✅ | ✅ |
| Multiple Dialogs | ✅ | ✅ |
| TypeScript Support | ✅ | ✅ |
| Framework | Angular | Vue 3 + Vuetify 3 |

## Troubleshooting

### Dialog Not Appearing

Make sure `DialogContainer` is added to your `App.vue`:

```vue
<template>
  <v-app>
    <v-main>
      <!-- content -->
    </v-main>
    <DialogContainer /> <!-- Required! -->
  </v-app>
</template>
```

### Props Not Received

Check that you're passing props in the config:

```typescript
dialogService.open(MyDialog, {
  props: {
    myProp: 'value' // These will be passed to the component
  }
})
```

### TypeScript Errors

Make sure to import types correctly:

```typescript
import type { DialogRef } from '@/services'
```

## Contributing

Feel free to extend the service with additional features:
- Custom animations
- Dialog stacking management
- Dialog history
- Predefined dialog templates
- etc.

## License

MIT License - feel free to use in your projects!
