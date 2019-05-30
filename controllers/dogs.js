const Dog = require('../models/dog');

module.exports = {
    index,
    addRating
}

function index(req, res) {
    Dog.count().exec(function (err, count) {
        // Get a random dog
        var random = Math.floor(Math.random() * count)
        // Again query all dogs but only fetch one offset by our random #
        Dog.findOne().skip(random).exec(
          function (err, dog) {
            res.render('dogs/home', {
                dog
            })
          })
    })
};

function addRating(req, res, next) {
    Dog.findById(req.body.dog, function(err, dog) {
        console.log(req.body);
        req.body.operator = req.user.id;
        dog.ratings.push(req.body);
        dog.save(function(err) {
          res.redirect(`/dogs/home`);
        });
    });
}

// function viewRatings(req, res, next) {
//     Dog.findById(req.body.dogId, function(err, dog) {
//         dog.ratings.push(req.body);
//         dog.save(function(err) {
//           res.redirect(`/ratings`);
//         });
//     });
// }
