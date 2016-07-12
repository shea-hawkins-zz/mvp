import { connect } from 'react-redux';
import socket from '../socket/socket';

var actions = {
  videoPlay: function(prevState, data) {
    return Object.assign({}, prevState, {
      player: {
        playing: true,
        state: 'playing'
      }
    });
  },
  videoPause: function(prevState, data) {
    return Object.assign({}, prevState, {
      player: {
        playing: false,
        state: 'paused'
      }
    });
  }
};

var attachListeners = function(dispatch) {
  socket.on('pause', function(data) {
    dispatch({ type: 'videoPause', data: data });
    console.log('pause heard at', data);
  });
  socket.on('play', function(data) {
    dispatch({ type: 'videoPlay', data:data });
    console.log('play heard at', data);
  });
};

var mapDispatchToProps = function(dispatch) {
  return {
    play: function() {
      dispatch({ type: 'videoPlay', data: { timestamp: 11 } });
      socket.emit('play', { timestamp: 11 } );
      console.log('play sent at');
    },
    pause: function() {
      dispatch({ type: 'videoPause', data: { timestamp: 11 } });
      socket.emit('pause', { timestamp: 11 } );
      console.log('pause sent at');
    }
  };
};

var mapStateToProps = function(state) {
  // This transfers the newState to the component's state declared above.
  return {
    current: state.current,
    playing: state.player.playing
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, connection, attachListeners };
