<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

defineProps<{
  data: string[]
}>()

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
</script>

<template>
  <Carousel v-bind="settings" class="carousel">
    <Slide v-for="image in data" :key="image">
      <div class="carousel">
        <img :src="image" alt="" class="carousel__image">
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<style scope>
.carousel {
  width: 100%;
}
.block-holder.carousel {
  padding-left: 0;
  padding-right: 0;
}
.carousel__image {
  width: 100%;
}
</style>
