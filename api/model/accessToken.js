const mongoose = require('mongoose');

const schema = mongoose.Schema({
  // Use the `accessToken` string itself as `_id` so you get an
  // index for fast queries.
  access_token: String,
});

module.exports = mongoose.model('AccessToken', schema);
