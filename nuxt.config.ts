import wsModule from './modules/websocket';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [wsModule],
  nitro: {
    preset: 'node',
  },
});
