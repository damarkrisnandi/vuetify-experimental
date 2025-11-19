<template>
  <v-container fluid class="pa-0">
    <v-card>
      <!-- Advanced Header with Stats and Actions -->
      <v-card-title :class="headerClasses">
        <div class="d-flex flex-wrap align-center justify-space-between w-100 ga-3">
          <!-- Title Section -->
          <div class="flex-1-1-auto">
            <div class="d-flex align-center ga-2">
              <v-avatar :size="headerAvatarSize" color="primary">
                <v-icon :size="headerIconSize">mdi-account-group</v-icon>
              </v-avatar>
              <div>
                <h2 :class="titleClasses">Team Directory</h2>
                <p :class="subtitleClasses">
                  {{ filteredProfiles.length }} members • {{ onlineCount }} online
                </p>
              </div>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="d-none d-md-flex ga-2">
            <v-card :class="statsCardClasses" variant="tonal" color="success">
              <v-card-text :class="statsCardPadding">
                <div :class="statsValueClasses">{{ totalProjects }}</div>
                <div :class="statsLabelClasses">Projects</div>
              </v-card-text>
            </v-card>
            <v-card :class="statsCardClasses" variant="tonal" color="info">
              <v-card-text :class="statsCardPadding">
                <div :class="statsValueClasses">{{ avgPerformance }}%</div>
                <div :class="statsLabelClasses">Performance</div>
              </v-card-text>
            </v-card>
            <v-card :class="statsCardClasses" variant="tonal" color="warning">
              <v-card-text :class="statsCardPadding">
                <div :class="statsValueClasses">{{ totalTasks }}</div>
                <div :class="statsLabelClasses">Active Tasks</div>
              </v-card-text>
            </v-card>
          </div>

          <!-- Action Buttons -->
          <div class="d-flex ga-2">
            <v-btn :size="headerButtonSize" :icon="display.xs.value" color="primary"
              @click="showFilters = !showFilters">
              <v-icon :size="headerIconSize">mdi-filter-variant</v-icon>
              <span v-if="!display.xs.value" class="ml-2">Filters</span>
            </v-btn>

            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn :size="headerButtonSize" :icon="display.xs.value" color="secondary" v-bind="props">
                  <v-icon :size="headerIconSize">mdi-view-module</v-icon>
                  <span v-if="!display.xs.value" class="ml-2">View</span>
                </v-btn>
              </template>
              <v-list :density="menuDensity">
                <v-list-item @click="viewMode = 'list'">
                  <template v-slot:prepend>
                    <v-icon :size="menuIconSize">mdi-format-list-bulleted</v-icon>
                  </template>
                  <v-list-item-title :class="menuTextClasses">List View</v-list-item-title>
                </v-list-item>
                <v-list-item @click="viewMode = 'grid'">
                  <template v-slot:prepend>
                    <v-icon :size="menuIconSize">mdi-view-grid</v-icon>
                  </template>
                  <v-list-item-title :class="menuTextClasses">Grid View</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn :size="headerButtonSize" :icon="display.xs.value" color="success">
              <v-icon :size="headerIconSize">mdi-export</v-icon>
              <span v-if="!display.xs.value" class="ml-2">Export</span>
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <!-- Filter Panel -->
      <v-expand-transition>
        <div v-if="showFilters">
          <v-divider />
          <v-card-text :class="filterPanelClasses">
            <v-row dense>
              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search anything..."
                  variant="outlined" :density="fieldDensity" clearable hide-details />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-select v-model="filterDepartment" :items="departments" label="Department" variant="outlined"
                  :density="fieldDensity" clearable hide-details />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-select v-model="filterStatus" :items="statusOptions" label="Status" variant="outlined"
                  :density="fieldDensity" clearable hide-details />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-select v-model="sortBy" :items="sortOptions" label="Sort By" variant="outlined"
                  :density="fieldDensity" hide-details />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-select v-model="itemsPerPage" :items="[5, 10, 25, 50, 100]" label="Per page" variant="outlined"
                  :density="fieldDensity" hide-details />
              </v-col>

              <v-col cols="12" sm="3" md="1">
                <v-btn :size="filterButtonSize" :icon="!display.xs.value" color="error" variant="outlined"
                  @click="clearFilters" block>
                  <v-icon :size="headerIconSize">mdi-filter-remove</v-icon>
                  <span v-if="display.xs.value" class="ml-2">Clear</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>

      <v-divider />

      <!-- Mobile Card View (xs only) -->
      <div v-if="display.xs.value" class="mobile-cards-container">
        <!-- Loading State -->
        <div v-if="loading" :class="loadingClasses">
          <v-progress-circular :size="loadingSize" indeterminate color="primary" />
          <p :class="loadingTextClasses">Loading profiles...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="filteredProfiles.length === 0" :class="emptyStateClasses">
          <v-icon :size="emptyIconSize" color="grey-lighten-1">mdi-account-off</v-icon>
          <p :class="emptyTitleClasses">No profiles found</p>
          <p :class="emptySubtitleClasses">
            Try adjusting your filters or search query
          </p>
        </div>

        <!-- Profile Cards -->
        <div v-else>
          <v-card v-for="profile in paginatedProfiles" :key="profile.id" :class="mobileCardClasses"
            :elevation="cardElevation" @click="toggleSelection(profile.id)">
            <v-card-text :class="mobileCardPadding">
              <div class="d-flex align-start" :style="mobileCardGap">
                <!-- Checkbox -->
                <v-checkbox v-model="selectedProfiles" :value="profile.id" density="compact" hide-details
                  class="mt-0 flex-shrink-0" @click.stop />

                <!-- Avatar with responsive size -->
                <v-avatar :size="mobileAvatarSize" class="flex-shrink-0">
                  <v-img :src="profile.avatar" :alt="profile.name" cover>
                    <template v-slot:placeholder>
                      <v-progress-circular indeterminate :size="avatarLoaderSize" />
                    </template>
                  </v-img>
                </v-avatar>

                <!-- Profile Info with responsive typography -->
                <div class="flex-1-1-auto" :style="{ minWidth: 0 }">
                  <div class="d-flex justify-space-between align-start mb-1">
                    <div class="flex-1-1-auto" :style="{ minWidth: 0 }">
                      <div :class="mobileNameClasses">{{ profile.name }}</div>
                      <div :class="mobileRoleClasses">{{ profile.role }}</div>
                    </div>
                    <v-chip :color="getStatusColor(profile.status)" :prepend-icon="getStatusIcon(profile.status)"
                      :size="mobileChipSize" variant="flat" class="ml-2 flex-shrink-0">
                      <span :class="chipTextClasses">{{ profile.status }}</span>
                    </v-chip>
                  </div>

                  <!-- Department -->
                  <v-chip :color="getDepartmentColor(profile.department)" :size="mobileDeptChipSize" variant="tonal"
                    class="mb-2">
                    <span :class="chipTextClasses">{{ profile.department }}</span>
                  </v-chip>

                  <!-- Contact Info with responsive icons and text -->
                  <div :class="mobileContactClasses">
                    <div class="d-flex align-center mb-1" :style="contactGap">
                      <v-icon :size="mobileIconSize" color="grey">mdi-email</v-icon>
                      <span class="text-truncate" :style="{ flex: 1 }">{{ profile.email }}</span>
                    </div>
                    <div class="d-flex align-center" :style="contactGap">
                      <v-icon :size="mobileIconSize" color="grey">mdi-phone</v-icon>
                      <span>{{ profile.phone }}</span>
                    </div>
                  </div>

                  <!-- Actions with responsive buttons -->
                  <div class="d-flex mt-2" :style="mobileActionsGap">
                    <v-btn :size="mobileButtonSize" variant="tonal" color="primary" prepend-icon="mdi-eye"
                      @click.stop="viewProfile(profile)" class="flex-1-1-auto">
                      <span :class="buttonTextClasses">View</span>
                    </v-btn>
                    <v-btn :size="mobileButtonSize" variant="tonal" color="info" icon="mdi-pencil"
                      @click.stop="editProfile(profile)" class="flex-shrink-0" />
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn :size="mobileButtonSize" variant="tonal" icon="mdi-dots-vertical" v-bind="props"
                          class="flex-shrink-0" @click.stop />
                      </template>
                      <v-list :density="menuDensity">
                        <v-list-item @click="sendMessage(profile)">
                          <template v-slot:prepend>
                            <v-icon :size="menuIconSize">mdi-message</v-icon>
                          </template>
                          <v-list-item-title :class="menuTextClasses">Send Message</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="downloadProfile(profile)">
                          <template v-slot:prepend>
                            <v-icon :size="menuIconSize">mdi-download</v-icon>
                          </template>
                          <v-list-item-title :class="menuTextClasses">Download</v-list-item-title>
                        </v-list-item>
                        <v-divider />
                        <v-list-item @click="deleteProfile(profile)" class="text-error">
                          <template v-slot:prepend>
                            <v-icon :size="menuIconSize" color="error">mdi-delete</v-icon>
                          </template>
                          <v-list-item-title :class="menuTextClasses">Delete</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <!-- Desktop/Tablet Table View (sm and up) -->
      <v-table v-else :class="tableClasses" :density="tableDensity">
        <thead>
          <tr>
            <th :class="tableHeaderClasses" :style="{ width: checkboxWidth }">
              <v-checkbox v-model="selectAll" density="compact" hide-details @change="toggleSelectAll" />
            </th>
            <th :class="tableHeaderClasses">Profile</th>
            <th :class="[tableHeaderClasses, 'd-none d-sm-table-cell']">Contact</th>
            <th :class="[tableHeaderClasses, 'd-none d-md-table-cell']">Department</th>
            <th :class="[tableHeaderClasses, 'd-none d-lg-table-cell']">Joined</th>
            <th :class="tableHeaderClasses">Status</th>
            <th :class="[tableHeaderClasses, 'text-center']">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="7" :class="loadingClasses">
              <v-progress-circular :size="loadingSize" indeterminate color="primary" />
              <p :class="loadingTextClasses">Loading profiles...</p>
            </td>
          </tr>
          <tr v-else-if="filteredProfiles.length === 0">
            <td colspan="7" :class="emptyStateClasses">
              <v-icon :size="emptyIconSize" color="grey-lighten-1">mdi-account-off</v-icon>
              <p :class="emptyTitleClasses">No profiles found</p>
              <p :class="emptySubtitleClasses">
                Try adjusting your filters or search query
              </p>
            </td>
          </tr>
          <tr v-else v-for="profile in paginatedProfiles" :key="profile.id" :class="getRowClasses(profile.id)">
            <!-- Checkbox -->
            <td :style="tableCellPadding">
              <v-checkbox v-model="selectedProfiles" :value="profile.id" density="compact" hide-details />
            </td>

            <!-- Profile (Avatar + Name + Role) -->
            <td :style="tableCellPadding">
              <div class="d-flex align-center" :style="tableProfileGap">
                <v-avatar :size="tableAvatarSize" class="flex-shrink-0">
                  <v-img :src="profile.avatar" :alt="profile.name" cover>
                    <template v-slot:placeholder>
                      <v-progress-circular indeterminate :size="avatarLoaderSize" />
                    </template>
                  </v-img>
                  <v-badge v-if="profile.status === 'online'" dot color="success" location="bottom right"
                    :offset-x="badgeOffset" :offset-y="badgeOffset" />
                </v-avatar>
                <div class="flex-1-1-auto">
                  <div :class="tableNameClasses">{{ profile.name }}</div>
                  <div :class="tableRoleClasses">{{ profile.role }}</div>
                </div>
              </div>
            </td>

            <!-- Contact (Email + Phone) -->
            <td :style="tableCellPadding" class="d-none d-sm-table-cell">
              <div>
                <div class="d-flex align-center mb-1" :style="contactGap">
                  <v-icon :size="tableIconSize" color="grey">mdi-email</v-icon>
                  <span :class="tableContactClasses">{{ profile.email }}</span>
                </div>
                <div class="d-flex align-center" :style="contactGap">
                  <v-icon :size="tableIconSize" color="grey">mdi-phone</v-icon>
                  <span :class="tableContactClasses">{{ profile.phone }}</span>
                </div>
              </div>
            </td>

            <!-- Department -->
            <td :style="tableCellPadding" class="d-none d-md-table-cell">
              <v-chip :color="getDepartmentColor(profile.department)" :size="tableChipSize" variant="tonal">
                <span :class="chipTextClasses">{{ profile.department }}</span>
              </v-chip>
            </td>

            <!-- Joined Date -->
            <td :style="tableCellPadding" class="d-none d-lg-table-cell">
              <div :class="tableDateClasses">{{ formatDate(profile.joinedDate) }}</div>
              <div :class="tableDateSubClasses">{{ getTimeAgo(profile.joinedDate) }}</div>
            </td>

            <!-- Status -->
            <td :style="tableCellPadding">
              <v-chip :color="getStatusColor(profile.status)" :prepend-icon="getStatusIcon(profile.status)"
                :size="tableChipSize" variant="flat">
                <span :class="chipTextClasses">{{ profile.status }}</span>
              </v-chip>
            </td>

            <!-- Actions -->
            <td :style="tableCellPadding">
              <div class="d-flex justify-center" :style="tableActionsGap">
                <v-btn icon :size="tableActionSize" variant="text" color="primary" @click="viewProfile(profile)">
                  <v-icon :size="actionIconSize">mdi-eye</v-icon>
                  <v-tooltip activator="parent" location="top">View</v-tooltip>
                </v-btn>
                <v-btn icon :size="tableActionSize" variant="text" color="info" @click="editProfile(profile)">
                  <v-icon :size="actionIconSize">mdi-pencil</v-icon>
                  <v-tooltip activator="parent" location="top">Edit</v-tooltip>
                </v-btn>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn icon :size="tableActionSize" variant="text" v-bind="props">
                      <v-icon :size="actionIconSize">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list :density="menuDensity">
                    <v-list-item @click="sendMessage(profile)">
                      <template v-slot:prepend>
                        <v-icon :size="menuIconSize">mdi-message</v-icon>
                      </template>
                      <v-list-item-title :class="menuTextClasses">Send Message</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="downloadProfile(profile)">
                      <template v-slot:prepend>
                        <v-icon :size="menuIconSize">mdi-download</v-icon>
                      </template>
                      <v-list-item-title :class="menuTextClasses">Download</v-list-item-title>
                    </v-list-item>
                    <v-divider />
                    <v-list-item @click="deleteProfile(profile)" class="text-error">
                      <template v-slot:prepend>
                        <v-icon :size="menuIconSize" color="error">mdi-delete</v-icon>
                      </template>
                      <v-list-item-title :class="menuTextClasses">Delete</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>

      <v-divider />

      <!-- Pagination and Actions with responsive layout -->
      <v-card-actions :class="footerClasses">
        <!-- Info Text -->
        <div :class="footerTextClasses">
          <span v-if="!display.xs.value">
            Showing {{ startItem }} to {{ endItem }} of {{ filteredProfiles.length }} profiles
          </span>
          <span v-else>
            {{ startItem }}-{{ endItem }} of {{ filteredProfiles.length }}
          </span>
          <span v-if="selectedProfiles.length > 0" :class="selectedTextClasses">
            ({{ selectedProfiles.length }} selected)
          </span>
        </div>

        <v-spacer class="d-none d-sm-block" />

        <!-- Actions Container -->
        <div :class="footerActionsClasses">
          <!-- Bulk Actions -->
          <v-menu v-if="selectedProfiles.length > 0">
            <template v-slot:activator="{ props }">
              <v-btn variant="outlined" :size="footerButtonSize"
                :prepend-icon="display.xs.value ? '' : 'mdi-arrow-down'" v-bind="props"
                :class="bulkActionButtonClasses">
                <span :class="buttonTextClasses">Actions</span>
              </v-btn>
            </template>
            <v-list :density="menuDensity">
              <v-list-item @click="bulkExport">
                <template v-slot:prepend>
                  <v-icon :size="menuIconSize">mdi-export</v-icon>
                </template>
                <v-list-item-title :class="menuTextClasses">Export Selected</v-list-item-title>
              </v-list-item>
              <v-list-item @click="bulkChangeStatus">
                <template v-slot:prepend>
                  <v-icon :size="menuIconSize">mdi-account-switch</v-icon>
                </template>
                <v-list-item-title :class="menuTextClasses">Change Status</v-list-item-title>
              </v-list-item>
              <v-list-item @click="bulkDelete" class="text-error">
                <template v-slot:prepend>
                  <v-icon :size="menuIconSize" color="error">mdi-delete-sweep</v-icon>
                </template>
                <v-list-item-title :class="menuTextClasses">Delete Selected</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- Pagination -->
          <v-pagination v-model="page" :length="pageCount" :total-visible="paginationVisible" :size="paginationSize"
            class="flex-1-1-auto" />
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

