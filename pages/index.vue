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
  <div class="card-container">
    <ArticleCard
      v-for="article in data.body[0].data.articles"
      :key="article.link"
      :image-url="article.image"
      :card-text="article.title"
      :card-link="article.link"
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  min-width: 30%;
  margin-bottom: 20px;
}
</style>
