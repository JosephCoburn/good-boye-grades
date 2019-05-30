var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// require our routes
var indexRouter = require('./routes/index');
var operatorsRouter = require('./routes/operators');
var dogsRouter = require('./routes/dogs');
var ratingsRouter = require('./routes/ratings');
var apiRouter = require('./routes/api');
var editRouter = require('./routes/edit');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/', operatorsRouter);
app.use('/dogs', dogsRouter);
app.use('/', ratingsRouter);
app.use('/', apiRouter);
app.use('/', editRouter);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Ya broke it LOL <br> &nbsp; &nbsp; ¯\\_(ツ)_/¯ ');
});

module.exports = app;
