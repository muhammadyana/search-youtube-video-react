import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  // add async and await for callback return from axios
  onTermSubmit = async term => {
    // console.log(term);
    const response = await youtube.get('/search',{
      params: {
        q: term
      }
    });
    // console.log(response.data.items);
    this.setState({ videos: response.data.items })
  };

  render(){
    return(
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div> 
    ) 
  }
}

export default App;