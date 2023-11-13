<script setup lang="ts">
defineProps<{
  data: string
}>()
</script>

<template>
  <div class="text-secondary" v-html="data" />
</template>

<style scoped>
:deep(*) {
  padding-bottom: 20px;
}
</style>
