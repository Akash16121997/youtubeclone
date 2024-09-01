import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../Redux/AppSlice";

function ButtonList() {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag)=>{
        if(active !== tag){
          dispatch(setCategory(tag))
          setActive(tag);
        }
  }

  const buttonList = [
    "All",
    " Javascript",
    "Java",
    "Live",
    "Music",
    " Songs",
    "Vlogs",
    "Trending",
    "Programming",
    "News",
    "Cricket"
  ];
  return (
    <div className="flex pt-20 w-full justify-center ">
      {buttonList.map((item, id) => (
        <button
          key={id}
          onClick={()=>videoByTag(item)}
          className={` ${active === item ? " bg-black" :" bg-slate-500"} h-[50px] font-medium gap-3 mx-2 rounded-xl cursor-pointer hover:bg-slate-600 py-2 items-center text-black px-4 flex justify-center`}
        >
          <span className="text-white">{item}</span>
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
