import { computed, ref } from 'vue'

// Global font size state
const globalFontSize = ref('md')
// Global font size ratio (percentage multiplier)
const globalFontRatio = ref(100)

// Font size configurations
const fontSizeConfig = {
  xs: {
    label: 'Extra Small',
    value: 'xs',
    baseSize: '0.75rem',
    scale: 0.875,
    description: 'Compact view for maximum content density'
  },
  sm: {
    label: 'Small',
    value: 'sm',
    baseSize: '0.875rem',
    scale: 0.9375,
    description: 'Smaller text for better space utilization'
  },
  md: {
    label: 'Medium',
    value: 'md',
    baseSize: '1rem',
    scale: 1,
    description: 'Standard readable size (default)'
  },
  lg: {
    label: 'Large',
    value: 'lg',
    baseSize: '1.125rem',
    scale: 1.125,
    description: 'Larger text for better accessibility'
  },
  xl: {
    label: 'Extra Large',
    value: 'xl',
    baseSize: '1.25rem',
    scale: 1.25,
    description: 'Maximum size for accessibility needs'
  }
}

export function useGlobalFontSize() {
  // Computed CSS variables for the current font size with ratio scaling
  const cssVariables = computed(() => {
    const config = fontSizeConfig[globalFontSize.value as keyof typeof fontSizeConfig]
    const baseScale = config.scale
    const ratioMultiplier = globalFontRatio.value / 100
    const finalScale = baseScale * ratioMultiplier

    return {
      '--global-font-size-base': `${parseFloat(config.baseSize) * ratioMultiplier}rem`,
      '--global-font-size-xs': `${0.75 * finalScale}rem`,
      '--global-font-size-sm': `${0.875 * finalScale}rem`,
      '--global-font-size-md': `${1 * finalScale}rem`,
      '--global-font-size-lg': `${1.125 * finalScale}rem`,
      '--global-font-size-xl': `${1.25 * finalScale}rem`,
      '--global-font-size-h1': `${2 * finalScale}rem`,
      '--global-font-size-h2': `${1.75 * finalScale}rem`,
      '--global-font-size-h3': `${1.5 * finalScale}rem`,
      '--global-font-size-h4': `${1.25 * finalScale}rem`,
      '--global-font-size-h5': `${1.125 * finalScale}rem`,
      '--global-font-size-h6': `${1 * finalScale}rem`,
      '--global-font-size-caption': `${0.75 * finalScale}rem`,
      '--global-font-size-button': `${0.875 * finalScale}rem`,
      '--global-spacing-scale': finalScale.toString(),
      '--global-line-height': (1.4 + (finalScale - 1) * 0.2).toString(),
      '--global-font-ratio': ratioMultiplier.toString()
    }
  })

  // Get current font size info
  const currentFontSizeInfo = computed(() => {
    return fontSizeConfig[globalFontSize.value as keyof typeof fontSizeConfig]
  })

  // Available font size options
  const fontSizeOptions = computed(() => {
    return Object.values(fontSizeConfig)
  })

  // Set global font size
  const setGlobalFontSize = (size: string) => {
    if (size in fontSizeConfig) {
      globalFontSize.value = size
      applyGlobalFontSize()
    }
  }

  // Set global font ratio (percentage)
  const setGlobalFontRatio = (ratio: number) => {
    // Clamp ratio between 50% and 200%
    globalFontRatio.value = Math.max(50, Math.min(200, ratio))
    applyGlobalFontSize()
  }

  // Reset to default ratio
  const resetFontRatio = () => {
    globalFontRatio.value = 100
    applyGlobalFontSize()
  }

  // Get current effective font sizes with ratio applied
  const getEffectiveFontSizes = computed(() => {
    const config = fontSizeConfig[globalFontSize.value as keyof typeof fontSizeConfig]
    const ratioMultiplier = globalFontRatio.value / 100
    const baseScale = config.scale
    const finalScale = baseScale * ratioMultiplier

    return {
      baseSize: `${parseFloat(config.baseSize) * ratioMultiplier}rem`,
      effectiveScale: finalScale,
      ratioPercentage: globalFontRatio.value,
      samples: {
        xs: `${0.75 * finalScale}rem`,
        sm: `${0.875 * finalScale}rem`,
        md: `${1 * finalScale}rem`,
        lg: `${1.125 * finalScale}rem`,
        xl: `${1.25 * finalScale}rem`,
        h1: `${2 * finalScale}rem`,
        h2: `${1.75 * finalScale}rem`,
        h3: `${1.5 * finalScale}rem`
      }
    }
  })

  // Apply CSS variables to document root
  const applyGlobalFontSize = () => {
    const root = document.documentElement
    const variables = cssVariables.value

    Object.entries(variables).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    // Add class to body for additional styling
    document.body.className = document.body.className.replace(/\bfont-size-\w+\b/g, '')
    document.body.classList.add(`font-size-${globalFontSize.value}`)

    // Add ratio class for additional styling if needed
    document.body.className = document.body.className.replace(/\bfont-ratio-\w+\b/g, '')
    document.body.classList.add(`font-ratio-${globalFontRatio.value}`)
  }

  // Initialize font size on first use
  const initGlobalFontSize = () => {
    applyGlobalFontSize()
  }

  return {
    globalFontSize,
    globalFontRatio,
    fontSizeConfig,
    cssVariables,
    currentFontSizeInfo,
    fontSizeOptions,
    getEffectiveFontSizes,
    setGlobalFontSize,
    setGlobalFontRatio,
    resetFontRatio,
    applyGlobalFontSize,
    initGlobalFontSize
  }
}
