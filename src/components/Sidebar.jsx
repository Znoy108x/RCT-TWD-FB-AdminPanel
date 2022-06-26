import React from 'react'
import {Link} from "react-router-dom"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LogoutIcon from '@mui/icons-material/Logout';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsIcon from '@mui/icons-material/Settings';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import logo from "../assets/22.png"

const Sidebar = () => {
  return (
    <div className=" w-1/5 min-h-screen border-1  bg-white flex flex-col items-center  border-r-2 border-gray-200 shadow-2xl">
      <img src={logo} alt="" className="w-42 h-32"/>
      <hr className="h-0 border-1 border-gray-100"/>
      <div className=" ">
        <ul className="m-0 p-0">
          <p className="title font-bold text-gray-500  mt-[10px] text-sm mb-2">MAIN</p>
          <Link to="/">
            <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1 text-md">
              <DashboardIcon/>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title font-bold text-gray-500  mt-[10px] text-sm mb-2">LISTS</p>
          <Link to="/users">
            <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
              <AccountBoxIcon/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
              <PrecisionManufacturingIcon />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders">
            <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
              <WorkHistoryIcon/>
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/delivery">
            <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
              <LocalShippingIcon/>
              <span>Delivery</span>
            </li>
          </Link>

          <p className="title font-bold text-gray-500  mt-[10px] text-sm mb-2">USEFULL LINKS</p>
          
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <QueryStatsIcon/>
            <span>Stats</span>
          </li>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <CircleNotificationsIcon/>
            <span>Notifications</span>
          </li>
          <p className="title font-bold text-gray-500  mt-[10px] text-sm mb-2">SERVICES</p>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <MonitorHeartIcon/>
            <span>System Health</span>
          </li>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <AlignHorizontalLeftIcon/>
            <span>Logs</span>
          </li>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <SettingsIcon/>
            <span>Settings</span>
          </li>
          <p className="title font-bold text-gray-500  mt-[10px] text-sm mb-2">USER</p>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <PermContactCalendarIcon/>
            <span>Profile</span>
          </li>
          <li className="flex space-x-3 items-center cursor-pointer hover:text-white hover:scale-105 duration-200 my-0 text-[#7451f8] hover:shadow-2xl hover:bg-[#7451f8] hover:-translate-y-1 hover:-translate-x-2 active:scale-95 p-1">
            <LogoutIcon className="icons "/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar