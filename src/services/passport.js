import passport from 'passport';
import User from '../models/user';
import {Strategy} from 'passport-jwt';
import {ExtractJwt} from 'passport-jwt';
import LocalStrategy from 'passport-local';


export const JWT_SECRET = '4123j4j1k23g5134ugt34ugug';

export const localLogin = new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({email});

      if (user) {
        const isMatch = await user.comparePasswords(password);

        if (isMatch) {
          return done(null, user);
        }
      }
      return done(null, false);

    } catch (err) {
      console.log(err);
      done(err);
    }
  });

export const jwtLogin = new Strategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (user) {
        return done(null, user);
      }

      return done(null, false);

    } catch (err) {
      console.log(err);
      done(err, false);
    }
  });

passport.use(jwtLogin);
passport.use(localLogin);


export default passport;