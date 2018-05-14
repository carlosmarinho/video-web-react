import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBDDsQ3hEtE0q6TnZiZRYV0z2JGh5CT_fI';


// Create a new component. this component should produce some HTML
class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = { 
        videos: [],
        selectedVideo: null
    };
      
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTsearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ 
            videos: videos, 
            selectedVideo: videos[0]
        })
    })

  }

  render(){

    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 500);
    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
            videos={this.state.videos}/>
      </div>
    )
  }

}

//Take this component's generated HTML and put i on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));