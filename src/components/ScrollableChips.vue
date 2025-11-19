<template>
  <v-container fluid>
    <div class="text-center mb-6">
      <h1 class="text-h4 font-weight-bold mb-2">Scrollable Horizontal Chips</h1>
      <p class="text-body-1 text-medium-emphasis">
        Various implementations of horizontal scrolling chip lists
      </p>
    </div>

    <!-- Basic Horizontal Scrollable Chips -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-label-multiple</v-icon>
        Basic Scrollable Chips
      </v-card-title>
      <v-card-text>
        <div class="scrollable-chips-container">
          <div class="scrollable-chips">
            <v-chip
              v-for="tag in basicTags"
              :key="tag"
              class="ma-1"
              color="primary"
              variant="tonal"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Interactive Scrollable Chips with Actions -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-tag-multiple</v-icon>
        Interactive Chips with Close Action
      </v-card-title>
      <v-card-text>
        <div class="mb-3">
          <v-text-field
            v-model="newTag"
            label="Add new tag"
            variant="outlined"
            density="compact"
            append-inner-icon="mdi-plus"
            @click:append-inner="addTag"
            @keyup.enter="addTag"
            placeholder="Type and press Enter"
          />
        </div>

        <div class="scrollable-chips-container">
          <div class="scrollable-chips">
            <v-chip
              v-for="(tag, index) in interactiveTags"
              :key="`${tag}-${index}`"
              closable
              class="ma-1"
              color="success"
              variant="tonal"
              @click:close="removeTag(index)"
            >
              {{ tag }}
            </v-chip>

            <!-- Add button at the end -->
            <v-chip
              class="ma-1"
              color="primary"
              variant="outlined"
              prepend-icon="mdi-plus"
              @click="focusInput"
            >
              Add Tag
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Categorized Chips -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-shape</v-icon>
        Categorized Chips with Different Colors
      </v-card-title>
      <v-card-text>
        <div class="scrollable-chips-container">
          <div class="scrollable-chips">
            <!-- Technology Tags -->
            <v-chip
              v-for="tech in techTags"
              :key="tech"
              class="ma-1"
              color="blue"
              variant="flat"
              size="small"
              prepend-icon="mdi-code-tags"
            >
              {{ tech }}
            </v-chip>

            <!-- Framework Tags -->
            <v-chip
              v-for="framework in frameworkTags"
              :key="framework"
              class="ma-1"
              color="green"
              variant="flat"
              size="small"
              prepend-icon="mdi-library"
            >
              {{ framework }}
            </v-chip>

            <!-- Language Tags -->
            <v-chip
              v-for="language in languageTags"
              :key="language"
              class="ma-1"
              color="purple"
              variant="flat"
              size="small"
              prepend-icon="mdi-translate"
            >
              {{ language }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Selectable Chips (Filter Mode) -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-filter-variant</v-icon>
        Selectable Filter Chips
      </v-card-title>
      <v-card-subtitle>
        Click chips to select/deselect filters
      </v-card-subtitle>
      <v-card-text>
        <div class="scrollable-chips-container">
          <div class="scrollable-chips">
            <v-chip
              v-for="filter in filterChips"
              :key="filter.id"
              class="ma-1"
              :color="filter.selected ? 'primary' : 'default'"
              :variant="filter.selected ? 'flat' : 'outlined'"
              @click="toggleFilter(filter.id)"
              clickable
            >
              <v-icon v-if="filter.selected" start>mdi-check</v-icon>
              {{ filter.label }}
            </v-chip>
          </div>
        </div>

        <!-- Show selected filters -->
        <div v-if="selectedFilters.length > 0" class="mt-3">
          <div class="text-caption mb-2">Selected Filters:</div>
          <v-chip
            v-for="filter in selectedFilters"
            :key="`selected-${filter.id}`"
            class="ma-1"
            size="small"
            color="primary"
            variant="tonal"
          >
            {{ filter.label }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card>

    <!-- Chips with Avatar and Different Sizes -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-account-multiple</v-icon>
        User Chips with Avatars
      </v-card-title>
      <v-card-text>
        <div class="scrollable-chips-container">
          <div class="scrollable-chips">
            <v-chip
              v-for="user in userChips"
              :key="user.id"
              class="ma-1"
              :color="user.status === 'online' ? 'success' : 'default'"
              variant="tonal"
              :size="user.size"
            >
              <v-avatar start :color="user.avatarColor">
                {{ user.initials }}
              </v-avatar>
              {{ user.name }}
              <v-tooltip activator="parent" location="top">
                {{ user.email }} - {{ user.status }}
              </v-tooltip>
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Custom Styled Chips with Scroll Indicators -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-palette</v-icon>
        Custom Styled Chips with Scroll Indicators
      </v-card-title>
      <v-card-text>
        <div class="scrollable-chips-container-with-indicators">
          <!-- Left scroll indicator -->
          <v-btn
            v-show="canScrollLeft"
            icon
            size="small"
            variant="text"
            class="scroll-indicator left"
            @click="scrollLeft"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <div
            ref="customScrollContainer"
            class="scrollable-chips custom-styled"
            @scroll="updateScrollIndicators"
          >
            <v-chip
              v-for="(item, index) in customStyledChips"
              :key="index"
              class="ma-1 custom-chip"
              :class="item.class"
              :style="item.style"
              variant="flat"
            >
              <v-icon v-if="item.icon" start>{{ item.icon }}</v-icon>
              {{ item.label }}
              <v-badge
                v-if="item.badge"
                :content="item.badge"
                color="error"
                inline
              />
            </v-chip>
          </div>

          <!-- Right scroll indicator -->
          <v-btn
            v-show="canScrollRight"
            icon
            size="small"
            variant="text"
            class="scroll-indicator right"
            @click="scrollRight"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Full Width Chips (100% Width) -->
    <v-card class="mb-6" elevation="2">
      <v-card-title>
        <v-icon start>mdi-arrow-expand-horizontal</v-icon>
        Full Width Chips (100% Width)
      </v-card-title>
      <v-card-subtitle>
        Chips that take full container width - perfect for lists and menu items
      </v-card-subtitle>
      <v-card-text>
        <div class="scrollable-chips-container">
          <div class="scrollable-chips full-width-layout">
            <v-chip
              v-for="(item, index) in fullWidthItems"
              :key="index"
              class="full-width-chip"
              :color="item.color"
              variant="tonal"
              size="large"
            >
              <v-icon v-if="item.icon" start>{{ item.icon }}</v-icon>
              <div class="d-flex justify-space-between align-center w-100">
                <span>{{ item.title }}</span>
                <div class="d-flex align-center">
                  <v-chip
                    v-if="item.badge"
                    :color="item.badgeColor"
                    size="small"
                    variant="flat"
                    class="ml-2"
                  >
                    {{ item.badge }}
                  </v-chip>
                  <v-icon v-if="item.action" class="ml-2">{{ item.actionIcon }}</v-icon>
                </div>
              </div>
            </v-chip>
          </div>
        </div>

        <!-- Toggle Layout Mode -->
        <div class="mt-4">
          <v-btn-toggle v-model="layoutMode" mandatory density="compact">
            <v-btn value="stacked" prepend-icon="mdi-view-list">
              Stacked Layout
            </v-btn>
            <v-btn value="grid" prepend-icon="mdi-view-grid">
              Grid Layout (2 Columns)
            </v-btn>
          </v-btn-toggle>
        </div>

        <!-- Grid Layout Example -->
        <div v-if="layoutMode === 'grid'" class="mt-4">
          <div class="chip-grid">
            <v-chip
              v-for="(item, index) in fullWidthItems.slice(0, 6)"
              :key="`grid-${index}`"
              class="full-width-chip"
              :color="item.color"
              variant="outlined"
            >
              <v-icon v-if="item.icon" start>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Implementation Guide -->
    <v-card elevation="2">
      <v-card-title>
        <v-icon start>mdi-information</v-icon>
        Implementation Guide
      </v-card-title>
      <v-card-text>
        <v-tabs v-model="activeTab" color="primary">
          <v-tab value="css">CSS Approach</v-tab>
          <v-tab value="vuetify">Vuetify Classes</v-tab>
          <v-tab value="javascript">JavaScript Control</v-tab>
          <v-tab value="fullwidth">Full Width (100%)</v-tab>
        </v-tabs>

        <v-window v-model="activeTab" class="mt-4">
          <v-window-item value="css">
            <v-code>
/* Basic horizontal scrollable container */
.scrollable-chips-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.scrollable-chips {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 4px 0;
}

.scrollable-chips::-webkit-scrollbar {
  height: 4px;
}

.scrollable-chips::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 2px;
}

.scrollable-chips::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.3);
  border-radius: 2px;
}
            </v-code>
          </v-window-item>

          <v-window-item value="vuetify">
            <v-code>
