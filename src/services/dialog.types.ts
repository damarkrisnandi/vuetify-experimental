/**
 * Type definitions for DialogService
 */

export interface DialogConfig {
  /**
   * Dialog title
   */
  title?: string

  /**
   * Dialog width
   */
  width?: string | number

  /**
   * Maximum width
   */
  maxWidth?: string | number

  /**
   * Whether clicking outside closes the dialog
   */
  persistent?: boolean

  /**
   * Enable scrollable content
   */
  scrollable?: boolean

  /**
   * Show dialog in fullscreen mode
   */
  fullscreen?: boolean

  /**
   * Props to pass to the component
   */
  props?: Record<string, any>

  /**
   * Custom header content
   */
  showHeader?: boolean

  /**
   * Show close button
   */
  showCloseButton?: boolean

  /**
   * Custom CSS class for the dialog
   */
  class?: string

  /**
   * Custom styles for the dialog
   */
  style?: Record<string, any>

  /**
   * Z-index for the dialog
   */
  zIndex?: number

  /**
   * Transition type for dialog animation
   * @default 'dialog-bottom-transition'
   */
  transition?: 'dialog-transition' | 'dialog-bottom-transition' | 'dialog-top-transition' | 
               'fade-transition' | 'scale-transition' | 'scroll-x-transition' | 
               'scroll-y-transition' | 'slide-x-transition' | 'slide-y-transition' | 
               'scroll-x-reverse-transition' | 'scroll-y-reverse-transition' | 
               'slide-x-reverse-transition' | 'slide-y-reverse-transition'
}

export interface DialogRef {
  /**
   * Close the dialog
   * @param data - Optional data to pass back
   */
  close: (data?: any) => void

  /**
   * Register a callback when dialog closes
   * @param callback - Function to call when dialog closes
   */
  onClose: (callback: (data?: any) => void) => void

  /**
   * Internal callback storage (not for external use)
   */
  _onCloseCallback?: (data?: any) => void
}
