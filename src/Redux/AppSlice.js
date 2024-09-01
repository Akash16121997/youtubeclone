import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name :"app",
    initialState:{
        open : true,
        video:[],
        category:"All",
        searchSuggestion:[],
    },

    reducers:{
        toggleSlidebar(state){
            state.open = !state.open;
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload;
        },
        setCategory:(state,action)=>{
            state.category = action.payload;
        },
        setSearchSuggestion:(state,action)=>{
            state.searchSuggestion = action.payload;
        }
    }
})

export const {toggleSlidebar,setHomeVideo,setSearchSuggestion,setCategory} = AppSlice.actions;
export default AppSlice.reducer;