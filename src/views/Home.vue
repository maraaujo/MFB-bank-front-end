<template>
  <VRow>
    <VCol
        v-for="item in orderStatistics"
        :key="item.status"
        cols="12"
        md="3"
        sm="6"
      >
        <VCard class="text-center">
          <VCardText>
            <VIcon
              size="48"
              :color="item.color"
              :icon="item.icon"
            />

            <h6 class="text-base font-weight-medium mt-3 mb-1">
              {{ item.status }}
            </h6>
            <h6 class="text-h5 mb-1">
              ${{ item.amount }}
            </h6>
            <p class="text-medium-emphasis mb-0">
              From {{ item.order }} Orders
            </p>
          </VCardText>
        </VCard>
      </VCol>
  </VRow>
</template>
<script setup>
const orders = ref([])

const statusColor = {
  'On Road': 'primary',
  'Preparing': 'warning',
  'Cancelled': 'error',
  'Delivered': 'success',
}
const orderStatistics = [
  {
    icon: 'mdi-noodles',
    status: 'Transferência',
    amount: '61.94',
    order: 1,
    color: 'warning',
  },
  {
    icon: 'mdi-truck-fast-outline',
    status: 'Receita',
    amount: '209.88',
    order: 2,
    color: 'info',
  },
  {
    icon: 'mdi-close-circle-outline',
    status: 'Despesa',
    amount: '12.99',
    order: 1,
    color: 'error',
  },
  {
    icon: 'mdi-check-circle-outline',
    status: 'Despesa cartão',
    amount: '61.94',
    order: 1,
    color: 'success',
  },
]

</script>
