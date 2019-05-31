var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sei:qfESwmzBriKNu1i1@sei-mmuyv.azure.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

// database connection event
mongoose.connection.on('connected', function () {
  console.log(process.env.DATABASE_URL);
});

module.exports = mongoose;