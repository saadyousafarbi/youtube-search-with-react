import React from 'react';


//functional component
const VideoDetail = ({video}) => {
    if(!video) {
        return <div> Loading </div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div>
            <div>
                <iframe src={url} width='700' height='400'></iframe>
                <div>
                    <div>
                        <div className='title'>{video.snippet.title}></div>
                        <div>{video.snippet.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
