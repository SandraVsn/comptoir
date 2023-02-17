// https://nuxt.com/docs/api/configuration/nuxt-config
import locales from './lang/languages';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700',
          crossorigin: '',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    locales,
    defaultLocale: 'fr',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    strategy: 'no_prefix',
    langDir: 'lang',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'fr',
    },
  },
});
