<template>
  <v-container fluid class="pa-8">
    <v-row>
      <v-col cols="12">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-h3 mb-2">Reusable Card Showcase</h1>
          <p class="text-h6 text-grey">
            Flexible Card Component - Similar to PrimeNG's Card with customizable title, content, and footer
          </p>
        </div>

        <!-- Introduction Card -->
        <ReusableCard
          title="Introduction"
          icon="mdi-information"
          icon-color="primary"
          color="primary"
          variant="tonal"
          class="mb-6"
        >
          <p class="mb-3">
            The <strong>ReusableCard</strong> component provides a flexible way to create cards 
            with customizable title, content, and footer sections using Vue slots and props.
          </p>
          <v-alert type="info" variant="tonal" class="mb-0">
            <strong>Key Features:</strong>
            <ul class="mt-2 mb-0">
              <li>Customizable title with icon and subtitle support</li>
              <li>Flexible content area using default slot</li>
              <li>Optional footer with action buttons</li>
              <li>Header actions slot for controls</li>
              <li>Full Vuetify styling support</li>
              <li>TypeScript support</li>
            </ul>
          </v-alert>
        </ReusableCard>

        <!-- Examples Section -->
        <ReusableCard
          title="Examples"
          icon="mdi-code-tags"
          icon-color="success"
          color="success"
          variant="tonal"
          class="mb-6"
        >
          <v-row>
            <!-- Basic Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Basic Card"
                subtitle="Simple card with title and content"
                icon="mdi-card"
                icon-color="primary"
                elevation="4"
              >
                <p>This is a basic card with a title, subtitle, and content. It uses the default elevation and styling.</p>
              </ReusableCard>
            </v-col>

            <!-- Card with Footer -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Card with Footer"
                subtitle="Includes action buttons"
                icon="mdi-cursor-default-click"
                icon-color="success"
                elevation="4"
              >
                <p>This card demonstrates how to add action buttons in the footer using the footer slot.</p>
                
                <template #footer>
                  <v-btn color="primary" variant="flat" @click="showSnackbar('Save clicked!')">
                    Save
                  </v-btn>
                  <v-btn color="secondary" variant="outlined" @click="showSnackbar('Cancel clicked!')">
                    Cancel
                  </v-btn>
                </template>
              </ReusableCard>
            </v-col>

            <!-- Card with Header Actions -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Header Actions"
                subtitle="Controls in the header"
                icon="mdi-cog"
                icon-color="info"
                elevation="4"
              >
                <template #actions>
                  <v-btn icon="mdi-refresh" size="small" variant="text" @click="showSnackbar('Refresh!')"/>
                  <v-btn icon="mdi-dots-vertical" size="small" variant="text" @click="showSnackbar('Menu!')"/>
                </template>
                
                <p>This card has action buttons in the header. Perfect for settings or menu controls.</p>
              </ReusableCard>
            </v-col>

            <!-- Outlined Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Outlined Variant"
                icon="mdi-border-all"
                icon-color="warning"
                variant="outlined"
              >
                <p>This card uses the outlined variant with no background fill, just a border.</p>
              </ReusableCard>
            </v-col>

            <!-- Tonal Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Tonal Variant"
                icon="mdi-palette"
                icon-color="purple"
                variant="tonal"
                color="purple"
              >
                <p>This card uses the tonal variant with a subtle purple background color.</p>
              </ReusableCard>
            </v-col>

            <!-- Flat Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Flat Variant"
                icon="mdi-square"
                icon-color="orange"
                variant="flat"
                color="orange-lighten-4"
              >
                <p>This card uses the flat variant with no elevation or shadow.</p>
              </ReusableCard>
            </v-col>

            <!-- Custom Styled Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Custom Styled"
                subtitle="With custom classes"
                icon="mdi-brush"
                icon-color="pink"
                elevation="8"
                card-class="gradient-card"
                title-class="pa-6"
                content-class="pa-6"
              >
                <p>This card demonstrates custom styling with gradient background and custom padding.</p>
              </ReusableCard>
            </v-col>

            <!-- No Divider Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="No Dividers"
                icon="mdi-minus"
                icon-color="teal"
                :show-divider="false"
              >
                <p>This card has dividers disabled between sections for a seamless look.</p>
                
                <template #footer>
                  <v-btn color="teal" variant="text">Action</v-btn>
                </template>
              </ReusableCard>
            </v-col>

            <!-- Rich Content Card -->
            <v-col cols="12" md="6" lg="4">
              <ReusableCard
                title="Rich Content"
                subtitle="Multiple components"
                icon="mdi-view-dashboard"
                icon-color="indigo"
                elevation="4"
              >
                <v-chip color="success" size="small" class="mb-2">Active</v-chip>
                <p class="mb-3">This card contains multiple Vuetify components:</p>
                <v-progress-linear
                  :model-value="progress"
                  color="indigo"
                  height="8"
                  rounded
                  class="mb-2"
                />
                <p class="text-caption text-grey mb-0">{{ progress }}% Complete</p>
                
                <template #footer>
                  <v-btn 
                    color="indigo" 
                    variant="flat" 
                    size="small"
                    @click="incrementProgress"
                  >
                    Increase Progress
                  </v-btn>
                </template>
              </ReusableCard>
            </v-col>
          </v-row>
        </ReusableCard>

        <!-- Complex Example -->
        <ReusableCard
          title="Complex Example"
          subtitle="User Profile Card"
          icon="mdi-account-circle"
          icon-color="blue"
          icon-size="large"
          elevation="8"
          class="mb-6"
        >
          <template #actions>
            <v-btn icon="mdi-pencil" size="small" variant="text" color="blue" @click="showSnackbar('Edit profile')"/>
            <v-btn icon="mdi-share-variant" size="small" variant="text" color="blue" @click="showSnackbar('Share profile')"/>
          </template>

          <div class="d-flex align-start mb-4">
            <v-avatar size="80" color="blue" class="mr-4">
              <v-icon icon="mdi-account" size="48" />
            </v-avatar>
            <div>
              <h3 class="text-h5 mb-1">John Developer</h3>
              <p class="text-body-2 text-grey mb-2">Full Stack Developer</p>
              <div class="d-flex gap-2">
                <v-chip size="small" color="blue" variant="tonal">Vue.js</v-chip>
                <v-chip size="small" color="green" variant="tonal">TypeScript</v-chip>
                <v-chip size="small" color="purple" variant="tonal">Vuetify</v-chip>
              </div>
            </div>
          </div>

          <v-divider class="my-4" />

          <v-row>
            <v-col cols="6" md="3">
              <div class="text-center">
                <p class="text-h5 mb-1">152</p>
                <p class="text-caption text-grey mb-0">Projects</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="text-center">
                <p class="text-h5 mb-1">1.2k</p>
                <p class="text-caption text-grey mb-0">Followers</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="text-center">
                <p class="text-h5 mb-1">845</p>
                <p class="text-caption text-grey mb-0">Following</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="text-center">
                <p class="text-h5 mb-1">4.8</p>
                <p class="text-caption text-grey mb-0">Rating</p>
              </div>
            </v-col>
          </v-row>

          <template #footer>
            <v-btn color="blue" variant="flat" prepend-icon="mdi-message" @click="showSnackbar('Message sent!')">
              Message
            </v-btn>
            <v-btn color="blue" variant="outlined" prepend-icon="mdi-account-plus" @click="showSnackbar('Followed!')">
              Follow
            </v-btn>
            <v-spacer />
            <v-btn color="grey" variant="text" icon="mdi-dots-horizontal" />
          </template>
        </ReusableCard>

        <!-- Usage Guide -->
        <ReusableCard
          title="Usage Guide"
          icon="mdi-book-open"
          icon-color="orange"
          color="orange"
          variant="tonal"
          class="mb-6"
        >
          <h3 class="text-h6 mb-3">1. Import the Component</h3>
          <v-code class="mb-4">
            <pre>&lt;script setup lang="ts"&gt;
