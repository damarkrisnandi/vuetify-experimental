/**
 * DialogService - Dynamic Dialog Service for Vuetify
 * 
 * Similar to PrimeNG's DynamicDialog, this service allows you to
 * programmatically open dialogs with any Vue component.
 */

import { reactive, markRaw } from 'vue'
import type { Component } from 'vue'
import type { DialogConfig, DialogRef } from './dialog.types'

export interface DialogInstance {
  id: string
  component: Component
  config: DialogConfig
  props?: Record<string, any>
  visible: boolean
  dialogRef: DialogRef
}

class DialogService {
  private dialogs = reactive<Map<string, DialogInstance>>(new Map())
  private dialogCounter = 0

  /**
   * Open a dynamic dialog with a component
   * @param component - The Vue component to render in the dialog
   * @param config - Dialog configuration options
   * @returns DialogRef - Reference to control the dialog
   */
  open(component: Component, config: DialogConfig = {}): DialogRef {
    const id = `dialog-${++this.dialogCounter}`
    
    const dialogRef: DialogRef = {
      close: (data?: any) => {
        this.close(id, data)
      },
      onClose: (callback: (data?: any) => void) => {
        const instance = this.dialogs.get(id)
        if (instance) {
          instance.dialogRef._onCloseCallback = callback
        }
      }
    }

    const instance: DialogInstance = {
      id,
      component: markRaw(component),
      config: {
        title: config.title || 'Dialog',
        width: config.width || '500px',
        maxWidth: config.maxWidth || '90vw',
        persistent: config.persistent !== undefined ? config.persistent : false,
        scrollable: config.scrollable !== undefined ? config.scrollable : true,
        fullscreen: config.fullscreen || false,
        ...config
      },
      props: config.props || {},
      visible: true,
      dialogRef
    }

    this.dialogs.set(id, instance)
    
    return dialogRef
  }

  /**
   * Close a dialog by its ID
\   * @param id - Dialog ID
   * @param data - Optional data to pass to the onClose callback
   */
  close(id: string, data?: any) {
    const instance = this.dialogs.get(id)
    if (instance) {
      instance.visible = false
      
      // Call the onClose callback if registered
      if (instance.dialogRef._onCloseCallback) {
        instance.dialogRef._onCloseCallback(data)
      }

      // Remove dialog after animation
      setTimeout(() => {
        this.dialogs.delete(id)
      }, 300)
    }
  }

  /**
   * Close all open dialogs
   */
  closeAll() {
    this.dialogs.forEach((instance) => {
      this.close(instance.id)
    })
  }

  /**
   * Get all active dialog instances
   */
  getDialogs() {
    return this.dialogs
  }
}

// Export singleton instance
export const dialogService = new DialogService()
