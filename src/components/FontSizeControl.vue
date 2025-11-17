<template>
  <v-card class="font-size-control-card" elevation="2">
    <v-card-title class="text-h6 d-flex align-center">
      <v-icon start color="primary">mdi-format-size</v-icon>
      Global Font Size
      <v-spacer />
      <v-chip :color="currentFontSizeInfo.value === 'md' ? 'primary' : 'secondary'" size="small" variant="tonal">
        {{ currentFontSizeInfo.label }}
      </v-chip>
    </v-card-title>

    <v-card-text>
      <!-- Font Size Selector -->
      <v-row class="mb-4">
        <v-col cols="12">
          <div class="text-caption mb-2">Select base font size:</div>
          <v-btn-toggle :model-value="globalFontSize" @update:model-value="setGlobalFontSize" mandatory
            density="compact" class="w-100">
            <v-btn v-for="option in fontSizeOptions" :key="option.value" :value="option.value"
              :size="getButtonSize(option.value)" class="flex-grow-1">
              {{ option.label }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>

      <!-- Font Size Ratio Slider -->
      <v-row class="mb-4">
        <v-col cols="12">
          <div class="d-flex align-center justify-space-between mb-2">
            <div class="text-caption">Font Size Ratio:</div>
            <v-chip color="primary" size="small" variant="tonal">
              {{ globalFontRatio }}%
            </v-chip>
          </div>
          
          <v-slider
            :model-value="globalFontRatio"
            @update:model-value="setGlobalFontRatio"
            :min="50"
            :max="200"
            :step="5"
            thumb-label="always"
            color="primary"
            track-color="grey-lighten-2"
            class="mb-2"
          >
            <template v-slot:thumb-label="{ modelValue }">
              {{ modelValue }}%
            </template>
          </v-slider>
          
          <div class="d-flex justify-space-between text-caption text-medium-emphasis">
            <span>50% (Smaller)</span>
            <span>100% (Default)</span>
            <span>200% (Larger)</span>
          </div>
          
          <!-- Preset ratio buttons -->
          <div class="d-flex gap-2 mt-2">
            <v-btn
              v-for="ratio in [75, 100, 125, 150]"
              :key="ratio"
              :variant="globalFontRatio === ratio ? 'flat' : 'outlined'"
              :color="globalFontRatio === ratio ? 'primary' : 'default'"
              size="small"
              @click="setGlobalFontRatio(ratio)"
            >
              {{ ratio }}%
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Preview Section -->
      <v-row>
        <v-col cols="12">
          <v-card variant="outlined" class="preview-card">
            <v-card-title class="text-subtitle-1">Live Preview</v-card-title>
            <v-card-text>
              <div class="font-preview">
                <h1 class="preview-h1">Heading 1 Text</h1>
                <h2 class="preview-h2">Heading 2 Text</h2>
                <h3 class="preview-h3">Heading 3 Text</h3>
                <p class="preview-body">
                  This is body text that shows how regular content will appear with the selected font size.
                  You can see how it affects readability and space usage.
                </p>
                <div class="preview-caption">Caption text and small details</div>

                <!-- Button Preview -->
                <div class="mt-3">
                  <v-btn color="primary" class="mr-2">Primary Button</v-btn>
                  <v-btn variant="outlined" color="secondary">Secondary Button</v-btn>
                </div>

                <!-- List Preview -->
                <v-list class="mt-3" density="compact">
                  <v-list-item>
                    <v-list-item-title>List Item Title</v-list-item-title>
                    <v-list-item-subtitle>List item subtitle text</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Font Size Information -->
      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <v-alert type="info" variant="tonal" class="text-body-2">
            <div class="font-weight-medium mb-1">{{ currentFontSizeInfo.description }}</div>
            <div class="text-caption">
              Original: {{ currentFontSizeInfo.baseSize }} • 
              Current: {{ getEffectiveFontSizes.baseSize }}
            </div>
          </v-alert>
        </v-col>
        <v-col cols="12" md="6">
          <v-alert type="success" variant="tonal" class="text-body-2">
            <div class="font-weight-medium mb-1">Active Ratio: {{ globalFontRatio }}%</div>
            <div class="text-caption">
              Effective Scale: {{ getEffectiveFontSizes.effectiveScale.toFixed(3) }}x •
              {{ globalFontRatio > 100 ? 'Larger' : globalFontRatio < 100 ? 'Smaller' : 'Default' }}
            </div>
          </v-alert>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Effective Font Sizes Breakdown -->
    <v-card-text class="pt-0">
      <v-divider class="mb-4" />
      <div class="text-subtitle-2 mb-3">Current Effective Font Sizes</div>
      <v-row>
        <v-col cols="12" md="6">
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title>Extra Small (XS)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.xs }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Small (SM)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.sm }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Medium (MD)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.md }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Large (LG)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.lg }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="6">
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title>Heading 1 (H1)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.h1 }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Heading 2 (H2)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.h2 }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Heading 3 (H3)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.h3 }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Extra Large (XL)</v-list-item-title>
              <v-list-item-subtitle>{{ getEffectiveFontSizes.samples.xl }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Quick Actions -->
    <v-card-actions>
      <v-btn variant="text" prepend-icon="mdi-refresh" @click="resetToDefault" 
        :disabled="globalFontSize === 'md' && globalFontRatio === 100">
        Reset All
      </v-btn>
      <v-btn variant="text" prepend-icon="mdi-restore" @click="resetFontRatio" 
        :disabled="globalFontRatio === 100">
        Reset Ratio
      </v-btn>
      <v-spacer />
      <v-btn variant="text" prepend-icon="mdi-eye" @click="showComparison = !showComparison">
        {{ showComparison ? 'Hide' : 'Show' }} Comparison
      </v-btn>
    </v-card-actions>

    <!-- Font Size Comparison -->
    <v-expand-transition>
      <v-card-text v-if="showComparison" class="pt-0">
        <v-divider class="mb-4" />
        <div class="text-subtitle-2 mb-3">Font Size Comparison</div>
        <v-row>
          <v-col v-for="size in fontSizeOptions" :key="size.value" cols="12" md="6" lg="4">
            <v-card variant="outlined" :class="`comparison-card font-size-${size.value}`"
              :color="globalFontSize === size.value ? 'primary' : undefined">
              <v-card-text class="pa-2">
                <div class="text-caption mb-1">{{ size.label }} ({{ size.baseSize }})</div>
                <div class="sample-text">Sample text content</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalFontSize } from '../composables/useGlobalFontSize'

