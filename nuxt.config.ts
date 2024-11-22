
export default defineNuxtConfig({

    extends: [
        '@bloggrify/core',
    ],

    nitro: {
        preset: process.env.NETLIFY ? 'netlify' : 'node',
    }
})
