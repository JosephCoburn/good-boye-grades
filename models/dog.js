var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  rating: {type: Number, min: 1, max: 10, default: 5},
  operator: {type: Schema.Types.ObjectId, ref: 'Operator'},
  dog: {type: Schema.Types.ObjectId, ref: 'Dog'}
}, {
  timestamps: true
});

var dogSchema = new Schema({
  url: String,
  breed: String,
  ratings: [ratingSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);
