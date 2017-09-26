import React from 'react';

import VideoListItem from './VideoListItem.js';

const VideoList = (props) => {
    const videos = props.videos;
    const videoItems = videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                video={ video }
                key={ video.etag }
            />
        );
    });

    return (
    <ul>
        {videoItems}
    </ul>
    )

}

export default VideoList;