// Table state
const loading = ref(false)
const search = ref('')
const filterDepartment = ref<string | null>(null)
const filterStatus = ref<string | null>(null)
const page = ref(1)
const itemsPerPage = ref(10)
const selectAll = ref(false)
const selectedProfiles = ref<number[]>([])

// Data
interface Profile {
  id: number
  name: string
  email: string
  phone: string
  avatar: string
  role: string
  department: string
  joinedDate: string
  status: 'online' | 'away' | 'offline'
  location: string
  bio: string
  salary: number
  performance: number
  projects: number
  tasks: {
    total: number
    completed: number
    pending: number
  }
  skills: string[]
  lastActive: string
  teamLead: boolean
  certifications: number
}

interface ActivityLog {
  id: number
  profileId: number
  action: string
  timestamp: string
  type: 'login' | 'task' | 'project' | 'message'
}

const profiles = ref<Profile[]>([])
const activityLogs = ref<ActivityLog[]>([])
const expandedRows = ref<number[]>([])
const showFilters = ref(false)
const viewMode = ref<'grid' | 'list'>('list')
const sortBy = ref<'name' | 'department' | 'performance' | 'salary'>('name')
const sortOrder = ref<'asc' | 'desc'>('asc')

const departments = [
  'Engineering',
  'Marketing',
  'Sales',
  'Design',
  'Support',
  'HR',
  'Finance',
  'Operations'
]

