var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sei:QAmbVkTmTVjYi_3@sei-mmuyv.azure.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: mongodb+srv://sei:QAmbVkTmTVjYi_3@sei-mmuyv.azure.mongodb.net/test?retryWrites=true`);
});

module.exports = mongoose;