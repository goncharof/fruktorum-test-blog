<script setup lang="ts">
defineProps<{
  data: string
}>()
</script>

<template>
  <div v-html="data" />
</template>
