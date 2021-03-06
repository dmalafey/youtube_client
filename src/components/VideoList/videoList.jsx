import React from 'react';

import VideoListItem from './video_list_item';
import './video_list.css';

const VideoList = ({ videos, onVideoSelect }) => {
  if (videos.length) {
    const videoItems = videos.map(v => (
      <VideoListItem
        video={v}
        key={v.id}
        onVideoSelect={onVideoSelect}
      />
    ));

    return (
      <ul>
        {videoItems}
      </ul>
    );
  }
  return null;
};
export default VideoList;
