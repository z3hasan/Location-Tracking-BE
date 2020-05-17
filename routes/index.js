var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('main');
});

router.post('/location', function(req, res, next) {
  console.log(req.body.longitude);
  console.log(req.body.latitude);
});

// POST location error
router.post('/error', function(req, res, next) {
  console.log(req.body.error);
});

module.exports = router;
