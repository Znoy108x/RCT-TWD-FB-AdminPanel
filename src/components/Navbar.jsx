import React from 'react'
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CropFreeIcon from '@mui/icons-material/CropFree';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="">
      <div className="wrapper flex justify-between pt-3 pl-3   items-center">
        <div className="search  p-1 flex items-center justify-center h-8 border-2 border-[#7451f8] rounded-2xl">
          <input type="text" placeholder="Search " className="outline-none tracking-wide text-gray-900 font-semibold text-center h-full flex-grow"/>
          <SearchIcon className="text-[#7451f8]"/>
        </div>
        <div className="items flex space-x-4 pr-10 items-center">
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer">
            <LanguageIcon/>
          </div>
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer">
            <DarkModeIcon/>
          </div>
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer">
            <CropFreeIcon/>
          </div>
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer relative">
            <NotificationsActiveIcon className=""/>
            <span className="absolute block bg-red-500 rounded-full p-1 text-white -top-1 -right-2 text-xs">10</span>
          </div>
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer relative">
            <ForumIcon/>
            <span className="absolute block bg-red-500 rounded-full p-1 text-white -top-1 -right-2 text-xs">10</span>
          </div>
          <div className="item hover:text-white hover:scale-105 duration-200  hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-1 active:scale-95 p-1 text-md cursor-pointer">
            <MenuIcon/>
          </div>
          <img src="https://i.pinimg.com/236x/b7/b1/38/b7b138495126b90b35855af28716a610.jpg" alt=""  className="rounded-full w-14 h-14"/>
        </div>
      </div>
    </div>
  )
}
export default Navbar