var express = require('express');
var router = express.Router();
var dogsCtrl = require('../controllers/dogs')

// GET /dogs
router.get('/home', dogsCtrl.index);

// Add ratings to dog
router.post('/home', dogsCtrl.addRating);

module.exports = router;