<template>
  <v-card>
    <!-- Tabs Header - Fixed, tidak ikut scroll -->
    <v-tabs v-model="activeTab" bg-color="primary" color="white" class="tabs-header" fixed-tabs>
      <v-tab value="sales">
        <v-icon start>mdi-cart</v-icon>
        Sales Data
      </v-tab>
      <v-tab value="inventory">
        <v-icon start>mdi-warehouse</v-icon>
        Inventory
      </v-tab>
      <v-tab value="analytics">
        <v-icon start>mdi-chart-line</v-icon>
        Analytics
      </v-tab>
    </v-tabs>

    <v-divider />

    <!-- Tab Content - Scrollable secara independen -->
    <v-window v-model="activeTab" :touch="false">
      <!-- Sales Data Tab -->
      <v-window-item value="sales">
        <v-card-text class="pa-0">
          <!-- Table wrapper dengan scroll horizontal -->
          <div class="table-wrapper" @touchstart.stop @touchmove.stop>
            <v-table class="wide-table" fixed-header>
              <thead>
                <tr>
                  <th class="sticky-col">Order ID</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Discount</th>
                  <th>Tax</th>
                  <th>Shipping</th>
                  <th>Total Amount</th>
                  <th>Payment Method</th>
                  <th>Payment Status</th>
                  <th>Order Date</th>
                  <th>Delivery Date</th>
                  <th>Status</th>
                  <th>Tracking Number</th>
                  <th>Shipping Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in salesData" :key="item.id">
                  <td class="sticky-col font-weight-bold">{{ item.orderId }}</td>
                  <td class="text-no-wrap">{{ item.customerName }}</td>
                  <td class="text-no-wrap">{{ item.email }}</td>
                  <td class="text-no-wrap">{{ item.phone }}</td>
                  <td class="text-no-wrap">{{ item.product }}</td>
                  <td>{{ item.category }}</td>
                  <td class="text-center">{{ item.quantity }}</td>
                  <td class="text-right">${{ item.unitPrice.toFixed(2) }}</td>
                  <td class="text-right">{{ item.discount }}%</td>
                  <td class="text-right">${{ item.tax.toFixed(2) }}</td>
                  <td class="text-right">${{ item.shipping.toFixed(2) }}</td>
                  <td class="text-right font-weight-bold">${{ item.totalAmount.toFixed(2) }}</td>
                  <td class="text-no-wrap">{{ item.paymentMethod }}</td>
                  <td>
                    <v-chip :color="getPaymentStatusColor(item.paymentStatus)" size="small">
                      {{ item.paymentStatus }}
                    </v-chip>
                  </td>
                  <td class="text-no-wrap">{{ formatDate(item.orderDate) }}</td>
                  <td class="text-no-wrap">{{ formatDate(item.deliveryDate) }}</td>
                  <td>
                    <v-chip :color="getOrderStatusColor(item.status)" size="small">
                      {{ item.status }}
                    </v-chip>
                  </td>
                  <td class="text-no-wrap">{{ item.trackingNumber }}</td>
                  <td class="address-col">{{ item.shippingAddress }}</td>
                  <td class="actions-col">
                    <v-btn icon size="x-small" variant="text" color="primary">
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" variant="text" color="success">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" variant="text" color="error">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <!-- Info di bawah table -->
          <v-card-actions class="px-4 py-3 bg-grey-lighten-4">
            <v-icon size="small" color="info">mdi-information</v-icon>
            <span class="text-caption ml-2">Scroll horizontal untuk melihat semua kolom</span>
            <v-spacer />
            <span class="text-caption">{{ salesData.length }} total records</span>
          </v-card-actions>
        </v-card-text>
      </v-window-item>

      <!-- Inventory Tab -->
      <v-window-item value="inventory">
        <v-card-text class="pa-0">
          <!-- Table wrapper dengan scroll horizontal -->
          <div class="table-wrapper" @touchstart.stop @touchmove.stop>
            <v-table class="wide-table" fixed-header>
              <thead>
                <tr>
                  <th class="sticky-col">SKU</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Supplier</th>
                  <th>Warehouse</th>
                  <th>Location</th>
                  <th>Stock Qty</th>
                  <th>Min Stock</th>
                  <th>Max Stock</th>
                  <th>Reorder Point</th>
                  <th>Unit Cost</th>
                  <th>Selling Price</th>
                  <th>Profit Margin</th>
                  <th>Last Restock</th>
                  <th>Expiry Date</th>
                  <th>Batch Number</th>
                  <th>Barcode</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in inventoryData" :key="item.id">
                  <td class="sticky-col font-weight-bold">{{ item.sku }}</td>
                  <td class="text-no-wrap">{{ item.productName }}</td>
                  <td>{{ item.brand }}</td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.subCategory }}</td>
                  <td class="text-no-wrap">{{ item.supplier }}</td>
                  <td>{{ item.warehouse }}</td>
                  <td>{{ item.location }}</td>
                  <td class="text-center" :class="getStockClass(item)">{{ item.stockQty }}</td>
                  <td class="text-center">{{ item.minStock }}</td>
                  <td class="text-center">{{ item.maxStock }}</td>
                  <td class="text-center">{{ item.reorderPoint }}</td>
                  <td class="text-right">${{ item.unitCost.toFixed(2) }}</td>
                  <td class="text-right">${{ item.sellingPrice.toFixed(2) }}</td>
                  <td class="text-right">{{ item.profitMargin }}%</td>
                  <td class="text-no-wrap">{{ formatDate(item.lastRestock) }}</td>
                  <td class="text-no-wrap">{{ formatDate(item.expiryDate) }}</td>
                  <td class="text-no-wrap">{{ item.batchNumber }}</td>
                  <td class="text-no-wrap">{{ item.barcode }}</td>
                  <td>
                    <v-chip :color="getInventoryStatusColor(item)" size="small">
                      {{ getInventoryStatus(item) }}
                    </v-chip>
                  </td>
                  <td class="actions-col">
                    <v-btn icon size="x-small" variant="text" color="primary">
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" variant="text" color="warning">
                      <v-icon>mdi-package-variant</v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" variant="text" color="success">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <v-card-actions class="px-4 py-3 bg-grey-lighten-4">
            <v-icon size="small" color="info">mdi-information</v-icon>
            <span class="text-caption ml-2">Scroll horizontal untuk melihat semua kolom</span>
            <v-spacer />
            <span class="text-caption">{{ inventoryData.length }} products in inventory</span>
          </v-card-actions>
        </v-card-text>
      </v-window-item>

      <!-- Analytics Tab -->
      <v-window-item value="analytics">
        <v-card-text class="pa-0">
          <!-- Table wrapper dengan scroll horizontal -->
          <div class="table-wrapper" @touchstart.stop @touchmove.stop>
            <v-table class="wide-table" fixed-header>
              <thead>
                <tr>
                  <th class="sticky-col">Date</th>
                  <th>Total Sales</th>
                  <th>Total Orders</th>
                  <th>Avg Order Value</th>
                  <th>New Customers</th>
                  <th>Returning Customers</th>
                  <th>Conversion Rate</th>
                  <th>Revenue</th>
                  <th>Profit</th>
                  <th>Profit Margin</th>
                  <th>Page Views</th>
                  <th>Unique Visitors</th>
                  <th>Bounce Rate</th>
                  <th>Cart Abandonment</th>
                  <th>Email Open Rate</th>
                  <th>Click Rate</th>
                  <th>Social Shares</th>
                  <th>Customer Satisfaction</th>
                  <th>Return Rate</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in analyticsData" :key="item.id">
                  <td class="sticky-col font-weight-bold">{{ formatDate(item.date) }}</td>
                  <td class="text-right font-weight-bold">${{ item.totalSales.toLocaleString() }}</td>
                  <td class="text-center">{{ item.totalOrders }}</td>
                  <td class="text-right">${{ item.avgOrderValue.toFixed(2) }}</td>
                  <td class="text-center">{{ item.newCustomers }}</td>
                  <td class="text-center">{{ item.returningCustomers }}</td>
                  <td class="text-center">{{ item.conversionRate }}%</td>
                  <td class="text-right">${{ item.revenue.toLocaleString() }}</td>
                  <td class="text-right" :class="getProfitClass(item.profit)">${{ item.profit.toLocaleString() }}</td>
                  <td class="text-center">{{ item.profitMargin }}%</td>
                  <td class="text-center">{{ item.pageViews.toLocaleString() }}</td>
                  <td class="text-center">{{ item.uniqueVisitors.toLocaleString() }}</td>
                  <td class="text-center">{{ item.bounceRate }}%</td>
                  <td class="text-center">{{ item.cartAbandonment }}%</td>
                  <td class="text-center">{{ item.emailOpenRate }}%</td>
                  <td class="text-center">{{ item.clickRate }}%</td>
                  <td class="text-center">{{ item.socialShares }}</td>
                  <td class="text-center">
                    <v-rating :model-value="item.customerSatisfaction" density="compact" size="x-small" readonly
                      color="warning" />
                  </td>
                  <td class="text-center">{{ item.returnRate }}%</td>
                  <td>
                    <v-icon :color="getTrendColor(item.trend)" size="small">
                      {{ getTrendIcon(item.trend) }}
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <v-card-actions class="px-4 py-3 bg-grey-lighten-4">
            <v-icon size="small" color="info">mdi-information</v-icon>
            <span class="text-caption ml-2">Scroll horizontal untuk melihat semua kolom</span>
            <v-spacer />
            <span class="text-caption">{{ analyticsData.length }} days of data</span>
          </v-card-actions>
        </v-card-text>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const activeTab = ref('sales')

