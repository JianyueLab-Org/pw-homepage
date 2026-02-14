// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n"],
  css: ["./assets/global.css"],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh-cn", name: "简体中文", file: "zh-cn.json" },
    ],
  },
});
