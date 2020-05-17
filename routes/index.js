var express = require('express');
var router = express.Router();
var location = require('../controllers/location');

// GET home page.
router.get('/', function(req, res, next) {
  res.render('main');
});

router.post('/location', location.coords);

// POST location error
router.post('/location/error', location.error);

module.exports = router;
