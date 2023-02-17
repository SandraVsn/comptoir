/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        title: ['"Amatic SC"', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F9281',
          light: '#88BFB1',
          lighter: 'F2F8F6',
        },
        secondary: {
          DEFAULT: '#F3712B',
          light: '#FDE3D8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
