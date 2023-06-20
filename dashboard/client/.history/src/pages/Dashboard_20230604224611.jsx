import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import axios from 'axios';


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [countApp,setCountApp] = useState();
  const [countQueries,setCountQueries]=useState();
  const CountApplications= async()=>{
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/count_app`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Count Applications", result.data.count);
     setCountApp(result.data.count);
   

    } catch (error) {
      console.log("error getting all applications count", error);
    }
  }
  // Count Quries
  const CountQuries= async()=>{
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/countAllQueries`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Count Quries", result.data.queryCount);
     setCountQueries(result.data.queryCount);
   

    } catch (error) {
      console.log("error getting all Quries count", error);
    }
  }
  // Count Accepted,Rejected and Pending Applications
  const CountStatusOfApp= async()=>{
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/count_app`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Count Applications", result.data.count);
     setCountApp(result.data.count);
   

    } catch (error) {
      console.log("error getting all applications count", error);
    }
  }
  useEffect(()=>{
    CountApplications();
    CountQuries();
    CountStatusOfApp();
  },[]);

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

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              

              {/* Right: Actions */}
          

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 
              countApp={countApp}
              />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03
              countQueries={countQueries}
              />
              <DashboardCard03 />

              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;