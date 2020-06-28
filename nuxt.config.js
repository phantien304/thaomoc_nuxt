import config from './config';
import secret from './secret';
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = {

    server: config.app.server,
    head: config.app.head,
    loading: {
        color: '#fff',
        height: '2px'
    },
    css: [
        '@/assets/scss/styles.scss',
    ],
    build: {
        extractCSS: true,
        cssSourceMap: true,
        extend(config, ctx) {

        },
        plugins: [
            // new CopyWebpackPlugin([
            //     {from: 'node_modules/tinymce/skins', to: 'skins'}
            // ]),
        ]
    },
    // plugins: [
        // {src: '~/plugins/i18n', mode: 'client'},
        // '~/plugins/axios',
        // {src: '~/plugins/laravel-echo', mode: 'client'},
        // {src: '~/plugins/init', mode: 'client'},
        // {src: '~/plugins/elementUI', ssr: true},
        // {src: '~/plugins/iview', mode: 'client'},
        // '~/plugins/helper',
        // {src: '~/plugins/vuelidate', mode: 'client'},
        // {src: '~/plugins/directives', mode: 'client'},
        // {src: '~/plugins/notify', mode: 'client'},
        // '~/plugins/memberType',
        // {src: '~/plugins/sharing', mode: 'client'},
        // {src: '~/plugins/methods', mode: 'client'},
        // {src: '~/assets/js/app', mode: 'client'},
    // ],
    // buildModules: [
        // '@nuxtjs/moment'
    // ],
    modules: [
        '@nuxtjs/style-resources',
        // 'nuxt-polyfill',
        // 'cookie-universal-nuxt',
        // '@nuxtjs/onesignal',
        // '@nuxtjs/sentry',
        // '@nuxtjs/proxy',
        // [
        //     'nuxt-i18n',
        //     {
        //         locales: [
        //             {code: 'en', iso: 'en-US', file: 'en.js'},
        //             {code: 'ja', iso: 'ja-JP', file: 'ja.js'},
        //             {code: 'vi', iso: 'vi-VN', file: 'vi.js'}
        //         ],
        //         lazy: true,
        //         langDir: 'locales/',
        //         detectBrowserLanguage: {
        //             useCookie: true,
        //             cookieKey:  config.i18n.cookieName,
        //             alwaysRedirect: true,
        //             fallbackLocale: config.defaultLocale
        //         },
        //         vuex: {
        //             moduleName: 'i18n',
        //             syncLocale: true,
        //             syncMessages: true,
        //             syncRouteParams: true
        //         },
        //     }
        // ],
        // [
        //     'nuxt-session',
        //     (session) => {
        //         if( process.env.NODE_ENV == 'production')
        //         {
        //             const redis = require('redis');
        //             const redisClient = redis.createClient(secret.redis);
        //             let redisStore = require('connect-redis')(session);
        //             secret.session.store = new redisStore({ client: redisClient, ttl: secret.redis.ttl })
        //         }
        //
        //         return secret.session;
        //     }
        // ],
    ],
    // oneSignal: config.oneSignal,
    sentry: config.sentry,
    // vue: config.vue,
    // proxy:{
    //     '/api/client': config.serverApiHost,
    //     '/_conversations': config.serverApiHost,
    // },
    // polyfill:{
    //     features: [{
    //         require: 'filereader-polyfill'
    //     },{
    //         require: 'notification-polyfill'
    //     }]
    // },
    // router: {
    //     middleware: ['locale']
    // },
    serverMiddleware:[
        '~/server/index.js',
    ],
    env: {
        environment: process.env.NODE_ENV
    }
};