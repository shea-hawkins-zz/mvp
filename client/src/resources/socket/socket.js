import io from 'socket.io-client';

var socket = io.connect('127.0.0.1:3000');

var actions = {
  socketPlay: function(state) {

  },
  socketPause: function(state) {

  },
  socketCurrentChange: function(state, data) {
    return Object.assign({}, state, {
      current: data
    });
  },
  socketQueueUpdate: function(state, data) {
    return Object.assign({}, state, {
      queue: {
        items: data
      }
    });
  }
};

var mapDispatchToSocket = function(dispatch) {
  socket.on('currentChange', function(data) {
    dispatch({ type: 'socketCurrentChange', data: data });
  });

  socket.on('queueUpdate', function(data) {
    dispatch({ type: 'socketQueueUpdate', data: data })
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

      if (prevState.queue.items.length !== currentState.queue.items.length) {
        socket.emit('queueUpdate', currentState.queue.items);
      }
      // Sets the prevState to the new state
      prevState = currentState;
    });
};

export { socket, actions, subscribeSocketToStore, mapDispatchToSocket };
