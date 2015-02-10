var path = require('path');
var models = require('../models')

var Ingredient = models.Ingredient;
var Order = models.Order;

function get (req, res) {
  Ingredient.find({}, function(err, ingredients) {
  	if (err)
  		res.sendStatus(505);
  	res.render('pages/order', {'ingredients': ingredients})
  })
}

function cost (req, res) {
  	res.render('partials/cost', {layouts: false, total: req.body.total});
}

function purchase (req, res) {
	var ingredients = JSON.parse(req.body.ingredients)
	
	Order.create({ingredients: ingredients},
		function (err, order) {
			if (err)
				res.sendStatus(500);
		})
}

module.exports.get = get;
module.exports.cost = cost;
module.exports.purchase = purchase;