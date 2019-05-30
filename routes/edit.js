var express = require('express');
var router = express.Router();
var editsCtrl = require('../controllers/edits')

// View all ratings
router.get('/edit', editsCtrl.index);

module.exports = router;
