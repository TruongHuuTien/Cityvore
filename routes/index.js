var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Cityvore"});
});

router.get('/login', function(req, res) {
	res.render('login', { title: "Cityvore"});
});

router.get('/register', function(req, res) {
	res.render('register', { title: "Cityvore"});
});

module.exports = router;
