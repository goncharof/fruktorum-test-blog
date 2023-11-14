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

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
.card {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card__image {
  overflow: hidden;
  background: $background-gradient;
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
}
.card-image {
  object-fit: cover;
  width: 100%;
}
h2 {
  display: inline-block;
}
.card__text {
  padding-bottom: 16px;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
}
@media screen and (max-width: 768px) {
  .card {
    width: 90%;
  }
}
</style>
