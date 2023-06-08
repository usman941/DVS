
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { InstanceContext } from '../Context/InstanceContext';
import "../App.css";
import BgVideo from '../assets/bgVideos/video1.mp4'

const Contact = () => {
  const {CreateContact}=useContext(InstanceContext);
    const[inutform,setInputform]=useState({
        query:'',
      });
      const FormHandler=(e)=>{
        setInputform({
          ...inutform,
          [e.target.name]:e.target.value,
        });
      }
      const [nextPreState, setNextPreState] = useState(0);
      const Next = () => {
        setNextPreState(nextPreState + 1);
      };
      const Previous = () => {
        setNextPreState(nextPreState - 1);
      };
      const SubmitContact=(e)=>{
        console.log('SubmitContact')
        e.preventDefault();
        if(inutform.name!='' && inutform.email!='' && inutform.query!='')
        {
         CreateContact(inutform.name, inutform.email, inutform.query);
       
        }else {
          toast.warn("please fill all fields");
        }
      }
  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <div className="min-h-screen py-8 ">
    <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

    <div className=''>
        <h1 className="  flex text-black text-3xl font-semibold  justify-center pt-36">
          Contact us
        </h1>
        <div className="flex w-full mt-6 lg:w-8/12 p-4 rounded-xl mx-auto shadow-lg overflow-hidden pb-36 ">
            <div className="  w-full pb-5 pt-5 px-5 bg-black  bg-opacity-80 rounded-xl border-2 border-[#3D2638]  text-white">
            <div className='flex justify-center flex-col'>
              {
              nextPreState == 0? (
                      <>
                    <p className="flex justify-start lg:px-14 md:px-16 px-0   mb-1  font-bold text-sm   ">
                    Enter Query
                    </p>
                       <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                       <textarea
                        cols="93"
                        rows="5"
                        className="py-2 px-2     text-white   rounded-sm bg-[#3D2638]"
                        name="query"
                        value={inutform.query}
                        onChange={FormHandler}
                        placeholder="Enter your query..."
                      ></textarea>
                    </div> 
                    
                      </>

                    ):''
}
</div>
<div className=" mt-2 flex flex-col md:flex-row lg:flex-row   justify-evenly lg:justify-end md:justify-end   sm:w-full lg:w-full md:w-full   ">
               
                  <>
                 
                  
                      <>
                        <button
                          className="text-lg font-semibold  bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] md:w-[10%] lg:w-[10%] lg:mt-0 md:mt-0 mt-2 w-full py-2  mr-14 "
                           onClick={(e) => SubmitContact(e)}
                        >
                          Submit
                        </button>
                      </>
                   
                  </>
              
              </div>
              <div className="text-center mt-[20px] ">
              {nextPreState == 0 ? (
                  <span className="h-[15px] w-[15px] mr-[4px]  bg-white    rounded-[50%] inline-block "></span>
                ) : (
                  <span className="h-[15px] w-[15px] mr-[4px]  bg-[#5f3e59]  opacity-[0.5] rounded-[50%] inline-block "></span>
                )}
             
                </div>
              
</div>
</div>
</div>
</div>
        <Footer/>
    </>
  )
}

export default Contact