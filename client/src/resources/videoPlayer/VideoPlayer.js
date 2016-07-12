import React from 'react';
import ytIframe from 'youtube-iframe';
import { connection } from './model';
// youtube player returns a promise for
// ever API function.

// youtube player emits events on any
// API event.

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    ytIframe.load((youtube) => {
      this.player = new youtube.Player('youtube', {
          height: '390',
		      width: '640',
		      videoId: this.props.current.videoId,
          events: {
            onReady: this.playerReady.bind(this),
            onStateChange: this.playerStateChange.bind(this)
          }
      });
      window.player = this.player;
    });
  }
  playerStateChange({ target, data }) {
    if (data === 1) {
      this.props.play(target.getCurrentTime());
    } else if (data === 2) {
      this.props.pause(target.getCurrentTime());
    }
  }
  playerReady() {
    this.player.seekTo(this.props.timestamp);
    if (this.props.playing) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.player) {
      // This should be throttled and handled in application socket
      // At the moment, resyncs the video player to the new timestamp
      // if it is over threshold.
      if (Math.abs(this.props.timestamp - nextProps.timestamp) > 1) {
        this.player.seekTo(nextProps.timestamp);
      }

      // Syncs video state
      if (nextProps.playing) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }

      if (nextProps.current !== this.props.current) {
        console.log('Video changing to', nextProps.current);
        this.player.loadVideoById(nextProps.current.videoId);
      }
    }
  }
  render() {
    return (
      <div id="youtube" />
    );
  }
};

export default connection(VideoPlayer);
