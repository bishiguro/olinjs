var mongoose = require('mongoose');

var order = mongoose.Schema({
	ingredients: [{ type: mongoose.Schema.ObjectId, ref: 'Ingredient' }]
});

var ingredient = mongoose.Schema({
	name: {type: String, unique: true},
	price: Number
});

var Ingredient = mongoose.model('Ingredient', ingredient);
var Order = mongoose.model('Order', order);

module.exports.Ingredient = Ingredient;
module.exports.Order = Order;