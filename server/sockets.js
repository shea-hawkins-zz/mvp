var io = require('socket.io');

module.exports = function(server) {
  var sockets = io(server);
  sockets.on('connection', function(socket) {
    console.log('A user connected!');
    sockets.emit('currentChange', {current: 'A new video!'});
    socket.on('pause', function(data) {
      sockets.emit('pause', data);
    });
    socket.on('play', function(data) {
      sockets.emit('play', data);
    });
  });
};
