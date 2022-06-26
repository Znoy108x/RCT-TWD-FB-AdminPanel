import React,{useState , useContext} from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase"
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext"


const Login = () => {
  const {dispatch} = useContext(AuthContext)


  const navigate = useNavigate()
  const [email , setEmail] = useState("")
  const [password,  setPassword] = useState("")
  

  const handleLogin = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    dispatch({type:"LOGIN" , payload : user})
    console.log(user)
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,  errorMessage)
  });
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">
      <div className="flex w-3/5 h-4/5 backdrop-blur-sm bg-white/50 rounded-3xl items-center">
        <div className="w-1/2 h-full flex items-center justify-center">
          <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_wqypnpu5.json"  background="transparent"  speed="1"  style={{"width": "300px" ,  "height": "300px"}} loop  autoplay></lottie-player>
        </div>
        <div className="w-1/2 h-full flex flex-col space-y-5 items-center justify-center">
          <h1 className="text-[#081747] text-5xl font-black tracking-wide mb-3">Login Please</h1>
          <div className="w-3/5 flex space-x-3 rounded-2xl bg-gray-100 py-2 px-3">
            <EmailIcon className="text-gray-700"/>
            <input type="email" placeholder="Email" className="text-gray-700 w-full text-center bg-gray-100 outline-none"
            onChange= {e => setEmail(e.target.value)}
            />
          </div>
          <div className="w-3/5 flex space-x-3 rounded-2xl bg-gray-100 py-2 px-3">
            <LockOpenIcon className="text-gray-700"/>
            <input type="password" placeholder="Password" className="text-gray-700 w-full text-center bg-gray-100 outline-none" onChange={e=>setPassword(e.target.value)}/>
          </div>
          <button className="w-1/3 bg-blue-900 px-3 py-2 rounded-3xl text-white tracking-wider font-bold hover:scale-110 hover:bg-orange-500 active:scale-95 duration-200" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login