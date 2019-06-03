import React from 'react';
import './App.css';
import  Videos from './videos';

import  VideoList from './components/VideoList/video_list';
import  VideoDetails from "./components/VideoDetails/video_details";
import  SearchBar from './components/SearchBar/search_bar';
import Nav from "./components/Nav/nav";




class App extends React.Component {

state = {
  videos: [...Videos],
  selectedVideo: Videos[0]
};

searchVideoHandler = term =>{
  let result = [...Videos].filter(item => item.title.includes(term.toLowerCase()));
  this.setState({videos:result})

}

  render(){
    return (
        <div>
          <Nav className="App">
            <SearchBar onSearchVideos={this.searchVideoHandler}/>
          </Nav>
          <VideoDetails video = {this.state.selectedVideo}/>
          <VideoList videos = {this.state.videos}
                     onVideoSelect={video => this.setState({selectedVideo: video})}
          />
        </div>
    );
  }

}

export default App;
