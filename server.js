var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('/client/views/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is runnong on port', app.get('port'));
});
