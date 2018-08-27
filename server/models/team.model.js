var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League',
    required: true
  },
  name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Team', schema, 'team');
