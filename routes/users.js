var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
	if (req.body && req.body.email && req.body.password) {
		user.add({
			email	: req.body.email,
			password: req.body.password
		}, function(err){
			if (err) {
				if (err === 10) {
					res.send('user already exist');
				}
			} else {
				res.send('add new user: Success!');
			}
		});
	}
});

router.post('/login', function(req, res){
	console.log('login', req.body);
	if (req.body && req.body.email && req.body.password) {
		user.login(req.body.email, req.body.password, function(u){
			res.send(200, u);
		});
	}
});

module.exports = router;
