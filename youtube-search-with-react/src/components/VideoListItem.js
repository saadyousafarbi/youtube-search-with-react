import React from 'react';


//functional component
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.high.url;
    return (
        <li onClick={() => onVideoSelect(video)}>
            <div>
                <div>
                    <img id='videoImage' src={imageUrl}/>
                </div>

                <div>
                    <p id='title'>{video.snippet.title}</p>
                </div>

            </div>
        </li>
    );
}

export default VideoListItem;
