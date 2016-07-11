import { createStore } from 'redux';
import { actions as videoActions,
         state as videoState } from './resources/videoPlayer/model';

// Compiles the actions and default state from each of the application components.
var actions = Object.assign({}, videoActions);
var state = Object.assign({}, videoState);

var reducer = function(prevState = state, action) {
  if (actions[action.type]) {
    return actions[action.type](prevState, action.data);
  } else {
    return prevState;
  }
};

var store = createStore(reducer);

export default store;
