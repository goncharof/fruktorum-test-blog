// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  css: [
    '~/node_modules/reset-css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/global.css',
  ],

  app: {
    head: {
      title: 'fruktorum-test-blog',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  // CORS
  nitro: {
    routeRules: {
      '/proxy/**': { proxy: 'https://devtwit8.ru/api/v1/page/**' },
    },
  },
})
