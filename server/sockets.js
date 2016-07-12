var io = require('socket.io');

module.exports = function(server) {
  var sockets = io(server);
  sockets.on('connection', function(socket) {
    console.log('A user connected!');
    sockets.emit('currentChange', {current: 'A new video!'});
  });
};
