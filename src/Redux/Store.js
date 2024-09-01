import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/AppSlice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({
    reducer:{
       app : appReducer,
       chat :ChatSlice,
    }
})

export default Store;