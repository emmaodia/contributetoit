const mongoose = require('mongoose');

// Project Schema
const projectSchema = mongoose.Schema({
  url: { type: String },
  title: { type: String },
  description: { type: String },
  todos: [{ type: String }],
  reward: { type: String },
  stack: { type: String },
  page: { type: String },
});

projectSchema.set('timestamps', true);

module.exports = mongoose.model('Project', projectSchema);
