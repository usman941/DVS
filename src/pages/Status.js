import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DataGrid } from '@mui/x-data-grid';
import BgVideo from '../assets/bgVideos/video1.mp4'
import "../App.css";
import axios from 'axios';
const Status = () => {
  const [applicants, setApplicants] =useState([]);
  const columns = [
    {  field: 'id', headerName: 'ID',  width: 150,headerClassName: 'text-white', },
    {  field: 'register_no', headerName: 'Registrataion Number', width: 150,headerClassName: 'text-white', },
    {  field: 'name', headerName: 'Applicant Name', width: 150,headerClassName: 'text-white', },
    {  field: 'passing_year', headerName: 'Passing Year', width: 150,headerClassName: 'text-white', },
    {  field: 'status', headerName: 'Status', width: 150,headerClassName: 'text-white', },

  ];
  const getApplications = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/display_applications`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Registered degree", result.data);
      const degree = result.data;
    
      degree.forEach((element, index) => {
        const dd = {
          id: element._id,
          gender: element.gender,
          name: element.fullname,
          register_no:element.degree_reg_no,
          passing_year:element.passing_year,
          status:element.status,
         

        };
        console.log(index);
        setApplicants((old) => [...old, dd]);
      });
    } catch (error) {
      console.log("error getting all applications", error);
    }
  };
  useEffect(() => {
    getApplications();
  }, []);
  return (
  <>
    <Navbar/>
    <div className="min-h-screen py-8 ">
    <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

    <div className="flex h-screen overflow-hidden">
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                    Check Degree's Status
                </h1>
              </div>

              {/* Right: Actions */}
            
            </div>
        <div className=' bg-black  bg-opacity-50 text-white'>
        <div style={{ height: 430, width: "100%" }}>
  <DataGrid
    rows={applicants}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    className="curson-pointer"
    onCellClick={(e) => {
      console.log("eeee", e);
    }}
  />
  <style>
    {`
      .MuiDataGrid-cell,
      .MuiDataGrid-footer,
      .MuiDataGrid-columnHeader {
        color: white !important;
      }
    `}
  </style>
</div>


        </div>
   
    </div>
    </div>
    </div>
    <Footer/>
  </>
  )
}

export default Status