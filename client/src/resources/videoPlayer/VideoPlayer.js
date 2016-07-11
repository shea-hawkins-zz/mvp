import React from 'react';
import ytIframe from 'youtube-iframe';

// youtube player returns a promise for
// ever API function.

// youtube player emits events on any
// API event.

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    var player;
    ytIframe.load(function(youtube) {
      console.log('loaded');
      var player = new youtube.Player('youtube', {
          height: '390',
		      width: '640',
		      videoId: 'M7lc1UVf-VE'
      });
    });
  }
  render() {
    return (
      <div id="youtube" />
    );
  }
};
