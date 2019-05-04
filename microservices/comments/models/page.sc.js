const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const pages = new mongoose.Schema({
  rating: String,
  pid: {
      type: String,
      index: true,
      unique: 'Field pid should be unique. There is pid with {VALUE} in the table!',
      required : true
  }
});

pages.plugin(beautifyUnique);

module.exports = pages;
