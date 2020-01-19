var express		= require('express');
var router		= express.Router();
var bodyParser	= require('body-parser');
var jsonParser	= bodyParser.json({ type: 'application/*+json' });
var locationDAO  = require('../DAO/locationDAO');

router.get('/', jsonParser, function(req, res) {
	locationDAO.getLocations(function(err, response) {
		if (err) {
			return res.status(404).send();
		} 
		return res.send(response);
	});
});

router.post('/', jsonParser, function(req, res) {
	locationDAO.addLocation(req.body.location, function(err, location) {
		if (err) {
			return res.status(404).send();
		}
		res.send(location);
	});
});

module.exports = router;
