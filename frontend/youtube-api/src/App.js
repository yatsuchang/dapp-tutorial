import React from 'react';
import {useState, useEffect} from "react";

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
// import VideoList from './components/VideoList';

import youtube from './api/youtube';

const App = () => {

  // useEffect(() => {
  //   getCountries('USD')
  //     .then((message) => {
  //       console.log(message)
  //     })//.catch(error => console.log(error.message));
  // }, []); // call only once at start

  return (
    <div>
      <Grid justifyContent="center" container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* search bar */}
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              {/* video detail */}
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  )
}
export default App;