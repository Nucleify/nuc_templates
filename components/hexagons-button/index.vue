<template>
  <ad-button
    v-bind="transformProps(props)"
    class="nuc-hexagons-button"
  >
    <slot />
    <nuc-animation-hexagons />
  </ad-button>
</template>

<script setup lang="ts">
import type { ButtonInterface } from 'nucleify'
import { transformProps } from 'nucleify/boson/transform_props'

const props = defineProps<ButtonInterface>()
</script>

<style lang="scss">
@import 'index';
</style>