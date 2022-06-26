import React from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Chart from "../components/Chart"
import TableComponent from '../components/TableComponent'
const Single = () => {
  return (
    <div className="flex flex-row  w-screen h-screen  overflow-x-hidden">
      <Sidebar/>
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <div className="w-full h-full flex space-x-2 ml-2 shadow-sm">
          <div className="w-1/3  bg-white shadow-2xl rounded-2xl flex space-x-4 h-[210px]">
              <img src="https://i.pinimg.com/236x/2a/55/ff/2a55ff6d2abc5aa51eb0ab5407bc7222.jpg" alt="" className="rounded-full w-40 h-40"/>
              <div className=''>
                <h1 className="text-4xl text-gray-700 font-bold tracking-wide ">Abhay Bisht</h1>
                <div className="flex space-x-2 mt-4 items-center ">
                  <span className="font-bold">Email</span>
                  <h1 className="text-sm text-gray-800">abhayb2002@gmail.com</h1>
                </div>
                <div className="flex space-x-2 items-center ">
                  <span className="font-bold">Phone</span>
                  <h1 className="text-sm text-gray-800">9625336807</h1>
                </div>
                <div className="flex space-x-2 items-center ">
                  <span className="font-bold">Address</span>
                  <h1 className="text-sm text-gray-800">Hno-557 , Sector - 18 , Faridabad , Haryana</h1>
                </div>
                <div className="flex space-x-2 items-center ">
                  <span className="font-bold">Country</span>
                  <h1 className="text-sm text-gray-800">India</h1>
                </div>
              </div>
          </div>
          <div className="w-[52vw] h-[200px]">
            <Chart/>
          </div>
        </div>
        <div className="w-[79vw] ml-3 mt-3 shadow-2xl">
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default Single