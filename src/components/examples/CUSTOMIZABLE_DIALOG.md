# Fully Customizable Dialog Example

This dialog demonstrates **ALL** available customization options and features of the Dialog Service.

## Features Demonstrated

### 1. **Configuration Options**
- Custom width (`800px`)
- Scrollable content
- Custom title and styling
- Z-index management
- Persistent/non-persistent modes

### 2. **Props Passing**
Shows how to pass custom props to the dialog component:
```typescript
props: {
  customTitle: string
  customMessage: string
  theme: string
  showAdvanced: boolean
  initialData: object
}
```

### 3. **Tabbed Interface**
Three tabs demonstrating different aspects:
- **Configuration Tab**: Display dialog config
- **Content Tab**: Interactive form with various field types  
- **Actions Tab**: Available actions and operations

### 4. **Form Components**
Includes all major Vuetify form elements:
- `v-text-field` - Text input
- `v-textarea` - Multi-line text
- `v-select` - Dropdown selection
- `v-slider` - Numeric slider with visual feedback
- `v-switch` - Toggle switch
- `v-file-input` - File upload with multiple files

### 5. **Progress Tracking**
- Real-time completion percentage
- Color-coded progress bar (red → yellow → green)
- Dynamic calculation based on form fields

### 6. **Nested Dialog**
Can open another dialog from within itself, demonstrating the nested dialog capability.

### 7. **Multiple Action Types**
Four different action buttons:
- **Cancel**: Close without saving
- **Save Draft**: Save progress
- **Preview**: Switch to content view
- **Submit**: Final submission (requires 50% completion)

### 8. **Snackbar Notifications**
Toast notifications for user feedback on actions.

### 9. **Props Display**
Shows received props in formatted JSON for debugging.

### 10. **Data Return**
Returns comprehensive data object including:
- Action type (submitted, draft_saved, cancelled)
- Form data
- Dialog configuration
- Received props
- Completion percentage
- Timestamp

## Usage Example

```typescript
import { dialogService } from '@/services'
import CustomizableDialog from '@/components/examples/CustomizableDialog.vue'

const openCustomizableDialog = () => {
  const dialogRef = dialogService.open(CustomizableDialog, {
    title: 'Fully Customizable Dialog - All Features',
    width: '800px',
    scrollable: true,
    props: {
      customTitle: 'Custom Title',
      customMessage: 'Custom message here',
      theme: 'advanced',
      showAdvanced: true,
      initialData: {
        title: 'Preloaded Title',
        description: 'Preloaded Description',
        category: 'Development',
        priority: 7,
        enabled: true
      }
    }
  })

  dialogRef.onClose((data) => {
    console.log('Action:', data.action)
    console.log('Data:', data.data)
    console.log('Config:', data.config)
    console.log('Completion:', data.completionPercentage)
  })
}
```

## Return Data Structure

### On Submit
```json
{
  "action": "submitted",
  "data": {
    "title": "...",
    "description": "...",
    "category": "...",
    "priority": 7,
    "enabled": true,
    "attachments": []
  },
  "config": {
    "width": "800px",
    "maxWidth": "90vw",
    "persistent": false,
    "scrollable": true,
    "fullscreen": false
  },
  "receivedProps": {
    "customTitle": "...",
    "customMessage": "...",
    "theme": "...",
    "showAdvanced": true,
    "initialData": {}
  },
  "completionPercentage": 100,
  "timestamp": "2025-10-25T..."
}
```

### On Save Draft
```json
{
  "action": "draft_saved",
  "data": { ... },
  "timestamp": "2025-10-25T..."
}
```

### On Cancel
```json
{
  "action": "cancelled",
  "timestamp": "2025-10-25T..."
}
```

## Key Concepts

### 1. Props Validation
All props are properly typed with TypeScript interfaces.

### 2. Reactive Form State
Form data is reactive and triggers real-time updates.

### 3. Computed Properties
Completion percentage and color are computed based on form state.

### 4. Action Handlers
Separate handlers for each action type with appropriate feedback.

### 5. Nested Dialog Support
Can open SimpleDialog from within, demonstrating 2-level nesting.

### 6. Conditional Rendering
Submit button is disabled until 50% completion.

### 7. Snackbar Integration
Provides immediate user feedback for all actions.

## Use Cases

This pattern is perfect for:
- **Complex Forms**: Multi-step forms with validation
- **Settings Panels**: Application configuration
- **Wizard Workflows**: Step-by-step processes
- **Data Entry**: Forms with many field types
- **Edit Dialogs**: Modify existing records
- **Review/Approval**: Display and confirm information

## Best Practices Demonstrated

✅ Proper TypeScript typing  
✅ Props with defaults  
✅ Reactive state management  
✅ User feedback (snackbars)  
✅ Progress indication  
✅ Form validation  
✅ Multiple action types  
✅ Data structure consistency  
✅ Nested dialog support  
✅ Clean code organization  

## Customization Points

You can customize:
1. **Tabs**: Add/remove/modify tabs
2. **Form Fields**: Add any Vuetify form component
3. **Actions**: Add custom action buttons
4. **Validation**: Add form validation rules
5. **Styling**: Custom colors, sizes, layouts
6. **Props**: Pass any custom data
7. **Return Data**: Structure returned data as needed
8. **Progress Calculation**: Custom completion logic

## Tips

- Use tabs to organize complex content
- Provide real-time feedback with progress bars
- Use snackbars for non-blocking notifications
- Return structured data with clear action types
- Display received props for debugging
- Enable/disable actions based on state
- Support multiple workflows (submit, save draft, cancel)

---

**This is the most comprehensive dialog example showcasing all Dialog Service capabilities!**
