import React from 'react';
import {useState, useEffect} from "react";

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />);

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid> 
  )
}
export default VideoList;