import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../Constants/Youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { sendmessage } from "../Redux/ChatSlice";

function Watch() {
  const [input ,setInput] =useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
 const dispatch = useDispatch();
  const [singleVideo, setSingleVideo] = useState(null);

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

const handlechange=()=>{
    dispatch(sendmessage({
      name:"akash",
      message:input,
    }))
    setInput("");
  
}

  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className="pt-[90px] flex  gap-11">
    <div className=" flex  w-[100%]">
    <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h1>
        <div className=" flex items-center ">
        <div className=" flex items-center  w-[30%]">
          <div className=" flex gap-2 ">
            <Avatar
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              size={35}
              round={true}
            />
            <h2 className="font-bold w-[220px] ml-2">{singleVideo?.snippet?.channelTitle}</h2>
          </div>
          <button className=" px-3 py-1  bg-black text-white border rounded-full ">
            Subscribe
          </button>
        </div>
        <div className=" flex items-center w-[350px] justify-between mt-2 ml-52">
        <div className=" flex items-center cursor-pointer justify-between bg-gray-200 px-4 py-2 rounded-full " >
            <AiOutlineLike size="20px" className='mr-5'/>
            <BiDislike size="20px" />
          </div>
          <div className=" flex items-center cursor-pointer bg-gray-200  px-4 py-2 rounded-full " >
            <RiShareForwardLine size="20px"/>
            <h3 className=" ml-1">Share</h3>
          </div>
          <div  className="flex items-center cursor-pointer bg-gray-200  px-4 py-2 rounded-full">
            <GoDownload/>
            <h3 className=" ml-1">Download</h3>
          </div>
        </div>
      </div>
      
        
        
      </div>
      <div className=" w-[800x] border border-gray-400 ml-8 rounded-lg h-fit p-4" >
        <div className=" flex justify-between items-center">
          <h1> Top chat </h1> 
          <BsThreeDotsVertical/>
        </div>
        <div className=" overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat/>
        </div>
        {/* <div className=" overflow-y-auto h-[28rem]">
           Chat
        </div> */}
        <div className="flex items-center justify-between border-t p-2 m-2">
          <div className=" flex items-center w-[90%]">
             <div>
             <Avatar
            src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
            size={35}
            round={true}
            className="cursor-pointer"
          />
             </div>
             <input value={input} onChange={(e)=>setInput(e.target.value)} className=" border-b ml-2 border-gray-400 outline-none" type="text" placeholder=" send message" />
            <div className=" bg-gray-400 cursor-pointer rounded-full p-2"> 
                <MdSend onClick={handlechange} size={"24px"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    
  );
}

export default Watch;
