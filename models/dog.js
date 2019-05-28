var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
  url: String,
  breed: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);