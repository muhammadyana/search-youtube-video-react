import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount = () => {
    this.onTermSubmit('via vallen')
  };
  
  // add async and await for callback return from axios
  onTermSubmit = async term => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    // console.log(response.data.items);
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log(`from video select`, video);
    this.setState({ selectedVideo: video });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
