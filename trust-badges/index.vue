<template>
  <div class="nuc-trust-badges">
    <div v-for="item in items" :key="item.label" class="nuc-trust-badge-item">
      <Icon :name="item.icon" />
      <span>{{ trustLabel(item.label) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { NucTrustBadgeItemInterface } from 'nucleify'

interface TrustBadgePropsInterface {
  items?: NucTrustBadgeItemInterface[]
}

defineProps<TrustBadgePropsInterface>()

const { t, te } = useI18n()

function trustLabel(raw: string): string {
  const s = raw != null ? String(raw) : ''
  if (!s.trim()) return ''
  return te(s) ? t(s) : s
}
</script>

<style lang="scss">
@import 'index';
</style>
