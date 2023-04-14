// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    vite: {
        plugins: [eslintPlugin()]
    },
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
    tailwindcss: {
        // Options
        cssPath: "~/assets/css/display.css",
        configPath: "tailwind.config",
        exposeConfig: false,
        exposeLevel: 2,
        // config: {},
        injectPosition: "first",
        viewer: true
    }
})
