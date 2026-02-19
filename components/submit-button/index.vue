<template>
  <ad-button
    :class="['nuc-submit-button', props.class]"
    :icon="props.icon"
    :disabled="props.disabled"
    :type="props.type"
    @click="handleClick"
  >
    <strong>{{ props.label }}</strong>
  </ad-button>
</template>

<script setup lang="ts">
import type { NucSubmitButtonInterface } from './types'

const props = defineProps<NucSubmitButtonInterface>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent): void {
  emit('click', event)
}
</script>

