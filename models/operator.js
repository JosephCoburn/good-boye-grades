var mongoose = require('mongoose');

var operatorSchema = new mongoose.Schema({
  name: String,
  cohort: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Operator', operatorSchema);