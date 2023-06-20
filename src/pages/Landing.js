import React from "react";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import Apply from "./Apply";
import Contact from "./Contact";
import RegisteredDegrees from "./RegisteredDegrees";
import UpdatePassword from "./UpdatePassword";
import About from "./About";
import Protected from "../components/Protected";
import Status from "./Status";
import DegreeDetail from "./DegreeDetail";

const Landing = () => {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
     {/* <ToastContainer> */}
        <Routes>
          {/* <Route path="" element={<Login />} /> */}
          <Route path="/" element={<Protected Component={Home}/>}/>
          <Route path="/login" element={<Login />}/>
<Route path="/contact" element={<Protected Component={Contact}/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/apply" element={<Protected Component={Apply}/>}/>
          <Route path="/updatePassword/:token" element={<UpdatePassword/>}/>
          <Route path="/registeredDegrees" element={<Protected Component={RegisteredDegrees}/>}/>
          <Route path="/status" element={<Protected Component={Status}/>}/>
          <Route path="/detail" element={<Protected Component={DegreeDetail}/>}/>


          {/* <Route path="/about" element={<About/>}/> */}

        </Routes>
        {/* </ToastContainer> */}
      </BrowserRouter>
    </>
  );
};

export default Landing;
