import { defineNuxtConfig } from 'nuxt3'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    title: 'Nuxt 3 Awesome Starter',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt 3 Awesome Starter',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // css
  css: ['~/assets/sass/app.scss'],

  // plugins
  plugins: ['~/plugins/example.ts'],

  // build
  build: {
    transpile: [],
  },

  // build modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // auto import components
  components: [{ path: '@/components/base/' }],

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