const statusOptions = ['online', 'away', 'offline']

// Responsive styling computed properties
const headerClasses = computed(() => {
  return display.xs.value
    ? 'd-flex flex-wrap align-center ga-2 pa-3'
    : display.sm.value
      ? 'd-flex flex-wrap align-center ga-3 pa-4'
      : 'd-flex flex-wrap align-center ga-4 pa-5'
})

const titleClasses = computed(() => {
  return display.xs.value
    ? 'text-h6'
    : display.sm.value
      ? 'text-h5'
      : 'text-h4'
})

const subtitleClasses = computed(() => {
  return display.xs.value
    ? 'text-caption text-medium-emphasis mb-0'
    : 'text-body-2 text-medium-emphasis mb-0'
})

const fieldDensity = computed<'compact' | 'comfortable' | 'default'>(() => {
  return display.xs.value ? 'compact' : 'comfortable'
})

// Mobile card styling
const mobileCardClasses = computed(() => {
  const base = 'mb-3 mx-3 profile-card'
  return base
})

const mobileCardPadding = computed(() => {
  return display.xs.value ? 'pa-3' : 'pa-4'
})

const mobileCardGap = computed(() => {
  return { gap: display.xs.value ? '8px' : '12px' }
})

const cardElevation = computed(() => {
  return display.xs.value ? 1 : 2
})

