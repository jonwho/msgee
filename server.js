'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set up server
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Serve static assets
app.use(express.static(__dirname + '/client'));

// Set up view engine
app.set('views', __dirname + '/client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index');
});

// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is runnong on port', app.get('port'));
});
