<template>
  <v-container fluid>
    <div class="d-flex justify-space-between align-center mb-4">
      <div>
        <h1 class="text-h4 font-weight-bold">Customizable Data Table</h1>
        <p class="text-body-1 text-medium-emphasis">
          Server-side data table with font size and column customization
        </p>
      </div>

      <!-- Global Font Size Indicator -->
      <v-card variant="outlined" class="pa-3">
        <div class="text-caption mb-2">Current Global Font</div>
        <v-chip color="primary" variant="tonal">
          {{ currentFontSizeInfo.label }} @ {{ globalFontRatio }}%
        </v-chip>
        <div class="text-caption mt-1">
          <router-link to="/font-size" class="text-primary text-decoration-none">
            Adjust Global Font Size →
          </router-link>
        </div>
      </v-card>
    </div>

    <!-- Table Controls -->
    <v-row class="mb-4">
      <v-col cols="12" md="3">
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          variant="outlined"
          density="compact"
          clearable
          @input="searchItems"
        />
      </v-col>
      
      <v-col cols="12" md="2">
        <v-select
          v-model="itemsPerPage"
          :items="itemsPerPageOptions"
          label="Items per page"
          variant="outlined"
          density="compact"
          @update:model-value="updateItemsPerPage"
        />
      </v-col>

      <v-col cols="12" md="3">
        <v-select
          v-model="selectedColumns"
          :items="availableColumns"
          label="Show Columns"
          variant="outlined"
          density="compact"
          multiple
          chips
          closable-chips
        />
      </v-col>

      <v-col cols="12" md="2">
        <v-select
          v-model="density"
          :items="densityOptions"
          label="Table Density"
          variant="outlined"
          density="compact"
          @update:model-value="updateDensity"
        />
      </v-col>

      <v-col cols="12" md="2">
        <v-btn
          color="primary"
          prepend-icon="mdi-refresh"
          @click="refreshData"
          block
        >
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-card>
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        v-model:sort-by="sortBy"
        v-model:page="page"
        :headers="filteredHeaders"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        :search="search"
        :density="density"
        class="custom-table elevation-1"
        item-value="id"
        @update:options="loadItems"
      >
        <!-- Custom header slots -->
        <template v-slot:header.actions>
          <v-icon>mdi-cog</v-icon>
        </template>

        <!-- Custom item slots for better formatting -->
        <template v-slot:item.name="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="32" class="mr-2">
              <v-img :src="item.avatar" :alt="item.name" />
            </v-avatar>
            <div>
              <div class="font-weight-medium">{{ item.name }}</div>
              <div class="text-caption text-medium-emphasis">{{ item.username }}</div>
            </div>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getStatusColor(item.status)"
            size="small"
            variant="tonal"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.role="{ item }">
          <v-chip
            :color="getRoleColor(item.role)"
            size="small"
            variant="outlined"
          >
            {{ item.role }}
          </v-chip>
        </template>

        <template v-slot:item.salary="{ item }">
          <div class="text-right font-weight-medium">
            ${{ item.salary.toLocaleString() }}
          </div>
        </template>

        <template v-slot:item.lastLogin="{ item }">
          <div class="text-caption">
            {{ formatDate(item.lastLogin) }}
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex ga-1">
            <v-btn
              icon="mdi-eye"
              size="small"
              variant="text"
              @click="viewItem(item)"
            />
            <v-btn
              icon="mdi-pencil"
              size="small"
              variant="text"
              @click="editItem(item)"
            />
            <v-btn
              icon="mdi-delete"
              size="small"
              variant="text"
              color="error"
              @click="deleteItem(item)"
            />
          </div>
        </template>

        <!-- Loading slot -->
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10" />
        </template>
      </v-data-table-server>
    </v-card>

    <!-- Table Stats -->
    <v-card class="mt-4" variant="outlined">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-stat>
              <v-stat-title>Total Records</v-stat-title>
              <v-stat-value>{{ totalItems.toLocaleString() }}</v-stat-value>
            </v-stat>
          </v-col>
          <v-col cols="12" md="3">
            <div class="text-caption text-medium-emphasis">Current Page</div>
            <div class="text-h6">{{ page }} of {{ Math.ceil(totalItems / itemsPerPage) }}</div>
          </v-col>
          <v-col cols="12" md="3">
            <div class="text-caption text-medium-emphasis">Showing Columns</div>
            <div class="text-h6">{{ filteredHeaders.length }}</div>
          </v-col>
          <v-col cols="12" md="3">
            <div class="text-caption text-medium-emphasis">Global Font</div>
            <div class="text-h6">{{ currentFontSizeInfo.label }} @ {{ globalFontRatio }}%</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGlobalFontSize } from '../composables/useGlobalFontSize'