// Avatar sizes
const mobileAvatarSize = computed(() => {
  return display.xs.value ? 48 : 56
})

const tableAvatarSize = computed(() => {
  return display.sm.value ? 40 : display.md.value ? 44 : 48
})

const avatarLoaderSize = computed(() => {
  return display.xs.value ? 20 : 24
})

// Typography
const mobileNameClasses = computed(() => {
  return display.xs.value
    ? 'font-weight-bold text-body-2'
    : 'font-weight-bold text-body-1'
})

const mobileRoleClasses = computed(() => {
  return 'text-caption text-medium-emphasis'
})

const tableNameClasses = computed(() => {
  return display.sm.value
    ? 'font-weight-medium text-caption'
    : display.md.value
      ? 'font-weight-medium text-body-2'
      : 'font-weight-medium text-body-1'
})

const tableRoleClasses = computed(() => {
  return 'text-caption text-medium-emphasis'
})

const mobileContactClasses = computed(() => {
  return 'text-caption mb-2'
})

const tableContactClasses = computed(() => {
  return display.sm.value ? 'text-caption' : 'text-body-2'
})

const tableDateClasses = computed(() => {
  return display.lg.value ? 'text-body-2' : 'text-caption'
})

const tableDateSubClasses = computed(() => {
  return 'text-caption text-medium-emphasis'
})

