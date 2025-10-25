<template>
  <v-card
    :elevation="elevation"
    :variant="variant"
    :color="color"
    :class="cardClass"
    :style="cardStyle"
  >
    <!-- Header/Title Section -->
    <v-card-title
      v-if="$slots.title || title"
      :class="[
        'pa-4',
        titleClass,
        { 'd-flex align-center justify-space-between': $slots.actions }
      ]"
      :style="titleStyle"
    >
      <div class="d-flex align-center">
        <v-icon
          v-if="icon"
          :icon="icon"
          :color="iconColor"
          :size="iconSize"
          class="mr-2"
        />
        <div>
          <slot name="title">
            <span :class="titleTextClass">{{ title }}</span>
          </slot>
          <div v-if="$slots.subtitle || subtitle" class="text-caption text-grey mt-1">
            <slot name="subtitle">
              {{ subtitle }}
            </slot>
          </div>
        </div>
      </div>
      
      <!-- Header Actions -->
      <div v-if="$slots.actions" class="ml-2">
        <slot name="actions" />
      </div>
    </v-card-title>

    <v-divider v-if="showDivider && ($slots.title || title)" />

    <!-- Content Section -->
    <v-card-text
      v-if="$slots.default || content"
      :class="['pa-4', contentClass]"
      :style="contentStyle"
    >
      <slot>
        {{ content }}
      </slot>
    </v-card-text>

    <!-- Footer Section -->
    <template v-if="$slots.footer">
      <v-divider v-if="showDivider" />
      <v-card-actions :class="['pa-4', footerClass]" :style="footerStyle">
        <slot name="footer" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ReusableCardProps {
  // Basic props
  title?: string
  subtitle?: string
  content?: string
  icon?: string
  iconColor?: string
  iconSize?: string | number
  
  // Vuetify card props
  elevation?: string | number
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  color?: string
  
  // Styling
  cardClass?: string | string[] | object
  cardStyle?: string | object
  titleClass?: string | string[] | object
  titleStyle?: string | object
  titleTextClass?: string | string[] | object
  contentClass?: string | string[] | object
  contentStyle?: string | object
  footerClass?: string | string[] | object
  footerStyle?: string | object
  
  // Display options
  showDivider?: boolean
}

const props = withDefaults(defineProps<ReusableCardProps>(), {
  elevation: 2,
  variant: 'elevated',
  iconSize: 'default',
  showDivider: true,
  titleTextClass: 'text-h6 font-weight-medium'
})
</script>

<style scoped>
.v-card-title {
  word-break: break-word;
}

.v-card-text {
  flex: 1;
}
</style>
