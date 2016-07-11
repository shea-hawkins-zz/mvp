import React from 'react';
import ytIframe from 'youtube-iframe';

// youtube player returns a promise for
// ever API function.

// youtube player emits events on any
// API event.

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.player;
    ytIframe.load((youtube) => {
      this.player = new youtube.Player('youtube', {
          height: '390',
		      width: '640',
		      videoId: 'M7lc1UVf-VE',
          events: {
            onStateChange: this.playerStateChange
          }
      });
    });
  }
  playerStateChange({ data }) {
    if (data === 1) {
      this.props.play();
    } else if (data === 2) {
      this.props.pause();
    }
  }
  render() {
    return (
      <div id="youtube" />
    );
  }
};
