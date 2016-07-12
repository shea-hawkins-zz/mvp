import React from 'react';
import QueueItem from './QueueItem';
import QueueBar from './QueueBar';
import { connection } from './model';

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.queue.map(function(item) {
              return (<QueueItem item={item} id={item.id} />)
            })
          }
        </ul>
        <QueueBar addToQueue={this.props.addToQueue} />
      </div>
    );
  }
}

export default connection(Queue);
