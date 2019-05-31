var express = require('express');
var router = express.Router();
var ratingsCtrl = require('../controllers/ratings')

router.get('/ratings/index', ratingsCtrl.index);
router.put('/ratings/:id', ratingsCtrl.update);
router.get('/dog/:dogId/ratings/:ratingId/edit', ratingsCtrl.edit);
router.delete('/ratings/:id', ratingsCtrl.delete);

module.exports = router;
