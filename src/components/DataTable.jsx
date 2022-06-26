import React, {useState , useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import {db} from "../Firebase"
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const DataTable = () => {
  const [data , setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      let list = []
      try{
        const querySnapshot = await getDocs(collection( db , "user"));
        querySnapshot.forEach((doc) => {
          console.log(doc)
          list.push({id : doc.id , ...doc.data()})
        });
        setData(list)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
    console.log(data)
  }, []);

  const deleteRow = async (e,  id) =>{
    try{
      await deleteDoc(doc(db, "user", id));
      setData(data.filter((item) => item.id !== id))
    }catch(err){
      console.log(err)
    }
  }

    const actionColumn = [
      {
        field : "action" , headerName:"Action" , width: 200 , renderCell : (params) =>{
          return <div className="flex  space-x-4">
            <div className="cursor-pointer hover:text-white hover:bg-green-500   px-1 py-1">View</div>
            <div className="cursor-pointer hover:text-white hover:bg-red-600   px-1 py-1" 
            onClick={(e , id = params.id) => {deleteRow(e , id)}}>Delete</div>
          </div>
        }
      }
    ]
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'user', headerName: 'User', width: 220 ,
          renderCell : (params) =>{
            return <Link to={`/users/${params.row.id}`}>
            <div className="flex space-x-10 items-center cursor-pointer">
              <img src={params.row.Image} alt="" className="my-2 rounded-full w-10 h-10 m-2"/>
              {
                params.row.Name
              }
            </div>
            </Link>
          }},
          { field: 'Email', headerName: 'Email', width: 170 },
          { field: 'State', headerName: 'State', width: 70 },
          { field: 'status', headerName: 'status', width: 160 , renderCell:(params)=>{
            return (
               <>
                {
                  params.row.status === "Approved" ? <div className="ring-1 ring-green-500 ring-inset text-center bg-green-100 text-green-500  text-xs rounded-xl px-1 py-1">
                    {params.row.status}
                  </div> : <div className="ring-1 ring-red-500 ring-inset text-center bg-red-100 text-red-500  text-xs rounded-2xl px-2 py-2">
                    {params.row.Country}
                  </div>
                }
              </>
            )
          }},
        ];
  return (
    <>
    <Link to="/users/new">
      <h1 className="font-bold tracking-wider text-xs cursor-pointer rounded-3xl px-2 py-1 w-[110px] text-red-500 bg-red-100 
      hover:bg-green-100 hover:text-green-500  mx-1">Add New User</h1>
    </Link>
    <div className="w-full h-full" style={{ width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default DataTable