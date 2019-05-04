const mongoose = require('mongoose');

const comments = new mongoose.Schema({
  pid: { type: String, index: true },
  text: String,
  usefull: Number,
  unusefull: Number,
  children: { type: Array, default: [] }
});

module.exports = comments;
