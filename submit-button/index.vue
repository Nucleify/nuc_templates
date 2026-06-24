<template>
  <ad-button
    :class="[
      'nuc-submit-button',
      props.variant && `nuc-submit-button-${props.variant}`,
      props.class,
    ]"
    :icon="props.icon"
    :disabled="props.disabled"
    :type="props.type"
    @click="handleClick"
  >
    <strong>{{ props.label }}</strong>
  </ad-button>
</template>

<script setup lang="ts">
import type { ButtonInterface } from 'nucleify'

const props = defineProps<ButtonInterface>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent): void {
  emit('click', event)
}
</script>

<style lang="scss">
@import 'index';
</style>
