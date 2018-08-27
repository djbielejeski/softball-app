var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  emailAddress: {
    type: String
  }
});

module.exports = mongoose.model('Player', schema, 'player');
