import config from '../config';
export default {
    aws: {
        accessKeyId: 'AKIAXOWERBZI7ZCV6GVO',
        secretAccessKey: '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',
        region: 'us-west-2',
        bucket: 'app-fukuon',
        acl: 'public-read'
    },
    local:{
        usernameField: 'email',
        passwordField: 'password'
    },
    session:{
        secret: 'app_secret_dev',
        name: 'spotech',
        resave: true,
        saveUninitialized: false,
        key: 'sid',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2 // 2 years
        }
    },
    redis:{
        host: '14.225.11.12',
        port: '6379',
        password: 'pass!word',
        ttl : 604800
    },
}