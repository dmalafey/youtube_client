import React from 'react';
import './App.css';
import  Videos from './videos';

import VideoList from "./components/video_list"
import  VideoDetails from "./components/video_details/video_details";
import  SearchBar from "./components/search_bar/search_bar";
import Nav from "./components/nav/nav";




class App extends React.Component {

state = {
  videos: [...Videos],
  selectedVideo: Videos[0]

};

searchVideoHandler = term =>{
    console.log(Videos);
  let result = [...Videos].filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
  this.setState({videos:result});
  console.log(term);
  console.log(result)

}

  render(){
    return (
        <div>
          <Nav className="App">
            <SearchBar onSearchVideos={this.searchVideoHandler} />
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
