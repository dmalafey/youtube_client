import React from 'react';
import './video-details.css';


const VideoDetails = (props) => {

  const { video } = props;
  if (!video) {
    return null;
  }

  const videoId = video.id;
  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="video-detail-wrapper">
        <iframe src={url} title={video.title} className="video-player" />
        <h4 className="main-video-title">{video.title}</h4>
        <small className="main-video-channelTitle">
          {video.channelTitle}
        </small>
        <br />
        <small className="main-video-description">
          {video.description}
        </small>
      </div>
      {props.children}
    </div>

  );
};

export default VideoDetails;
