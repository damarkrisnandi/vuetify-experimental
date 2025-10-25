# Vuetify Experimental - Dialog Service

A Vue 3 + Vuetify 3 + TypeScript project featuring a powerful Dialog Service similar to PrimeNG's DynamicDialog.

## 🚀 Features

- **Dialog Service** - Programmatic dialog management for Vuetify
- **Nested Dialogs** - Support for 2-3 levels of nested dialogs
- **Type-Safe** - Full TypeScript support
- **Vue Router** - Navigation between pages
- **Modern Stack** - Vue 3 Composition API + Vuetify 3 + Vite

## 📦 Project Structure

```
src/
├── router/           # Vue Router configuration
├── services/         # Dialog Service implementation
│   ├── dialog.service.ts
│   ├── dialog.types.ts
│   └── index.ts
├── components/
│   ├── DialogContainer.vue  # Required container for dialogs
│   └── examples/            # Example dialog components
│       ├── SimpleDialog.vue
│       ├── UserFormDialog.vue
│       ├── ConfirmDialog.vue
│       ├── ComplexDialog.vue
│       ├── Level1Dialog.vue  # Nested dialog examples
│       ├── Level2Dialog.vue
│       └── Level3Dialog.vue
└── views/
    ├── Home.vue             # Landing page
    └── DialogShowcase.vue   # Dialog examples & docs
```

## 🛠️ Installation

```bash
npm install
```

## 🏃‍♂️ Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📱 Available Routes

- `/` - Home page
- `/dialogs` - Dialog Service showcase with examples and documentation

## 💡 Dialog Service Usage

### Quick Start

1. **Add DialogContainer to your App.vue:**
```vue
<template>
  <v-app>
    <v-main>
      <!-- Your content -->
    </v-main>
    <DialogContainer />
  </v-app>
</template>
```

2. **Create a dialog component:**
```vue
<script setup lang="ts">
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
}

const props = defineProps<Props>()
</script>
```

3. **Open the dialog:**
```typescript
import { dialogService } from '@/services'
import MyDialog from './MyDialog.vue'

const openDialog = () => {
  const dialogRef = dialogService.open(MyDialog, {
    title: 'My Dialog',
    width: '600px'
  })

  dialogRef.onClose((data) => {
    console.log('Result:', data)
  })
}
```

## 🎯 Example Features

### Simple Dialog
Basic dialog with input and actions.

### Form Dialog
Complex form with validation and multiple field types.

### Confirmation Dialog
Reusable confirmation pattern for destructive actions.

### Complex Dialog
Advanced dialog with tabs, expansion panels, and rich content.

### Nested Dialogs (2-3 Levels)
Demonstrates dialogs opening within dialogs with data cascading:
- **Level 1**: Initial data collection
- **Level 2**: Additional information
- **Level 3**: Final confirmation

Data flows through all levels and cascades back to the parent.

## 📚 Documentation

- [DIALOG_SERVICE.md](./DIALOG_SERVICE.md) - Complete Dialog Service documentation
- [components/examples/README.md](./src/components/examples/README.md) - Dialog component examples
- Navigate to `/dialogs` route for interactive showcase

## 🏗️ Build

```bash
npm run build
```

## 🔍 Type Check

```bash
npm run type-check
```

## 🎨 Technologies

- **Vue 3** - Progressive JavaScript framework
- **Vuetify 3** - Material Design component framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Vue Router 4** - Official router for Vue.js

## 📄 License

MIT

---

**Built with ❤️ using Vue 3 + Vuetify 3**
