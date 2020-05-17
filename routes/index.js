var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('demo');
  console.log("testing");
});

router.post('/test',bodyParser.text(), function(req, res, next) {
  console.log(req.body);
});

router.post('/error',bodyParser.text(), function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
