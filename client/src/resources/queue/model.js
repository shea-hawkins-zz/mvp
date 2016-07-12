import { connect } from 'react-redux';

var actions = {
  addToQueue: function(state, data) {
    data.id = state.queue.items.length + 1;
    var items = state.queue.items.slice();
    items.push(data);
    var newState = Object.assign({}, state, 
        {
          queue: {
            items: items
          }
        }
    );
    return newState;
  },
  changeCurrent: function(state, data) {
    return Object.assign({}, state, {
      current: data.url
    });
  }
};

var mapStateToProps = function(state) {
  return {
    queue: state.queue.items,
    current: state.current
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    addToQueue: function(url) {
      dispatch({ type: 'addToQueue', data: { url: url } });
      // rest call to add to queue here
    },
    changeCurrent: function(item) {
      dispatch({ type: 'changeCurrent', data: item })
    }
  };
};

var connection = connect(mapStateToProps, mapDispatchToProps);

export { actions, connection };
