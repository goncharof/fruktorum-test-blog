<script setup lang="ts">
const { data } = await useAsyncData<any>(
  'list',
  () => useBaseFetch('/', { method: 'GET', params: { path: '/' } }),
)

useHead({
  meta: data.value.meta,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
