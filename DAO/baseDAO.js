var express		= require('express');
var pg			= require('pg');
var dbConfig	= require('../config');

var DAOObj = {
	
	newPool: function() {
		if(typeof PG_POOL == 'undefined') {
			PG_POOL = new pg.Pool({
				'max':					dbConfig.pgDB.poolSize || 2,
				'port':			 		dbConfig.pgDB.port,
				'user':			 		dbConfig.pgDB.user,
				'host':			 		dbConfig.pgDB.host,
				'password':		 		dbConfig.pgDB.pass,
				'database':		 		dbConfig.pgDB.database,
				'idleTimeoutMillis':	dbConfig.pgDB.poolIdleTimeout || 60000
			});
			PG_POOL.on('error', (err, client) => {
				// must report err
				console.log(err);
			});
		}
		return PG_POOL;
	},
	
	runQuery:function(sql, values, callback) {
		try {
			var pool = this.newPool();
			pool.query(sql, values, (err, result) => {
				if(err) {
					//must report error
					console.log(err);
					return callback(err);
				} else {
					return callback(null, result.rows);
				}
			});
		} catch(ex) {
			conosle.log(ex);
		}
	}
};

module.exports = DAOObj;