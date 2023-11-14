<script setup lang="ts">
defineProps<{
  data: { title: string; articles: { image: string; title: string; link: string }[] }
}>()
</script>

<template>
  <div class="list-holder">
    <h1>{{ data.title }}</h1>
    <div class="list-holder__block">
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
.block-holder.list-holder {
  max-width: 90%;
  text-align: center;
}
.list-holder__block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}
</style>
