<template>
  <span class="nuc-shiny-badge">
    <Icon :name="icon" />
    <span>{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import type { NucShinyBadgeInterface } from './types'

defineProps<NucShinyBadgeInterface>()
</script>

