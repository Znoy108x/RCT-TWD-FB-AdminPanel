import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({positive , type}) => {
    let data;
    let amount = 1000;
    switch(type){
        case "User":
            data={
                title:"Users",
                isMoney:false,
                link : "See All User",  
                icon:<PersonIcon className="absolute right-0 bottom-0 text-red-600 bg-pink-200 rounded-2xl"/>
            }
            break
        case "Order":
            data={
                title:"Order",
                isMoney:false,
                link:"View All Order",  
                icon:<ShoppingCartIcon className="absolute right-0 bottom-0 text-green-600 bg-green-200 rounded-2xl p-1"/>
            }
            break
        case "Earning":
            data={
                title:"Earning",
                isMoney:true,
                link:"View Net Earnings",  
                icon:<AttachMoneyIcon className="absolute right-0 bottom-0 text-blue-600 bg-sky-200 rounded-2xl p-1"/>
            }
            break
        case "Balance":
            data={
                title:"Balance",
                isMoney:true,
                link:"See Details",  
                icon:<AccountBalanceWalletIcon  className="absolute right-0 bottom-0 text-orange-600 bg-orange-100 rounded-2xl p-1"/>
            }
            break
        default:
            break
    }
  return (
    <div className="flex shadow-xl  rounded-2xl h-[140px] w-[280px] p-3 hover:scale-105 duration-200 justify-between">
        <div className="flex flex-col justify-between">
            <h1 className="text-gray-500 font-semibold tracking-wide">{data.title}</h1>
            <span className="text-3xl text-gray-700">{data.isMoney && '$'} {amount}</span>
            <h1 className="text-gray-700">{data.link}</h1>
        </div>
        <div className="flex flex-col justify-between relative">
            <div className="flex space-x-3 items-center">
                {
                    positive?<ArrowDropUpIcon className="text-green-500"/>:<ArrowDropDownIcon className="text-red-500"/>
                }
                {
                    positive?<span className="text-green-500">20%</span> : <span className="text-red-500">20%</span>
                }
                
            </div>
            {data.icon}
        </div>
    </div>
  )
}
export default Widget