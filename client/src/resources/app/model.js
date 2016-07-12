import { connect } from 'react-redux';
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

var mapStateToProps = function(state) {
  // This transfers the newState to the component's state declared above.
  return {
    current: state.current
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, connection };
