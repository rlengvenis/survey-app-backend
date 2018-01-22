import jwt from 'jwt-simple'
import {JWT_SECRET} from '../services/passport';
import User from '../models/user';

const tokenForUser = (user) => {
  return jwt.encode({
    sub: user._id,
    iat: new Date().getTime()
  }, JWT_SECRET);
};

export const signUp = async (req, res, next) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res
        .status(422)
        .send({error: 'You must provide email and password'})
    }

    const existingUser = await User.findOne({email});

    if (existingUser) {
      return res
        .status(422)
        .send({error: 'Email is in use'})
    }

    const user = new User({email, password});
    const savedUser = await user.save();

    res.json({
      token: tokenForUser(savedUser)
    })

  } catch (err) {
    next(err);
  }
};

export const signIn = (req, res, next) => {
  res.send({
    token: tokenForUser(req.user)
  });
};