// Chips
const mobileChipSize = computed<'x-small' | 'small' | 'default'>(() => {
  return 'x-small'
})

const mobileDeptChipSize = computed<'x-small' | 'small' | 'default'>(() => {
  return display.xs.value ? 'x-small' : 'small'
})

const tableChipSize = computed<'x-small' | 'small' | 'default'>(() => {
  return display.sm.value ? 'x-small' : 'small'
})

const chipTextClasses = computed(() => {
  return display.xs.value ? 'text-caption' : ''
})

// Buttons
const mobileButtonSize = computed<'x-small' | 'small' | 'default'>(() => {
  return display.xs.value ? 'x-small' : 'small'
})

const tableActionSize = computed<'x-small' | 'small' | 'default'>(() => {
  return display.sm.value ? 'x-small' : 'small'
})

const footerButtonSize = computed<'x-small' | 'small' | 'default'>(() => {
  return display.xs.value ? 'x-small' : 'small'
})

const buttonTextClasses = computed(() => {
  return display.xs.value ? 'text-caption' : ''
})

// Icons
const mobileIconSize = computed(() => {
  return display.xs.value ? 14 : 16
})

const tableIconSize = computed(() => {
  return display.sm.value ? 14 : 16
})

const actionIconSize = computed(() => {
  return display.sm.value ? 16 : 20
})

