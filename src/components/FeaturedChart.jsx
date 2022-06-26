import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const FeaturedChart = () => {
  return (
    <div className="w-1/3 h-[470px] shadow-2xl mx-4  flex flex-col space-y-8 p-4 rounded-3xl mt-3">
      <div className="flex justify-between">
        <h1 className="text-gray-900 text-xl tracking-wider font-bold ">Total Revenue</h1>
        <MoreVertIcon className="text-gray-800"/>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="chart w-[110px] h-[110px] ">
          <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
        <p className="text-center text-gray-600 text-md tracking-wider">Total Sales Made Today</p>
        <p className="text-center text-4xl font-semibold">$420</p>
      </div>

      <div className="flex flex-col space-y-10">
        <p className="text-center text-gray-600 text-md tracking-wider">Previous Transaction Processing Last Payments May Not Be Included</p>
        <div className="flex space-x-10">
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-600 text-md text-center tracking-wider">Target</h1>
            <div className="flex space-x-4">
              <ArrowDropDownIcon className="text-red-500"/>
              <p className="text-red-500">$12.4K</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-600 text-md text-center tracking-wider">Last Week</h1>
            <div className="flex space-x-4">
              <ArrowDropDownIcon className="text-green-500"/>
              <p className="text-green-500">$12.4K</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-600 text-md text-center tracking-wider">Last Month</h1>
            <div className="flex space-x-4">
              <ArrowDropDownIcon className="text-green-500"/>
              <p className="text-green-500">$12.4K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart

// ArrowDropUpIcon