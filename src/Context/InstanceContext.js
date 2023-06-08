import axios from "axios";
import { createContext,useContext,useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ethers } from 'ethers';
import { DVSABis } from "../utils/DVSABis";
import { AuthContext } from "./AuthContext";
const InstanceContext=createContext();
const InstanceProvider=({children})=>{
    const[pdfHash,setPDFHash]=useState("");
    const[imageHash,setImageHash]=useState("");
    const {address}=useContext(AuthContext);

    // create contact 
    const CreateContact= async(name,email,query)=>{
        // console.log("name,email,query in instance context",name,email,query);
        try {
            const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-query`,
            {
             query:query
            },{
              headers:{
                Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
              }
            }
            )
            console.log("Create  result:",result.data.message);
            toast.info(result.data.message)
           } catch (error) {
            console.log("Error While Creating contact ",error);
           }
    }
    // Create Application 
    const CreateApplication=async(gender,name,cnic,registration,images,university,passingYear,pdfFiles)=>{
        await MintDegree(gender,name,cnic,registration,images,university,passingYear,pdfFiles);
        try {
            const formdata=new FormData();
            formdata.append('gender',gender);
            formdata.append('fullname',name);
            formdata.append('cnic_no',cnic);
            formdata.append('degree_reg_no',registration)
            formdata.append('degreeImage',images);
            formdata.append('university',university);
            formdata.append('passing_year',passingYear);
            formdata.append('degreePdf',pdfFiles);
            const result=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-application`,
            formdata,
            {
              headers:{
                Authorization:`Bearer ${localStorage.getItem('AuthToken')}`
              }
            }
            )
            console.log("Create  Application:",result.data.msg);
            toast.success(result.data.msg)
           } catch (error) {
            console.log("Error While Creating contact ",error)
           }
    }
    const MintDegree = async (gender, name, cnic, registration, images, university, passingYear, pdfFiles) => {
        // const pdfPromise = uploadPDFToIPFS(pdfFiles);
        try {
            const formData=new FormData();
            formData.append("file",pdfFiles);
          await toast.promise(
                axios({
                    method:"post",
                    url:`${process.env.REACT_APP_PINATA_URL}`,
                    data:formData,
                    headers: {
                        pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
                        pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data",
                      },
                }).then((responce)=>{
                     console.log("response from pdf file :", responce.data.IpfsHash);
                    setPDFHash(responce.data.IpfsHash);
                }).catch((err)=>{
                    console.log("error :", err)
                }),
                {
                    pending: "Uploading PDF to IPFS",
                    success: "Uploaded PDF to IPFS successfully",
                    error: "Error while uploading PDF to IPFS",
                  }
            )
        } catch (error) {
            console.log("Error",error);
        }

        // const imagePromise = uploadImageToIPFS(images);
        try {
            const formData=new FormData();
            formData.append("file",images);
          await toast.promise(
                axios({
                    method:"post",
                    url:`${process.env.REACT_APP_PINATA_URL}`,
                    data:formData,
                    headers: {
                        pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
                        pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data",
                      },
                }).then((responce)=>{
                     console.log("response from Image file :", responce.data.IpfsHash);
                     setImageHash(responce.data.IpfsHash);
                }).catch((err)=>{
                    console.log("error :", err)
                }),
                {
                    pending: "Uploading Image to IPFS",
                    success: "Uploaded Image to IPFS successfully",
                    error: "Error while uploading Image to IPFS",
                  }
            )
        } catch (error) {
            console.log("Error",error);
        }
        const timeStamp=Date.parse(passingYear);
        console.log("parameters",gender,name,registration,imageHash,university,passingYear,pdfHash)
        // const [pdfHash, imageHash] = await Promise.all([pdfPromise, imagePromise]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          process.env.REACT_APP_CONTRACT_ADDRESS,
          DVSABis,
          signer
        );
      
        try {
          const transaction = await contract.mintDegree(
            gender,
            name,
            cnic,
            imageHash,
           pdfHash,
            pdfHash,
            university,
            timeStamp
          );
      
          await toast.promise(
            transaction.wait().then((res) => {
              console.log("Minting call response", res);
              toast.info(res);
            }),
            {
              pending: "Minting in Process...",
              success: "Mint Successfully 👌",
              error: "Promise rejected 🤯",
            }
          );
      
          await toast.promise(
            Promise.resolve(),
            {
              pending: "Waiting to Sign Transaction...",
              success: "Transaction Signed... 👌",
              error: "Transaction Rejected 🤯",
            }
          );
        } catch (err) {
          console.log("Minting call response", err);
          toast.error("Error in Minting Token:", err);
        }
      };
      
    // const uploadPDFToIPFS=async(pdfFile)=>{
    //     try {
    //         const formData=new FormData();
    //         formData.append("file",pdfFile);
    //         toast.promise(
    //             axios({
    //                 method:"post",
    //                 url:`${process.env.REACT_APP_PINATA_URL}`,
    //                 data:formData,
    //                 headers: {
    //                     pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
    //                     pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
    //                     "Content-Type": "multipart/form-data",
    //                   },
    //             }).then((responce)=>{
    //                  console.log("response from pdf file :", responce.data.IpfsHash);
    //                 setPDFHash(responce.data.IpfsHash);
    //             }).catch((err)=>{
    //                 console.log("error :", err)
    //             }),
    //             {
    //                 pending: "Uploading PDF to IPFS",
    //                 success: "Uploaded PDF to IPFS successfully",
    //                 error: "Error while uploading PDF to IPFS",
    //               }
    //         )
    //     } catch (error) {
    //         console.log("Error",error);
    //     }
    // }
    // const uploadImageToIPFS= async(images)=>{
    //     try {
    //         const formData=new FormData();
    //         formData.append("file",images);
    //         toast.promise(
    //             axios({
    //                 method:"post",
    //                 url:`${process.env.REACT_APP_PINATA_URL}`,
    //                 data:formData,
    //                 headers: {
    //                     pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
    //                     pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
    //                     "Content-Type": "multipart/form-data",
    //                   },
    //             }).then((responce)=>{
    //                  console.log("response from Image file :", responce.data.IpfsHash);
    //                  setImageHash(responce.data.IpfsHash);
    //             }).catch((err)=>{
    //                 console.log("error :", err)
    //             }),
    //             {
    //                 pending: "Uploading Image to IPFS",
    //                 success: "Uploaded Image to IPFS successfully",
    //                 error: "Error while uploading Image to IPFS",
    //               }
    //         )
    //     } catch (error) {
    //         console.log("Error",error);
    //     }
    // }
    return(
        <>
        <ToastContainer/>
        <InstanceContext.Provider value={{CreateContact,CreateApplication}}>
            {children}
        </InstanceContext.Provider>
        </>
    );
}
export {InstanceContext,InstanceProvider}