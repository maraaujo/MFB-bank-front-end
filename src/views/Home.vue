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
          <VIcon size="48" :color="item.color" :icon="item.icon" />
          <h6 class="text-base font-weight-medium mt-3 mb-1">
            {{ item.status }}
          </h6>
          <h6 class="text-h5 mb-1">${{ item.amount }}</h6>
          <p class="text-medium-emphasis mb-0">From {{ item.order }} Orders</p>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="Lançamentos">
        <VCardText>
          <VRow>
            <VCol cols="12" sm="4">
              <VTextField label="Nome" v-model="filtermodel.name" />
            </VCol>
            <VCol cols="12" sm="4">
              <VTextField label="Descrição" v-model="filtermodel.description" />
            </VCol>
            <VCol cols="12" sm="4">
              <VSelect
                v-model="filtermodel.category"
               :items="itemsCategory"
                item-text="value" 
                item-value="id"
                clearable
                chips
                small-chips
                label="Categoria"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VSelect
                chips
                clearable
                small-chips
                item-text="value" 
                item-value="id"
                :items="itemsPayment"
                v-model="filtermodel.payment"
                label="Tipo de tipo de pagamento"
              />
            </VCol>
            <VCol cols="12" sm="4"> 
              <VRadioGroup inline >
              <VRadio  v-model="filtermodel.selectedDebit" value="Debito" label="Debito" />
              <VRadio v-model="filtermodel.selectedCredit" value="Credito" label="Credito" />
            </VRadioGroup >
            </VCol>
           
    
            <VCol cols="4">
              <VTextField
                v-model="filtermodel.installment"
                label="Valor da parcela"
                prefix="R$"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VSelect
              chips
                clearable
                small-chips
                :items="itemsFees"
                item-text="value" 
                item-value="id"
                v-model="filtermodel.fees"
                label="Juros"
              />
            </VCol>
            <VCol cols="4">
              <VTextField
                v-model="filtermodel.totalValue"
                label="Valor total"
                prefix="R$"
              />
            </VCol>

            <VCol cols="6" md="6">
              <p>Data da compra</p>
              <VueDatePicker v-model="filtermodel.datePurchase" :teleport="true" />
            </VCol>
            <VCol cols="6" md="6">
              <p>Data da vencimento</p>
              <VueDatePicker v-model="filtermodel.expirationDate" :teleport="true" />
              <VCardActions>
                <VSpacer></VSpacer>
                <VBtn color="primary" density="compact" rounded="xs"
                  >Lançar
                </VBtn>
              </VCardActions>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import { FormatMoneyBR, formatDate } from "@/utils/helpers";
import VueDatePicker from "@vuepic/vue-datepicker";
import { computed } from 'vue';
onMounted(() => {
});

const filtermodel = ref({
name: '',
description:'',
category:{},
launch:[],
payment:[],
selectedDebit: false, 
selectedCredit: false,
installment: [], 
fees:[],
totalValue:[]
})
const isCreditMode = ref(false);

const itemsCategory = [
  'Lazer',
  'Moradia',
  'Alimentação',
  'Transporte',
]
const itemsLaunch = [

]

const itemsPayment =[
  'Debito',
  'Credito', 
  'Pix',
  'Boleto',
  'Cheque'
]
const itemsFees =[
  1,
  2, 
  3,
  4,
  5
]
const lancar = async () => {
  category.value = category.value.push(filtermodel.category);
  name.valuie = name.value.push(filtermodel.name);
  description.value = description.value.push(filtermodel.description); 
  lounch.value = lounch.value.push(filtermodel.lounch); 
  payment.value = payment.value.push(filtermodel.payment);
  selectedDebit.value = selectedDebit.value.push(filtermodel.selectedDebit); 
  selectedCredit.value = selectedCredit.value.push(filtermodel.selectedCredit); 
  installment.value = installment.value.push(filtermodel.installment);
  fees.value = fees.value.push(filtermodel.fees);
  totalValue.value = totalValue.value.push(filtermodel.totalValue)

  re
}
const moneyBr = computed(() => (value) => {
if (!value) value = 0
return FormatMoneyBR(value)
});
const formatedDate = computed(() => (value) =>{
  if(!value) value = 0
  return formatDate(value)
})
</script>
<style lang="scss">
@use "@styles/libs/vue-datepicker";
</style>
