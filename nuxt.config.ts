// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },

  css: ['~/assets/css/tailwind.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],

  app: {
    head: {
      title: 'Accessible Game Jam',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A mini online game where you earn points by fixing accessibility mistakes on a pretend web interface. Sharpen your accessibility skills in a fun way!'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
