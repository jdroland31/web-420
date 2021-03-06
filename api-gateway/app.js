/*============================================
Title: API Gateway;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: app.js;
===========================================*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var apiCatalog = require('./routes/api-catalog.js');

var indexRouter = require('./routes/index');

mongoose.Promise = require('bluebird');

var app = express();

const conn = "mongodb+srv://admin:admin@buwebdev-cluster-1.esxqv.mongodb.net/api-gateway?retryWrites=true&w=majority";
/**
 * Database Connection
 */
mongoose.connect(conn,{
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then ( () => {
  console.debug('connection to the database instance was successful');
}).catch( (err) => {
  console.log(err);
});
//end mongoose connection


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api',apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
