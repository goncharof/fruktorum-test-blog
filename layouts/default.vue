<script setup lang="ts">
import logo from '~/assets/img/header.svg?raw'
import socialIcons from '~/assets/img/social.svg?raw'
</script>

<template>
  <div class="page-layout">
    <div class="nav-header">
      <div class="logo" v-html="logo" />
    </div>
    <div class="page-body">
      <slot />
    </div>
    <footer class="page-footer">
      <div class="page-footer__row">
        <div class="page-footer__column">
          <div v-html="logo" />
          <div>
            <p class="text-secondary">
              Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            </p>
          </div>
        </div>
        <div class="page-footer__column page-footer__column_center">
          <div>
            <p class="text-secondary">
              email
            </p>
            <h2>
              testblogsupport@gmail.com
            </h2>
            <div class="social-icons" v-html="socialIcons" />
          </div>
        </div>
      </div>
      <div class="page-footer__row page-footer-row-bottom">
        <div class="page-footer-row-bottom__text">
          Подпишись на рассылку
        </div>
        <div>
          <input class="page-footer-row-bottom__input" type="text" placeholder="Email">
          <button class="page-footer-row-bottom__button">
            Button
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page-layout {
    display: flex;
    flex-direction:column;
}
.page-body {
  flex:1;
}
.nav-header {
  background-color: white;
  display: flex;
  align-items: center;
  height: 85px;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.page-footer {
  padding: 20px;
}
.page-footer__row {
  display: flex;
  padding: 20px;
}
.page-footer-row-bottom {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-footer__column {
  flex: 1;
  padding: 10px;
}
.page-footer__column_center {
  justify-content: center;
  display: flex;
}
.page-footer-row-bottom__text {
  margin-right: 10px; /* Adjust the margin as needed */
}

.page-footer-row-bottom__input {
  flex-grow: 1;
  margin-right: 10px; /* Add margin to separate input and button */
}
</style>
