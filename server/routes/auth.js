const requestIp = require('request-ip');
const { Router } = require('express');

const authRequest  = require('../../services/auth');

const member = require('../../plugins/information');
import { verifySocial } from '../../services/auth';
import _ from 'lodash';

function getHeader(req) {
  let header = req.headers;
  header.ip  = requestIp.getClientIp(req);
  header['user-agent']  = req.useragent.source;
  let params = req.query;
  if( params ) {
      //header = _.merge(header, params);
      header = Object.assign({}, header, params);
  }
  return header;
}



exports = module.exports = function(passport) {
    const router = Router();

    router.get('/signup/:provider', (req, res, next) => {
        req.session.params = req.query;
        req.session.params['is_signup'] = true;
        req.session.header = getHeader(req);
        next();
    }, (req, res, next) => {
        passport.authenticate(req.params.provider)(req, res, next);
    } );

    router.get('/auth/:provider', (req, res, next) => {
        req.session.params = req.query;
        req.session.params['is_login'] = true;
        let header = getHeader(req);
        //console.log('Log: >>>>',params,  header);
        req.session.header = header;
        next();
    }, (req, res, next) => {
        passport.authenticate(req.params.provider)(req, res, next);
    } );

    router.get('/auth/:provider/callback', (req, res, next) => {
        /*passport.authenticate(req.params.provider, {
          failureRedirect: '/',
      })(req, res, next);*/

      passport.authenticate(req.params.provider, (err, user, info) => {
          if (err) {
			// failureRedirect
			return res.redirect('/');
		  }

		  if (!user) {
			// failureRedirect
			return res.redirect('/');
		  }

		  req.login(user, (err) => {
			if (err) {
			  return next(err);
			}
			// successRedirect
			next();
		  });
        })(req, res, next);
    }, (req, res) => {
        var params = req.session.params || {};
        var sid = req.session.passport.user.id;
        let header = req.session.header || getHeader(req);
        req.session.header = null;
        if (req.session['is_verify'])
        {
          const params = {
            type: req.params.provider,
            token: req.session.passport.user.access_token,
          };
          verifySocial(params, header).then(response => {
            //console.log(response);
          })
          .finally( () => {
              const back = req.session['redirect_back'];
              req.session['redirect_back'] = null;
              req.session['is_verify'] = null;
              return res.redirect(back);
          });
        }
        else
        {
            authRequest.checkSocialIdApi({social_id: sid, type: req.params.provider}, header)
            .then( ( response ) => {
                if( response != null && response.success)
                {
                    authRequest.socialLoginApi({ type: req.params.provider, token: req.user.access_token, header: header}, header)
                    .then( ( response ) => {
                        if( response != null && response.success == true && response.data != null )
                        {
                            req.session.user = response.data;
                            req.session.register = null;
                        }

                        if( params['redirect_uri'] )
                        {
                            let redirect_uri = params['redirect_uri'];
                            return res.redirect( redirect_uri );
                        }
                        return res.json({success: true, data: { user: req.session.user } });
                    } )
                    .catch( ( error ) => {
                        //return res.json(error);
                        return res.redirect( '/' );
                    } );

                }
                else
                {
                    req.session.register = req.session.passport.user;
                    if( params['redirect_uri'] )
                    {
                        let redirect_uri = params['redirect_uri'];
                        return res.redirect( redirect_uri );
                    }
                    return res.json({success: true, data:  { user: req.session.register } });
                }
            } )
            .catch( ( error ) => {
                req.session.register = req.session.passport.user;
                if( params['redirect_uri'] )
                {
                    let redirect_uri = params['redirect_uri'];
                    return res.redirect( redirect_uri );
                }
                return res.redirect( '/' );
                //return res.json({ user: req.session.register });
            } );
        }
    });

    router.post('/login',
        (req, res) => {
            let params = req.body;
            let header = getHeader(req);
            req.session.header = null;
            params.header = header;
            authRequest.loginApi( params, header )
            .then( (response) => {
                if( response != null && response.success == true && response.data != null )
                {
                    req.session.user = response.data;
                    req.session.register = null;
                }
                return res.json(response);
            })
            .catch( (error) => {
                return res.json(error);
                //return res.redirect( '/' );
            })
        }
    );

    router.post('/loginSocial', (req, res) => {
            let params = req.body;
            let header = getHeader(req);
            req.session.header = null;
            params.header = header;
            authRequest.socialLoginApi( params, params.header )
            .then( (response) => {
                if( response != null && response.success == true && response.data != null )
                {
                    req.session.user = response.data;
                    req.session.register = null;
                }
                res.json(response);
            })
            .catch( (error) => {
                res.json(error);
            })
        }
    );

    router.post('/register', (req, res) => {
            let params = req.body;
            let header = getHeader(req);
            req.session.header = null;
            params.header = header;
            authRequest.registerApi( params, params.header )
            .then( ( response ) => {
                if( response != null && response.success == true && response.data != null )
                {
                    req.session.user = response.data;
                    req.session.register = {};
                }
                res.json(response);
            } )
            .catch( ( error ) => {
                res.json(error);
            })
        }
    );

    router.get('/logout', (req, res) => {
        
        if( req.session && req.session.user && req.session.user.access_token) 
		{
			let token = req.session.user.access_token;

			authRequest.logoutApi({}, {
				'Authorization': 'Bearer ' + token,
				'X-Requested-Env': 'web',
				'Language-Code': 'vi',
				'X-Requested-With': 'XMLHttpRequest'
			});
		}

        let lang = req.cookies.lang
        req.logout();
		req.session.user = null;
        member.removeInfor();
        for(var prop in req.cookies) {
            if( prop != 'lang' && prop != 'currency' && prop != 'unit' && prop != 'location') {
                res.clearCookie(prop);
            }
        }
        
        let redirectBack = req.query.redirect_back || null;
        let redirectLink = '/' + ( redirectBack ? ('?redirect_back='+ redirectBack ) : '');
        res.redirect(redirectLink);
    });

    router.get('/verify/:provider', (req, res, next) => {
      req.session['is_verify'] = true
      if (!req.session.user) return res.redirect('/');
      req.session.params = req.query;
      let header = getHeader(req);
      req.session.header = header;
      req.session['redirect_back'] = req.query.redirect_back || '/';
      next();
    }, (req, res, next) => {
        passport.authenticate(req.params.provider)(req, res, next);
    } );

    router.post('/profile/update', (req, res) => {
        if( req.session && req.session.user && req.session.user.user) {
            req.session.user.user = _.merge(req.session.user.user, req.body);
        }
        
        res.json({
            success: true,
            data: req.session.user.user
        });
      } );

    return router;
}
