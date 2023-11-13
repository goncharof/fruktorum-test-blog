<script setup lang="ts">
defineProps<{
  data: { title: string; articles: { image: string; title: string; link: string }[] }
}>()
</script>

<template>
  <div>
    <h1>{{ data.title }}</h1>
    <div class="list-block">
      <ArticleCard
        v-for="article in data.articles"
        :key="article.link"
        :image-url="article.image"
        :card-text="article.title"
        :card-link="article.link"
      />
    </div>
  </div>
</template>

<style>
.card {
  max-width: 30%;
}
.list-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
