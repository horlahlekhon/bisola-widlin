// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/tailwind.css',
    },
    css: [
        '~/assets/main.css',
    ]
})
