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
            {{ JSON.stringify(filtermodel) }}
            <VCol cols="12" sm="4">
              <VTextField label="Nome" v-model="filtermodel.name"  />
            </VCol>
            <VCol cols="12" sm="4">
              <VTextField label="Descrição" v-model="filtermodel.description" />
            </VCol>
            <!-- <select>
              <option v-for="cat in itemsCategory" :value="cat.value">{{ cat.label }}</option>
            </select> -->
            <VCol cols="12" sm="4">
              <VSelect
                v-model="filtermodel.category"
                :items="itemsCategory"
                item-title="label" 
                item-value="value"
                clearable               
                @update:model-value="filterSubCategories()"
                label="Categoria"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VSelect
               :items="subCategoriasFiltradas"
                v-model="filtermodel.subCategory"
                :disabled="!filtermodel.category"
                item-title="label" 
                item-value="value"
                clearable               
             
                label="Subcategoria"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VSelect
                chips
                clearable
                small-chips
                item-title="value" 
                item-value="id"
                :items="itemsPayment"
                v-model="filtermodel.payment"
                label="Tipo de tipo de pagamento"
              />
            </VCol>
            <VCol cols="12" sm="4"> 
              <VRadioGroup inline v-model="filtermodel.isCreditMode"  >
              <VRadio value="false" label="Debito" />
              <VRadio value="true" label="Credito" />
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
                item-title="value" 
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
              <VueDatePicker v-model="filtermodel.datePurchase"  :teleport="true" />
            </VCol>
            <VCol cols="6" md="6">
              <p>Data da vencimento</p>
              <VueDatePicker v-model="filtermodel.expirationDate" :teleport="true" />
              <VCardActions>
                <VSpacer></VSpacer>
                <VBtn color="primary" density="compact" rounded="xs" @click="lancar()"
                  >Lançar
                </VBtn>
              </VCardActions>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <VCard>
    <VDataTable :items-per-page="10" title="Lançamentos" :headers="headers" :items="lancamentos"
             loading-text="Carregando... Aguarde" class="text-no-wrap rounded-t-0">
             <template #item.deliveryStatus="{ item }">
        <VChip
          size="small"
          label
          :color="productStatusColor(item.deliveryStatus)"
        >
          {{ item.deliveryStatus }}
        </VChip>
       
      </template>
    </VDataTable>
  </VCard>
</template>
<script setup>
import { FormatMoneyBR, formatDate } from "@/utils/helpers";
import VueDatePicker from "@vuepic/vue-datepicker";
import { computed } from 'vue';
onMounted(() => {
});

const lancamentos = ref([]);
const filtermodel = ref({
name: '',
description:'',
category:0,
payment:[],
isCreditMode: false, 
status:[],
installment: [], 
fees:[],
totalValue:[],
subCategory: 0
})
const lancar = async () => {
     
     var json = {
         name: filtermodel.value.name,
         description: filtermodel.value.description,
         category: filtermodel.value.category,
         payment:filtermodel.value.payment,
         status:filtermodel.value.status,
         selectedDebit:filtermodel.value.selectedDebit,
         installment:filtermodel.value.installment,
         fees:filtermodel.value.fees,
         totalValue:filtermodel.value.totalValue
     };
     console.log(json);
     lancamentos.value.push(json);
     console.log(lancamentos);
     //lancamentos.value.push(json);
     
    //  appInstance.salvar(filtermodel)
    //  appInstance.listar()
  
    // await api.salvar(json)
  }
const headers = ref([
  { title: "Nome", key: "name", sortable: true },
  { title: "Descrição", key: "description", sortable: true },
  { title: "Categoria", key: "category", sortable: true },
  { title: "Forma de pagamento", key: "validUntil", sortable: true },
  { title: "Tipo de lançamento", key: "selectedDebit", sortable: true },
  { title: "Parcela", key: "installment", sortable: true },
  { title: "Juros", key: "fees", sortable: true },
  { title: "Valor total", key: "totalValue", sortable: true },

]);

const itemsCategory = ref([
{  "value": 1,"label": 'Lazer'},
  {"value": 2,"label": 'Moradia'},
  {"value": 3,"label": 'Alimentação'},
  {"value": 4,"label": 'Transporte'}

])

const itemsSubCategory = ref([
{"value": 1,"label": 'Restaurante', "idCategoryPai": 3},
  {"value": 2,"label": 'Ifood', "idCategoryPai": 3},
  {"value": 3,"label": 'Mercado', "idCategoryPai": 3},
  {"value": 4,"label": 'Parcela Carro', "idCategoryPai": 4},
  {"value": 5,"label": 'Gasolina', "idCategoryPai": 4},
  {"value": 6,"label": 'ALuguel', "idCategoryPai": 2},
  {"value": 7,"label": 'IPTU', "idCategoryPai": 2}
])

const subCategoriasFiltradas = ref([]);


const filterSubCategories = () => {
  let categoriaSelecionada = filtermodel.value.category;

  let subCategoriasDaCategoria = itemsSubCategory.value.filter(c=> c.idCategoryPai === categoriaSelecionada);

  subCategoriasFiltradas.value = subCategoriasDaCategoria;

}

const itemsLaunch = [

]
const itemsPayment =[
  {"id": 1,"value": 'Debito'},
  {"id": 2,"value": 'Credito'},
  {"id": 3,"value": 'Pix'},
  {"id": 4,"value": 'Boleto'},
  {"id": 5,"value": 'Cheque'}
]

const itemsFees =[
{"id": 1,"value": 1},
  {"id": 2,"value": 2},
  {"id": 3,"value": 3},
  {"id": 4,"value": 4},
  {"id": 5,"value": 5}
]
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
