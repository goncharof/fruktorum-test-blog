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
  image_block: defineAsyncComponent(() => import('@/components/article/ImageBlock.vue')),
  slider_block: defineAsyncComponent(() => import('@/components/article/SliderBlock.vue')),
  subscribe_form_block: defineAsyncComponent(() => import('@/components/SubscribeForm.vue')),
  article_list_block: defineAsyncComponent(() => import('@/components/article/ListBlock.vue')),
  cta_form_block: defineAsyncComponent(() => import('@/components/CtaForm.vue')),
}
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
  margin: auto;
  max-width: 600px;
}
.subscribe-row-container {
  margin: 10px;
}
</style>
