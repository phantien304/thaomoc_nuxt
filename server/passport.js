const LocalStrategy = require('passport-local').Strategy;
import secret from '../secret';

exports = module.exports = function(app, passport) {
    passport.use(
        new LocalStrategy(secret.local,
        function(username, password, cb) {
            return cb(null, {email: username, password: password} )
        }),
    );
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    return passport;
};
