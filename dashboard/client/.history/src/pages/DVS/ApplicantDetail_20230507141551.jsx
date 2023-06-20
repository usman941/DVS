import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import bs_degree from "../../images/bs-degree.jpg";
const ApplicatntDetail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Application Detail
                </h1>
              </div>
            </div>
            <div className="justify-center  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  gap-y-8  mt-8">

              {/* Card */}
              {/* <div className="  lg:w-[350px] xl:w-[350px] md:w-[270px] w-[300px] bg-[#1A232F] p-6 hover:bg-[#2a2d38] cursor-pointer">
     <div className="flex overflow-hidden  justify-center">
              <img className="hover:scale-110 h-[300px]  " src={bs_degree} />
            </div>
         
            <div className="text-white flex justify-between pt-2">
                <div className='flex flex-col'>
              <p className="font-bold text-xl ">SEASON 1</p>
              <p className="font-bold text-lg text-gray-400">SEASON</p>
              </div>
              <div className='flex flex-col pt-2'>
              <p className="font-bold text-xl ">117</p>
              <p className="font-bold text-gray-400 text-lg">MINTED</p>
              </div>
            </div>
          
        </div> */}
        {/* 2 */}
        <div className="flex   w-full bg-[#1A232F] p-6 hover:bg-[#2a2d38]">
   <div className="flex flex-col">
        <div className="flex  overflow-hidden ">
              <img className="hover:scale-110 h-[300px]  " src={bs_degree} />
            </div>
            <div className="flex justify-between text-white">
            <p className="font-bold text-xl ">Download </p>
            <p className="font-bold text-xl ">File </p>
            </div>
            </div>
            <div className="w-[50%] ml-8 ">
            <div className="text-white  pt-2">
                <div className='flex justify-between pt-2 '>
              <p className="font-bold text-xl ">Name</p>
              <p className="font-bold text-lg ">Muhammd Usman Ghani</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Gender</p>
              <p className="font-bold text-lg ">Male</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Registration Number</p>
              <p className="font-bold text-lg ">1XCsds564564534</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">University</p>
              <p className="font-bold text-lg ">PMAS University</p>
              </div>
              <div className='flex justify-between pt-2'>
              <p className="font-bold text-xl ">Passing Year</p>
              <p className="font-bold text-lg ">02/05/2023</p>
              </div>
              <div className="text-white flex justify-between pt-2">
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#ED1E26] hover:bg-[#be141a] items-center justify-center  font-bold rounded-xl"
                  
                  >
                    Reject
                  </button>
                </div>
                <div className="text-white flex justify-between pt-2">
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#0E6B92] hover:bg-[#10475f] items-center justify-center  font-bold rounded-xl"
                  
                  >
                    Approve
                  </button>
                </div>
            </div>
            </div>
            {/* <div className="text-white flex justify-between pt-2">
                <div className='w-[150px]'>
              <button className='p-2 border-2 w-full border-gray-400 font-bold bg-white text-black'>Buy</button>
              </div>
              <div className='w-[150px]'>
              <button className='p-2 border-2 w-full border-gray-400 bg-gray-700 text-gray-400'>Sell</button>
              </div>

            </div> */}
        </div>
             
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApplicatntDetail;
