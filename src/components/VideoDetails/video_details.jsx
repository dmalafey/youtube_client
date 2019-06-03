const VideoDetails = props => {

    if(!props.videos){
        return null;
    }

    let videoId = props.videos.id;
    let url = `https://youtube.com/embed/${videoId}`;


    const videoInfo = {
       "title": props.video.title,

    }
}