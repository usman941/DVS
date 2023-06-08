import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DataGrid } from '@mui/x-data-grid';
import BgVideo from '../assets/bgVideos/video1.mp4'
import "../App.css";

const rows = [
    { id: 139824793458234, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 1398247985675234, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 139824796578234, register_no: 'Z1907YUB42323GH', name: 'Muhammad Ali',status:'Approved' },
    { id: 3982470879798234, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usama',status:'Pending' },
    { id: 1398247765798234, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 139824798453234, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 139824798231234, register_no: 'Z1907YUB42323GH', name: 'Muhammad khan Ghani',status:'Pending' },
    { id: 13982479822134, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 139824797838234, register_no: 'Z1907YUB42323GH', name: 'Muhammad  Ghani',status:'Pending' },
    { id: 139824792008234, register_no: 'Z1907YUB42323GH', name: 'Muhammad  Iqbal',status:'Pending' },
    { id: 1398247982314, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 139824798090234, register_no: 'Z1907YUB42323GH', name: ' ShahWaiz Iqbal',status:'Pending' },
    { id: 13982479898234, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 13982479865234, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 13982479824334, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 13982479823234, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 13982479823434, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
    { id: 1398247982334, register_no: 'Z1907YUB42323GH', name: 'Muhammad ShahWaiz Iqbal',status:'Pending' },
    { id: 1398247982354, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
   { id: 139824798236, register_no: 'Z1907YUB42323GH', name: 'Muhammad Usman Ghani',status:'Pending' },
  ];
  
  const columns = [
    {  field: 'id', headerName: 'ID', width: 150 },
    {  field: 'register_no', headerName: 'Registrataion Number', width: 150 },
    {  field: 'name', headerName: 'Applicant Name', width: 150 },
    {  field: 'status', headerName: 'Status', width: 150 },

  ];
const Status = () => {
 
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
        <div className=' bg-gray-100'>
        <div style={{ height: 430, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                className="curson-pointer"
                onCellClick={(e) => {
                  console.log("eeee",e);
                  // Navigate("/ecommerce/customers/leadDetails", {
                  //   state: {
                  //     id: e.id,
                  //   },
                  // });
                }}
                
              />   
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