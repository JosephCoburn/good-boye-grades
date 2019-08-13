var router = require('express').Router();
var operatorsCtrl = require('../controllers/operators');

// GET /operators
router.get('/home', operatorsCtrl.index);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;
