// NPM Modules

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

// Custom Modules

var index = require('./routes/index');
var stock = require('./routes/stock');
var staff = require('./routes/staff');
var customer = require('./routes/customer');

// Mongoose, Express

var app = express();
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);

var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main', 
	partialsDir: __dirname + '/views/partials'}));
app.set('view engine', 'handlebars');

// Middleware

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', index.home);

app.get('/ingredients', stock.get);
app.post('/ingredients/add', stock.add);

app.get('/order', customer.get);
app.post('/order/cost', customer.cost)
app.post('/order/purchase', customer.purchase)

app.get('/kitchen', staff.get);
app.post('/kitchen/remove', staff.remove);

app.listen(PORT, function() {
	console.log('Application running on port: ', PORT);
});