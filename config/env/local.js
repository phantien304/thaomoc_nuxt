import Cookie from 'js-cookie'

const http =  'http';
const https =  'https';
const serverDomain = 'localhost';
const serverApiDomain = 'spotech-webapi.amela.vn';
const serverHost = http + '://'+ serverDomain + ':3000';
const serverApiHost = https + '://'+ serverApiDomain;
const baseUrl = serverHost;
const hostApiUrl = serverHost;
const apiUrl = serverApiHost + '/api/client';

export default {
    baseUrl: baseUrl,
    apiUrl: apiUrl,
    serverApiHost: serverApiHost,
    hostApiUrl: hostApiUrl,
    token:'auth',
    min_year_graduation : 50,
    min_year_registration : 17,
    max_year_registration : 80,
    lang:'lang',
    currencyKey: 'currency',
    locales:['en', 'ja', 'vi'],
    defaultLocale: (Cookie.get('lang') || 'ja'),
    defaultCurrencyCode:  (Cookie.get('currency') || 'JPY'),
    i18n:{
        cookieName: 'lang'
    },

    app:{
        head: {
            title: 'spotech',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'spotech project' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
        server: {
            port: 3000,
            host: '0.0.0.0',
        }
    },
    socket:{
        broadcaster: 'pusher',
        wsHost: serverApiDomain,
        wssHost: serverApiDomain,
        wsPort: 6001,
        wssPort: 6001,
        host: serverApiHost,
        httpHost: serverApiDomain,
        httpPort: 80,
        httpPath:'sockets',
        disableStats: true,
        statsHost: serverApiDomain,
        key:'name',
        authEndpoint: baseUrl + '/_conversations/auth',
        apiHost: serverApiHost
    },
    oneSignal:{
        init: {
            appId: '52fefb61-05b0-4282-afe7-9154946e4c47',
            allowLocalhostAsSecureOrigin: false,
            autoRegister: true,
            welcomeNotification: {
                disable: false
            },
        },
        cdn: true,
    },
    sentry: {
        dsn: 'https://0fc6a6a0f5ba4e4f83f4af8b4dd87110@sentry.io/1767613',
        config: {},
    },
    vue:{
        config: {
            productionTip: false,
            devtools: true
        }
    }
}