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
      const isMatch = await user.comparePasswords(password);

      if (!isMatch) {
        return done(null, false)
      }

      done(null, user)

    } catch (err) {
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
        done(null, user);
      } else {
        done(null, false);
      }

    } catch (err) {
      done(err, false);
    }
  });

