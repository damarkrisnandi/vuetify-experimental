<template>
  <v-container fluid class="pa-8">
    <v-row>
      <v-col cols="12">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-h3 mb-2">Dialog Service Showcase</h1>
          <p class="text-h6 text-grey">
            Dynamic Dialog Service for Vuetify - Similar to PrimeNG's DynamicDialog
          </p>
        </div>

        <!-- Introduction Card -->
        <v-card class="mb-6" elevation="2">
          <v-card-title class="text-h5 bg-primary">
            Introduction
          </v-card-title>
          <v-card-text class="pa-4">
            <p class="mb-3">
              The <strong>DialogService</strong> allows you to programmatically open dialogs 
              with any Vue component. It's similar to PrimeNG's DynamicDialog service but 
              built specifically for Vuetify 3.
            </p>
            <v-alert type="info" variant="tonal">
              <strong>Key Features:</strong>
              <ul class="mt-2">
                <li>Programmatic dialog opening with any component</li>
                <li>Pass props to dialog components</li>
                <li>Return data when closing dialogs</li>
                <li>Configure dialog appearance (width, persistent, scrollable, etc.)</li>
                <li>Multiple dialogs support</li>
                <li>TypeScript support</li>
              </ul>
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- Examples Section -->
        <v-card class="mb-6" elevation="2">
          <v-card-title class="text-h5 bg-primary">
            Examples
          </v-card-title>
          <v-card-text class="pa-4">
            <v-row>
              <!-- Simple Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-message" class="mr-2" />
                    Simple Dialog
                  </v-card-title>
                  <v-card-text>
                    Basic dialog with text input and action buttons. 
                    Demonstrates passing props and returning data.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      variant="flat"
                      @click="openSimpleDialog"
                    >
                      Open Simple Dialog
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- User Form Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-account-edit" class="mr-2" />
                    User Form Dialog
                  </v-card-title>
                  <v-card-text>
                    Complex form with validation, multiple field types, 
                    and form submission handling.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="success"
                      variant="flat"
                      @click="openUserFormDialog"
                    >
                      Open User Form
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Confirm Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-alert-circle" class="mr-2" />
                    Confirm Dialog
                  </v-card-title>
                  <v-card-text>
                    Confirmation dialog for destructive actions. 
                    Shows how to create reusable confirmation patterns.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="warning"
                      variant="flat"
                      @click="openConfirmDialog"
                    >
                      Open Confirm Dialog
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Complex Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-cog" class="mr-2" />
                    Complex Dialog
                  </v-card-title>
                  <v-card-text>
                    Advanced dialog with tabs, expansion panels, and 
                    various Vuetify components.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="info"
                      variant="flat"
                      @click="openComplexDialog"
                    >
                      Open Complex Dialog
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Persistent Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-lock" class="mr-2" />
                    Persistent Dialog
                  </v-card-title>
                  <v-card-text>
                    Dialog that can't be closed by clicking outside. 
                    Requires explicit action from the user.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="secondary"
                      variant="flat"
                      @click="openPersistentDialog"
                    >
                      Open Persistent Dialog
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Fullscreen Dialog -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100">
                  <v-card-title>
                    <v-icon icon="mdi-fullscreen" class="mr-2" />
                    Fullscreen Dialog
                  </v-card-title>
                  <v-card-text>
                    Dialog that takes up the entire screen. 
                    Useful for detailed forms or content.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="purple"
                      variant="flat"
                      @click="openFullscreenDialog"
                    >
                      Open Fullscreen
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Nested Dialog - NEW -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100 bg-gradient-primary">
                  <v-card-title>
                    <v-icon icon="mdi-layers-triple" class="mr-2" />
                    Nested Dialogs (2-3 Levels)
                    <v-chip size="x-small" color="success" class="ml-2">NEW</v-chip>
                  </v-card-title>
                  <v-card-text>
                    <strong>Advanced Feature:</strong> Demonstrates dialogs opening within dialogs,
                    up to 3 levels deep. Data cascades through all levels.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="deep-purple"
                      variant="flat"
                      prepend-icon="mdi-layers-triple"
                      @click="openNestedDialog"
                    >
                      Open Nested Dialogs
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Fully Customizable Dialog - NEW -->
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="h-100 bg-gradient-custom">
                  <v-card-title>
                    <v-icon icon="mdi-palette" class="mr-2" />
                    Fully Customizable Dialog
                    <v-chip size="x-small" color="orange" class="ml-2">ADVANCED</v-chip>
                  </v-card-title>
                  <v-card-text>
                    <strong>Complete Example:</strong> Demonstrates all configuration options,
                    custom props, tabs, forms, actions, and advanced features.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="orange-darken-2"
                      variant="flat"
                      prepend-icon="mdi-palette"
                      @click="openCustomizableDialog"
                    >
                      Open Customizable
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Results Display -->
        <v-card v-if="lastResult" class="mb-6" elevation="2">
          <v-card-title class="text-h5 bg-success">
            Last Dialog Result
          </v-card-title>
          <v-card-text class="pa-4">
            <v-alert type="success" variant="tonal" class="mb-3">
              Dialog closed successfully!
            </v-alert>
            <pre class="bg-grey-lighten-4 pa-3 rounded">{{ JSON.stringify(lastResult, null, 2) }}</pre>
          </v-card-text>
        </v-card>

        <!-- Transition Examples - NEW -->
        <v-card class="mb-6" elevation="2">
          <v-card-title class="text-h5 bg-purple">
            <v-icon icon="mdi-animation" class="mr-2" />
            Transition Animations
            <v-chip size="x-small" color="purple" class="ml-2">NEW</v-chip>
          </v-card-title>
          <v-card-text class="pa-4">
            <p class="mb-4">
              The Dialog Service supports various transition animations for smooth dialog appearance.
              Try different transitions to see the effects!
            </p>
            <v-row>
              <!-- Bottom Transition (Default) -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="purple">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-up" size="small" class="mr-1" />
                    Bottom Slide (Default)
                  </v-card-title>
                  <v-card-text>
                    Dialog slides up from the bottom.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="purple"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('dialog-bottom-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Top Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="blue">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-down" size="small" class="mr-1" />
                    Top Slide
                  </v-card-title>
                  <v-card-text>
                    Dialog slides down from the top.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="blue"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('dialog-top-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Fade Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="green">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-blur" size="small" class="mr-1" />
                    Fade
                  </v-card-title>
                  <v-card-text>
                    Dialog fades in smoothly.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="green"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('fade-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Scale Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="orange">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-resize" size="small" class="mr-1" />
                    Scale
                  </v-card-title>
                  <v-card-text>
                    Dialog scales up from center.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="orange"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('scale-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Scroll X Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="teal">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-right" size="small" class="mr-1" />
                    Scroll X
                  </v-card-title>
                  <v-card-text>
                    Dialog scrolls in from left.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="teal"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('scroll-x-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Scroll Y Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="pink">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-up" size="small" class="mr-1" />
                    Scroll Y
                  </v-card-title>
                  <v-card-text>
                    Dialog scrolls up from bottom.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="pink"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('scroll-y-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Slide X Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="indigo">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-left" size="small" class="mr-1" />
                    Slide X
                  </v-card-title>
                  <v-card-text>
                    Dialog slides in from right.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="indigo"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('slide-x-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <!-- Slide Y Transition -->
              <v-col cols="12" sm="6" md="4">
                <v-card variant="tonal" color="cyan">
                  <v-card-title class="text-subtitle-1">
                    <v-icon icon="mdi-arrow-down" size="small" class="mr-1" />
                    Slide Y
                  </v-card-title>
                  <v-card-text>
                    Dialog slides down from top.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="cyan"
                      variant="flat"
                      size="small"
                      @click="openWithTransition('slide-y-transition')"
                    >
                      Try It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <v-alert type="info" variant="tonal" class="mt-4">
              <v-icon icon="mdi-information" class="mr-2" />
              <strong>Custom Transitions:</strong> You can specify the transition type when opening a dialog
              using the <code>transition</code> property in the dialog configuration.
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- Usage Guide -->
        <v-card class="mb-6" elevation="2">
          <v-card-title class="text-h5 bg-primary">
            Usage Guide
          </v-card-title>
          <v-card-text class="pa-4">
            <h3 class="text-h6 mb-3">1. Setup DialogContainer</h3>
            <p class="mb-3">Add the DialogContainer component to your App.vue:</p>
            <v-code class="mb-4">
              <pre>&lt;template&gt;
  &lt;v-app&gt;
    &lt;v-main&gt;
      &lt;!-- Your content --&gt;
    &lt;/v-main&gt;
    
    &lt;!-- Add DialogContainer --&gt;
    &lt;DialogContainer /&gt;
  &lt;/v-app&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import DialogContainer from '@/components/DialogContainer.vue'
&lt;/script&gt;</pre>
            </v-code>

            <h3 class="text-h6 mb-3">2. Create a Dialog Component</h3>
            <p class="mb-3">Create any Vue component to use as dialog content:</p>
            <v-code class="mb-4">
              <pre>&lt;template&gt;
  &lt;div class="pa-4"&gt;
    &lt;p&gt;Dialog content here&lt;/p&gt;
    &lt;v-btn @click="dialogRef.close({ data: 'some data' })"&gt;
      Close
    &lt;/v-btn&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import type { DialogRef } from '@/services'

interface Props {
  dialogRef: DialogRef
  // Your custom props
}

const props = defineProps&lt;Props&gt;()
&lt;/script&gt;</pre>
            </v-code>

            <h3 class="text-h6 mb-3">3. Open Dialog from Any Component</h3>
            <v-code class="mb-4">
              <pre>&lt;script setup lang="ts"&gt;
import { dialogService } from '@/services'
import MyDialogComponent from './MyDialogComponent.vue'

const openDialog = () => {
  const dialogRef = dialogService.open(MyDialogComponent, {
    title: 'My Dialog',
    width: '600px',
    persistent: false,
    props: {
      // Custom props for your component
      customProp: 'value'
    }
  })

  // Listen for dialog close
  dialogRef.onClose((data) => {
    console.log('Dialog closed with data:', data)
  })
}
&lt;/script&gt;</pre>
            </v-code>

            <h3 class="text-h6 mb-3">4. Nested Dialogs (Advanced)</h3>
            <p class="mb-3">Open dialogs within dialogs up to 3 levels deep:</p>
            <v-code class="mb-4">
              <pre>&lt;script setup lang="ts"&gt;
import { dialogService } from '@/services'
import Level2Dialog from './Level2Dialog.vue'

const openLevel2 = () => {
  const level2Ref = dialogService.open(Level2Dialog, {
    title: 'Level 2 Dialog',
    width: '600px',
    props: { parentData: 'data from level 1' }
  })

  level2Ref.onClose((data) => {
    if (data?.confirmed) {
      // Handle nested dialog result
      // Can close parent dialog or continue workflow
    }
  })
}
&lt;/script&gt;</pre>
            </v-code>
            <v-alert type="warning" variant="tonal" class="mb-4">
              <strong>Best Practice:</strong> Limit nesting to 2-3 levels for better UX.
              Each level should pass data forward and handle results when closing.
            </v-alert>

            <h3 class="text-h6 mb-3">5. Configuration Options</h3>
            <v-table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>title</code></td>
                  <td>string</td>
                  <td>'Dialog'</td>
                  <td>Dialog title text</td>
                </tr>
                <tr>
                  <td><code>width</code></td>
                  <td>string | number</td>
                  <td>'500px'</td>
                  <td>Dialog width</td>
                </tr>
                <tr>
                  <td><code>maxWidth</code></td>
                  <td>string | number</td>
                  <td>'90vw'</td>
                  <td>Maximum dialog width</td>
                </tr>
                <tr>
                  <td><code>persistent</code></td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Prevent closing by clicking outside</td>
                </tr>
                <tr>
                  <td><code>scrollable</code></td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Enable scrollable content</td>
                </tr>
                <tr>
                  <td><code>fullscreen</code></td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Show dialog in fullscreen</td>
                </tr>
                <tr>
                  <td><code>transition</code></td>
                  <td>string</td>
                  <td>'dialog-bottom-transition'</td>
                  <td>Animation transition type (see Transition Animations section)</td>
                </tr>
                <tr>
                  <td><code>props</code></td>
                  <td>object</td>
                  <td>{}</td>
                  <td>Props to pass to component</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>

        <!-- API Reference -->
        <v-card elevation="2">
          <v-card-title class="text-h5 bg-primary">
            API Reference
          </v-card-title>
          <v-card-text class="pa-4">
            <h3 class="text-h6 mb-3">DialogService Methods</h3>
            
            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                <code>open(component, config)</code>
              </h4>
              <p class="mb-2">Opens a new dialog with the specified component.</p>
              <p><strong>Returns:</strong> <code>DialogRef</code></p>
            </div>

            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                <code>close(id, data)</code>
              </h4>
              <p class="mb-2">Closes a specific dialog by ID.</p>
            </div>

            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                <code>closeAll()</code>
              </h4>
              <p class="mb-2">Closes all open dialogs.</p>
            </div>

            <v-divider class="my-4" />

            <h3 class="text-h6 mb-3">DialogRef Methods</h3>

            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                <code>close(data?)</code>
              </h4>
              <p class="mb-2">Closes the dialog and optionally passes data back.</p>
            </div>

            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                <code>onClose(callback)</code>
              </h4>
              <p class="mb-2">Registers a callback to be called when dialog closes.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { dialogService } from '@/services'
import SimpleDialog from '@/components/examples/SimpleDialog.vue'
import UserFormDialog from '@/components/examples/UserFormDialog.vue'
import ConfirmDialog from '@/components/examples/ConfirmDialog.vue'
import ComplexDialog from '@/components/examples/ComplexDialog.vue'
import Level1Dialog from '@/components/examples/Level1Dialog.vue'
import CustomizableDialog from '@/components/examples/CustomizableDialog.vue'

const lastResult = ref<any>(null)

const openSimpleDialog = () => {
  const dialogRef = dialogService.open(SimpleDialog, {
    title: 'Simple Dialog Example',
    width: '500px',
    props: {
      defaultMessage: 'Hello from the showcase!'
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openUserFormDialog = () => {
  const dialogRef = dialogService.open(UserFormDialog, {
    title: 'Create New User',
    width: '600px',
    scrollable: true,
    props: {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer'
      }
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openConfirmDialog = () => {
  const dialogRef = dialogService.open(ConfirmDialog, {
    title: 'Confirm Action',
    width: '450px',
    props: {
      title: 'Delete User',
      message: 'Are you sure you want to delete this user?',
      details: 'This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmColor: 'error'
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openComplexDialog = () => {
  const dialogRef = dialogService.open(ComplexDialog, {
    title: 'Advanced Settings',
    width: '700px',
    scrollable: true
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openPersistentDialog = () => {
  const dialogRef = dialogService.open(SimpleDialog, {
    title: 'Persistent Dialog',
    width: '500px',
    persistent: true,
    props: {
      defaultMessage: 'You must click a button to close this dialog!'
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openFullscreenDialog = () => {
  const dialogRef = dialogService.open(ComplexDialog, {
    title: 'Fullscreen Dialog',
    fullscreen: true
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openNestedDialog = () => {
  const dialogRef = dialogService.open(Level1Dialog, {
    title: 'Level 1 Dialog - Nested Example',
    width: '650px',
    props: {
      initialData: 'Starting nested dialog flow...'
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openCustomizableDialog = () => {
  const dialogRef = dialogService.open(CustomizableDialog, {
    title: 'Fully Customizable Dialog - All Features',
    width: '800px',
    showHeader: false, // Headerless dialog
    scrollable: true,
    props: {
      customTitle: 'Custom Dialog Title',
      customMessage: 'This demonstrates all available customization options!',
      theme: 'advanced',
      showAdvanced: true,
      initialData: {
        title: 'Sample Title',
        description: 'Sample Description',
        category: 'Development',
        priority: 7,
        enabled: true
      }
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}

const openWithTransition = (transition: string) => {
  const dialogRef = dialogService.open(SimpleDialog, {
    title: `${transition} Example`,
    width: '500px',
    transition: transition as any,
    props: {
      defaultMessage: `This dialog uses the "${transition}" animation!`
    }
  })

  dialogRef.onClose((data) => {
    lastResult.value = data
  })
}
</script>

<style scoped>
pre {
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

.v-code {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
  overflow-x: auto;
}

code {
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.h-100 {
  height: 100%;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #f5f5f5 0%, #e3f2fd 100%);
}

.bg-gradient-custom {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffe0b2 100%);
}
</style>
