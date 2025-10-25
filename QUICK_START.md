# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## 📱 What You'll See

### Home Page (`/`)
- Welcome screen with project overview
- Quick links to Dialog Showcase
- Technology stack information

### Dialog Showcase (`/dialogs`)
- Interactive examples of all dialog types
- Live code examples
- Complete API documentation
- Try the **Nested Dialogs** feature!

---

## 🎯 Try Nested Dialogs (New Feature!)

1. Go to `/dialogs` route
2. Find the **"Nested Dialogs (2-3 Levels)"** card (marked with NEW badge)
3. Click **"Open Nested Dialogs"**
4. You'll see:
   - **Level 1 Dialog**: Enter initial data, then click "Open Level 2"
   - **Level 2 Dialog**: Add more info, then click "Open Level 3"
   - **Level 3 Dialog**: Final confirmation with all previous data
5. Data cascades back through all levels to the parent!

---

## 📂 Project Structure

```
src/
├── router/              # Vue Router setup
├── services/            # Dialog Service
├── components/
│   ├── DialogContainer.vue   # Required for dialogs
│   └── examples/            # Dialog examples
│       ├── Level1Dialog.vue  # 🆕 Nested level 1
│       ├── Level2Dialog.vue  # 🆕 Nested level 2
│       └── Level3Dialog.vue  # 🆕 Nested level 3
└── views/
    ├── Home.vue             # Landing page
    └── DialogShowcase.vue   # Examples & docs
```

---

## 💡 Quick Usage Example

```vue
<script setup lang="ts">
import { dialogService } from '@/services'
import MyDialog from './MyDialog.vue'

const openDialog = () => {
  const dialogRef = dialogService.open(MyDialog, {
    title: 'My Dialog',
    width: '600px',
    props: {
      message: 'Hello!'
    }
  })

  dialogRef.onClose((data) => {
    console.log('Result:', data)
  })
}
</script>

<template>
  <v-btn @click="openDialog">Open Dialog</v-btn>
</template>
```

---

## 📚 Documentation

- **DIALOG_SERVICE.md** - Complete API documentation
- **IMPLEMENTATION_SUMMARY.md** - Implementation details
- **README_PROJECT.md** - Project overview
- Navigate to `/dialogs` for interactive examples

---

## ✨ Key Features

✅ Programmatic dialog opening  
✅ Pass props & receive data back  
✅ Multiple dialogs support  
✅ **Nested dialogs (2-3 levels)** 🆕  
✅ Full TypeScript support  
✅ Highly configurable  
✅ Vue Router integration  

---

## 🎨 Dialog Types Available

1. **Simple Dialog** - Basic with input
2. **User Form Dialog** - Complex form with validation
3. **Confirm Dialog** - Confirmation pattern
4. **Complex Dialog** - Tabs & advanced content
5. **Persistent Dialog** - Can't close by clicking outside
6. **Fullscreen Dialog** - Full screen mode
7. **Nested Dialogs** - 2-3 levels deep 🆕

---

## 🔧 Build for Production

```bash
npm run build
```

---

## ❓ Need Help?

- Check `/dialogs` route for live examples
- Read DIALOG_SERVICE.md for detailed API docs
- See examples in `src/components/examples/`

---

**Enjoy building with Dialog Service!** 🎉
