<script setup lang="ts">
defineProps<{
  data?: any
}>()
</script>

<template>
  <div class="form-container">
    <div class="form-container__image" />
    <div class="form-container__input-group">
      <h1>Стань участником проекта</h1>
      <input class="form-container__input" type="text" placeholder="Имя">
      <input class="form-container__input" type="text" placeholder="Телефон">
      <input class="form-container__input" type="email" placeholder="Email">
      <button class="btn-blue">
        Присоедениться
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  min-height: 300px;
}
.form-container__image {
  flex: 1;
  background-image: url('~/assets/img/cte-form.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  padding: 10px;
}
.form-container__input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.form-container__input {
  margin-bottom: 10px;
}
</style>
