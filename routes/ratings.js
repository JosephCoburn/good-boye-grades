var express = require('express');
var router = express.Router();
var ratingsCtrl = require('../controllers/ratings')

// View all ratings
router.get('/ratings/index', ratingsCtrl.index);

module.exports = router;