const menuIconSize = computed(() => {
  return display.xs.value ? 18 : 20
})

// Gaps and spacing
const contactGap = computed(() => {
  return { gap: '4px' }
})

const mobileActionsGap = computed(() => {
  return { gap: display.xs.value ? '4px' : '8px' }
})

const tableProfileGap = computed(() => {
  return { gap: display.sm.value ? '8px' : '12px' }
})

const tableActionsGap = computed(() => {
  return { gap: display.sm.value ? '2px' : '4px' }
})

// Table styling
const tableClasses = computed(() => {
  return 'profile-table'
})

const tableDensity = computed<'compact' | 'comfortable' | 'default'>(() => {
  return display.sm.value ? 'compact' : display.md.value ? 'comfortable' : 'default'
})

const tableHeaderClasses = computed(() => {
  return display.sm.value ? 'text-caption' : 'text-body-2'
})

const tableCellPadding = computed(() => {
  const padding = display.sm.value ? '8px 4px' : display.md.value ? '12px 8px' : '16px 12px'
  return { padding }
})

const checkboxWidth = computed(() => {
  return display.sm.value ? '40px' : '60px'
})

const badgeOffset = computed(() => {
  return display.sm.value ? 1 : 2
})

// Loading and empty states
const loadingClasses = computed(() => {
  const padding = display.xs.value ? 'pa-6' : 'pa-8'
  return `text-center ${padding}`
})

const loadingSize = computed(() => {
  return display.xs.value ? 32 : 40
})

const loadingTextClasses = computed(() => {
  return display.xs.value ? 'text-caption mt-2' : 'text-body-2 mt-2'
})

const emptyStateClasses = computed(() => {
  const padding = display.xs.value ? 'pa-6' : 'pa-8'
  return `text-center ${padding}`
})

const emptyIconSize = computed(() => {
  return display.xs.value ? 48 : 64
})

