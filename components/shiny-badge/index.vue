<template>
  <span class="nuc-shiny-badge">
    <Icon :name="icon" />
    <span>{{ displayLabel }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { NucShinyBadgeInterface } from './types'

const props = defineProps<NucShinyBadgeInterface>()
const { t, te } = useI18n()

const displayLabel = computed(() => {
  const raw = props.label != null ? String(props.label) : ''
  if (!raw.trim()) return ''
  return te(raw) ? t(raw) : raw
})
</script>
