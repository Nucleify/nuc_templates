<template>
  <div class="nuc-trust-badges">
    <div v-for="item in items" :key="item.label" class="nuc-trust-badge-item">
      <Icon :name="item.icon" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TrustBadgeItemInterface {
  icon: string
  label: string
}

interface TrustBadgePropsInterface {
  items?: TrustBadgeItemInterface[]
}

const props = defineProps<TrustBadgePropsInterface>()
</script>

