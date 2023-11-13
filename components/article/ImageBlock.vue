import type { container } from '@nuxt/ui';
import type { container } from '@nuxt/ui/dist/runtime/ui.config';
<script setup lang="ts">
defineProps<{
  data: { src: string; caption?: string }
}>()
</script>

<template>
  <div class="container">
    <div class="container__image">
      <CommonImageFade :src="data.src" />
    </div>
    <div v-if="data.caption" class="container__caption">
      {{ data.caption }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__image {
  width: 100%;
  aspect-ratio: 14 / 9;
}
.container__image img {
  height: 100%;
  max-width: 100%;
}
.container__caption {
  text-align: end;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #8D959C;
}
</style>
