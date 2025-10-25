# Reusable Card Component

A flexible and customizable Card component for Vuetify 3, similar to PrimeNG's Card component, with support for customizable title, content, and footer sections.

## Features

- ✅ **Flexible Slots**: Customize title, subtitle, content, actions, and footer
- ✅ **Icon Support**: Add icons to card headers with customizable size and color
- ✅ **Header Actions**: Add action buttons in the header area
- ✅ **Vuetify Integration**: Full support for Vuetify card variants and styling
- ✅ **TypeScript Support**: Fully typed props and interfaces
- ✅ **Customizable Styling**: Custom classes and styles for all sections
- ✅ **Responsive**: Works seamlessly on all screen sizes

## Quick Start

### 1. Import the Component

```vue
<script setup lang="ts">
import ReusableCard from '@/components/ReusableCard.vue'
</script>
```

### 2. Basic Usage

```vue
<ReusableCard
  title="Card Title"
  icon="mdi-star"
  icon-color="primary"
>
  <p>Your card content goes here</p>
</ReusableCard>
```

### 3. With Footer Actions

```vue
<ReusableCard title="Card with Actions">
  <p>Card content</p>
  
  <template #footer>
    <v-btn color="primary" variant="flat">Save</v-btn>
    <v-btn color="secondary" variant="outlined">Cancel</v-btn>
  </template>
</ReusableCard>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title text |
| `subtitle` | `string` | - | Card subtitle text |
| `content` | `string` | - | Card content text (alternative to default slot) |
| `icon` | `string` | - | Material Design icon name (e.g., 'mdi-star') |
| `iconColor` | `string` | - | Icon color (Vuetify color names) |
| `iconSize` | `string \| number` | `'default'` | Icon size |
| `elevation` | `string \| number` | `2` | Card elevation (0-24) |
| `variant` | `'flat' \| 'text' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain'` | `'elevated'` | Card variant style |
| `color` | `string` | - | Card background color |
| `showDivider` | `boolean` | `true` | Show dividers between sections |
| `cardClass` | `string \| string[] \| object` | - | Custom CSS classes for card |
| `cardStyle` | `string \| object` | - | Custom inline styles for card |
| `titleClass` | `string \| string[] \| object` | - | Custom CSS classes for title section |
| `titleStyle` | `string \| object` | - | Custom inline styles for title section |
| `titleTextClass` | `string \| string[] \| object` | `'text-h6 font-weight-medium'` | Custom CSS classes for title text |
| `contentClass` | `string \| string[] \| object` | - | Custom CSS classes for content section |
| `contentStyle` | `string \| object` | - | Custom inline styles for content section |
| `footerClass` | `string \| string[] \| object` | - | Custom CSS classes for footer section |
| `footerStyle` | `string \| object` | - | Custom inline styles for footer section |

## Slots Reference

| Slot | Description |
|------|-------------|
| `title` | Custom title content (overrides the `title` prop) |
| `subtitle` | Custom subtitle content (overrides the `subtitle` prop) |
| `actions` | Header action buttons (appears in the top-right of header) |
| `default` | Main card content |
| `footer` | Footer section with action buttons |

## Examples

### Basic Card

```vue
<ReusableCard
  title="Basic Card"
  subtitle="Simple card with title and content"
  icon="mdi-card"
  icon-color="primary"
>
  <p>This is a basic card with a title, subtitle, and content.</p>
</ReusableCard>
```

### Card with Footer Actions

```vue
<ReusableCard
  title="User Form"
  icon="mdi-account"
  icon-color="success"
>
  <v-text-field label="Name" />
  <v-text-field label="Email" />
  
  <template #footer>
    <v-btn color="primary" variant="flat">Save</v-btn>
    <v-btn color="secondary" variant="outlined">Cancel</v-btn>
  </template>
</ReusableCard>
```

### Card with Header Actions

```vue
<ReusableCard title="Settings">
  <template #actions>
    <v-btn icon="mdi-refresh" size="small" variant="text" />
    <v-btn icon="mdi-dots-vertical" size="small" variant="text" />
  </template>
  
  <p>Card content with action buttons in the header.</p>
</ReusableCard>
```

### Custom Title Slot

```vue
<ReusableCard>
  <template #title>
    <div class="d-flex align-center">
      <v-avatar size="32" color="primary" class="mr-2">
        <v-icon icon="mdi-account" />
      </v-avatar>
      <div>
        <h3>John Doe</h3>
        <p class="text-caption mb-0">Administrator</p>
      </div>
    </div>
  </template>
  
  <p>Custom title with avatar and role.</p>
</ReusableCard>
```

### Different Variants

```vue
<!-- Outlined -->
<ReusableCard
  title="Outlined Card"
  variant="outlined"
>
  <p>Card with outline border.</p>
</ReusableCard>

<!-- Tonal -->
<ReusableCard
  title="Tonal Card"
  variant="tonal"
  color="primary"
>
  <p>Card with tonal background.</p>
</ReusableCard>

<!-- Flat -->
<ReusableCard
  title="Flat Card"
  variant="flat"
  color="grey-lighten-4"
>
  <p>Card with no elevation.</p>
</ReusableCard>
```

