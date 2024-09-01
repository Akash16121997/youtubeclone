import { createSlice } from "@reduxjs/toolkit";


const ChatSlice = createSlice({
    name : "chat",
    initialState:{
        message:[],
    },
    reducers:{
        sendmessage:(state ,action)=>{
            state.message.splice(40,1);
            state.message.push(action.payload);
        }
    }
})

export const {sendmessage} = ChatSlice.actions;
export default ChatSlice.reducer;