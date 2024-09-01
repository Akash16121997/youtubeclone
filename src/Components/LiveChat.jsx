import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomMessage, generateRandomName } from './Utils/Helper';
import { sendmessage } from '../Redux/ChatSlice';

function LiveChat() {

    const detail = useSelector((store)=>store.chat.message);
    const dispatch=useDispatch();

    useEffect(()=>{
        const timer = setInterval(()=>{
             dispatch(sendmessage({name:generateRandomName(), message:generateRandomMessage(16)}));
         },600)
 
         return(()=>{
             clearInterval(timer)
         })
         
     },[])
  return (
    <div>
        <div>
            {
                detail.map((item ,index)=>{
                    return(
                        <ChatMessage  key={index} item={item} />
                    )
                })
            }

        </div>
    </div>
  )
}

export default LiveChat