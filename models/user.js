var mysql = require('mysql').createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'root',
	database: 'cityvore'
});

var User = new Object();

mysql.connect();

User.add = function(data, callback) {
	mysql.query("SELECT id FROM user WHERE email='"+data.email+"'", function(err, rows){
		if (!err && rows.length === 0) {
			mysql.query("INSERT INTO user SET email='"+data.email+"', password='"+data.password+"'", function(err, rows){
				if (!err) {
					if (callback) {
						callback(null);
					}
				}
			});
		} else {
			if (callback) {
				callback(10);
			}
		}
	});
}

User.login = function(email, password, callback) {
	mysql.query("SELECT id, email FROM user WHERE email='"+email+"' AND password='"+password+"'", function(err, rows){
		if (!err && rows.length !== 0) {
			if (callback) {
				callback(rows[0]);
			}
		}
	});
}

module.exports = User;