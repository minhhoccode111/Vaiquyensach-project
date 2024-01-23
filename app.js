const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const path = require('path');
mongoose.set('strictQuery', false);
const mongoDB = 'mongodb+srv://minhhoccode111:VHHWA2Um99hLEiA9@cluster0.4wfrd1t.mongodb.net/local_library?retryWrites=true&w=majority';

main().catch(console.error);
async function main() {
  await mongoose.connect(mongoDB);
}

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog'); // Import routes for "catalog" area of site

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev')); // use with 'dev' will log the detail of every request to the console
app.use(express.json()); // when 'Content-Type' : 'application/json' this middleware will parse the json and put result in the req.body for us to use
app.use(express.urlencoded({ extended: false })); // when 'Content-Type' : 'application/x-www-form-urlencoded' parse data in body of http request
app.use(cookieParser()); // this parse cookie from http request and put the result in req.cookie for us to use
app.use(express.static(path.join(__dirname, 'public'))); //  server every files in 'public' folder, which will help access css files after html files response to the client

app.use('/', indexRouter); // in this project, route '/' will redirect to '/catalog' anyway
app.use('/users', usersRouter); // not used in this project
app.use('/catalog', catalogRouter); // add catalog routes to middleware chain

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
