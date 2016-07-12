var path = require('path');
var express = require('express');
var http = require('http');
var router = require('./router');
var sockets = require('./sockets');

var app = express();
var server = http.createServer(app);

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

sockets(server);

app.use('/', function (req, res, next) {
  console.log(req.method + ' request responded at ' + req.path);
  next();
});


server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    const port = server.address().port;
    console.log(`Server listening on ${port}`);
  }
});
