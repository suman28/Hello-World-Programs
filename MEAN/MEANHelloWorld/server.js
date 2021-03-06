// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');


// configuration ===========================================

// config files
var db = require('./config/db');


// set our port
var port = process.env.PORT || 4000;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
//mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

//expose app
exports = module.exports = app;
