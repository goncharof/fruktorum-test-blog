<script setup lang="ts">
defineProps<{
  data?: any
}>()
</script>

<template>
  <div class="subscribe-row-container">
    <div>
      Подпишись на рассылку
    </div>
    <div class="subscribe-row-container__input-group">
      <input type="text" placeholder="Email">
      <button class="btn-blue">
        Подписаться
      </button>
    </div>
  </div>
</template>

<style scoped>
.block-holder.subscribe-row-container {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 10px;
  font-size: 12px;
}
.subscribe-row-container__input-group {
  display: flex;
  flex: 1;
  padding-left: 10px;
  max-width: 500px;
}
</style>
