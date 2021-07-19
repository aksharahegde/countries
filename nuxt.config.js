export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'countries',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {
    baseURL: 'https://restcountries.eu'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
  },
  googleFonts: {
    families: {
      Prompt: {
        wght: [200, 300, 400, 500],
        ital: [100]
      },
    }
  }
}
