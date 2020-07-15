const express = require('express');

const router = express.Router();

const dotenv = require('dotenv');

dotenv.config();

const axios = require('axios');
const AccessToken = require('../model/accessToken');

let token;

router.get('/login', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.ClientID}`);
});

router.get('/oauth-callback', async (req, res) => {
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

module.exports = router;
