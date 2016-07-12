var path = require('path');
var express = require('express');
var router = require('./router');
var app = express();


// Configuration details
var port = 3000;

app.use('/', function (req, res, next) {
  console.log(req.method + ' request received at ' + req.path);
  next();
});

// start client
app.use('/build', express.static('../client/build'));

app.use('/assets', express.static('../client/assets'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});
// end client

router(app);

sockets(app);

app.use('/', function (req, res, next) {
  console.log(req.method + ' request responded at ' + req.path);
  next();
});

app.listen(port, function() {
  console.log('App is listening on ' + port);
});
