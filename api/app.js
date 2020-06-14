const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const logger = require('morgan');
// const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
const mongoose = require('mongoose');

const app = express();
app.use(cookieParser());
app.get('/login', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.ClientID}`);
});

const axios = require('axios');
const AccessToken = require('./model/accessToken');

let token;

app.get('/oauth-callback', async (req, res) => {
  try {
    const body = {
      client_id: process.env.ClientID,
      client_secret: process.env.ClientSecret,
      code: req.query.code,
    };
    // const [code] = body;
    console.log(body.code);
    // const {client_id, client_secret, code} = body;

    const opts = { headers: { accept: 'application/json' } };
    const accessToken = await axios.post('https://github.com/login/oauth/access_token', body, opts)
      .then((result) => {
        token = result.data.access_token;
        console.log(token);
      });
    // const {code} = body;
    const newToken = AccessToken({ access_token: token });
    newToken.save();
    res.cookie('accessToken', accessToken, { maxAge: 900000, httpOnly: true });
    // .then((_token) => {
    //   console.log('My token:', token);
    //   token = _token;
    //   res.json({ ok: 1 });
    // });
    // res.redirect('/me');
    res.json({ ok: 1 });
  } catch (err) { res.status(500).json({ message: err.message }); }
  // res.json(body.code);
});

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

app.use('/', projectRouter);

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