&lt;!-- Using Vuetify utility classes --&gt;
&lt;div class="d-flex overflow-x-auto pa-2"&gt;
  &lt;v-chip
    v-for="item in items"
    :key="item"
    class="ma-1 flex-shrink-0"
    color="primary"
  &gt;
    {{ item }}
  &lt;/v-chip&gt;
&lt;/div&gt;

&lt;!-- With custom scroll styling --&gt;
&lt;v-sheet class="overflow-x-auto" style="white-space: nowrap;"&gt;
  &lt;div class="d-inline-flex pa-2"&gt;
    &lt;v-chip class="ma-1"&gt;Chip 1&lt;/v-chip&gt;
    &lt;v-chip class="ma-1"&gt;Chip 2&lt;/v-chip&gt;
  &lt;/div&gt;
&lt;/v-sheet&gt;
            </v-code>
          </v-window-item>

          <v-window-item value="javascript">
            <v-code>
// Scroll control with JavaScript
const scrollLeft = () => {
  container.value.scrollBy({
    left: -200,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  container.value.scrollBy({
    left: 200,
    behavior: 'smooth'
  })
}

// Check scroll position
const updateScrollIndicators = () => {
  const el = container.value
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value =
    el.scrollLeft < el.scrollWidth - el.clientWidth
}
            </v-code>
          </v-window-item>

          <v-window-item value="fullwidth">
            <v-code>
&lt;!-- Full Width Chips (100% Width) --&gt;
&lt;style&gt;
.full-width-chip {
  width: 100% !important;
  min-width: 100% !important;
  flex: none !important;
}

.scrollable-chips.full-width-layout {
  display: block !important;
  overflow-x: visible !important;
  overflow-y: auto !important;
  white-space: normal !important;
  max-height: 300px;
}

.scrollable-chips.full-width-layout .full-width-chip {
  display: block !important;
  margin: 4px 0 !important;
}

/* Grid layout for 2-column display */
.chip-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
&lt;/style&gt;

&lt;!-- Stacked Layout --&gt;
&lt;div class="scrollable-chips full-width-layout"&gt;
  &lt;v-chip
    v-for="item in items"
    :key="item"
    class="full-width-chip"
    color="primary"
    variant="tonal"
    size="large"
  &gt;
    &lt;v-icon start&gt;{{ item.icon }}&lt;/v-icon&gt;
    {{ item.title }}
  &lt;/v-chip&gt;
&lt;/div&gt;

&lt;!-- Grid Layout --&gt;
&lt;div class="chip-grid"&gt;
  &lt;v-chip
    v-for="item in items"
    :key="item"
    class="full-width-chip"
    color="primary"
  &gt;
    {{ item.title }}
  &lt;/v-chip&gt;
&lt;/div&gt;
            </v-code>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

// Basic tags
const basicTags = ref([
  'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular', 'Node.js',
  'Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB',
  'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'
])

// Interactive tags
const interactiveTags = ref([
  'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Mobile', 'Desktop'
])
const newTag = ref('')

// Categorized tags
const techTags = ref(['HTML', 'CSS', 'JavaScript', 'TypeScript', 'WebGL'])
const frameworkTags = ref(['Vue.js', 'React', 'Angular', 'Svelte', 'Nuxt'])
const languageTags = ref(['Python', 'Java', 'C#', 'Go', 'Rust', 'PHP'])

// Filter chips
const filterChips = ref([
  { id: 1, label: 'New', selected: false },
  { id: 2, label: 'Popular', selected: true },
  { id: 3, label: 'Trending', selected: false },
  { id: 4, label: 'Featured', selected: false },
  { id: 5, label: 'On Sale', selected: true },
  { id: 6, label: 'Free Shipping', selected: false },
  { id: 7, label: 'Best Rated', selected: false },
  { id: 8, label: 'Recently Added', selected: false }
])

// User chips
const userChips = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD',
    avatarColor: 'blue',
    status: 'online',
    size: 'default'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    initials: 'JS',
    avatarColor: 'green',
    status: 'offline',
    size: 'default'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    initials: 'MJ',
    avatarColor: 'orange',
    status: 'online',
    size: 'default'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    initials: 'SW',
    avatarColor: 'purple',
    status: 'online',
    size: 'small'
  }
])

