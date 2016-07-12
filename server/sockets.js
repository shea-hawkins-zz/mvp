var io = require('socket.io');

module.exports = function(server) {
  var sockets = io(server);
  sockets.on('connection', function(socket) {
    console.log('A user connected!');
    // Rebroadcaster listens to each socket and broadcasts to all sockets
    socket.on('join', function(room) {
      socket.join(room);
    });
    socket.on('leave', function(room) {
      socket.leave(room);
    });
    socket.on('pause', function(data) {
      console.log(data);
      sockets.to(data.room).emit('pause', data.data);
    });
    socket.on('play', function(data) {
      sockets.to(data.room).emit('play', data.data);
    });
    socket.on('currentChange', function(data) {
      sockets.to(data.room).emit('currentChange', data.data);
    });
    socket.on('queueUpdate', function(data) {
      sockets.to(data.room).emit('queueUpdate', data.data);
    });
  });
};
