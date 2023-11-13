// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // modules: ['@nuxt/ui'],

  css: [
    '~/node_modules/reset-css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/global.css',
    '~/assets/css/transitions.css',
  ],

  app: {
    head: {
      title: 'fruktorum-test-blog',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat',
        },
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
