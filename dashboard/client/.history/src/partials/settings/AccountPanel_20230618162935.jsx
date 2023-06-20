import React, { useState } from 'react';

import Image from '../../images/user-avatar-80.png';
import axios from 'axios';
import { toast } from "react-hot-toast";

function AccountPanel() {

  const [sync, setSync] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePic(URL.createObjectURL(selectedFile));
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const HandleSave=async ()=>{
    if(password !=='' && confirmPassword !=='' )
    {
      try {
        const result=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/AdminUpdate-password`,
        {
          password:password,
          confirm_password:confirmPassword
        },{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
          }
        }
        )
        console.log("reject  result:",result);
         toast.success("Password updated successfully");
       } catch (error) {
        console.log("Error While Updating password",error);
       }
    }
    else{
      toast.error("Please fill all the feilds");
    }
  
  }
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePic', profilePic);
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/upload-profile-picture`,
        formData
      ,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
        }
      }
      );

    console.log("response of upload-profile-picture",response);

    } catch (error) {
      console.error('Error uploading profile picture', error);
    }
  };
  
  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 font-bold mb-5">My Account</h2>
        {/* Picture */}
        <section>
      <div className="flex items-center">
        <div className="mr-4">
          <img className="w-20 h-20 rounded-full" src={profilePic} width="80" height="80" alt="User upload" />
        </div>
        <label htmlFor="profile-pic" className="btn-sm mr-4 bg-indigo-500 hover:bg-indigo-600 text-white">
          Change
        </label>
        <input
          id="profile-pic"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </section>
        {/* Business Profile */}
        <section>
      <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">Business Profile</h2>
      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <div className="sm:w-1/3">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            className="form-input w-full"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="sm:w-1/3">
          <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            className="form-input w-full"
            type="text"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>
    </section>
   
       
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" onClick={HandleSave}>Save Changes</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AccountPanel;