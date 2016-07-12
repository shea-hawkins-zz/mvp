import { connect } from 'react-redux';
import socket from '../socket/socket';

var actions = {
  videoPlay: function(prevState, data) {
    return Object.assign({}, prevState, {
      player: {
        playing: true,
        state: 'playing',
        timestamp: data.timestamp
      }
    });
  },
  videoPause: function(prevState, data) {
    return Object.assign({}, prevState, {
      player: {
        playing: false,
        state: 'paused',
        timestamp: data.timestamp
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
    play: function(timestamp) {
      dispatch({ type: 'videoPlay', data: { timestamp: timestamp } });
      socket.emit('play', { timestamp: timestamp } );
      console.log('play sent at ', timestamp);
    },
    pause: function(timestamp) {
      dispatch({ type: 'videoPause', data: { timestamp: timestamp } });
      socket.emit('pause', { timestamp: timestamp } );
      console.log('pause sent at ', timestamp);
    }
  };
};

var mapStateToProps = function(state) {
  // This transfers the newState to the component's state declared above.
  return {
    current: state.current,
    playing: state.player.playing,
    timestamp: state.player.timestamp
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, connection, attachListeners };
