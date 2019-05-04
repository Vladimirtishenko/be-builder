const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const domains = new mongoose.Schema({
  expired: {
      type: Date
  },
  domain: {
      type: String,
      index: true,
      unique: 'Domain should be unique. There is {VALUE} in the table!',
      required : true
  }
});

domains.plugin(beautifyUnique);

module.exports = domains;
