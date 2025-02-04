import React from 'react';
import axios from "axios";
import { YOUTUBE_VIDEO_API } from '../constants/youtube';
import { API_KEY } from '../constants/youtube';
import { useEffect } from 'react';
import VideoCart from './VideoCart';
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from './utils/appSlice';

const VideoContainer = () => {
  
      const dispatch = useDispatch();
      const {video,category} = useSelector((store)=>store.app);
  const fetchingYoutubeVideo = async () =>
    {
      try{
        const res  = await axios.get(`${YOUTUBE_VIDEO_API}`); 
        dispatch(setHomeVideo(res?.data?.items))
      }
    catch(error){
     console.log(error);
    }
    }
    const fetchVideoByCategory = async() =>{
      try{
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
         dispatch(setHomeVideo(res?.data?.items))
      }
      catch(error){
        console.log(error);
      }
}
      
  useEffect(() =>{
    if (category === "All") {
      fetchingYoutubeVideo();
  } else {
      fetchVideoByCategory(category);
  }
  },[category])
  return (
    <div className='grid grid-cols-4 gap-3 my-2'> 
       {
         video.map((item)=>{
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`}   key={item.id}>
              <VideoCart item = {item}/>
            </Link>
        
          )
         })
       } 
    </div>
  )
}

export default VideoContainer
