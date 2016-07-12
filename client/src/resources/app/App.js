import React from 'react';
import Header from '../layout/Header';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import { connection } from './model';


class App extends React.Component {
  constructor(props) {
    super(props);
    props.getState();
    this.props, = props;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <VideoPlayer />
      </div>
    );
  }
}

export default connection(App);
