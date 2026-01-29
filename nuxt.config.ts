// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // ssr: true, 
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-swiper',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'OmidReza',
      meta: [
        { name: 'description', content: 'Personal portfolio of OmidReza' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      script: [{ innerHTML: "console.log('Portfolio loaded ✅')" }],
    },
  },

  // routeRules: {
  //   '/**': { swr: true },
  // },

})
