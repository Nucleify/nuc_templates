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
import type { ButtonInterface } from 'atomic'

import { transformProps } from 'atomic/boson/transform_props'

const props = defineProps<ButtonInterface>()
</script>

<style lang="scss">
@import 'index';
</style>