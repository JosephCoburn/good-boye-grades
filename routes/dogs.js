var express = require('express');
var router = express.Router();
var dogsCtrl = require('../controllers/dogs')

// GET /dogs
router.get('/', dogsCtrl.index);

// Add ratings to dog
router.post('/', dogsCtrl.addRating);

module.exports = router;