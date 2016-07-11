import React from 'react';
import Header from './resources/layout/Header';
import VideoPlayer from './resources/videoPlayer/VideoPlayer'

export default (props) => {
  return (
    <div>
      <Header />
      <VideoPlayer currentVideo="https://www.youtube.com/watch?v=" />
    </div>
  );
};
