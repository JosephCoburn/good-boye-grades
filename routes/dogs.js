var express = require('express');
var router = express.Router();
var dogsCtrl = require('../controllers/dogs')

// GET /dogs
router.get('/', dogsCtrl.index);


module.exports = router;