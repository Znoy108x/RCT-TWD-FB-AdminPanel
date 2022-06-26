import React , {useRef , useState , useEffect} from 'react'
import Sidebar from "../components/Sidebar"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { doc, setDoc  , addDoc, collection, serverTimestamp} from "firebase/firestore"; 
import { db , auth } from '../Firebase';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { getStorage, ref, uploadBytesResumable , getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const New = ({title}) => {
  const navigate = useNavigate();
  const [file , setFile] = useState("")
  const ref_state_wala = useRef()
  const indian_states = [{
      key:"AN" , 
      name:"Andaman and Nicobar Islands"},{
      key:"AP" , 
      name:"Andhra Pradesh"
    },{
      key:"AR" , 
      name:"Arunachal Pradesh"},{
      key:"AS" , 
name:"Assam"},{
      key:"BR" , 
      name:"Bihar"},{
      key:"CG" , 
      name:"Chandigarh"},{
      key:"CH" , 
      name:"Chhattisgarh"},{
      key:"DN" , 
      name:"Dadra and Nagar Haveli"},{
      key:"DD" , 
      name:"Daman and Diu"},{
      key:"DL" , 
      name:"Delhi"},{
      key:"GA" , 
      name:"Goa"},{
      key:"GJ" , 
      name:"Gujarat"},{
      key:"HR" , 
      name:"Haryana"},{
      key:"HP" , 
      name:"Himachal Pradesh"},{
      key:"JK" , 
      name:"Jammu and Kashmir"},{
      key:"JH" , 
      name:"Jharkhand"},{
      key:"KA" , 
      name:"Karnataka"},{
      key:"KL" , 
      name:"Kerala"},{
      key:"LA" , 
      name:"Ladakh"},{
      key:"LD" , 
      name:"Lakshadweep"},{
      key:"MP" , 
      name:"Madhya Pradesh"},{
      key:"MH" , 
      name:"Maharashtra"},{
      key:"MN" , 
      name:"Manipur"},{
      key:"ML" , 
      name:"Meghalaya"},{
      key:"MZ" , 
      name:"Mizoram"},{
      key:"NL" , 
      name:"Nagaland"},{
      key:"OR" , 
      name:"Odisha"},{
      key:"PY" , 
      name:"Puducherry"
    },
    {
      key:"PB" , 
      name:"Punjab"
    },
    {
      key:"RJ" , 
      name:"Rajasthan"
    },
    {
      key:"SK" , 
      name:"Sikkim"
    },
    {
      key:"TN" , 
      name:"Tamil Nadu"},
    {
      key:"TS" , 
      name:"Telangana"
    },
    {
      key:"TR" , 
      name:"Tripura"
    },
    {
      key:"UP" , 
      name:"Uttar Pradesh"
    },
    {
      key:"UK" , 
      name:"Uttarakhand"
    },
    {
      key:"WB" , 
      name:"West Bengal"
    }
  ]
  const [progress , setProgress] = useState(0)
  const [data , setData] = useState({Country : "India"})
  useEffect(()=>{
    const uploadFile = () =>{
      const storage = getStorage();
      const storageRef = ref(storage , file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
            break;
          default:
            break;
        }
      }, 
      (error) => {
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData({...data , Image:downloadURL})
        });
      }
    );
    }
    file &&  uploadFile();
  },[file])

  const handleInput = (e) =>{
    const id = e.target.id
    const value = e.target.value
    setData({...data , [id]:value})
  }
  const handleAdd = async (e) =>{
    e.preventDefault()
    try{
      const newUser = await createUserWithEmailAndPassword(auth , data.Email , data.Password)
      const res = await setDoc(doc(db, "user" , newUser.user.uid),{
        ...data,
        timeStamp:serverTimestamp()
      });
      navigate("/users")
      
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex flex-row  w-screen h-screen  overflow-x-hidden">
      <Sidebar/>
      <div className="flex flex-col w-full h-full">
        <h1 className="text-4xl font-bold tracking-wider text-gray-800 mt-8 ml-8">{title}</h1>
        <div className="flex w-full h-full  mt-10 space-x-16 ml-4">
          <div className="w-1/3 h-1/2   flex flex-col justify-center items-center rounded-3xl bg-red-100 ">
            <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHlhRBUevbh8DcWe7o5epTHj3PS0o7vsV1A&usqp=CAU"} alt="" className="rounded-full w-32 h-32 cursor-pointer" onClick={()=>ref_state_wala.current.click()}/>
              <input type="file" onChange={(e)=>setFile(e.target.files[0])}
              className="opacity-0" ref={ref_state_wala} id="File"/>
          </div>
          <div className="w-1/2 h-[550px]  text-gray-800 p-4 rounded-3xl ">
              <form onSubmit={handleAdd} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Name">
                      User Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Name" type="text" placeholder="Abhay Doe" onChange={(e)=>handleInput(e)}/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Email">
                      Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Email" type="email" placeholder="johndoe@gmail.com" onChange={(e)=>handleInput(e)}/>
                  </div>
                </div>
                <div className="flex flex-col  -mx-3 mb-6 space-y-4">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Password">
                      Password
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Password" type="password" placeholder="******************" onChange={(e)=>handleInput(e)}/>
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="PhoneNumber">
                        PhoneNumber
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="PhoneNumber" type="text" placeholder="91---------" onChange={(e)=>handleInput(e)}/>
                  </div>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Address">
                        Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Address" type="text" placeholder="Hno-abc , Sector - cd" onChange={(e)=>handleInput(e)}/>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="City">
                      City
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="City" type="text" placeholder="City" onChange={(e)=>handleInput(e)}/>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="State">
                      State
                    </label>
                    <div className="relative">
                      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="State" onChange={(e)=>handleInput(e)}>
                        {
                          indian_states.map((state)=>(
                            <option key={state.key}>{state.name}</option>
                          ))
                        }
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Country">
                      Country
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer-events-none" id="Country" type="text" placeholder="India" onChange={(e)=>handleInput(e)}/>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-3">
                  {
                    (progress>=1 && progress<100) ?
                    
                    <button type="submit" className="bg-sky-500 px-3 py-2 hover:bg-orange-400 text-white rounded-xl hover:scale-110 duration-200 active:scale-95 flex cursor-pointer opacity-50">Submit</button> 
                    : 
                    <button type="submit" className="bg-sky-500 px-3 py-2 hover:bg-orange-400 text-white rounded-xl hover:scale-110 duration-200 active:scale-95 flex cursor-pointer opacity-100">Submit</button>
                  }
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New