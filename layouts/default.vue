<script setup lang="ts">
import logo from '~/assets/img/header.svg?raw'
import socialIcons from '~/assets/img/social.svg?raw'
</script>

<template>
  <div class="page-layout">
    <div class="nav-header">
      <div class="logo" @click="$router.push('/')" v-html="logo" />
    </div>
    <div class="page-body">
      <slot />
    </div>
    <footer class="page-footer">
      <div class="page-footer-row">
        <div class="page-footer-row__column">
          <div v-html="logo" />
          <div>
            <p class="text-secondary">
              Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            </p>
          </div>
        </div>
        <div class="page-footer-row__column page-footer-row__column_bottom">
          <div>
            <p class="text-secondary">
              email
            </p>
            <h2 class="heading-email">
              testblogsupport@gmail.com
            </h2>
            <div class="social-icons" v-html="socialIcons" />
          </div>
        </div>
      </div>
      <SubscribeForm class="page-footer-row-bottom" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  display: flex;
  flex-direction: column;
}
.page-body {
  flex: 1;
}
.page-footer {
  border-top: 1px solid black;
}
.nav-header {
  background-color: white;
  display: flex;
  align-items: center;
  height: 85px;
  padding: 20px;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}
.page-footer-row {
  display: flex;
  padding: 10px;
}
.page-footer-row-bottom {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-footer-row__column {
  margin: 0 10px;
}
.page-footer-row__column_bottom {
  display: flex;
  align-items: self-end;
  flex-direction: column;
  justify-content: flex-end;
}
.heading-email {
  padding: 10px 0;
}
@media (max-width: 480px) {
  h2 {
    font-size: 14px;
  }
}
</style>