// Global font size integration
const { globalFontRatio, currentFontSizeInfo } = useGlobalFontSize()

// Table configuration
const loading = ref(false)
const search = ref('')
const page = ref(1)
const itemsPerPage = ref(10)
const sortBy = ref([])
const serverItems = ref<any[]>([])
const totalItems = ref(0)
const density = ref<'default' | 'compact' | 'comfortable'>('default')

const itemsPerPageOptions = [5, 10, 15, 25, 50, 100]
const densityOptions = [
  { title: 'Comfortable', value: 'default' },
  { title: 'Compact', value: 'compact' },
  { title: 'Comfortable', value: 'comfortable' }
]

// Column configuration
const selectedColumns = ref(['name', 'email', 'role', 'department', 'status', 'salary', 'actions'])

const availableColumns = [
  { title: 'Name', value: 'name' },
  { title: 'Email', value: 'email' },
  { title: 'Phone', value: 'phone' },
  { title: 'Role', value: 'role' },
  { title: 'Department', value: 'department' },
  { title: 'Status', value: 'status' },
  { title: 'Salary', value: 'salary' },
  { title: 'Hire Date', value: 'hireDate' },
  { title: 'Last Login', value: 'lastLogin' },
  { title: 'Manager', value: 'manager' },
  { title: 'Location', value: 'location' },
  { title: 'Actions', value: 'actions' }
]

