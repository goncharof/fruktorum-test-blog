<script setup lang="ts">
const { data, error } = await useFetch<{
  id: string
  body: [{ data: { articles: { image: string; title: string; link: string }[] } }]
  meta: { title: string; description: string }
}>('/proxy/', {
  pick: ['body', 'meta'],
  params: { path: '/' },
  deep: false,
  key: 'index',
  method: 'GET',
})

if (error.value || !data.value)
  throw createError({ statusCode: 404 })

useHead({ ...data.value.meta })
</script>

<template>
  <div class="card-container">
    <ArticleCard
      v-for="article in data!.body[0].data.articles"
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
  justify-content: center;
}
.card {
  min-width: 30%;
  margin-bottom: 20px;
}
</style>
