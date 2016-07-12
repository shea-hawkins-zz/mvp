import io from 'socket.io-client';

var socket = io.connect('127.0.0.1:3000');

export default socket;
