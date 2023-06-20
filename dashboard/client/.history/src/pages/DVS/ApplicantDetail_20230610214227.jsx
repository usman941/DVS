import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import bs_degree from "../../images/bs-degree.jpg";
import ModalBasic from '../../components/ModalBasic';
import {FiDownload} from 'react-icons/fi'
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const ApplicatntDetail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const Location=useLocation();
  const[message,setMessage]=useState();
  const sendFeedback=async()=>{
    try {
      const result=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/application_status_update`,
      {
        applicationId:Location.state.id,
        status:"Rejected",
        reason:message
      },{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
        }
      }
      )
      console.log("reject  result:",result);
       toast.success("Application has been Rejected");
     } catch (error) {
      console.log("Error While rejecting the  document",error);
     }
  }
  // approve 
  const sendFeedbackApprove=async()=>{
    try {
      const result=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/application_status_update`,
      {
        applicationId:Location.state.id,
        status:"Accepted",
      },{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
        }
      }
      )
      console.log("approve  result:",result);
       toast.success("Application has been approved");
     } catch (error) {
      console.log("Error While approve the  document",error);
     }
  }
// handle HandleDownload pdf
const HandleDownload = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/download_docs/${Location.state.degree_reg_no}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AuthToken')}`,
        },
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
        <div className="flex   w-full bg-[#1A232F] p-6 hover:bg-[#2a2d38]">
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
              <div className="text-white flex justify-between pt-2">
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#ED1E26] hover:bg-[#be141a] items-center justify-center  font-bold rounded-xl"
                    onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
                  >
                    Reject
                  </button>
                 
                </div>
                {/* FeedBack Modal */}
                <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">

                </div>
                </div>
                <div className="text-white flex justify-between pt-2">
                  <button
                    className="p-2 w-full md:w-[40%] xl:w-[50%] lg:w-[50%]  bg-[#0E6B92] hover:bg-[#10475f] items-center justify-center  font-bold rounded-xl"
                  onClick={sendFeedbackApprove}
                  >
                    Approve
                  </button>
                </div>
            </div>
            </div>
        
        </div>
             
            </div>
          </div>
        </main>
      </div>
      <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Send Feedback">
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-slate-800 mb-3">Why are you rejecting the applicant documents?</div>
                          </div>
                          <div className="space-y-3">
                            {/* <div>
                              <label className="block text-sm text-black font-medium mb-1" htmlFor="name">Email</label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div> */}
                           
                            <div>
                              <label className="block text-sm font-medium mb-1 text-black" htmlFor="feedback">Message <span className="text-rose-500">*</span></label>
                              <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows="4" required onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-slate-200">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={sendFeedback}>Send</button>
                          </div>
                        </div>
                      </ModalBasic>
    </div>
  );
};

export default ApplicatntDetail;
