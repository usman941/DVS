import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import hec_pic2 from "../assets/hec_pic2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Context/AuthContext";
import "../App.css";
// import hec_pic2 from "../assets/hec_pic2.png";
import BgVideo from '../assets/bgVideos/video1.mp4'

const Register = () => {
  const [formdata, setformdata] =useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [image,setImage]=useState();
  const {address,balance,connectWallet,SignUp}=useContext(AuthContext);
  const navigate = useNavigate();

  const FormHandler = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const RegisterNow=()=>{
    if(formdata.name===''||formdata.email===''||formdata.password===''||formdata.confirmPassword==='' || image==null)
    {
        toast.warn("Please fill all the feilds!!!");
    }
    else{
      SignUp(address,formdata.name,formdata.email,image,formdata.password,formdata.confirmPassword)
    }
  }
  return (
    <>  
    {/* <Navbar /> */}
    <div className="min-h-screen my-56 ">
    <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

      <div className="  m-auto flex-col md:flex-row lg:flex-row xl:flex-row flex w-full h-[600px] justify-center items-center ">
        <div className=" mb-40 xl:mb-0 lg:mb-0 md:mb-0 text-[#ebe2e9]  bg-black  bg-opacity-80    border-2  border-[#3D2638]   w-auto h-auto    rounded-3xl p-2">
        <div className="text-[#3D2638] flex justify-center mt-4 pl-4 pr-4">
            <h1 className="text-3xl font-bold text-[#ebe2e9]">Degree Verification System</h1>
          </div>
          <div className=" flex justify-center mt-4 pl-4 pr-4">
           <img src={hec_pic2} className="h-20 w-20"/>
          </div>
          <div className=" flex justify-center mt-2">
            <h1 className="text-3xl font-semibold ">Sign up</h1>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 "
              type="text"
              placeholder="metamask"
              value={`${address}`}
              disabled
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold">Name</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-[#3D2638] "
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              name="name"
              value={formdata.name}
              onChange={FormHandler}
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold">Email</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-[#3D2638]"
              name="email"
              value={formdata.email}
              onChange={FormHandler}
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold">Choose Your Profile Image</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-white"
              name="image"
              onChange={(e)=>setImage(e.target.files[0])}
              type="file"
              
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold">Password:</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-[#3D2638]"
              type="password"
              name="password"
              value={formdata.password}
              onChange={FormHandler}
              placeholder="password"
              autoComplete="off"
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold"> Confirm Password:</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-[#3D2638]"
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={FormHandler}
              type="password"
              placeholder="Conform password"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-end  items-center  w-full h-10 mb-4 mt-5 ">
            {/* <button className=' bg-green-800  hover:bg-green-600 p-2  items-center text-lg w-32  text-white  rounded-lg' >Sign in</button> */}
           {
            address?
            <button className="mr-9 bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-32    rounded-lg" onClick={RegisterNow}>
              {" "}
              Sign up
            </button>:
            <button className="mr-9 bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-40    rounded-lg" onClick={connectWallet}>
            {" "}
            connect Wallet
          </button>
           }
           
          </div>
          <div className='flex justify-end  items-center  w-full h-10    ' >
                <p className='mr-9 cursor-pointer hover:text-blue-700' onClick={()=>navigate('/login')}>Login?</p>
           </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Register;
