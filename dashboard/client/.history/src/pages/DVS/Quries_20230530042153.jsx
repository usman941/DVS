import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai'
import {FcFeedback} from 'react-icons/fc'
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
    { field: "query", headerName: "Query", width: 200, headerClassName: "bg-[#1E293B] text-white text-sm", },
    {
        field: "delete",
        headerName: "Action",
        width: 70,
        headerClassName: "bg-[#1E293B] text-white text-sm cursor-pointer",
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
                console.log(params.row);
              OpenDelete(params.row);
            }}
            className="h-6 w-6 text-red-600"
          />
          // </Button>
        ),
      },
      {
        field: "feedback",
        headerName: "FeedBack",
        width: 100,
        headerClassName: "bg-[#1E293B] text-white text-sm cursor-pointer",
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
          <FcFeedback
            onClick={() => {
                console.log(params.row);
              OpenDelete(params.row);
            }}
            className="h-6 w-6 text-blue-800"
          />
          // </Button>
        ),
      },
  ];
  const DeleteTask = () => {
    // API call
    const url =
      myprofile.role === "loan_officer"
        ? `${import.meta.env.VITE_BACKEND_URL}/task/delete/user/${Itemdata?.id}`
        : `${import.meta.env.VITE_BACKEND_URL}/task/delete/${Itemdata?.id}`;

    try {
      axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
            ...(myprofile.role === "loan_officer"
              ? { Custom: "Task Management" }
              : {}),
          },
        })
        .then((response) => {
          console.log(response);
          toast.success("Task Deleted Successfully");
          setOpen(false);
          setData((data) => data.filter((item) => item.id !== Itemdata?.id));
        })
        .catch((err) => {
          console.log(err);
          toast("Something Went Wrong", {
            position: "top-right",
          });
        });
    } catch (error) {
      console.log(error);
      toast("Something Went Wrong", {
        position: "top-right",
      });
    }
  };

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
      console.log(quries)
      quries.forEach((element,index) => {
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
       open={open}
       title={Itemdata?.title}
       deleteFunction={DeleteTask}
       closeDialog={() => setOpen(false)}
      />
    </div>
  );
};

export default Quries;