import ReusableCard from '@/components/ReusableCard.vue'
&lt;/script&gt;</pre>
          </v-code>

          <h3 class="text-h6 mb-3">2. Basic Usage</h3>
          <v-code class="mb-4">
            <pre>&lt;ReusableCard
  title="Card Title"
  subtitle="Optional subtitle"
  icon="mdi-star"
  icon-color="primary"
&gt;
  &lt;p&gt;Your card content goes here&lt;/p&gt;
&lt;/ReusableCard&gt;</pre>
          </v-code>

          <h3 class="text-h6 mb-3">3. With Footer</h3>
          <v-code class="mb-4">
            <pre>&lt;ReusableCard title="Card with Actions"&gt;
  &lt;p&gt;Card content&lt;/p&gt;
  
  &lt;template #footer&gt;
    &lt;v-btn color="primary"&gt;Save&lt;/v-btn&gt;
    &lt;v-btn color="secondary"&gt;Cancel&lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/ReusableCard&gt;</pre>
          </v-code>

          <h3 class="text-h6 mb-3">4. Custom Title Slot</h3>
          <v-code class="mb-4">
            <pre>&lt;ReusableCard&gt;
  &lt;template #title&gt;
    &lt;div class="d-flex align-center"&gt;
      &lt;v-icon icon="mdi-star" class="mr-2" /&gt;
      &lt;span&gt;Custom Title Content&lt;/span&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;p&gt;Card content&lt;/p&gt;
