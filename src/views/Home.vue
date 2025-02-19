<template>
   <VRow>
    <VCol v-for="item in orderStatistics" :key="item.status" cols="12" md="3" sm="6">
      <VCard class="text-center">
          <VCardText>
            <VIcon size="48" :color="item.color" :icon="item.icon" />
            <h6 class="text-base font-weight-medium mt-3 mb-1">{{ item.status }}</h6>
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
                <VTextField label="Nome" />
              </VCol>
              <VCol cols="12" sm="4">
                <VTextField label="Descrição" />
              </VCol>
              <VCol cols="12" sm="4">
                <VSelect chips plain clearable small-chips  
                   label="Categoria"  multiple />
              </VCol>
              <VCol cols="12" sm="4">
                <VSelect chips clearable small-chips  
                   label="Tipo de lançamento"  />
              </VCol>
              <VCol cols="12" sm="4">
                <VSelect chips clearable small-chips  
                   label="Tipo de tipo de pagamento"  />
              </VCol>
              <VCol>
                <VCheckbox
                v-model="selected"
                label="Debito"   
              />
              </VCol>
             <VCol>
              <VCheckbox
                v-model="selected"
                label="Credito" 
              />
             </VCol>
            
              <VCol cols="4">
              <VTextField
               v-model="selected"
                label="Valor da parcela"
                model-value="10.00"
                prefix="R$"
              />
              </VCol>
              <VCol cols="12" sm="4">
                <VSelect chips clearable small-chips  
                   label="Juros"  />
              </VCol>
              <VCol cols="4">
              <VTextField
               v-model="selected"
                label="Valor total"
                model-value="10.00"
                prefix="R$"
              />
              </VCol>
           
              <VCol cols="6"
              md="6" >
              <p>Data da compra</p>
                <VueDatePicker
                v-model="date"
                  :teleport="true"
                />
            </VCol>
            <VCol cols="6"
              md="6" >
              <p>Data da vencimento</p>
                <VueDatePicker
                v-model="date"
                  :teleport="true"
                />
                <VCardActions>
            <VSpacer></VSpacer>
            <VBtn color="primary"  density="compact" rounded="xs"
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
import VueDatePicker from '@vuepic/vue-datepicker';

const date = ref(null)
</script>
<style lang="scss">
@use "@styles/libs/vue-datepicker";
</style>
