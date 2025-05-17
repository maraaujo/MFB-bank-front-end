<template>
    <VRow>
        <!-- Breadcrumbs -->
        <VCol cols="12">
            <VBreadcrumbs :items="breadcrumbs" divider="-" class="px-0" />
        </VCol>

        <VCol cols="12">
            <h4 class="text-h5 font-weight-medium text-center mb-2">
                Adicionar Lançamento
            </h4>

            <VStepper v-model="currentStep">
                <VStepperHeader>
                    <VStepperItem title="Informações do Lançamento" color="primary" icon="mdi-help"
                        :error="!isInfoStepValid" :touch="false" />
                </VStepperHeader>

                <VStepperWindow v-model="currentStep" :touch="false">
                    <VStepperWindowItem>
                        <VForm ref="refProductInfoForm" @submit.prevent="validateProductInfoForm">
                            <VRow>
                                <VCol cols="12" sm="6" md="4">
                                    <VTextField v-model="lancamentoData.name" placeholder="Nome"
                                        :rules="[v => !!v || 'O nome é obrigatório']" label="Nome" />
                                </VCol>

                                <VCol cols="4" sm="6" md="4">
                                    <VTextField v-model="lancamentoData.description" placeholder="Descrição"
                                        label="Descrição" />
                                </VCol>

                                <VCol cols="12" sm="6" md="4">
                                    <VSelect v-model="lancamentoData.categories" label="Categoria"
                                        placeholder="Categoria" :rules="[v => !!v || 'Categoria']"
                                        :items="['Lazer', 'Moradia', 'Alimentação', 'Vestuario']" />
                                    <VBtn class="d-flex align-center" size="small" color="primary" variant="text"
                                        prepend-icon="mdi-plus" @click="toggleNewCategorie = !toggleNewCategorie">
                                        Criar
                                    </VBtn>
                                </VCol>

                                <VDivider />

                                <VDialog v-model="toggleNewCategorie" max-width="600">
                                    <VCard title="Criar">
                                        <VCardText>
                                            <VForm ref="refAddNewProduct">
                                                <VRow>
                                                    <VCol cols="12">
                                                        <VTextField v-model="lancamentoData.categories"
                                                            :rules="[v => !!v || 'O nome é obrigatorio']"
                                                            label="Nome" />
                                                    </VCol>

                                                    <VCol cols="12">
                                                        <VBtn variant="tonal" color="secondary" type="reset"
                                                            class="me-4" @click="toggleNewCategorie = false">
                                                            Cancelar
                                                        </VBtn>

                                                        <VBtn variant="tonal" @click="addNewCategorie()"
                                                            color="success">
                                                            Criar
                                                        </VBtn>
                                                    </VCol>
                                                </VRow>
                                            </VForm>
                                        </VCardText>
                                    </VCard>
                                </VDialog>

                                <VCol cols="12" sm="6" md="4">
                                    <VAutocomplete v-model="lancamentoData.typeLancamento"
                                        :rules="[v => !!v || 'Tipo de lançamento é obrigatório']"
                                        placeholder="Tipo de lançamento" />
                                </VCol>

                                <VCol>
                                    <VCheckbox v-model="lancamentoData.credito" label="Credito" />
                                </VCol>

                                <VCol>
                                    <VCheckbox v-model="lancamentoData.debito" label="Debito" />
                                </VCol>

                                <VCol cols="12" sm="6" md="4">
                                    <VTextField v-model="lancamentoData.valor" label="Valor da compra"
                                        :rules="[v => !!v || 'Valor é obrigatório']" placeholder="Valor da compra" />
                                </VCol>

                                <template v-if="lancamentoData.credito === true">
                                    <VCol cols="12" sm="6" md="4">
                                        <VTextField v-model="lancamentoData.valor" label="Valor da parcela"
                                            :rules="[v => !!v || 'Valor da parcela é obrigatório']"
                                            placeholder="Valor da parcela" />
                                    </VCol>

                                    <VCol cols="12" sm="6" md="4">
                                        <VAutocomplete v-model="lancamentoData.numParcelas"
                                            :rules="[v => !!v || 'Número de parcelas é obrigatório']"
                                            placeholder="Número de parcelas" />
                                    </VCol>

                                    <VCol>
                                        <VCheckbox v-model="lancamentoData.juros" label="Juros" />
                                    </VCol>
                                </template>

                                <VCol cols="12">
                                    <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center">
                                        <VBtn color="primary" type="submit">
                                            Adicionar
                                        </VBtn>
                                    </div>
                                </VCol>
                            </VRow>
                        </VForm>
                    </VStepperWindowItem>
                </VStepperWindow>
            </VStepper>
        </VCol>
    </VRow>
</template>

<script setup>
import { toast } from 'vue3-toastify'
import {
    useRtl,
    useTheme,
} from 'vuetify'
import { VForm } from 'vuetify/components/VForm'

const vuetifyTheme = useTheme()
const isRtl = useRtl()
const toggleNewCategorie = ref(false)
const isValid = ref(false);
function addNewCategorie() {
    //   const newProduct = {
    //     id: 0,
    //     name: model.value.productDTO.name
    //   }
    //   console.log("chamou")
    //   listProducts.value.push(newProduct)

    isValid.value = true
    toggleNewCategorie.value = false

}
const lancamentoData = ref({
    name: '',
    description: '',
    category: '',
    credito: '',
    debito: '',
    categories: null,
    descriptions: '',
})

const socialLinks = ref({
    shopifyHandle: '',
    facebookAccount: '',
    instagramAccount: '',
})

const pricing = ref({
    price: '',
    currency: null,
    sku: '',
    tags: '',
})

const productImages = ref({
    featureImage: [],
    productImageSmall: [],
    productThumbnail: [],
    productVideo: [],
})

// breadcrumbs
const breadcrumbs = [
    {
        title: 'Home',
        disabled: false,
        to: { path: '/' },
    },
    {
        title: 'Adicionar',
        disabled: true,
    },
]

const currentStep = ref(0)
const isInfoStepValid = ref(true)
const isSocialStepValid = ref(true)
const isPricingStepValid = ref(true)
const refProductInfoForm = ref()
const refSocialForm = ref()
const refPricingForm = ref()

const validateProductInfoForm = () => {
    refProductInfoForm.value?.validate().then(valid => {
        if (valid.valid) {
            currentStep.value++
            isInfoStepValid.value = true
        } else {
            isInfoStepValid.value = false
        }
    })
}

const validateSocialForm = () => {
    refSocialForm.value?.validate().then(valid => {
        if (valid.valid) {
            currentStep.value++
            isSocialStepValid.value = true
        } else {
            isSocialStepValid.value = false
        }
    })
}

const validatePricingForm = () => {
    refPricingForm.value?.validate().then(valid => {
        if (valid.valid) {
            isPricingStepValid.value = true
            toast('Form Submitted!', {
                theme: vuetifyTheme.current.value.dark ? 'dark' : 'light',
                rtl: isRtl.isRtl.value,
                autoClose: 1000,
            })
        } else {
            isPricingStepValid.value = false
        }
    })
}
</script>

<style lang="scss">
@import "vue3-toastify/dist/index.css";
@import "@styles/libs/toastify";
</style>
