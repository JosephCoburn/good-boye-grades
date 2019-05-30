var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api')

// View all ratings
router.get('/api', apiCtrl.index);

module.exports = router;
