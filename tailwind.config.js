module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#ff6f9a",
          "100": "#ff6590",
          "200": "#ff5b86",
          "300": "#ff517c",
          "400": "#ff4772",
          "500": "#ff3d68",
          "600": "#f5335e",
          "700": "#eb2954",
          "800": "#e11f4a",
          "900": "#d71540"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
