var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', 5000);

app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.listen(5000, function() {
  console.log('Server started: http://localhost:3000');
});


// Test a basic post request to our new server on host 5000
// Write a sqlite file
// Write a sqlite config file defining our schema
// import sequelize
// use sequelize to post and retrieve from the database.

