var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

// POST /facts
// We will already have access to the logged in user on
// the server, therefore do not use: /users/:id/facts
router.post('/facts', isLoggedIn, usersCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', usersCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;