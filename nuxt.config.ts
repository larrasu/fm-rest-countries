// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | REST Countries API",
    },
  },
  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  headlessui: {
    prefix: "",
  },
  googleFonts: {
    families: {
      "Nunito+Sans": [300, 600, 800],
    },
  },
});
