export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
   target: 'static',
   ssr: true,
   generate: {
     fallback: false,
     routes: ['/', '404'],
   },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) => {
      // If head.title is undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} - TITLE`
        : 'TITLE'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'DESCRIPTION',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TITLE',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TITLE',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'DESCRIPTION',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://gravitydex.io',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gravitydex.io/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'TITLE',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'DESCRIPTION',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://gravitydex.io/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'TITLE',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-scrollto.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
}
