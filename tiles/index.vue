<template>
  <div class="nuc-tiles">
    <ad-tile
      v-for="(entity, index) in props.entities"
      v-bind="entity"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import type { NucTilesInterface } from 'nucleify'

const props = defineProps<NucTilesInterface>()
</script>

<style lang="scss">
@import 'index';
</style>
