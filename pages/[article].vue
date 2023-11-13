<script setup lang="ts">
const { params: { article } } = useRoute()

const { data, error } = await useAsyncData<any>(
  `${article}`,
  () => useBaseFetch('/', { method: 'GET', params: { path: `/${article}` } }),
)

if (error.value)
  throw createError({ statusCode: 404 })

useHead({
  meta: data.value.meta,
})

const blocks: any = {
  article_intro_block: defineAsyncComponent(() => import('@/components/article/IntroBlock.vue')),
  text_block: defineAsyncComponent(() => import('@/components/article/TextBlock.vue')),
}

console.log(data.value.body)
</script>

<template>
  <div>
    <component
      :is="blocks[block.type] ?? null"
      v-for="block in data.body"
      :key="block.id"
      :data="block.data"
      class="block-holder"
    />
  </div>
</template>

<style scoped>
.block-holder {
  padding: 10px;
}
</style>
