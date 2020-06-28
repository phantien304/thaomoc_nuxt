import axios from 'axios';

export default function ({store, app, req}) {
    axios.interceptors.request.use(function (config) {
        let token = store.getters.accessToken;
        let locale = store.getters.getLocale
        let currency = store.getters.getCurrency

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['Language-Code'] = locale;
        config.headers['Currency-Code'] = currency;
        config.headers['X-Request-Time'] = (new Date()).getTime();
        config.headers['Content-Type'] = 'application/json; charset=utf-8';
        config.headers['X-Requested-Env'] = 'web';
        config.headers['Accept'] = "application/json";
        return config;
    }, function (err) {
        return Promise.reject(err);
    });
}