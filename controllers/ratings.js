const Dog = require('../models/dog');

module.exports = {
  index,
  delete: deleteRating,
  update,
  edit
};


function index(req, res, next) {
  Dog.find({}, function(err, dogs) {
    var newDogs = dogs.filter(function(dog) {
      var ids = dog.ratings.map(function(rating) {
        return rating.operator.toString();
      }) 
      if (ids.includes(req.user.id)) {
        return true 
      }
    })
    res.render('ratings/index', {
      newDogs,
      user: req.user,
      name: req.query.name
    });
  })
}

function deleteRating(req, res, next) {
  Dog.findById(req.body.dog, function(err, dog) {
    dog.ratings.remove(req.params.id)
    dog.save(function(err, dog) {
      res.redirect('/ratings/index')
    })
  })
};

// this is using the rating/<dog._id> path instead of rating/<rating._id> path
// will circle around to change routes to place update and edit on dog
// instead of on rating
function edit(req, res, next) {
  Dog.findById(req.params.dogId, function(err, dog) {
    res.render('ratings/edit', {
      dog,
      ratingId: req.params.ratingId
    })
  })
};

function update(req, res, next) {
  Dog.findById(req.body.dogId, function(err, dog) {
    dog.ratings.id(req.body.ratingId).rating = req.body.rating;
    dog.save(function(err, _dog) {
      res.redirect('/ratings/index')
    })
  })
};