const emptyTitleClasses = computed(() => {
  return display.xs.value ? 'text-h6 mt-2' : 'text-h5 mt-2'
})

const emptySubtitleClasses = computed(() => {
  return 'text-caption text-medium-emphasis'
})

// Footer/Pagination
const footerClasses = computed(() => {
  const padding = display.xs.value ? 'pa-2' : 'pa-4'
  return `d-flex flex-wrap ga-3 ${padding}`
})

const footerTextClasses = computed(() => {
  return display.xs.value
    ? 'text-caption text-medium-emphasis flex-1-1-100'
    : 'text-caption text-medium-emphasis flex-sm-0-0-auto'
})

const selectedTextClasses = computed(() => {
  return display.xs.value ? 'd-block mt-1' : 'ml-2'
})

const footerActionsClasses = computed(() => {
  return 'd-flex align-center ga-2 flex-1-1-100 flex-sm-0-0-auto'
})

const bulkActionButtonClasses = computed(() => {
  return display.xs.value ? 'flex-1-1-auto' : 'flex-sm-0-0-auto'
})

const paginationVisible = computed(() => {
  return display.xs.value ? 3 : display.sm.value ? 5 : 7
})

const paginationSize = computed<'small' | 'default' | 'large'>(() => {
  return display.xs.value ? 'small' : 'default'
})

// Menu density
const menuDensity = computed<'compact' | 'comfortable' | 'default'>(() => {
  return display.xs.value ? 'compact' : 'comfortable'
})

const menuTextClasses = computed(() => {
  return display.xs.value ? 'text-caption' : ''
})

// Generate sample data
const generateProfiles = (): Profile[] => {
  const names = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince',
    'Ethan Hunt', 'Fiona Gallagher', 'George Wilson', 'Hannah Montana',
    'Ivan Drago', 'Julia Roberts', 'Kevin Hart', 'Laura Palmer',
    'Michael Scott', 'Nancy Drew', 'Oliver Queen', 'Patricia Jones',
    'Quincy Adams', 'Rachel Green', 'Steve Rogers', 'Tina Fey',
    'Uma Thurman', 'Victor Stone', 'Wendy Williams', 'Xavier Charles',
    'Yolanda Vega', 'Zachary Levi', 'Amy Adams', 'Bruce Wayne',
    'Chloe Kim', 'David Lee'
  ]

  const roles = [
    'Senior Developer', 'Marketing Manager', 'Sales Executive',
    'UX Designer', 'Support Engineer', 'HR Specialist',
    'Financial Analyst', 'Operations Manager', 'Product Manager',
    'Data Scientist', 'DevOps Engineer', 'Content Writer'
  ]

  const locations = [
    'New York, NY', 'San Francisco, CA', 'Austin, TX',
    'Seattle, WA', 'Boston, MA', 'Chicago, IL',
    'Los Angeles, CA', 'Denver, CO'
  ]

  return names.map((name, index) => {
    const randomRole = roles[Math.floor(Math.random() * roles.length)]
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)]
    const randomLocation = locations[Math.floor(Math.random() * locations.length)]

    return {
      id: index + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}@company.com`,
      phone: `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
      role: randomRole!,
      department: randomDepartment!,
      joinedDate: new Date(2020 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      status: ['online', 'away', 'offline'][Math.floor(Math.random() * 3)] as 'online' | 'away' | 'offline',
      location: randomLocation!,
      bio: 'Passionate professional dedicated to excellence and innovation.'
    }
  })
}

// Computed
const filteredProfiles = computed(() => {
  let result = profiles.value

  if (search.value) {
    const searchLower = search.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchLower) ||
      p.email.toLowerCase().includes(searchLower) ||
      p.role.toLowerCase().includes(searchLower)
    )
  }

  if (filterDepartment.value) {
    result = result.filter(p => p.department === filterDepartment.value)
  }

  if (filterStatus.value) {
    result = result.filter(p => p.status === filterStatus.value)
  }

  return result
})

const paginatedProfiles = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProfiles.value.slice(start, end)
})

const pageCount = computed(() => {
  return Math.ceil(filteredProfiles.value.length / itemsPerPage.value)
})

