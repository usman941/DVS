import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.jpg'
import "../App.css";
import BgVideo from '../assets/bgVideos/video1.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router'

const RegisteredDegrees = () => {
  const [data,setData]=useState([]);
  const navigate=useNavigate();
  const getApplications = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/showallAccepted`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Registered degree", result.data);
        setData(result.data); 
    } catch (error) {
      console.log("error getting all applications", error);
    }
  };
  useEffect(()=>{
    getApplications();
  },[]);
  return (
   <>
   <Navbar/>
   <div className="min-h-screen py-8 ">
   <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

   <div className="  min-h-screen py-20 ">
   <div className="border  bg-black  bg-opacity-80  border-[#3D2638] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
        <div className="bg-[#3D2638] border-2 border-[#3D2638]  text-white text-2xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Verified 
            </div>

          </div>
          <div className="justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-44 gap-y-8 mx-10 mt-8 pb-16">
  {
    data && data.map((ele, i) => {
      return (
        <div className="rounded-xl w-[270px] bg-[#15161B] p-4" key={i} onClick={()=>navigate('/detail',{
          state:{
            id:ele._id,
            cnic_no:ele.cnic_no,
            degreeImage:ele.degreeImage,
            degreePdf:ele.degreePdf,
            degree_reg_no:ele.degree_reg_no,
            fullname:ele.fullname,
            gender:ele.gender,
            passing_year:ele.passing_year,
            university:ele.university
          }
        })} >
          <div className="flex overflow-hidden">
            <img
              className="hover:scale-110 h-[220px] cursor-pointer w-full"
              src={ele.degreeImage}
            />
          </div>
          <div className="text-white flex justify-between">
            <p className="font-bold">Name</p>
            <p className="font-bold">{ele.fullname}</p>
          </div>
          <div className="text-white flex justify-between">
            <p className="font-bold">Serial No</p>
            <p className="font-bold">{ele.degree_reg_no}</p>
          </div>
        </div>
      );
    })
  }
</div>

          </div>
    </div>
   </div>
   
   <Footer/>
   
   </>
  )
}

export default RegisteredDegrees