import React from 'react';
import Header from '../layout/Header';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import Queue from '../queue/Queue';
import { connection } from './model';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.getState();
    this.props = props;
  }
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
        <Header />
        <Queue />
        <main className="mdl-layout__content">
          <VideoPlayer />
        </main>
      </div>
    );
  }
}

export default connection(App);
