const Operator = require('../models/operator');

// module.exports = {
//   index,
//   show,
//   create,
//   update, 
//   destroy
// };


// function index(req, res) {
//   User.find({}).then(function(users) {
//     res.status(200).json(users);
//   });
// }

// function show(req, res) {
//   User.findById(req.params.id).then(function(user) {
//     res.status(200).json(user);
//   });
// }

// function create(req, res) {
//   User.create(req.body).then(function(users) {
//     res.status(201).json(users);
//   });
// }

// function update(req, res) {
//   User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(user) {
//     res.status(200).json(user);
//   });
// }

// function destroy(req, res) {
//   User.findByIdAndRemove(req.params.id).then(function(user) {
//     res.status(200).json(user);
//   });
// }



module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Operator.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Operator.find(modelQuery)
  .sort(sortKey).exec(function(err, operators) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('operators/index', {
      operators,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/operators');
  });
}

function delFact(req, res, next) {
  Operator.findOne({'facts._id': req.params.id}, function(err, operator) {
    operator.facts.id(req.params.id).remove();
    operator.save(function(err) {
      res.redirect('/operators');
    });
  });
}
