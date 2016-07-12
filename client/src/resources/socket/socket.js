import io from 'socket.io-client';

var socket = io.connect('127.0.0.1:3000');

var actions = {
  socketPlay: function(state) {

  },
  socketPause: function(state) {

  }
};

export default socket;
