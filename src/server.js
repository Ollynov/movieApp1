var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', 5000);

var allowCrossDomain = function(req, res, next) { //enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Max-Age', 10);
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.options('/', function(req, res) {
  console.log('ok we got an OPTIONS request')
	res.send("Response back from the server for options requests")
})


app.post('/', function(req, res) {
  console.log('ok we got a POST request')
  allowCrossDomain(req, res);
	res.send("Response back from the server for POST requests")
});

app.listen(5000, function() {
  console.log('Server started: http://localhost:3000');
});


// Test a basic post request to our new server on host 5000
// Write a sqlite file
// Write a sqlite config file defining our schema
// import sequelize
// use sequelize to post and retrieve from the database.

