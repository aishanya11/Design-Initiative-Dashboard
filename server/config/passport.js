const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Mentee = require('../controllers/menteeController');
// const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Mentee.getMenteeById(jwt_payload.data._id, (err, mentee) => {
      if(err){
        return done(err, false);
      }
      if(mentee){
        return done(null, mentee);
      } else {
        return done(null, false);
      }
    });
  }));
}
