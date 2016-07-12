import { connect } from 'react-redux';
import 'whatwg-fetch';

var actions = {
};

var mapDispatchToProps = function(dispatch) {
  return {
    getState: function() {
      fetch('room/state').then(function(results) {
        console.log(results);
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
