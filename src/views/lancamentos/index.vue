<template>
  <VRow>
    <VCol cols="12">
      <div class="border rounded px-4">
        <swiper-container events-prefix="swiper-" slides-per-view="1" navigation="true" :breakpoints="{
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }">
          <swiper-slide v-for="order in orderStatistics" :key="order.name">
            <VCard min-width="200" class="my-4">
              <VCardItem>
                <template #prepend>
                  <VAvatar :color="order.color" rounded>
                    <VIcon :icon="order.icon" />
                  </VAvatar>
                </template>
                <VCardTitle>{{ order.stats }}</VCardTitle>
                <VCardSubtitle>{{ order.name }}</VCardSubtitle>
              </VCardItem>
            </VCard>
          </swiper-slide>
        </swiper-container>
      </div>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardText>
          <VTextField v-model="searchOrder" prepend-inner-icon="mdi-magnify" placeholder="Search Order" />
        </VCardText>
      </VCard>
      <VCol cols="12">
        <div class="d-flex flex-wrap gap-4 justify-space-between">
          <VBtn color="secondary" @click="submit">
            Procurar
          </VBtn>

          <VBtn color="info" @click="() => router.push({
            path: `/offers/new`,
          })">
            Adicionar Lançamento
          </VBtn>
        </div>
      </VCol>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VDataTable :headers="tableHeader" :search="searchOrder" :items="orders" :items-per-page="10"
          class="text-no-wrap">
          <template #item.orderId="{ item }">
            <span class="text-primary font-weight-semibold">
              #{{ item.orderId }}
            </span>
          </template>

          <template #item.customer="{ item }">
            <span class="font-weight-semibold">
              {{ item.customer }}
            </span>
          </template>

          <template #item.productName="{ item }">
            <span class="font-weight-semibold">
              {{ item.productName }}
            </span>
          </template>

          <template #item.amount="{ item }">
            <span class="font-weight-semibold">
              ${{ item.amount }}
            </span>
          </template>

          <template #item.deliveryStatus="{ item }">
            <VChip size="small" label :color="productStatusColor(item.deliveryStatus)">
              {{ item.deliveryStatus }}
            </VChip>
          </template>

          <template #item.actions>
            <VBtn icon variant="plain">
              <VIcon icon="mdi-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem v-for="(item, index) in ['View', 'Delete', 'Edit']" :key="index" :value="index">
                    <VListItemTitle>{{ item }}</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </VBtn>
          </template>
        </VDataTable>

      </VCard>


    </VCol>
  </VRow>
</template>
<script setup>
import axios from '@axios'
import { register } from 'swiper/element/bundle'

const orderStatistics = [
  {
    icon: 'mdi-cash',
    stats: 'R$ 400,00',
    name: 'Saldo',
    color: 'primary',
  },
  {
    icon: 'mdi-currency-usd',
    stats: 'R$ 1.500,00',
    color: 'warning',
    name: 'Fatura',
  },
  {
    icon: 'mdi-cash-multiple',
    stats: '647.32k',
    color: 'success',
    name: 'Poupança',
  },
  //   {
  //     icon: 'mdi-cart-check',
  //     color: 'info',
  //     stats: '215.36k',
  //     name: 'Shifted Orders',
  //   },
  //   {
  //     icon: 'mdi-cancel',
  //     stats: '8,649',
  //     color: 'error',
  //     name: 'Cancelled Orders',
  //   },
]

const tableHeader = [
  {
    title: 'Item',
    key: 'itemId',
  },
  {
    title: 'Categoria',
    key: 'category',
  },
  {
    title: 'Tipo',
    key: 'type',
  },
  {
    title: 'Parcelas',
    key: 'installments',
  },
  {
    title: 'Juros',
    key: 'interest',
  },
  {
    title: 'Totoal a pagar',
    key: 'totalPayable',
  },
  {
    title: 'Totoal pago',
    key: 'totalPaid',
  },
  {
    title: 'Metodo de pagamento',
    key: 'paymentMethod',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Ações',
    key: 'actions',
  },
]

const orders = ref([])

onMounted(() => {
  axios.get('/orders').then(response => {
    orders.value = response.data
  })
})

const searchOrder = ref('')

const productStatusColor = status => {
  if (status === 'Delivered')
    return 'success'
  if (status === 'Out for Delivery')
    return 'info'
  if (status === 'Shipped')
    return 'primary'
  if (status === 'Processing')
    return 'secondary'
  if (status === 'Pending')
    return 'warning'
  if (status === 'Cancelled')
    return 'error'

  return 'secondary'
}

// breadcrumbs
const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    to: { path: '/' },
  },
  {
    title: 'Order',
    disabled: true,
  },
  {
    title: 'List',
    disabled: true,
  },
]

register()
</script>
<style lang="scss">
@use "@styles/libs/swiper";
</style>
