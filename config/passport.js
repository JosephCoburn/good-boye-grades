var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Operator = require('../models/operator');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    Operator.findOne({ 'googleId': profile.id }, function(err, operator) {
      if (err) return cb(err);
      if (operator) {
        if (!operator.avatar) {
          operator.avatar = profile.photos[0].value;
          operator.save(function(err) {
            return cb(null, operator);
          });
        } else {
          return cb(null, operator);
        }
      } else {
        // we have a new operator via OAuth!
        var newOperator = new Operator({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newOperator.save(function(err) {
          if (err) return cb(err);
          return cb(null, newOperator);
        });
      }
    });
  }
));

passport.serializeUser(function(operator, done) {
  done(null, operator.id);
});

passport.deserializeUser(function(id, done) {
  Operator.findById(id, function(err, operator) {
    done(err, operator);
  });
});



