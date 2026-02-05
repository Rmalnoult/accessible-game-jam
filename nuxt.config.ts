// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    'nuxt-gtag',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID || '',
    enabled: !!process.env.GOOGLE_ANALYTICS_ID
  },

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
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Accessible Game Jam - Learn Web Accessibility Through Interactive Gameplay',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Master web accessibility with this interactive game! Find and fix WCAG 2.1 AA issues on a realistic landing page. Learn accessibility best practices through hands-on practice. No sign-up required.'
        },
        { name: 'keywords', content: 'web accessibility, WCAG, accessibility game, a11y, learn accessibility, inclusive design, screen reader, accessibility testing, ARIA, semantic HTML' },
        { name: 'author', content: 'Romain Malnoult' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://accessible-game-jam.vercel.app' },
        { property: 'og:title', content: 'Accessible Game Jam - Learn Web Accessibility Through Interactive Gameplay' },
        { property: 'og:description', content: 'Master web accessibility with this interactive game! Find and fix WCAG 2.1 AA issues on a realistic landing page. Learn accessibility best practices through hands-on practice.' },
        { property: 'og:image', content: 'https://accessible-game-jam.vercel.app/og-image.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Accessible Game Jam' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://accessible-game-jam.vercel.app' },
        { name: 'twitter:title', content: 'Accessible Game Jam - Learn Web Accessibility Through Interactive Gameplay' },
        { name: 'twitter:description', content: 'Master web accessibility with this interactive game! Find and fix WCAG 2.1 AA issues on a realistic landing page.' },
        { name: 'twitter:image', content: 'https://accessible-game-jam.vercel.app/og-image.png' },
        { name: 'twitter:creator', content: '@romainmalnoult' },

        // Theme color
        { name: 'theme-color', content: '#4c6ef5' },
        { name: 'msapplication-TileColor', content: '#4c6ef5' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://accessible-game-jam.vercel.app' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Accessible Game Jam',
            description: 'An interactive educational game to learn web accessibility (WCAG 2.1 AA) by finding and fixing accessibility issues on a realistic landing page.',
            url: 'https://accessible-game-jam.vercel.app',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            author: {
              '@type': 'Person',
              name: 'Romain Malnoult',
              jobTitle: 'Tech Lead Design System & Accessibility',
              url: 'https://www.linkedin.com/in/romainmalnoult/'
            },
            educationalUse: 'Learn web accessibility standards and best practices',
            keywords: 'web accessibility, WCAG, a11y, accessibility testing, inclusive design',
            inLanguage: 'en-US',
            isAccessibleForFree: true
          })
        }
      ]
    }
  }
})