const startItem = computed(() => {
  if (filteredProfiles.value.length === 0) return 0
  return (page.value - 1) * itemsPerPage.value + 1
})

const endItem = computed(() => {
  const end = page.value * itemsPerPage.value
  return Math.min(end, filteredProfiles.value.length)
})

// Methods
const getDepartmentColor = (department: string): string => {
  const colors: Record<string, string> = {
    Engineering: 'blue',
    Marketing: 'purple',
    Sales: 'green',
    Design: 'pink',
    Support: 'orange',
    HR: 'teal',
    Finance: 'indigo',
    Operations: 'cyan'
  }
  return colors[department] || 'grey'
}

const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    online: 'success',
    away: 'warning',
    offline: 'grey'
  }
  return colors[status] || 'grey'
}

const getStatusIcon = (status: string): string => {
  const icons: Record<string, string> = {
    online: 'mdi-circle',
    away: 'mdi-circle-half-full',
    offline: 'mdi-circle-outline'
  }
  return icons[status] || 'mdi-circle-outline'
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const getTimeAgo = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMonths = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30))

  if (diffInMonths < 1) return 'This month'
  if (diffInMonths < 12) return `${diffInMonths} months ago`
  const years = Math.floor(diffInMonths / 12)
  return `${years} year${years > 1 ? 's' : ''} ago`
}

const getRowClasses = (profileId: number): string => {
  return selectedProfiles.value.includes(profileId) ? 'bg-surface-light' : ''
}

const toggleSelection = (profileId: number) => {
  const index = selectedProfiles.value.indexOf(profileId)
  if (index > -1) {
    selectedProfiles.value.splice(index, 1)
  } else {
    selectedProfiles.value.push(profileId)
  }
}

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedProfiles.value = paginatedProfiles.value.map(p => p.id)
  } else {
    selectedProfiles.value = []
  }
}

// Action handlers
const viewProfile = (profile: Profile) => {
  console.log('View profile:', profile)
  alert(`Viewing profile: ${profile.name}`)
}

const editProfile = (profile: Profile) => {
  console.log('Edit profile:', profile)
  alert(`Editing profile: ${profile.name}`)
}

const sendMessage = (profile: Profile) => {
  console.log('Send message to:', profile)
  alert(`Sending message to: ${profile.name}`)
}

const downloadProfile = (profile: Profile) => {
  console.log('Download profile:', profile)
  alert(`Downloading profile data for: ${profile.name}`)
}

const deleteProfile = (profile: Profile) => {
  if (confirm(`Are you sure you want to delete ${profile.name}?`)) {
    profiles.value = profiles.value.filter(p => p.id !== profile.id)
  }
}

const bulkExport = () => {
  console.log('Bulk export:', selectedProfiles.value)
  alert(`Exporting ${selectedProfiles.value.length} profiles`)
}

const bulkChangeStatus = () => {
  console.log('Bulk change status:', selectedProfiles.value)
  alert(`Changing status for ${selectedProfiles.value.length} profiles`)
}

const bulkDelete = () => {
  if (confirm(`Are you sure you want to delete ${selectedProfiles.value.length} profiles?`)) {
    profiles.value = profiles.value.filter(p => !selectedProfiles.value.includes(p.id))
    selectedProfiles.value = []
  }
}

// Lifecycle
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    profiles.value = generateProfiles()
    loading.value = false
  }, 500)
})
</script>

<style scoped>
.profile-table {
  width: 100%;
}

.profile-table th {
  font-weight: 600;
  white-space: nowrap;
}

.profile-table td {
  vertical-align: middle;
}

/* Mobile Cards */
.mobile-cards-container {
  padding: 8px 0;
}

.profile-card {
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.profile-card:hover {
  border-left-color: rgb(var(--v-theme-primary));
  cursor: pointer;
}

.profile-card.selected {
  border-left-color: rgb(var(--v-theme-primary));
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Desktop selected row */
.bg-surface-light {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

/* Smooth transitions */
* {
  transition: font-size 0.2s ease, padding 0.2s ease, gap 0.2s ease;
}
</style>
