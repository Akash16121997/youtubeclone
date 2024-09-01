import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const siderbarItem = [
  {
    icons: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "You",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "History",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Trending",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Shopping",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Music",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Shopping",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Games",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
  {
    icons: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscrption",
  },
];

function Sidebar() {
  const open = useSelector((state) => state.app.open);
 

  return (
    <div
      className={`relative left-0 h-screen  ${
        open ? "w-[300px]" : "w-[60px]"
      } w-[12%]  ml-2  overflow-y-auto overflow-x-hidden py-3 transition-width duration-300 `}
    >
      {siderbarItem.map((itm, index) => {
        return (
          <div className="flex w-[20%] gap-1 my-6 cursor-pointer  " key={index}>
            <span> {itm.icons}</span>
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{itm.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
