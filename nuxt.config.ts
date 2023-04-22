// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@morev/vue-transitions/nuxt',
    ],
    tailwindcss: {
        cssPath: '~/tailwind.css',
    },
    vueTransitions: {
        // transitions: [
        //     {
        //         name: 'slide',
        //         mode: 'out-in',
        //         duration: 300,
        //     },
        // ],
    }
})
