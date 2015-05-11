'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set up server
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Serve static assets
// client has precedence over server because served first
// 
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/server'));

// Set up view engine
//app.set('views', __dirname + '/client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
// });

// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is runnong on port', app.get('port'));
});