const {
  globalFontSize,
  globalFontRatio,
  fontSizeConfig,
  currentFontSizeInfo,
  fontSizeOptions,
  getEffectiveFontSizes,
  setGlobalFontSize,
  setGlobalFontRatio,
  resetFontRatio
} = useGlobalFontSize()

const showComparison = ref(false)

const getButtonSize = (value: string) => {
  switch (value) {
    case 'xs': return 'x-small'
    case 'sm': return 'small'
    case 'md': return 'default'
    case 'lg': return 'large'
    case 'xl': return 'x-large'
    default: return 'default'
  }
}

const resetToDefault = () => {
  setGlobalFontSize('md')
  resetFontRatio()
}
</script>

<style scoped>
.font-size-control-card {
  max-width: 100%;
}

.preview-card {
  background-color: rgba(var(--v-theme-surface-variant), 0.3);
}

.font-preview {
  line-height: var(--global-line-height, 1.4);
}

.preview-h1 {
  font-size: var(--global-font-size-h1, 2rem);
  margin-bottom: 8px;
}

.preview-h2 {
  font-size: var(--global-font-size-h2, 1.75rem);
  margin-bottom: 8px;
}

.preview-h3 {
  font-size: var(--global-font-size-h3, 1.5rem);
  margin-bottom: 8px;
}

.preview-body {
  font-size: var(--global-font-size-base, 1rem);
  margin-bottom: 8px;
}

.preview-caption {
  font-size: var(--global-font-size-caption, 0.75rem);
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.comparison-card {
  transition: all 0.2s ease;
  height: 80px;
}

.comparison-card .sample-text {
  font-weight: 500;
}

/* Font size specific styling for comparison */
.font-size-xs .sample-text {
  font-size: 0.75rem;
}

.font-size-sm .sample-text {
  font-size: 0.875rem;
}

.font-size-md .sample-text {
  font-size: 1rem;
}

.font-size-lg .sample-text {
  font-size: 1.125rem;
}

.font-size-xl .sample-text {
  font-size: 1.25rem;
}
</style>
