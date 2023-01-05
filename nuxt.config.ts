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
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  image: {
    domains: ["restcountries.com", "flagcdn.com"],
  },
  headlessui: {
    prefix: "",
  },
  googleFonts: {
    families: {
      "Nunito+Sans": [300, 600, 800],
    },
  },
});
