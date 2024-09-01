import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import Avatar from "react-avatar";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchSuggestion, toggleSlidebar } from "../Redux/AppSlice";
import axios from "axios";
import { SEARCH_SUGGESTIONS_API } from "../Constants/Youtube";

function Navbar() {
  const dispatch = useDispatch();
  const[input , setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const {searchSuggestion} = useSelector((store)=> store.app)
 
  const toggleSlide = () => {
    dispatch(toggleSlidebar());
  };

const SearchCat =()=>{
  if(input.trim ()){
    dispatch(setCategory(input));
    setInput("");
  }

} 

const showSuggestion = async () => {
  try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
  } catch (error) {
      console.log(error);
  }
}

useEffect(()=>{
  showSuggestion()
},[input])

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <GiHamburgerMenu
            className="cursor-pointer"
            size="24px"
            onClick={toggleSlide}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.mg_2wSShRmIrPpaXkyCk1wHaCt&pid=Api&P=0&h=180"
            alt="YouTube"
            className="w-[125px] px-3"
          />
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="border outline-none p-2 border-black w-[300px] md:w-[600px] h-[40px] rounded-l-full"
          />
          <button onClick={SearchCat} className="bg-blue-500 rounded-r-full p-2 h-[40px] w-[50px] md:w-[75px] text-white hover:bg-blue-700 cursor-pointer border-black" >
            <FaSearch size="20px" />
          </button>
        </div>

      {/* {
        searchSuggestion.map((item)=>{
          return(
            <ul>
            <li> {item}</li>
            </ul>
            
          )
        })
      } */}

        <div className="flex items-center gap-4">
          <IoIosNotifications size="24px" className="cursor-pointer" />
          <FaVideo size="24px" className="cursor-pointer" />
          <Avatar
            src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
            size={35}
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}


export default Navbar;