&lt;/ReusableCard&gt;</pre>
          </v-code>

          <h3 class="text-h6 mb-3">5. Header Actions</h3>
          <v-code>
            <pre>&lt;ReusableCard title="Card Title"&gt;
  &lt;template #actions&gt;
    &lt;v-btn icon="mdi-refresh" size="small" /&gt;
    &lt;v-btn icon="mdi-dots-vertical" size="small" /&gt;
  &lt;/template&gt;
  
  &lt;p&gt;Card content&lt;/p&gt;
&lt;/ReusableCard&gt;</pre>
          </v-code>
        </ReusableCard>

        <!-- Props Reference -->
        <ReusableCard
          title="Props Reference"
          icon="mdi-cog"
          icon-color="purple"
          color="purple"
          variant="tonal"
        >
          <v-table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>string</td>
                <td>-</td>
                <td>Card title text</td>
              </tr>
              <tr>
                <td><code>subtitle</code></td>
                <td>string</td>
                <td>-</td>
                <td>Card subtitle text</td>
              </tr>
              <tr>
                <td><code>content</code></td>
                <td>string</td>
                <td>-</td>
                <td>Card content text (alternative to default slot)</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td>string</td>
                <td>-</td>
                <td>Material Design icon name</td>
              </tr>
              <tr>
                <td><code>iconColor</code></td>
                <td>string</td>
                <td>-</td>
                <td>Icon color</td>
              </tr>
              <tr>
                <td><code>iconSize</code></td>
                <td>string | number</td>
                <td>'default'</td>
                <td>Icon size</td>
              </tr>
              <tr>
                <td><code>elevation</code></td>
                <td>string | number</td>
                <td>2</td>
                <td>Card elevation (0-24)</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>string</td>
                <td>'elevated'</td>
                <td>'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td>string</td>
                <td>-</td>
                <td>Card background color</td>
              </tr>
              <tr>
                <td><code>showDivider</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Show dividers between sections</td>
              </tr>
              <tr>
                <td><code>cardClass</code></td>
                <td>string | object</td>
                <td>-</td>
                <td>Custom CSS classes for card</td>
              </tr>
              <tr>
                <td><code>titleClass</code></td>
                <td>string | object</td>
                <td>-</td>
                <td>Custom CSS classes for title</td>
              </tr>
              <tr>
                <td><code>contentClass</code></td>
                <td>string | object</td>
                <td>-</td>
                <td>Custom CSS classes for content</td>
              </tr>
              <tr>
                <td><code>footerClass</code></td>
                <td>string | object</td>
                <td>-</td>
                <td>Custom CSS classes for footer</td>
              </tr>
            </tbody>
          </v-table>
        </ReusableCard>

        <!-- Slots Reference -->
        <ReusableCard
          title="Slots Reference"
          icon="mdi-slot-machine"
          icon-color="green"
          color="green"
          variant="tonal"
          class="mb-6"
        >
          <v-table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>Custom title content (replaces the title prop)</td>
              </tr>
              <tr>
                <td><code>subtitle</code></td>
                <td>Custom subtitle content (replaces the subtitle prop)</td>
              </tr>
              <tr>
                <td><code>actions</code></td>
                <td>Header action buttons (appears in the top-right)</td>
              </tr>
              <tr>
                <td><code>default</code></td>
                <td>Main card content</td>
              </tr>
              <tr>
                <td><code>footer</code></td>
                <td>Footer with action buttons</td>
              </tr>
            </tbody>
          </v-table>
        </ReusableCard>
      </v-col>
    </v-row>

    <!-- Snackbar for notifications -->
    <v-snackbar v-model="snackbar" :timeout="2000" color="success">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReusableCard from '@/components/ReusableCard.vue'

const progress = ref(45)
const snackbar = ref(false)
const snackbarMessage = ref('')

const incrementProgress = () => {
  if (progress.value < 100) {
    progress.value += 10
  } else {
    progress.value = 0
  }
}

const showSnackbar = (message: string) => {
  snackbarMessage.value = message
  snackbar.value = true
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

.gradient-card {
  background: linear-gradient(135deg, #fff5f8 0%, #fce4ec 100%);
}

.gap-2 {
  gap: 8px;
}
</style>
