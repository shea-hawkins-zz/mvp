import React from 'react';
import QueueItem from './QueueItem';
import QueueBar from './QueueBar';

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <ul>
          <QueueItem link="here's a link!" />
        </ul>
        <QueueBar />
      </div>
    );
  }
}

export default Queue;
