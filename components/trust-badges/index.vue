<template>
  <div class="nuc-trust-badges">
    <div v-for="item in items" :key="item.label" class="nuc-trust-badge-item">
      <Icon :name="item.icon" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NucTrustBadgeItemInterface } from './types'

interface TrustBadgePropsInterface {
  items?: NucTrustBadgeItemInterface[]
}

defineProps<TrustBadgePropsInterface>()
</script>

