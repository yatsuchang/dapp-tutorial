import React from 'react';
import {useState, useEffect} from "react";

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';
// import SearchBar from './components/SearchBar';// default import
// import VideoDetail from './components/VideoDetail';// default import
// import VideoList from './components/VideoList';// default import

import youtube from './api/youtube';

const App = () => {
  const [video, setVideo] = useState({ videos: [], selectedVideo: null });

  // useEffect(() => {
  //   getCountries('USD')
  //     .then((message) => {
  //       console.log(message)
  //     })//.catch(error => console.log(error.message));
  // }, []); // call only once at start

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm }});
    console.log(response.data.items);
    setVideo({...video, videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  const onVideoSelect = (_video) => {
    setVideo({...video, selectedVideo: _video});
    console.log('[onVideoSelect] videos:', video.videos);
  }

  return (
    <div>
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* search bar */}
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* video detail */}
              <VideoDetail video={video.selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
              <VideoList videos={video.videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  )
}
export default App;