var path = require('path');
var models = require('../models')

var Ingredient = models.Ingredient;

function get (req, res) {
  Ingredient.find({}, function(err, ingredients) {
  	if (err) 
  		res.sendStatus(500);
  	res.render('pages/ingredients', {ingredients: ingredients})
  })
}

function add (req, res) {
	Ingredient.create({name: req.body.name, price: req.body.price}, 
		function (err, ingredient) {
			if (err)
				res.sendStatus(500);
			else
				res.render('partials/ingredient', {layouts: false, name: ingredient.name, price: ingredient.price})
		});
}

module.exports.get = get;
module.exports.add = add;