import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import API_KEY from "../../../youtubeclone/src/Constants/Youtube"

function VideoCart({item}) {
    const [ytIcon, setYtIcon] = useState("");
    const getVideoChannelId = async()=>{
 try {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
        console.log(response.data);
        setYtIcon(response.data.items[0].snippet.thumbnails.high.url);
 } catch (error) {
    console.log(error);
 }     
    }

    useEffect(()=>{
        getVideoChannelId();
    },[])
   

  return (
    <div className=" mt-2 cursor-pointer  ">
      <img className=" w-full h-60  rounded-2xl " src={item.snippet.thumbnails.medium.url} alt=" youtube" />
      <div>
        <div className=" flex pt-2">
        <Avatar
            src={ytIcon}
            size={35}
            round={true}
          />
          <div className=" pl-3">
          <span className=" font-bold text-black w-[122px]" >{item.snippet.title}</span>
          <p>{item.snippet.channelTitle}</p>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default VideoCart;
