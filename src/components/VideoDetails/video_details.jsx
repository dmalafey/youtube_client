import React from 'react'
import "./video-details.css";


const VideoDetails = props => {

    if(!props.video){
        return null;
    }

    let videoId = props.video.id;
    let url = `https://youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail">
            <div className="video-detail-wrapper">
                <iframe src={url} title={props.video.title} className="video-player" />
                <h4 className="main-video-title">{props.video.title}</h4>
                <small className="main-video-channelTitle">
                    {props.video.channelTitle}
                </small>
                <br />
                <small className="main-video-description">
                    {props.video.description}
                </small>
            </div>
            {props.children}
        </div>

    )


}

export default VideoDetails;
