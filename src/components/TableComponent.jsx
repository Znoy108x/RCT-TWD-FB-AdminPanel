import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = () => {
    const rows = [
      {
        id:3413213,
        product:"HP pavillian Laptop",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisZ4zqfz7zRfJBE-A7MAOVeF79qZTvXfr1Q&usqp=CAU",
        customer:"Abhay Bisht",
        date:"4th December",
        amount:"72,000",
        method:"Net Banking",
        status:"Approved"
      },
      {
        id:3414213,
        product:"Boat Earphones",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFoX5_3FmImUCTe7EbPdTDbLKXNVPr7Jtug&usqp=CAU",
        customer:"Abhay Bisht",
        date:"10th January",
        amount:"1,532",
        method:"Net Banking",
        status:"Approved"
      },
      {
        id:5113213,
        product:"SSD 250GB",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBI_JeRJiGLYzzRXrOrduXwzFdaVnIrC2cA&usqp=CAU",
        customer:"Abhay Bisht",
        date:"22th June",
        amount:"2,780",
        method:"Net Banking",
        status:"Not Approved"
      }
    ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="" >Tracking ID</TableCell>
            <TableCell className="" >Product</TableCell>
            <TableCell className="" >Customer</TableCell>
            <TableCell className="" >Date</TableCell>
            <TableCell className="" >Amount</TableCell>
            <TableCell className="" >Payment Method</TableCell>
            <TableCell className="" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="">{row.id}</TableCell>
              <TableCell className="">
                <div>
                  <img src={row.img} alt="" className="w-24 h-24"/>
                </div>
              </TableCell>
              <TableCell className="">{row.customer}</TableCell>
              <TableCell className="">{row.date}</TableCell>
              <TableCell className="">{row.amount}</TableCell>
              <TableCell className="">{row.method}</TableCell>
              <TableCell className="">
                {
                  row.status === "Approved" ? <div className=" ring-2 ring-green-500 ring-inset text-center bg-green-100 text-green-500 text-bold text-sm rounded-xl px-1 py-2">
                    {row.status}
                  </div> : <div className="ring-2 ring-red-500 text-center bg-red-100 text-red-500 text-bold text-sm rounded-xl px-1 py-2">
                    {row.status}
                  </div>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent