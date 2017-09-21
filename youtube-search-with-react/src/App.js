import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import { myConfig } from './config';

const key = myConfig.API_KEY;

class App extends Component {
  render() {
   YTSearch({ key: key, term: 'hello' }, (data) => {
        console.log(data)
   });

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
