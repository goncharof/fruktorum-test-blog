<script setup lang="ts">
defineProps<{
  imageUrl: string
  cardText: string
  cardLink: string
}>()
</script>

<template>
  <div class="card">
    <div class="card__image">
      <CommonImageFade :src="imageUrl" class="card-image" />
    </div>
    <div class="card__text">
      <h2>{{ cardText }}</h2>
    </div>
    <div>
      <NuxtLink :to="cardLink" class="button card-button btn-black">
        Читать
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  width: 427px;
  padding: 16px;
  }
.card__image {
  width: 427px;
  height: 320px;
  min-width: 300px;
  overflow: hidden;
  background: var(--background-gradient);
  position: relative;
  aspect-ratio: 16/9;
}
.card-image {
  object-fit: cover;
  margin-bottom: 16px;
}
h2 {
  display: inline-block;
}
.card__text {
  padding-bottom: 16px;
}
</style>
