import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.jpg'
import "../App.css";
import BgVideo from '../assets/bgVideos/video1.mp4'
import axios from 'axios'
import {FiDownload} from 'react-icons/fi'

import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const DegreeDetail = () => {
  const [data,setData]=useState([]);
  const Location=useLocation();
  const HandleDownload = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/download_docs/${Location.state.degree_reg_no}`,
        {
          responseType: 'blob', // Set the response type to 'blob' to receive binary data
        }
      );
  
      // Check if the response is successful
      if (response.status === 200) {
        // Extract the filename from the response headers
        let filename = 'file.zip'; // Default filename if not found
        const contentDispositionHeader = response.headers['content-disposition'];
        if (contentDispositionHeader) {
          const filenameMatch = contentDispositionHeader.match(/filename=(.+)$/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }
  
        // Create a temporary link element to trigger the file download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(response.data);
        link.download = filename; // Set the filename for the download
        link.click();
  
        toast.success('File downloaded successfully');
      } else {
        toast.error('File download failed');
      }
    } catch (error) {
      console.error('Error while downloading the document', error);
      toast.error('Error while downloading the document');
    }
  };
  return (
   <>
   <Navbar/>
   <div className="min-h-screen py-8 ">
   <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

   <div className="  min-h-screen py-20 ">
   <div className="border  bg-black  bg-opacity-80  border-[#3D2638] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
        <div className="bg-[#3D2638] border-2 border-[#3D2638]  text-white text-2xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Degree Detail
            </div>
          </div>
          <div className="justify-center  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  gap-y-8  mt-8">
        <div className="flex   w-full  p-6 ">
   <div className="flex flex-col">
        <div className="flex  overflow-hidden ">
              <img className="hover:scale-110 h-[300px]  " src={Location.state.degreeImage} />
            </div>
            <div className="flex justify-between text-white pt-3 pb-12">
            <p className="font-bold text-xl ">Download </p>
            <p className="font-bold text-xl cursor-pointer"><FiDownload className="w-6 h-7 " onClick={HandleDownload}/></p>
            </div>
            </div>
            <div className="w-[50%] ml-8 ">
            <div className="text-white  pt-2">
                <div className='flex justify-between pt-2 '>
              <p className="font-bold text-xl ">Name</p>
              <p className="font-bold text-lg ">{Location.state.fullname}</p>
              </div>
              <div className='flex justify-between pt-2 '>
              <p className="font-bold text-xl ">CNIC</p>
              <p className="font-bold text-lg ">{Location.state.cnic_no}</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Gender</p>
              <p className="font-bold text-lg ">{Location.state.gender}</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Registration Number</p>
              <p className="font-bold text-lg ">{Location.state.degree_reg_no}</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">University</p>
              <p className="font-bold text-lg ">{Location.state.university}</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Passing Year</p>
              <p className="font-bold text-lg ">{Location.state.passing_year}</p>
              </div>
            
                {/* FeedBack Modal */}
               
            
            </div>
            </div>
        
        </div>
             
            </div>

          </div>
    </div>
   </div>
   
   <Footer/>
   
   </>
  )
}

export default DegreeDetail