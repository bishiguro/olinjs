var path = require('path');
var models = require('../models');

var Order = models.Order;

function get (req, res) {
	Order
		.find()
		.populate('ingredients')
		.exec(function(err, orders) {
			if (err)
				console.error('Cannot Display Ingredients', err);
			res.render('pages/kitchen', {'orders': orders})
	})
}

function remove (req, res) {
	Order.findOneAndRemove({_id: req.body.order}, function (err, removed) {
	if (err)
		return res.sendStatus(500);
	res.json({id: removed._id});
	})
}

module.exports.get = get;
module.exports.remove = remove;