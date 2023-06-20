import React, { useEffect } from 'react'
import { createContext,useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { toast } from 'react-toastify';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const[address,setAddress]=useState('');
    const[balance,setBalance]=useState('');
    const[token,setToken]=useState({
      tk:"",
      status:false,
    });
    const[profile,setProfile]=useState();
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
      toast.info(error.response.data.msg)
     }
    }
    //  Sign up
    const SignUp=async(address,name,email,password,confirmPassword)=>{
      try {
       const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`,
       {
         metamaskid:address,
         name:name,
         email:email,
         password:password,
         confirmpassword:confirmPassword
       });
       console.log("SignUp result:",result);
      toast.info(result.data.msg);


      } catch (error) {
       console.log("Error While Signing up",error)
      toast.info(error.response.data.msg)

      }
     }
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
    //  Update PAssword
    const UpdatePassword=async(id,password)=>{
      try {
       const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/update-password`,
       {
        user_id:id,
        password:password
       })
       console.log("Update Password api  result:",result);
      } catch (error) {
       console.log("Error While Update password",error)
      }
     }
     const Profile=async()=>{
      const result=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
        }
      }
      )
      console.log("Profile",result);
      setProfile(result.data);
     }
     useEffect(()=>{
      Profile();
     },[]);
    return (
      <AuthContext.Provider value={{connectWallet,address,Signin,balance,SignUp,Forgot,UpdatePassword,token,setToken,profile}}>
        {children}
      </AuthContext.Provider>
    );
  };


export {AuthContext,AuthProvider};