
import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => (
  <div className="list-group-item">
    <li className="list-item" onClick={() => onVideoSelect(video)}>
      <img src={video.thumbnails.default.url} alt={video.title} className="thumbnail" />
      <div className="text-container">
        <span className="video-list-title">{video.channelTitle}</span>
        <small className="channelName">{video.title}</small>
      </div>
    </li>
  </div>
);


export default VideoListItem;
