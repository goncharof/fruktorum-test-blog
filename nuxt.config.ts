// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: [
    '~/node_modules/reset-css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/global.css',
  ],
})
