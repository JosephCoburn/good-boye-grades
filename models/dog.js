var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rating = require('./rating');

var dogSchema = new Schema({
  url: String,
  breed: String,
  ratings: [rating.schema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);
