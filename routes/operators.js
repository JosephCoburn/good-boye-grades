// var express = require('express');
// var router = express.Router();
// var usersCtrl = require('../controllers/users');

// router.get('/users', usersCtrl.index);
// router.get('/users/:id', usersCtrl.show);
// router.post('/users', usersCtrl.create);
// router.put('/users/:id', usersCtrl.update);
// router.delete('/users/:id', usersCtrl.destroy);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

// module.exports = router;


var router = require('express').Router();
var operatorsCtrl = require('../controllers/operators');

// GET /operators
router.get('/operators', operatorsCtrl.index);

// POST /facts
// We will already have access to the logged in operator on
// the server, therefore do not use: /operators/:id/facts
router.post('/facts', isLoggedIn, operatorsCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', operatorsCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
