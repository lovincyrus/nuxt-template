export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
