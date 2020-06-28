const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const passport = require('passport');
const session = require('express-session');
import config from '../config';
import secret from '../secret';

const app = express();

app.use(cookieParser());

if (process.env.NODE_ENV == 'production') {
    const redis = require('redis');
    const redisClient = redis.createClient(secret.redis);
    let redisStore = require('connect-redis')(session);
    secret.session.store = new redisStore({client: redisClient, ttl: secret.redis.ttl});
}

app.use(session(secret.session));
app.use(bodyParser.json());
app.use(require('express-useragent').express());
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(app, passport);
// const auth = require('./routes/auth')(passport);
// const upload = require('./routes/upload')();

var apiProxy = proxy({
    target: config.serverApiHost,
    parseReqBody: false
});

var chatProxy = proxy({
    target: config.serverApiHost,
    parseReqBody: false
});

app.use('/api/client/*', apiProxy);
app.use('/_conversations/*', chatProxy);
// app.use(auth);
// app.use(upload);

module.exports = {
    path: '/app',
    prefix: false,
    handler: app
};