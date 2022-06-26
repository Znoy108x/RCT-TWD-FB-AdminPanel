import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import Chart from "../components/Chart"
import FeaturedChart from "../components/FeaturedChart"
import TableComponent from '../components/TableComponent'
const Home = () => {
  return (
    <div className="flex flex-row  w-screen h-screen  overflow-x-hidden">
      <Sidebar/>
      <div className="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden">
        <Navbar/>
        <div className="widgets flex  w-full pl-4 mt-2 space-x-8">
          <Widget positive={true} type={"User"}/>
          <Widget positive={false} type={"Order"}/>
          <Widget positive={true} type={"Earning"}/>
          <Widget positive={false} type={"Balance"}/>
        </div>
        <div className="charts-container flex space-x-0 w-full h-full">
          <FeaturedChart/>
          <div className="h-[470px] w-full">
            <Chart/>
          </div>
        </div>
        <div className="mt-6 ml-6 w-[80vw] rounded-2xl bg-white p-6 shadow-2xl ">
          <h1 className="text-gray-900 text-xl tracking-wider font-bold">Latest Transactions</h1>
            <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default Home