<template>
  <ad-anchor
    :href="`/${lang}/home`"
    class="nuc-home-link"
    icon="prime:chevron-left"
    title="Back to home"
  />
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { computed } from 'vue'

const route = useRoute()
const lang = computed(() => (route.params.lang as string) || 'en')
</script>
