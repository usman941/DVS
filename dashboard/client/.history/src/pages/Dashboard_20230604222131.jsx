import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [countApp,setCountApp] = useState();

  const CountApplications= async()=>{
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
          },
        }
      );
      console.log("getting all Quries", result.data.queries);
      const quries=result.data.queries;
      console.log("quries",quries)
      quries.forEach((element,index) => {
        const dd={
            id:element._id,
            query_by:element.user.name,
            query:element.query
        }
        console.log(index);
      setApplicants((old)=>[...old, dd]);   
      });

    } catch (error) {
      console.log("error getting all applications", error);
    }
  }

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
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              <DashboardCard03 />

              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;