
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Marketing Vomit',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Your daily dose of nauseating bullshit' },
            { property: 'og:title', name: 'og:title', content: 'Marketing Vomit' },
            { property: 'og:description', name: 'og:description', content: 'Your daily dose of nauseating bullshit' },
            { property: 'og:image', name: 'og:image', content: '/icon.png' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/sass/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
        '@bazzite/nuxt-netlify',
    ],

    netlify: {
        headers: {
            '/*': [
                'Cache-Control: public, max-age=43200'
            ]
        }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
