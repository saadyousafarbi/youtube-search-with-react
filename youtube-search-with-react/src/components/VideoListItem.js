import React from 'react';


//functional component
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)}>
            <div>
                <div>
                    <img src={imageUrl}/>
                </div>

                <div>
                    <p>{video.snippet.title}</p>
                </div>

                <div>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