### Custom Styling

```vue
<ReusableCard
  title="Custom Styled Card"
  icon="mdi-star"
  icon-color="amber"
  elevation="8"
  card-class="gradient-card"
  title-class="pa-6"
  content-class="pa-6"
  title-style="{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)' }"
>
  <p>Card with custom gradient styling.</p>
</ReusableCard>

<style>
.gradient-card {
  background: linear-gradient(135deg, #fff5f8 0%, #fce4ec 100%);
}
</style>
```

### Complex Card Example

```vue
<ReusableCard
  title="User Profile"
  subtitle="Full Stack Developer"
  icon="mdi-account-circle"
  icon-color="blue"
  icon-size="large"
  elevation="8"
>
  <template #actions>
    <v-btn icon="mdi-pencil" size="small" variant="text" color="blue" />
    <v-btn icon="mdi-share-variant" size="small" variant="text" color="blue" />
  </template>

  <div class="d-flex align-start mb-4">
    <v-avatar size="80" color="blue" class="mr-4">
      <v-icon icon="mdi-account" size="48" />
    </v-avatar>
    <div>
      <h3 class="text-h5">John Developer</h3>
      <p class="text-body-2 text-grey">john@example.com</p>
      <div class="d-flex gap-2">
        <v-chip size="small" color="blue" variant="tonal">Vue.js</v-chip>
        <v-chip size="small" color="green" variant="tonal">TypeScript</v-chip>
      </div>
    </div>
  </div>

  <v-divider class="my-4" />

  <v-row>
    <v-col cols="4">
      <div class="text-center">
        <p class="text-h5">152</p>
        <p class="text-caption text-grey">Projects</p>
      </div>
    </v-col>
    <v-col cols="4">
      <div class="text-center">
        <p class="text-h5">1.2k</p>
        <p class="text-caption text-grey">Followers</p>
      </div>
    </v-col>
    <v-col cols="4">
      <div class="text-center">
        <p class="text-h5">845</p>
        <p class="text-caption text-grey">Following</p>
      </div>
    </v-col>
  </v-row>

  <template #footer>
    <v-btn color="blue" variant="flat" prepend-icon="mdi-message">Message</v-btn>
    <v-btn color="blue" variant="outlined" prepend-icon="mdi-account-plus">Follow</v-btn>
    <v-spacer />
    <v-btn color="grey" variant="text" icon="mdi-dots-horizontal" />
  </template>
</ReusableCard>
```

### No Dividers

```vue
<ReusableCard
  title="Seamless Card"
  :show-divider="false"
>
  <p>Card without dividers between sections.</p>
  
  <template #footer>
    <v-btn color="primary">Action</v-btn>
  </template>
</ReusableCard>
```

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
import type { ReusableCardProps } from '@/components/ReusableCard.vue'

// Use in your component
const cardProps: ReusableCardProps = {
  title: 'Typed Card',
  icon: 'mdi-check',
  iconColor: 'success',
  elevation: 4,
  variant: 'elevated'
}
```

## Comparison with PrimeNG Card

| Feature | PrimeNG Card | Vuetify ReusableCard |
|---------|--------------|---------------------|
| Header Slot | ✅ | ✅ (title slot) |
| Subtitle | ✅ | ✅ |
| Content Slot | ✅ | ✅ (default slot) |
| Footer Slot | ✅ | ✅ |
| Icon Support | ❌ | ✅ |
| Header Actions | ❌ | ✅ (actions slot) |
| Variants | Limited | ✅ 6 variants |
| TypeScript | ✅ | ✅ |
| Custom Styling | ✅ | ✅ Enhanced |

## Best Practices

1. **Use Slots for Complex Content**: For simple text, use props. For complex layouts, use slots.
2. **Consistent Icon Usage**: Use icons consistently across your cards for better UX.
3. **Limit Footer Actions**: Keep 2-3 primary actions in the footer for clarity.
4. **Responsive Design**: Test cards on different screen sizes using Vuetify's grid system.
5. **Semantic Colors**: Use Vuetify's semantic colors (primary, success, error, etc.) for consistency.

## Accessibility

- Card titles are properly wrapped in semantic HTML
- Icons include proper ARIA labels
- Action buttons support keyboard navigation
- Proper contrast ratios for text and backgrounds

## Browser Support

Works in all modern browsers that support:
- Vue 3
- Vuetify 3
- ES6+ features

## Related Components

- **DialogService**: For modal dialogs
- **Vuetify VCard**: Base card component
- **Vuetify VSheet**: Alternative surface component

## See Also

- [CardShowcase](/cards) - Live examples and demos
- [Vuetify Card Documentation](https://vuetifyjs.com/en/components/cards/)
- [Material Design Cards](https://m3.material.io/components/cards/overview)
