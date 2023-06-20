import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import bs_degree from "../../images/bs-degree.jpg";
const Applications = () => {
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
                  Applications
                </h1>
              </div>
            </div>
            <div className="justify-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4  gap-y-8  mt-8">
              {/* Card */}
              <div className="rounded-xl w-[300px] bg-[#15161B] p-6  mx-4">
                <div className="flex  flex-row justify-between -mt-4 -mx-4">
                  <div className="flex-row items-center justify-center p-2  bg-[#CBAA5F]  rounded-2xl text-black ">
                    <p className="font-bold text-sm ">
                      {/* <AiOutlineClockCircle className="text-red-700 inline-flex " />{" "} */}
                      Pending{" "}
                    </p>
                  </div>
                </div>
                <div className="flex overflow-hidden">
                  <img
                    className="hover:scale-110 h-[220px] cursor-pointer rounded-md"
                    src={bs_degree}
                    //   src={`${process.env.REACT_APP_GATEWAY_MORALIES_URL}/${item.image}`}
                    // src={`https://gateway.moralisipfs.com/ipfs/${item.image}`}
                  />
                </div>
                <div className="text-white flex justify-between">
                  <p className="font-bold">Register No</p>
                  <p>389472398492</p>
                </div>
                <div className="text-white flex justify-between pt-2">
                  {/* <p className="font-bold">Register No</p> */}
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#0E6B92] hover:bg-[#10475f] items-center justify-center  font-bold rounded-xl"
                    //   onClick={async () => {
                    //     const { Name, image, Price } = item;
                    //     const respo = await axios.post(
                    //       `${process.env.REACT_APP_BACKEND_URL}/AddToCart`,
                    //       { Name, image, Price }
                    //     );
                    //     console.log("Get API response:", respo.data.message);
                    //     toast.success(respo.data.message);
                    //   }}
                  >
                    View
                  </button>
                </div>
              </div>
              <div className="rounded-xl w-[300px] bg-[#15161B] p-6  ">
                <div className="flex  flex-row justify-between -mt-4 -mx-4">
                  <div className="flex-row items-center justify-center p-2  bg-[#CBAA5F]  rounded-2xl text-black ">
                    <p className="font-bold text-sm ">
                      {/* <AiOutlineClockCircle className="text-red-700 inline-flex " />{" "} */}
                      Pending{" "}
                    </p>
                  </div>
                </div>
                <div className="flex overflow-hidden">
                  <img
                    className="hover:scale-110 h-[220px] cursor-pointer rounded-md"
                    src={bs_degree}
                    //   src={`${process.env.REACT_APP_GATEWAY_MORALIES_URL}/${item.image}`}
                    // src={`https://gateway.moralisipfs.com/ipfs/${item.image}`}
                  />
                </div>
                <div className="text-white flex justify-between">
                  <p className="font-bold">Register No</p>
                  <p>389472398492</p>
                </div>
                <div className="text-white flex justify-between pt-2">
                  {/* <p className="font-bold">Register No</p> */}
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#0E6B92] hover:bg-[#10475f] items-center justify-center  font-bold rounded-xl"
                    //   onClick={async () => {
                    //     const { Name, image, Price } = item;
                    //     const respo = await axios.post(
                    //       `${process.env.REACT_APP_BACKEND_URL}/AddToCart`,
                    //       { Name, image, Price }
                    //     );
                    //     console.log("Get API response:", respo.data.message);
                    //     toast.success(respo.data.message);
                    //   }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Applications;
