const Rating = require('../models/dog');
const User = require('../models/operator');
const Dog = require('../models/dog');

module.exports = {
  index
};

var newDogs; 

function index(req, res, next) {
  Dog.find({}, function(err, dogs) {
    var newDogs = dogs.filter(function(dog) {
      var ids = dog.ratings.map(function(rating) {
        return rating.operator.toString();
      }) 
      // console.log('ids', ids);
      if (ids.includes(req.user.id)) {
        return true 
      }
    })
    // var ratings = user.ratings.filter(function(rating) {
    //   return rating.operator === user._id
    // })
    console.log(newDogs)
  })
  // Make the query object to use with Operator.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Rating.find(modelQuery)
  .sort(sortKey).exec(function(err, ratings) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('edit/index', {
      newDogs,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}



