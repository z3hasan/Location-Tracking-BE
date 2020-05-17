var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('demo');
  console.log("testing");
});

router.post('/test', function(req, res, next) {
  console.log((req.body.test));
});

router.post('/error', function(req, res, next) {
  console.log(req.body.error);
});

module.exports = router;
