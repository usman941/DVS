import React, { useEffect } from 'react'
import { createContext,useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { toast } from 'react-toastify';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const[address,setAddress]=useState('');
    const[balance,setBalance]=useState('');
    const[forgetToken,setForgetToken]=useState('');
    const[token,setToken]=useState({
      tk:"",
      status:false,
    })
// useEffect(()=>{
//   if(token)
//   {
//     localStorage.setItem("AuthToken",token.tk)
//   }
// },[token]);
// useEffect(()=>{
//   setToken({
//     tk:localStorage.getItem("AuthToken"),
//     status:true
//   })
//   console.log("setting token from local",token)

// },[]);
    // connect with metamask 
    const connectWallet=async ()=>{
        await window.ethereum.request({method:"eth_requestAccounts"}) // using this method we will authenticate our metamask to with our project
        const provider=new ethers.providers.Web3Provider(window.ethereum,"any");
        console.log(provider)
        if(provider.network!='goerli')
        {
            // await window.ethereum.request({
            //     method:'wallet_addEthereumChain',
            //     params:[
            //         {
            //             ...networks['goerli']
            //         }
            //     ]
            // })
            const account=provider.getSigner(); // getsigner use for the ethers
            const Address= await account.getAddress();
            setAddress(Address);
            const Balance=ethers.utils.formatEther(await account.getBalance());
            setBalance(Balance);
            console.log("balance:",Balance);
            console.log("address:",Address);

        }
       
    }
    // Sign in 
    const Signin=async(address,password)=>{
     try {
      const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,
      {
        metamaskid:address,
        password:password
      })
      console.log("Signin result:",result);
      localStorage.setItem("AuthToken",result.data.token);
      setToken({status:true,tk:localStorage.getItem("AuthToken")});
      return result;
     } catch (error) {
      console.log("Error While Logging",error.response)
      toast.info(error.response.data?.msg)
     }
    }
    //  Sign up
    const SignUp = async (address, name, email, image, password, confirmPassword) => {
      try {
        const formData = new FormData();
        formData.append('metamaskid', address);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirmpassword', confirmPassword);
        formData.append('role', 'user');
        formData.append('image', image);
    
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/register`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
    
        console.log('SignUp result:', result);
        toast.info(result.data.msg);
      } catch (error) {
        console.log('Error While Signing up', error);
        toast.info(error.response.data.msg);
      }
    };
    
    //  Forget password
    const Forgot=async(email)=>{
      try {
       const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/forget-password`,
       {
        email:email
       })
       console.log("Forgot api  result:",result);
      
       toast.success(result.data.message);
      } catch (error) {
       console.log("Error While Forgot",error)
      }
     }
    //  forget password 
    const UpdatePassword=async(tokenforget,password)=>{
      try {
       const result=await axios.put(`${process.env.REACT_APP_BACKEND_URL}/reset-password`,
       {
        role:'user',
        token:tokenforget,
        newPassword:password
       })
       console.log("Reset Password api  result:",result);
       toast.success(result.data.msg);
      } catch (error) {
       console.log("Error While Update password",error)
       toast.error(error.response.data.msg);
      }
     }
    return (
      <AuthContext.Provider value={{connectWallet,address,Signin,balance,SignUp,Forgot,UpdatePassword,token,setToken}}>
        {children}
      </AuthContext.Provider>
    );
  };


export {AuthContext,AuthProvider};