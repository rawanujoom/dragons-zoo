var express		= require('express');
var router		= express.Router();
var bodyParser	= require('body-parser');
var jsonParser	= bodyParser.json({ type: 'application/*+json' });
var dragonDAO  = require('../DAO/dragonDAO');
var locationDAO = require('../DAO/locationDAO');

router.get('/', jsonParser, function(req, res) {
	dragonDAO.getDragons(function(err, response) {
		if (err) {
			return res.status(404).send();
		} 
		return res.send(response);
	});
});

router.get('/:id', jsonParser, function(req, res) {
	dragonDAO.getDragon(req.params.id, function(err, dragon) {
		if (err) {
			return res.status(404).send();
		} else {
			// get all locations list in the same call instead of sending a new API to the server
			locationDAO.getLocations(function(err, locations) {
				if (err) {
					return res.status(404).send();
				}
				return res.send({
					dragon: dragon,
					locations: locations
				});
			});
			
		}
	});
});

router.post('/', jsonParser, function(req, res) {
	dragonDAO.getDragonsCount(function(err, dragonsCount) {
		if (err) {
			return res.status(404).send();
		}
		// check zoo capacity if there's space for new dragons
		if (dragonsCount >= dragonDAO.maxCapacity) {
			return res.send({err: 'No Capacity for adding new dragons!'});
		}
		dragonDAO.addDragon(req.body.dragon, function(err, dragon) {
			if (err) {
				return res.status(404).send();
			}
			return res.send(dragon);
		});
	});
	
});

router.delete('/:id', jsonParser, function(req, res) {
	var dragonId 	= req.params.id;
	dragonDAO.removeDragon(dragonId, function(err, response) {
		if (err) {
			return res.status(404).send();
		}
		return res.send(response);
	});
});

router.put('/:id', jsonParser, function(req, res) {
	var dragon = req.params.id;
    dragon = Object.assign(dragon, req.body.dragon);
	dragonDAO.updateDragon(dragon, function(err, response) {
		if (err) {
			res.status(404).send();
		}
		res.send(response);
	});
});

module.exports = router;
