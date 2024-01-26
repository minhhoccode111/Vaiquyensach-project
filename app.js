const RateLimit = require('express-rate-limit');
const debug = require('debug')('mongo-connect');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const compression = require('compression');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// connect database
const dev_db_url = 'mongodb+srv://minhhoccode111:VHHWA2Um99hLEiA9@cluster0.4wfrd1t.mongodb.net/local_library?retryWrites=true&w=majority';

const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch(debug);

async function main() {
  await mongoose.connect(mongoDB);
}

// route handling
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog'); // Import routes for "catalog" area of site

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// reduce fingerprinting
app.disable('x-powered-by');

// rate limit
const limiter = RateLimit({ windowMs: 1 * 60 * 1000, max: 20 }); // max 20 per 1 minute
app.use(limiter);
// compress responses for performance
app.use(compression());
// security HTTP header
app.use(helmet.contentSecurityPolicy({ directives: { 'script-src': ["'self'", 'code.jquery.com', 'cdn.jsdelivr.net'] } })); // allow jquery & bootstrap scripts
// use with 'dev' will log the detail of every request to the console
app.use(logger('dev'));
// when 'Content-Type' : 'application/json' this middleware will parse the json and put result in the req.body for us to use
app.use(express.json());
// when 'Content-Type' : 'application/x-www-form-urlencoded' parse data in body of http request
app.use(express.urlencoded({ extended: false }));
// this parse cookie from http request and put the result in req.cookie for us to use
app.use(cookieParser());
// server every files in 'public' folder, which will help access css files after html files response to the client
app.use(express.static(path.join(__dirname, 'public')));

// in this project, route '/' will redirect to '/catalog' anyway
app.use('/', indexRouter);
// not used in this project
app.use('/users', usersRouter);
// add catalog routes to middleware chain
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // will create a http error and pass down to next middleware
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
