import { createStore } from 'redux';
import { actions as appActions, attachListeners as appListeners } from './resources/app/model';
import { actions as videoActions, attachListeners as videoListeners } from './resources/videoPlayer/model';



// Compiles the actions and default state from each of the application components.
var actions = Object.assign({}, videoActions, appActions);
var state = {
  roomId: 1,
  current: 'M7lc1UVf-VE',
  type: 'video',
  player: {
    playing: false,
    state: 'unstarted'
  }
};

var reducer = function(prevState = state, action) {
  if (actions[action.type]) {
    return actions[action.type](prevState, action.data);
  } else {
    return prevState;
  }
};

var store = createStore(reducer);

appListeners(store.dispatch);
videoListeners(store.dispatch);

export default store;
