// utility to initialize database
require('./config/database');
const Dog = require('./models/dog');
const data = require('./data');

// Clear out all dogs to prevent duplicates
const p = Dog.deleteMany({});
Promise.all([p]).then(function(results) {
    return Dog.create(data.dogs);
})
.then(function(dogs) {
    console.log(dogs)
})
.then(function() {
    process.exit();
});
