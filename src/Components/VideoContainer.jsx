import axios from "axios";
import React, { useEffect, useState} from "react";
import { API_KEY } from "../Constants/Youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../Redux/AppSlice";

function VideoContainer() {

  // const [video1 , setVideo] =useState([]);
  const dispatch = useDispatch();
  const {video ,category} = useSelector((store)=> store.app )

  const VideoFetching = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`);  
    dispatch(setHomeVideo(res?.data?.items))
      console.log("data2", video);
    } catch (error) {
      console.log(error);
    }
  };

const fetchVideoByCategory = async()=>{
try {
  const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
  dispatch(setHomeVideo(res?.data?.items))
} catch (error) {
  console.log(error);    
}
  
}

  useEffect(() => {
    if(category === "All"){
      VideoFetching();
    }else{
      fetchVideoByCategory();
    }
    
  }, [category]);

  return (
  <div className=" grid grid-cols-3 p-8 gap-3">
  {
    video.map((item)=>{
      console.log(item.id);
      return(
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id}>
        <VideoCart  item ={item}/>
        </Link>
        
      )
    })
  }
    
  </div>
  
)
  
}

export default VideoContainer;
