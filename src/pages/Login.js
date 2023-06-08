import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

import hec_pic2 from "../assets/hec_pic2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import BgVideo from '../assets/bgVideos/video1.mp4'
const Login = () => {
  const [formdata, setformdata] = useState({
    password: "",
  });
  const navigate=useNavigate();
  const FormHandler = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }
  const {address,Signin,setToken,connectWallet}=useContext(AuthContext);

  const submit=async()=>{
    if(formdata.password==='')
    {
        toast.warn("Please enter password!!!");
    }else{
      const res=await Signin(address, formdata.password);
      console.log("resssss",res);
      toast.success(res.data.msg);
      navigate('/');
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen py-8 ">

      <ToastContainer/>
      <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>
      <div className="  m-auto  flex-col md:flex-row lg:flex-row xl:flex-row flex w-full h-[600px] justify-center items-center">

      
        <div className="mb-20 xl:mb-0 lg:mb-0 md:mb-0  bg-black bg-opacity-80  h-auto border-2  border-[#3D2638]   md:h-auto  lg:h-auto w-auto xl:h-auto    rounded-3xl py-2">
        <div className="text-[#3D2638] flex justify-center mt-4 pl-4 pr-4">
            <h1 className="text-3xl font-bold text-[#ebe2e9]">Degree Verification System</h1>
          </div>
          <div className="text-[#3D2638] flex justify-center mt-4 pl-4 pr-4">
           <img src={hec_pic2} className="h-20 w-20"/>
          </div>
          <div className="text-[#3D2638] flex justify-center mt-3">
            <h1 className="text-3xl font-semibold text-[#ebe2e9]">log in</h1>
          </div>
          <div className="ml-4 mt-4">
            <label className="font-semibold text-[#ebe2e9]">MetaMask Address:</label>
          </div>
          <div className="ml-4 bg-black mt-2 ">
            <input
              className="w-[90%] p-2 text-sm text-[#ebe2e9] border-collapse px-2 "
              type="text"
              placeholder="metamask"
              value={`${address}`}
              disabled
            />
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold text-[#ebe2e9]">Password:</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 "
              name="password"
              value={formdata.password}
              onChange={FormHandler}
              type="password"
              placeholder="password"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-evenly  items-center  w-full h-10  mt-6 ">
           {
            address?
            <button className=" bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-32 font-semibold    rounded-lg" onClick={submit}>
              Sign in
            </button>:<button className=" bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-40    rounded-lg" onClick={connectWallet}>
              Connect Wallet
            </button>
}
            <button className=" bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-32    rounded-lg"> 
              <Link to="/register"> Sign up</Link>
            </button>
          </div>
          <div className="flex justify-end  items-center  w-full h-10  mt-1  ">
            <p className="mr-9 cursor-pointer text-white hover:text-blue-700">
              <Link to="/forgot"> forget password? </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