// Sales Data Interface
interface SalesData {
  id: number
  orderId: string
  customerName: string
  email: string
  phone: string
  product: string
  category: string
  quantity: number
  unitPrice: number
  discount: number
  tax: number
  shipping: number
  totalAmount: number
  paymentMethod: string
  paymentStatus: string
  orderDate: string
  deliveryDate: string
  status: string
  trackingNumber: string
  shippingAddress: string
}

// Inventory Data Interface
interface InventoryData {
  id: number
  sku: string
  productName: string
  brand: string
  category: string
  subCategory: string
  supplier: string
  warehouse: string
  location: string
  stockQty: number
  minStock: number
  maxStock: number
  reorderPoint: number
  unitCost: number
  sellingPrice: number
  profitMargin: number
  lastRestock: string
  expiryDate: string
  batchNumber: string
  barcode: string
}

// Analytics Data Interface
interface AnalyticsData {
  id: number
  date: string
  totalSales: number
  totalOrders: number
  avgOrderValue: number
  newCustomers: number
  returningCustomers: number
  conversionRate: number
  revenue: number
  profit: number
  profitMargin: number
  pageViews: number
  uniqueVisitors: number
  bounceRate: number
  cartAbandonment: number
  emailOpenRate: number
  clickRate: number
  socialShares: number
  customerSatisfaction: number
  returnRate: number
  trend: 'up' | 'down' | 'stable'
}