const allHeaders = [
  { title: 'Name', key: 'name', sortable: true, width: '200px' },
  { title: 'Email', key: 'email', sortable: true },
  { title: 'Phone', key: 'phone', sortable: false },
  { title: 'Role', key: 'role', sortable: true },
  { title: 'Department', key: 'department', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Salary', key: 'salary', sortable: true, align: 'end' as const },
  { title: 'Hire Date', key: 'hireDate', sortable: true },
  { title: 'Last Login', key: 'lastLogin', sortable: true },
  { title: 'Manager', key: 'manager', sortable: true },
  { title: 'Location', key: 'location', sortable: true },
  { title: 'Actions', key: 'actions', sortable: false, width: '120px' }
]

const filteredHeaders = computed(() => {
  return allHeaders.filter(header => selectedColumns.value.includes(header.key))
})

// Mock data generation
const generateMockData = (page: number, itemsPerPage: number, search: string) => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations']
  const roles = ['Developer', 'Manager', 'Analyst', 'Designer', 'Director', 'Coordinator']
  const statuses = ['Active', 'Inactive', 'Pending', 'Suspended']
  const locations = ['New York', 'London', 'Tokyo', 'Sydney', 'Berlin', 'Toronto']

  const allData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    username: `user${i + 1}`,
    email: `employee${i + 1}@company.com`,
    phone: `+1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
    role: roles[Math.floor(Math.random() * roles.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    salary: Math.floor(Math.random() * 100000) + 40000,
    hireDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
    manager: `Manager ${Math.floor(Math.random() * 10) + 1}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${(i % 99) + 1}.jpg`
  }))

  // Filter by search
  let filteredData = allData
  if (search) {
    filteredData = allData.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  // Pagination
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage
  
  return {
    items: filteredData.slice(start, end),
    total: filteredData.length
  }
}

// Load data function
const loadItems = async ({ page, itemsPerPage, sortBy }: any) => {
  loading.value = true
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const { items, total } = generateMockData(page, itemsPerPage, search.value)
  
  // Apply sorting (simplified)
  if (sortBy.length > 0) {
    const sortKey = sortBy[0].key
    const sortOrder = sortBy[0].order
    
    items.sort((a: any, b: any) => {
      let aVal = a[sortKey]
      let bVal = b[sortKey]
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase()
        bVal = bVal.toLowerCase()
      }
      
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
  }
  
  serverItems.value = items
  totalItems.value = total
  loading.value = false
}

// Utility functions
const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    'Active': 'success',
    'Inactive': 'error',
    'Pending': 'warning',
    'Suspended': 'secondary'
  }
  return colors[status] || 'primary'
}

const getRoleColor = (role: string) => {
  const colors: Record<string, string> = {
    'Developer': 'blue',
    'Manager': 'purple',
    'Analyst': 'teal',
    'Designer': 'pink',
    'Director': 'indigo',
    'Coordinator': 'orange'
  }
  return colors[role] || 'primary'
}

const formatDate = (date: Date) => {
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
    .format(Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)), 'day')
}

const searchItems = () => {
  page.value = 1
  loadItems({ page: page.value, itemsPerPage: itemsPerPage.value, sortBy: sortBy.value })
}

const updateItemsPerPage = () => {
  page.value = 1
  loadItems({ page: page.value, itemsPerPage: itemsPerPage.value, sortBy: sortBy.value })
}

const updateDensity = () => {
  // Density will be applied automatically via v-model
}

const refreshData = () => {
  loadItems({ page: page.value, itemsPerPage: itemsPerPage.value, sortBy: sortBy.value })
}

const viewItem = (item: any) => {
  console.log('View item:', item)
}

const editItem = (item: any) => {
  console.log('Edit item:', item)
}

const deleteItem = (item: any) => {
  console.log('Delete item:', item)
}

// Initialize data
onMounted(() => {
  loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
})
</script>

<style scoped>
/* Font size variations */
.custom-table.font-size-xs {
  font-size: 0.75rem;
}

.custom-table.font-size-xs :deep(.v-data-table__td) {
  padding: 4px 8px;
  font-size: 0.75rem;
}

.custom-table.font-size-xs :deep(.v-data-table__th) {
  padding: 4px 8px;
  font-size: 0.75rem;
}

.custom-table.font-size-sm {
  font-size: 0.875rem;
}

.custom-table.font-size-sm :deep(.v-data-table__td) {
  padding: 6px 12px;
  font-size: 0.875rem;
}

.custom-table.font-size-sm :deep(.v-data-table__th) {
  padding: 6px 12px;
  font-size: 0.875rem;
}

.custom-table.font-size-md {
  font-size: 1rem;
}

.custom-table.font-size-lg {
  font-size: 1.125rem;
}

.custom-table.font-size-lg :deep(.v-data-table__td) {
  padding: 12px 16px;
  font-size: 1.125rem;
}

.custom-table.font-size-lg :deep(.v-data-table__th) {
  padding: 12px 16px;
  font-size: 1.125rem;
}

/* Table customizations */
.custom-table :deep(.v-data-table__th) {
  background-color: rgb(var(--v-theme-surface-variant));
  font-weight: 600;
}

.custom-table :deep(.v-data-table-server__table) {
  border-radius: 8px;
  overflow: hidden;
}

.custom-table :deep(.v-data-table__tr:hover) {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

/* Responsive table */
@media (max-width: 768px) {
  .custom-table :deep(.v-data-table__td) {
    padding: 8px 4px;
  }
  
  .custom-table :deep(.v-data-table__th) {
    padding: 8px 4px;
  }
}

/* Stats styling */
.v-stat {
  text-align: center;
}

.v-stat-title {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-bottom: 4px;
}

.v-stat-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}
</style>