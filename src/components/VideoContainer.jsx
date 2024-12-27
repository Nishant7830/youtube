import React from 'react';
import axios from "axios";
import { YOUTUBE_VIDEO_API } from '../constants/youtube';
import { API_KEY } from '../constants/youtube';
import { useEffect } from 'react';
import VideoCart from './VideoCart';
import { useState } from 'react';

const VideoContainer = () => {
      const [video,setVideo] = useState([]);

  const fetchingYoutubeVideo = async () =>
    {
      try{
        const res  = await axios.get(`${YOUTUBE_VIDEO_API}`); 
        console.log(res?.data?.items);
        setVideo(res?.data?.items);
      }
    catch(error){
     console.log(error);
    }
    }
  useEffect(() =>{
    fetchingYoutubeVideo();
  },[])
  return (
    <div className='grid grid-cols-4 gap-3 my-2'> 
       {
         video.map((item)=>{
          return (
            <VideoCart key={item.id} item = {item}/>
          )
         })
       } 
    </div>
  )
}

export default VideoContainer
