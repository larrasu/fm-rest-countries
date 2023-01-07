// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | REST Countries API",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
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
