import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import hec_pic2 from "../assets/hec_pic2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Context/AuthContext";
import "../App.css";
// import hec_pic2 from "../assets/hec_pic2.png";
import BgVideo from '../assets/bgVideos/video1.mp4'

const Forgot = () => {
const {Forgot} =useContext(AuthContext)
  const [formdata, setFormdata] = useState({
    email:""
  });
  const FormHandler=(e)=>{
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value,
    });
  }
  const SendEmail=()=>{
    if(formdata.email==='')
    {
        toast.warn("Please enter Email!!!");
    }
    else{
      Forgot(formdata.email);
    }
  }
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      {/* <Navbar /> */}
      <ToastContainer/>
      <div className="min-h-screen py-8 ">
      <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

      <div className=" m-auto  flex-col md:flex-row lg:flex-row xl:flex-row flex w-full h-[600px] justify-center items-center">
       
      <div className=" mb-40 xl:mb-0 lg:mb-0 md:mb-0 text-white bg-black  bg-opacity-80  w-auto h-auto border-2  border-[#3D2638]      rounded-3xl ">
      <div className="text-[#3D2638] flex justify-center mt-4 pl-4 pr-4">
            <h1 className="text-3xl font-bold text-[#ebe2e9]">Degree Verification System</h1>
          </div>
          <div className=" flex justify-center mt-4 pl-4 pr-4">
           <img src={hec_pic2} className="h-20 w-20"/>
          </div>
          <div className="text-black flex justify-center mt-8">
            <h1 className="text-3xl font-semibold text-white">
              Forgot Password
            </h1>
          </div>
          <div className="ml-4 mt-2">
            <label className="font-semibold">Email:</label>
          </div>
          <div className="ml-4  mt-2 ">
            <input
              className="w-[90%] p-2 text-sm border-collapse px-2 text-[#3D2638]"
              type="email"
              name="email"
              value={formdata.email}
              onChange={FormHandler}
              placeholder="example123@gmail.com"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-evenly  items-center  w-full h-10  mt-6 ">
            <button className=" bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] p-2  items-center text-lg w-32    rounded-lg" onClick={SendEmail}>
              Send
            </button>
            {/* <button className=' bg-green-800 hover:bg-green-600 p-2  items-center text-lg w-32  text-white  rounded-lg'><Link to='/register'> Sign up</Link></button> */}
          </div>
          <div className="flex justify-end  items-center  w-full h-10  mt-1  ">
            <p
              className="mr-9 cursor-pointer hover:text-blue-700"
              onClick={login}
            >
              Back to sign in
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Forgot;
