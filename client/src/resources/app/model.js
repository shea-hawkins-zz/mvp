import { connect } from 'react-redux';
import socket from '../socket/socket';
import 'whatwg-fetch';

var actions = {
  updateRoomState: function(prevState, data) {
      console.log('data', data);
      return Object.assign({}, prevState, data);
  }
};

var mapDispatchToProps = function(dispatch) {
  return {
    getState: function() {
      fetch('room/state')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          dispatch({type: 'updateRoomState', data: json});
        });
    }
  };
};

// This function will attach all of the app-level listeners to the socket.
// it is given access to the dispatch so that events may be dispatched as needed.
var attachListeners = function(dispatch) {
  socket.on('currentChange', function(data) {
    console.log('currentChange', data);
  });
};

var mapStateToProps = function(state) {
  // This transfers the newState to the component's state declared above.
  return {
    current: state.current
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, attachListeners, connection };