// Custom styled chips
const customStyledChips = ref([
  {
    label: 'Priority High',
    icon: 'mdi-alert',
    class: 'priority-high',
    style: 'background: linear-gradient(45deg, #ff6b6b, #ee5a52);'
  },
  {
    label: 'In Progress',
    icon: 'mdi-clock',
    class: 'status-progress',
    style: 'background: linear-gradient(45deg, #4ecdc4, #44a08d);'
  },
  {
    label: 'Notifications',
    icon: 'mdi-bell',
    badge: '5',
    class: 'notification-chip',
    style: 'background: linear-gradient(45deg, #667eea, #764ba2);'
  },
  {
    label: 'Messages',
    icon: 'mdi-message',
    badge: '12',
    class: 'message-chip',
    style: 'background: linear-gradient(45deg, #f093fb, #f5576c);'
  },
  {
    label: 'Completed',
    icon: 'mdi-check-circle',
    class: 'status-completed',
    style: 'background: linear-gradient(45deg, #43e97b, #38f9d7);'
  }
])

// Full width chips
const fullWidthItems = ref([
  {
    title: 'Dashboard Overview',
    icon: 'mdi-view-dashboard',
    color: 'primary',
    badge: 'Active',
    badgeColor: 'success',
    action: true,
    actionIcon: 'mdi-chevron-right'
  },
  {
    title: 'User Management',
    icon: 'mdi-account-group',
    color: 'secondary',
    badge: '24 Users',
    badgeColor: 'info',
    action: true,
    actionIcon: 'mdi-chevron-right'
  },
  {
    title: 'Analytics & Reports',
    icon: 'mdi-chart-line',
    color: 'success',
    badge: 'New',
    badgeColor: 'warning',
    action: true,
    actionIcon: 'mdi-chevron-right'
  },
  {
    title: 'Settings & Configuration',
    icon: 'mdi-cog',
    color: 'warning',
    badge: '3 Pending',
    badgeColor: 'error',
    action: true,
    actionIcon: 'mdi-chevron-right'
  },
  {
    title: 'Notifications Center',
    icon: 'mdi-bell-ring',
    color: 'info',
    badge: '15',
    badgeColor: 'primary',
    action: true,
    actionIcon: 'mdi-chevron-right'
  },
  {
    title: 'Help & Support',
    icon: 'mdi-help-circle',
    color: 'purple',
    badge: 'Online',
    badgeColor: 'success',
    action: true,
    actionIcon: 'mdi-chevron-right'
  }
])

