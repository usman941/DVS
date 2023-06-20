import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { FcFeedback } from "react-icons/fc";
import bs_degree from "../../images/bs-degree.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Conformation from "./Components/Conformation";
import ModalBasic from "../../components/ModalBasic";
import { toast } from "react-hot-toast";

const Registered = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [open, setOpen] = useState(false);
  const [Itemdata, setItemData] = useState({});
  const [message, setMessage] = useState();

  const navigate = useNavigate();
  const sendFeedback = async () => {
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/adminResponsebymail`,
        {
          queryId: Itemdata.id,
          adminResponse: message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("reject  result:", result);
      toast.success(result.data.message);
      setFeedbackModalOpen(false);
    } catch (error) {
      console.log("Error While rejecting the  document", error);
    }
  };
  function OpenDelete(item) {
    // console.log("deleting  iddd:",item);
    setOpen(true);
    setItemData(item);
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      headerClassName: "bg-[#1E293B] text-white text-sm",
    },
    {
        field: "gender",
        headerName: "Gender",
        width: 150,
        headerClassName: "bg-[#1E293B] text-white text-sm",
      },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerClassName: "bg-[#1E293B] text-white text-sm",
    },
    {
      field: "cnic",
      headerName: "CNIC",
      width: 200,
      headerClassName: "bg-[#1E293B] text-white text-sm",
    },
    {
        field: "registration_no",
        headerName: "Registration No",
        width: 200,
        headerClassName: "bg-[#1E293B] text-white text-sm",
      },
      {
        field: "passing_year",
        headerName: "Passing Year",
        width: 200,
        headerClassName: "bg-[#1E293B] text-white text-sm",
      },
      {
        field: "status",
        headerName: "Status",
        width: 200,
        headerClassName: "bg-[#1E293B] text-white text-sm",
      },
    {
      field: "img",
      headerName: "Picture",
      width: 100,
      headerClassName: "bg-[#1E293B] text-white text-sm cursor-pointer",
     
    },
    {
      field: "pdf",
      headerName: "PDF",
      width: 70,
      headerClassName: "bg-[#1E293B] text-white text-sm cursor-pointer",
    
    },
  ];
  const getApplications = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/showallAccepted`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Registered degree", result.data);
      const degree = result.data;
    
      quries.forEach((element, index) => {
        const dd = {
          id: element._id,
          gender: element.gender,
          name: element.fullname,
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
      <ModalBasic
        id="feedback-modal"
        modalOpen={feedbackModalOpen}
        setModalOpen={setFeedbackModalOpen}
        title="Send Feedback"
      >
        {/* Modal content */}
        <div className="px-5 py-4">
          <div className="text-sm">
            <div className="font-medium text-slate-800 mb-3">
              Why are you rejecting the applicant documents?
            </div>
          </div>
          <div className="space-y-3">
            {/* <div>
                              <label className="block text-sm text-black font-medium mb-1" htmlFor="name">Email</label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div> */}

            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                htmlFor="feedback"
              >
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="feedback"
                className="form-textarea w-full px-2 py-1"
                rows="4"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className="px-5 py-4 border-t border-slate-200">
          <div className="flex flex-wrap justify-end space-x-2">
            <button
              className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
              onClick={(e) => {
                e.stopPropagation();
                setFeedbackModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={sendFeedback}
            >
              Send
            </button>
          </div>
        </div>
      </ModalBasic>

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
                    Registered Degrees
                  </h1>
                </div>
                <div className="w-full border-2 border-gray-300">
                  <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                      rows={applicants}
                      columns={columns}
                      pageSize={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Registered;
