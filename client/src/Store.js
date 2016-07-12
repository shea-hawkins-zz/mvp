import { createStore } from 'redux';
import { actions as appActions } from './resources/app/model';
import { actions as queueActions } from './resources/queue/model';
import { actions as videoActions, attachListeners as videoListeners } from './resources/videoPlayer/model';
import { actions as socketActions, subscribeSocketToStore, mapDispatchToSocket } from './resources/socket/socket';


// Compiles the actions and default state from each of the application components.
var actions = Object.assign({}, videoActions, appActions, queueActions, socketActions);
var state = {
  roomId: 1,
  current: {
    id: 0,
    videoId: 'M7lc1UVf-VE',
    url: ''
  },
  type: 'video',
  player: {
    playing: false,
    state: 'unstarted',
    timestamp: 0
  },
  queue: {
    items: []
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

mapDispatchToSocket(store.dispatch);
subscribeSocketToStore(store);

// Move this into the socket file
videoListeners(store.dispatch);

export default store;
