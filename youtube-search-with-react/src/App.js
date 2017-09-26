import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

import './App.css';
import { myConfig } from './config';
import SearchBar from './components/SearchBar.js';
import VideoDetail from './components/VideoDetail.js';
import VideoList from './components/VideoList.js';


const key = myConfig.API_KEY;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
    }

    videoSearch(term) {
        YTSearch({key: key, term: term}, (videos) => {
            this.setState({
                videos: videos,
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

export default App;
