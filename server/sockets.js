var io = require('socket.io');

module.exports = function(app) {
  var sockets = io(app);
  sockets.on('connection', function(socket) {
    console.log('A user connected!');
  });
};
