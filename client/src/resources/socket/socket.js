import io from 'socket.io-client';

var socket = io.connect('127.0.0.1:3000');

var actions = {
  socketPlay: function(state) {

  },
  socketPause: function(state) {

  },
  socketCurrentChange: function(state, data) {
    console.log('this is the data you', data);
    return Object.assign({}, state, {
      current: data
    });
  }
};

var mapDispatchToSocket = function(dispatch) {
  socket.on('currentChange', function(data) {
    console.log('currentChange', data);
    dispatch({ type: 'socketCurrentChange', data: data });
  });
};

var subscribeSocketToStore = function(store) {
    var prevState = store.getState();
    store.subscribe(() => {
      var currentState = store.getState();
      // Setup emissions depending on state changes
      if (prevState.current.id !== currentState.current.id) {
        socket.emit('currentChange', currentState.current);
      }

      // Sets the prevState to the new state
      prevState = currentState;
    });
};

export { socket, actions, subscribeSocketToStore, mapDispatchToSocket };
