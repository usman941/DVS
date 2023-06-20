import React, { useEffect, useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { DataGrid } from "@mui/x-data-grid";

import bs_degree from "../../images/bs-degree.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Quries = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  const getApplications = async () => {
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "firstName", headerName: "First Name", width: 150 },
      { field: "lastName", headerName: "Last Name", width: 150 },
      { field: "age", headerName: "Age", type: "number", width: 90 },
      { field: "email", headerName: "Email", width: 250 },
    ];
    const rows = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 35,
        email: "johndoe@example.com",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        age: 28,
        email: "janesmith@example.com",
      },
      // Add more rows as needed
    ];

    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/display_applications`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all applications", result.data);
      setApplicants(result.data);
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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Quries
                </h1>
              </div>
              <div className="border-2 border-gray-300">
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Quries;
