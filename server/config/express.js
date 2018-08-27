var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');

app.set('env', 'dev');
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes').http(app);

module.exports = app;
