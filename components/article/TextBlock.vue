<script setup lang="ts">
defineProps<{
  data: string
}>()
</script>

<template>
  <div class="text-secondary" v-html="data" />
</template>
