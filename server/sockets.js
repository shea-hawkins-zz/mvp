var io = require('socket.io');

module.exports = function(server) {
  var sockets = io(server);
  sockets.on('connection', function(socket) {
    console.log('A user connected!');
    // Rebroadcaster listens to each socket and broadcasts to all sockets
    socket.on('pause', function(data) {
      sockets.emit('pause', data);
    });
    socket.on('play', function(data) {
      sockets.emit('play', data);
    });
    socket.on('currentChange', function(data) {
      sockets.emit('currentChange', data);
    });
    socket.on('queueUpdate', function(data) {
      sockets.emit('queueUpdate', data);
    });
  });
};
