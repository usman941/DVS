import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../images/hec_pic2.png'
import AuthImage from "../images/4.jpg";
import AuthDecoration from "../images/auth-decoration.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {FaRegUserCircle} from "react-icons/fa"
import {AiTwotoneLock} from "react-icons/ai";

function Signin() {
  const [data, setData] = useState({
    metamaskid: "",
    password: "",
  });
  const {  setToken,address } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if(data.metamaskid!=''&& data.password!='')
{
  try {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/loginAdmin`, data)
      .then((res) => {
        toast.success(res.data.message);
        setData({
          email: "",
          metamaskid: "",
        });
        console.log("signin response :",res.data);
        localStorage.setItem("AuthToken",res.data.token);
        setToken({ tk: res.data.token, status: true });
        console.log("setting token:",res.data.token);
        navigate("/");
      })
      .catch((err) => {
       console.log("error",err);
        
      });
  } catch (error) {
    toast.error("Something went wrong!");
  }
}
else{
  toast.error("Please fill all the feilds!!!");
}  
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex justify-center items-center">
                  <div className=" h-16 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link className="block" to="/">
                   
                      <img
                        src={logo}
                        alt="sophy"
                        className="w-28 h-26 mt-10 "
                      />
                    </Link>
                  </div>
                </div>

            <div className="max-w-sm mx-auto px-4 py-28">
              <h1 className="text-3xl text-blue-900 font-bold mb-6">
                Welcome Back
              </h1>
              {/* Form */}
              <form onSubmit={submitHandler}>
                <div className="space-y-4">
                  <div>
                    {/* <label
                      className=" flex  text-sm font-medium mb-1 italic"
                      htmlFor="email"
                    >
                      <FaRegUserCircle className="w-5 h-6 mr-2 "/>
                      Email Address
                    </label> */}
                    <input
                      id="email"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      className="form-input w-full rounded-full"
                      type="email"
                      autocomplete="off"
                      placeholder={ ` Email Address`}
                    />
                  </div>
                  <div>
                    {/* <label
                      className="flex text-sm font-medium mb-1 italic"
                      htmlFor="password"
                    >
                      <AiTwotoneLock className="w-5 h-6 mr-2 "/>
                      Password
                    </label> */}
                    <input
                      id="password"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      className="form-input w-full rounded-full"
                      type="password"
                      autocomplete="off"
                      placeholder="Password"
                    />
                  </div>
                </div>
                {/* <div className="mr-1 mt-2">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      Forgot Password?
                    </Link>
                  </div> */}
                <div className="flex items-center justify-between mt-6">
               
                  {/* <Link to="/"> */}
                  <button
                    type="submit"
                    className="btn w-full rounded-full hover:bg-[#058cc1] bg-[#1d4189] text-white ml-3"
                  >
                    Login
                  </button>
                  {/* </Link> */}
                </div>
              </form>
              {/* Footer */}
             
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        
        </div>
      </div>
    </main>
  );
}

export default Signin;
