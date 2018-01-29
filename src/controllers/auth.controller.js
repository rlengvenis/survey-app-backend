import jwt from 'jwt-simple'

import {JWT_SECRET} from '../services/passport';
import User from '../models/user';
import dummyData from '../config/dummyData';
import Survey from '../models/survey';

const tokenForUser = (user) => {
  return jwt.encode({
    sub: user._id,
    iat: new Date().getTime()
  }, JWT_SECRET);
};

export const signUp = async (req, res) => {
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
    return res.status(500).send({error: err});
  }
};

export const signIn = async (req, res) => {
  const user = req.user;

  // In case of demo account - reset data each login
  if (user.email === 'demo@demo.com') {
    try {
      const survey = dummyData.survey;
      await Survey.findOneAndUpdate({_id: survey._id}, survey, {upsert: true});

    } catch (err) {
      return res.status(500).send({error: err});
    }
  }

  res.send({
    token: tokenForUser(req.user)
  });
};
