var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
  }
});

module.exports = mongoose.model('Team', schema, 'team');
