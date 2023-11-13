<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <div class="block">
    <div class="block__image">
      <CommonImageFade :src="data.image" />
    </div>
    <div class="content">
      <h1>{{ data.title }}</h1>
      <p class="text-secondary">
        {{ data.reading_time }} мин время чтения
      </p>
      <p class="text-secondary">
        {{ data.views_count }} прочитали статью
      </p>
      <p class="content__short-description">
        {{ data.short_description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
}
.block__image {
  aspect-ratio: 1;
  background: var(--background-gradient);
  border-radius: 16px;
  box-sizing: border-box;
  min-width: 30%;
  width: 30%;
  margin-right: 20px;
}
.block__image img {
  border-radius: 16px;
  display: block;
  width: 100%;
}
.content {
  flex: 2;
  margin-top: 20px;
  margin-left: 20px;
}
.content__short-description {
  color: black;
}
</style>
