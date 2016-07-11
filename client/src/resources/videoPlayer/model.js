import { connect } from 'react-redux';


// videoPlayer state defaults.
var state = {
  playing: false,
  playerState: 'unstarted',
  current: 'M7lc1UVf-VE'
};

var actions = {
  videoPlay: function(prevState, data) {
    return Object.assign({}, prevState, {
      playing: true,
      playerState: 'playing'
    });
  },
  videoPause: function(prevState, data) {
    return Object.assign({}, state, {
      playing: false,
      playerState: 'paused'
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

var mapStateToProps = function(newState) {
  // This transfers the newState to the component's state declared above.
  return {
    playing: newState.playing,
    current: newState.current
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, state, connection };
