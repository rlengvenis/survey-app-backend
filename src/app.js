import express from 'express';
import path from 'path';
import logger from 'morgan';

import mongoose from 'mongoose';
import dummyData from './config/dummyData';
import databaseConfig from './config/database';

import bodyParser from 'body-parser';
import passport from 'passport';
import {jwtLogin, localLogin} from './config/passport';
import cors from 'cors';

import index from './routes/index';
import auth from './routes/auth';
import survey from './routes/survey';


// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(databaseConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
});

// Set up passport with strategies
passport.use(jwtLogin);
passport.use(localLogin);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', auth);
// app.use('/api', passport.authenticate('jwt', {session: false}));
app.use('/api', survey);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
