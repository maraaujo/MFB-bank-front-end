<script setup>
import { kFormatter } from '@/utils/kFormatter'
import avatar1 from '@images/svg/bitcoin.svg'
import avatar4 from '@images/svg/bnb.svg'
import avatar5 from '@images/svg/doge.svg'
import avatar2 from '@images/svg/ethereum.svg'
import avatar3 from '@images/svg/tether.svg'

const holdings = [
  {
    avatar: avatar1,
    title: 'Bitcoin (BTC)',
    holding: '5 BTC (Dec 1, 2020)',
    profitOrLoss: 350000,
  },
  {
    avatar: avatar2,
    title: 'Ethereum (ETH)',
    holding: '30 ETH (Feb 20, 2022)',
    profitOrLoss: -150000,
  },
  {
    avatar: avatar3,
    title: 'Litecoin (LTC)',
    holding: '1,000 LTC (May 10, 2021)',
    profitOrLoss: 200000,
  },
  {
    avatar: avatar4,
    title: 'Cardano (ADA)',
    holding: '10,000 ADA (March 15, 2022)',
    profitOrLoss: 25000,
  },
  {
    avatar: avatar5,
    title: 'Polkadot (DOT)',
    holding: '2,000 DOT (July 8, 2021)',
    profitOrLoss: -60000,
  },
]
</script>

<template>
  <VCard title="Crypto Holdings">
    <VList>
      <VListItem
        v-for="(item, index) in holdings"
        :key="item.title"
        :title="item.title"
        :subtitle="item.holding"
        :class="index ? 'mt-4' : ''"
      >
        <template #prepend>
          <!-- <VAvatar> -->
          <component
            :is="item.avatar"
            class="me-3"
            size="40"
          />
          <!-- </VAvatar> -->
        </template>

        <template #append>
          <span
            class="d-flex align-center text-sm gap-1"
            :class="item.profitOrLoss > 0 ? 'text-success' : 'text-error'"
          >
            ${{ kFormatter(Math.abs(item.profitOrLoss)) }}
            <VIcon
              size="16"
              :icon="item.profitOrLoss > 0 ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            />
          </span>
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>
