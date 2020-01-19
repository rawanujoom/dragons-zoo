
var baseDAO = require('./baseDAO');

var locationDAO = {

	getLocations: function(callback) {
		var sql = "select * from zoo_location";
		baseDAO.runQuery(sql, [] , function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	},

	addLocation: function(location, callback) {
		var sql = "insert into zoo_location (location) values($1) returning id";
		baseDAO.runQuery(sql, [location], function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	}
}

module.exports = locationDAO;