// Layout control
const layoutMode = ref('stacked')

// Scroll control
const customScrollContainer = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const activeTab = ref('css')

// Computed
const selectedFilters = computed(() => {
  return filterChips.value.filter(chip => chip.selected)
})

// Methods
const addTag = () => {
  if (newTag.value.trim()) {
    interactiveTags.value.push(newTag.value.trim())
    newTag.value = ''
  }
}

const removeTag = (index: number) => {
  interactiveTags.value.splice(index, 1)
}

const focusInput = () => {
  // Focus on the input field
  document.querySelector('input')?.focus()
}

const toggleFilter = (id: number) => {
  const filter = filterChips.value.find(f => f.id === id)
  if (filter) {
    filter.selected = !filter.selected
  }
}

const scrollLeft = () => {
  if (customScrollContainer.value) {
    customScrollContainer.value.scrollBy({
      left: -200,
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  if (customScrollContainer.value) {
    customScrollContainer.value.scrollBy({
      left: 200,
      behavior: 'smooth'
    })
  }
}

const updateScrollIndicators = () => {
  if (customScrollContainer.value) {
    const el = customScrollContainer.value
    canScrollLeft.value = el.scrollLeft > 0
    canScrollRight.value = el.scrollLeft < (el.scrollWidth - el.clientWidth)
  }
}

onMounted(async () => {
  await nextTick()
  updateScrollIndicators()
})
</script>

<style scoped>
/* Basic scrollable chips container */
.scrollable-chips-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgba(var(--v-theme-surface-variant), 0.1);
}

.scrollable-chips {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 8px;
  gap: 4px;
}

/* Custom scrollbar styling */
.scrollable-chips::-webkit-scrollbar {
  height: 6px;
}

.scrollable-chips::-webkit-scrollbar-track {
  background: rgba(var(--v-theme-on-surface), 0.1);
  border-radius: 3px;
}

.scrollable-chips::-webkit-scrollbar-thumb {
  background: rgba(var(--v-theme-primary), 0.5);
  border-radius: 3px;
}

.scrollable-chips::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--v-theme-primary), 0.7);
}

/* Container with scroll indicators */
.scrollable-chips-container-with-indicators {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.scroll-indicator {
  position: absolute;
  z-index: 2;
  background-color: rgba(var(--v-theme-surface), 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.scroll-indicator.left {
  left: 0;
}

.scroll-indicator.right {
  right: 0;
}

.custom-styled {
  flex: 1;
  margin: 0 40px;
}

/* Custom chip styles */
.custom-chip {
  color: white !important;
  font-weight: 500;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Full width chip styles */
.full-width-chip {
  width: 100% !important;
  min-width: 100% !important;
  flex: none !important;
}

/* Full width container - stacked layout */
.scrollable-chips.full-width-layout {
  display: block !important;
  overflow-x: visible !important;
  overflow-y: auto !important;
  white-space: normal !important;
  max-height: 300px;
}

.scrollable-chips.full-width-layout .full-width-chip {
  display: block !important;
  margin: 4px 0 !important;
}

/* Grid layout for full-width chips */
.chip-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

@media (max-width: 768px) {
  .chip-grid {
    grid-template-columns: 1fr;
  }
}

.custom-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.priority-high {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .scrollable-chips {
    padding: 4px;
  }

  .custom-styled {
    margin: 0 32px;
  }
}
</style>
