import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai'

import bs_degree from "../../images/bs-degree.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Conformation from "./Components/Conformation";
const Quries = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [open, setOpen] = useState(false);
  const [Itemdata, setItemData] = useState({});
  const navigate = useNavigate();
  function OpenDelete(item) {
    // console.log("deleting  iddd:",item);
    setOpen(true);
    setItemData(item);
  }
  const columns = [
    { field: "id", headerName: "ID", width: 200, headerClassName: "bg-[#1E293B] text-white text-sm", },
    { field: "query_by", headerName: "Query By", width: 150, headerClassName: "bg-[#1E293B] text-white text-sm", },
    { field: "query", headerName: "Query", width: 150, headerClassName: "bg-[#1E293B] text-white text-sm", },
    {
        field: "delete",
        headerName: "Action",
        width: 70,
        headerClassName: "bg-blue-900 text-white text-sm cursor-pointer",
        renderCell: (params) => (
          // <Button
          //   variant="contained"
          //   style={{ width: "50px", height: "30px" }}
          //   color="error"
          //   onClick={
          //      ()=>{
          //         OpenDelete(params.row)
          //      }
          //   }
          // >
          <AiOutlineDelete
            onClick={() => {
              OpenDelete(params.row);
            }}
            className="h-6 w-6 text-red-600"
          />
          // </Button>
        ),
      },
  ];

  const getApplications = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/display_queries`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Quries", result.data.queries);
      const quries=result.data.queries;
      quries.forEach(element => {
        const dd={
            id:element._id,
            query_by:element.user.name,
            query:element.query
        }
       setApplicants((old)=>[...old, dd]);
        
      });
    } catch (error) {
      console.log("error getting all applications", error);
    }
  };
  useEffect(() => {
    getApplications();
  }, []);
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
            <div className="flex-col sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Quries
                </h1>
              </div>
              <div className="w-full border-2 border-gray-300">
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid rows={applicants} columns={columns} pageSize={5} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Conformation
      
      />
    </div>
  );
};

export default Quries;
