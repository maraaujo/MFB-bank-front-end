<script setup>
import { useLocale } from 'vuetify'
import HorizontalNavGroupItems from '@/layouts/components/horizontal-nav/HorizontalNavGroupItems.vue'
import { isAnyChildActive } from '@/layouts/components/utils'

const props = defineProps({
  navItem: {
    type: null,
    required: true,
  },
})

const { t } = useLocale()
</script>

<template>
  <VListItem
    :value="props.navItem.name"
    append-icon="mdi-chevron-right"
    :class="{ 'text-primary v-list-item--active': isAnyChildActive(props.navItem) }"
    class="nav-group-item"
  >
    <template #prepend>
      <VIcon
        size="20"
        :icon="props.navItem.icon"
      />
    </template>

    {{ t(props.navItem.name) }}

    <HorizontalNavGroupItems :nav-item="props.navItem" />
  </VListItem>
</template>
