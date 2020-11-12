const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const logger = require('morgan');
// const cors = require("cors");

const mongoose = require('mongoose');

const app = express();
app.use(cookieParser());

const authRouter = require('./routes/auth');
const projectRouter = require('./routes/project');

// Body parser which renders JSON formatted responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/projects', projectRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!' });
});

// Database Configuration
const url = 'mongodb://localhost:27017/contributetoit-api';

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(url, {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log('Successfully connected to the database');
  }).catch((err) => {
    console.log('Could not connect to the database. Exiting now...');
    console.log(err);
    process.exit();
  });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
