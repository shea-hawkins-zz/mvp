import { connect } from 'react-redux';

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

var mapDispatchToProps = function(dispatch) {
  return {
    play: function() {
      dispatch('videoPlay');
    },
    pause: function() {
      dispatch('videoPause');
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
