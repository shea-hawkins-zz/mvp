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
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Playlist</span>
        <QueueBar addToQueue={this.props.addToQueue} />
        <nav className="mdl-navigation">
          {
            this.props.queue.map((item) => {
              return (<QueueItem item={item} key={item.id} changeCurrent={this.props.changeCurrent} />)
            })
          }
        </nav>
      </div>
    );
  }
}

export default connection(Queue);
