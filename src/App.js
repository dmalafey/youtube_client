import React from 'react';
import './App.css';

import VideoList from './components/VideoList'
import  VideoDetails from './components/VideoDetails';
import  SearchBar from './components/SearchBar';
import Nav from './components/Nav';
import  FakeServer from './FakeServer'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos:[],
            selectedVideo: ''

        };
    }

    searchVideoHandler = term => {
        FakeServer(term).then((done) => {

            this.setState({videos: done});

        })

    };

    selectVideoHandle = video => this.setState({selectedVideo: video});

    render(){
        return (
            <div>
                <Nav className="App">
                    <SearchBar onSearchVideos={this.searchVideoHandler} />
                </Nav>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={this.selectVideoHandle}
                />
            </div>
        );
    }
}

export default App;