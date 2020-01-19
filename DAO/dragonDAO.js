
var baseDAO = require('./baseDAO');

var dragonDAO = {

	maxCapacity: 7,

	getDragons: function(callback) {
		var sql = "select d.*, z.location from dragon d JOIN zoo_location z on d.location_id = z.id";
		baseDAO.runQuery(sql, [] , function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	},

	getDragonsCount: function(callback) {
		var sql = "select count(1) from dragon";
		baseDAO.runQuery(sql, [] , function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res[0].count);
		});
	},

	getDragon: function(dragonId, callback) {
		var sql = "select * from dragon WHERE id = $1";
		baseDAO.runQuery(sql, [dragonId] , function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res[0]);
		});
	},

	addDragon: function(dragon, callback) {
		var sql = "insert into dragon (name, color, fav_food, location_id) values ($1, $2, $3, $4) returning id";
		baseDAO.runQuery(sql, [dragon.name, dragon.color, dragon.fav_food, dragon.location_id], function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	},

	removeDragon: function(dragonId, callback) {
		var sql = "delete from dragon where id = $1 returning id";
		baseDAO.runQuery(sql, [dragonId], function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	},

	updateDragon: function(dragon, callback) {
		// for simplicity I am assuming all fields are being updated without any checks
		var sql = "update dragon set name = $1, color = $2, fav_food = $3, location_id = $4 where id =$5 returning id";
		baseDAO.runQuery(sql, [dragon.name, dragon.color, dragon.fav_food, dragon.location_id, dragon.id], function(err, res) {
			if (err) {
				return callback(err);
			}
			return callback(null, res);
		});
	},
}

module.exports = dragonDAO;