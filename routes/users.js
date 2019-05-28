var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.create);
router.put('/:id', usersCtrl.update);
router.delete('/:id', usersCtrl.destroy);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
