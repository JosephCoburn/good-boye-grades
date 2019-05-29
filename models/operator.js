// var mongoose = require('mongoose');

// var userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   avatar: String,
//   googleId: String
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('User', userSchema);

var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var operatorSchema = new mongoose.Schema({
  name: String,
  email: String,
  cohort: String,
  avatar: String,
  facts: [factSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Operator', operatorSchema);