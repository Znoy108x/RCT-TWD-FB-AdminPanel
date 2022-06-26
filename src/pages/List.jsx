import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DataTable from "../components/DataTable"

const List = () => {
  return (
    <div className="flex flex-row  w-screen h-screen  overflow-x-hidden">
      <Sidebar/>
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List