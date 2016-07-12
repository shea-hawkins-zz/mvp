var roomRoute = require('./resources/room/route')

var router = function(app) {
  app.use('/room', roomRoute);
};

module.exports = router;
