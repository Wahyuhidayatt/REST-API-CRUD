var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

// var index = require('./routes/')
var restaurants = require('./routes/restaurants');
var foods = require('./routes/foods');

var app = express();

mongoose.connect('mongodb://localhost/restApiCrud');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/',restaurants)
// app.use('/', index);
// app.use('/restaurants', restaurants);
app.use('/api', foods);


module.exports = app
