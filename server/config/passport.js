const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) {
        console.log('Passport error: ', err)
        return false;
      }
      if (!user || !user.validPassword(password)) {
        return false
      }
      return true;
    });
  }
));