const salesData = ref<SalesData[]>([])
const inventoryData = ref<InventoryData[]>([])
const analyticsData = ref<AnalyticsData[]>([])

// Generate Sample Data
const generateSalesData = (): SalesData[] => {
  const products = ['Laptop Pro 15"', 'Wireless Mouse', 'Mechanical Keyboard', 'Monitor 27"', 'USB-C Hub', 'Webcam HD', 'Headphones', 'Desk Lamp']
  const categories = ['Electronics', 'Accessories', 'Peripherals', 'Office']
  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery']
  const paymentStatuses = ['Paid', 'Pending', 'Failed', 'Refunded']
  const orderStatuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled']

  return Array.from({ length: 25 }, (_, i) => {
    const product = products[Math.floor(Math.random() * products.length)]!
    const category = categories[Math.floor(Math.random() * categories.length)]!
    const paymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)]!
    const paymentStatus = paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)]!
    const orderStatus = orderStatuses[Math.floor(Math.random() * orderStatuses.length)]!

    return {
      id: i + 1,
      orderId: `ORD-${String(10000 + i).padStart(5, '0')}`,
      customerName: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      phone: `+1 555-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      product,
      category,
      quantity: Math.floor(Math.random() * 5) + 1,
      unitPrice: Math.random() * 500 + 50,
      discount: Math.floor(Math.random() * 20),
      tax: Math.random() * 50,
      shipping: Math.random() * 20 + 5,
      totalAmount: Math.random() * 1000 + 100,
      paymentMethod,
      paymentStatus,
      orderDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      deliveryDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      status: orderStatus,
      trackingNumber: `TRK${String(Math.floor(Math.random() * 900000) + 100000)}`,
      shippingAddress: `${Math.floor(Math.random() * 9999) + 1} Main St, City, State ${String(Math.floor(Math.random() * 90000) + 10000)}`
    }
  })
}

const generateInventoryData = (): InventoryData[] => {
  const products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Hub', 'Webcam', 'Headphones', 'Lamp', 'Chair', 'Desk']
  const brands = ['TechCorp', 'ProGear', 'SmartTech', 'EliteDevices', 'Premium']
  const categories = ['Electronics', 'Furniture', 'Accessories']
  const suppliers = ['Supplier A', 'Supplier B', 'Supplier C']
  const warehouses = ['Warehouse North', 'Warehouse South', 'Warehouse East', 'Warehouse West']

  return Array.from({ length: 20 }, (_, i) => {
    const brand = brands[Math.floor(Math.random() * brands.length)]!
    const product = products[Math.floor(Math.random() * products.length)]!
    const category = categories[Math.floor(Math.random() * categories.length)]!
    const supplier = suppliers[Math.floor(Math.random() * suppliers.length)]!
    const warehouse = warehouses[Math.floor(Math.random() * warehouses.length)]!

    return {
      id: i + 1,
      sku: `SKU-${String(1000 + i).padStart(4, '0')}`,
      productName: `${brand} ${product}`,
      brand,
      category,
      subCategory: `Sub-${category}`,
      supplier,
      warehouse,
      location: `Aisle ${Math.floor(Math.random() * 20) + 1}-${Math.floor(Math.random() * 10) + 1}`,
      stockQty: Math.floor(Math.random() * 500),
      minStock: 50,
      maxStock: 1000,
      reorderPoint: 100,
      unitCost: Math.random() * 200 + 20,
      sellingPrice: Math.random() * 400 + 50,
      profitMargin: Math.floor(Math.random() * 50) + 10,
      lastRestock: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      expiryDate: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      batchNumber: `BATCH-${String(Math.floor(Math.random() * 90000) + 10000)}`,
      barcode: `${String(Math.floor(Math.random() * 9000000000) + 1000000000)}`
    }
  })
}

const generateAnalyticsData = (): AnalyticsData[] => {
  const trends = ['up', 'down', 'stable'] as const

  return Array.from({ length: 30 }, (_, i) => {
    const trend = trends[Math.floor(Math.random() * trends.length)]!

    return {
      id: i + 1,
      date: new Date(2024, 10, i + 1).toISOString(),
      totalSales: Math.floor(Math.random() * 50000) + 10000,
      totalOrders: Math.floor(Math.random() * 500) + 50,
      avgOrderValue: Math.random() * 200 + 50,
      newCustomers: Math.floor(Math.random() * 100) + 10,
      returningCustomers: Math.floor(Math.random() * 200) + 50,
      conversionRate: Math.floor(Math.random() * 10) + 1,
      revenue: Math.floor(Math.random() * 100000) + 20000,
      profit: Math.floor(Math.random() * 40000) - 5000,
      profitMargin: Math.floor(Math.random() * 30) + 5,
      pageViews: Math.floor(Math.random() * 10000) + 1000,
      uniqueVisitors: Math.floor(Math.random() * 5000) + 500,
      bounceRate: Math.floor(Math.random() * 50) + 20,
      cartAbandonment: Math.floor(Math.random() * 40) + 30,
      emailOpenRate: Math.floor(Math.random() * 40) + 15,
      clickRate: Math.floor(Math.random() * 20) + 5,
      socialShares: Math.floor(Math.random() * 500) + 50,
      customerSatisfaction: Math.floor(Math.random() * 3) + 3,
      returnRate: Math.floor(Math.random() * 15) + 2,
      trend
    }
  })
}

// Helper Methods
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const getPaymentStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    'Paid': 'success',
    'Pending': 'warning',
    'Failed': 'error',
    'Refunded': 'info'
  }
  return colors[status] || 'grey'
}

const getOrderStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    'Processing': 'info',
    'Shipped': 'primary',
    'Delivered': 'success',
    'Cancelled': 'error'
  }
  return colors[status] || 'grey'
}

const getStockClass = (item: InventoryData): string => {
  if (item.stockQty <= item.minStock) return 'text-error font-weight-bold'
  if (item.stockQty <= item.reorderPoint) return 'text-warning font-weight-bold'
  return 'text-success'
}

const getInventoryStatus = (item: InventoryData): string => {
  if (item.stockQty <= item.minStock) return 'Low Stock'
  if (item.stockQty <= item.reorderPoint) return 'Reorder'
  if (item.stockQty >= item.maxStock) return 'Overstock'
  return 'In Stock'
}

const getInventoryStatusColor = (item: InventoryData): string => {
  if (item.stockQty <= item.minStock) return 'error'
  if (item.stockQty <= item.reorderPoint) return 'warning'
  if (item.stockQty >= item.maxStock) return 'info'
  return 'success'
}

const getProfitClass = (profit: number): string => {
  return profit >= 0 ? 'text-success' : 'text-error'
}

const getTrendIcon = (trend: string): string => {
  const icons: Record<string, string> = {
    'up': 'mdi-trending-up',
    'down': 'mdi-trending-down',
    'stable': 'mdi-trending-neutral'
  }
  return icons[trend] || 'mdi-trending-neutral'
}

const getTrendColor = (trend: string): string => {
  const colors: Record<string, string> = {
    'up': 'success',
    'down': 'error',
    'stable': 'warning'
  }
  return colors[trend] || 'grey'
}

// Lifecycle
onMounted(() => {
  salesData.value = generateSalesData()
  inventoryData.value = generateInventoryData()
  analyticsData.value = generateAnalyticsData()
})
</script>

<style scoped>
/* Tabs header tetap fixed */
.tabs-header {
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Table wrapper dengan horizontal scroll */
.table-wrapper {
  overflow-x: auto;
  overflow-y: visible;
  max-width: 100%;
  /* Mencegah scroll mempengaruhi parent */
  position: relative;
  touch-action: pan-x pan-y;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  overscroll-behavior-y: none;
  isolation: isolate;
}

/* Wide table untuk memaksa horizontal scroll */
.wide-table {
  min-width: max-content;
  width: auto;
}

.wide-table th,
.wide-table td {
  white-space: nowrap;
  padding: 12px 16px;
}

/* Sticky first column */
.sticky-col {
  position: sticky;
  left: 0;
  background-color: rgb(var(--v-theme-surface));
  z-index: 2;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

.wide-table thead th.sticky-col {
  background-color: rgb(var(--v-theme-surface));
  z-index: 3;
}

/* Column widths */
.address-col {
  min-width: 250px;
  max-width: 300px;
  white-space: normal;
}

.actions-col {
  min-width: 120px;
  position: sticky;
  right: 0;
  background-color: rgb(var(--v-theme-surface));
  z-index: 2;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
}

.wide-table thead th.actions-col {
  background-color: rgb(var(--v-theme-surface));
  z-index: 3;
}

/* Hover effect */
.wide-table tbody tr:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

/* Scrollbar styling */
.table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Prevent tab swipe on touch devices */
.v-window {
  touch-action: none;
  overscroll-behavior: none;
}

.v-window-item {
  overscroll-behavior: none;
}

/* Isolasi scroll area */
.v-card-text {
  overflow: hidden;
  position: relative;
}

/* Additional responsiveness */
@media (max-width: 600px) {

  .wide-table th,
  .wide-table td {
    padding: 8px 12px;
    font-size: 0.875rem;
  }

  .sticky-col {
    min-width: 100px;
  }

  /* Extra protection untuk mobile */
  .table-wrapper {
    overscroll-behavior: contain;
  }

  .v-window {
    overscroll-behavior: contain;
  }
}
</style>
