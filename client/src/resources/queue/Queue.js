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
            this.props.queue.map((item) => {
              return (<QueueItem item={item} key={item.id} changeCurrent={this.props.changeCurrent} />)
            })
          }
        </ul>
        <QueueBar addToQueue={this.props.addToQueue} />
      </div>
    );
  }
}

export default connection(Queue);
