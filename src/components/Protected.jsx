import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({Component}) => {
    // const {token}=useContext(AuthContext)
    const navigate=useNavigate();
    useEffect(()=>{
      let loginToken=localStorage.getItem('AuthToken');
      if(!loginToken){
        navigate('/login');
      }
    },[]) 
  return (
    <>
    {/* {token.status?<Component/>:<Navigate to="/login" />} */}
    <Component/>
    </>
  )
}

export default Protected