import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { InstanceContext } from '../Context/InstanceContext';
import BgVideo from '../assets/bgVideos/video1.mp4'
import "../App.css";

const Apply = () => {
  const[loginform,setInputform]=useState({
    name:'',
    gender:'',
    cnic:'',
    registrationNum:'',
    university:'',
    passing_year:''
  });
  const[image,setImage]=useState(null);
  const[pdf,setPDF]=useState(null);
  const FormHandler=(e)=>{
    setInputform({
      ...loginform,
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
  const {CreateApplication}=useContext(InstanceContext);
  const SendtoIPFS=((e)=>{
    e.preventDefault();
    console.log('call send file to ipfs');
if(loginform.name===''&&loginform.cnic===''&&loginform.gender===''&&loginform.registrationNum===''&&loginform.university===''&&loginform.passing_year==='' && loginform.image===''&&loginform.pdfFile===''){
toast.error("All feilds are required!!!");

}else{
console.log("in Condition ");
CreateApplication(loginform.gender,loginform.name,loginform.cnic,loginform.registrationNum,image,loginform.university,loginform.passing_year,pdf);
}
  })
  return (
    <>
        <Navbar/>
      <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

      <div className="min-h-screen py-8 ">
      <div className=''>
        <h1 className=" flex text-black  text-3xl font-semibold  justify-center pt-36">
          Apply for Degree Verification
        </h1>
            <div className="flex w-full  mt-6 lg:w-8/12 p-4 rounded-xl mx-auto shadow-lg overflow-hidden pb-36 ">
            <div className="  w-full pb-5 pt-5 px-5 rounded-xl border-2 text-white border-[#3D2638] bg-black bg-transparent bg-opacity-80 ">
            <div className='flex justify-center flex-col'>
              {nextPreState===0?(
                <>
            <p className="flex justify-start lg:px-14 md:px-16 px-0   mb-1  font-bold text-sm  ">
                      Select your gender & enter your full name.
                    </p>
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                      <select
                        className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-[#D3D3D3]  border bg-[#3D2638]  rounded-sm"
                        onChange={FormHandler}
                        name="gender"
                      >
                        <option disabled selected value="">
                          Gender
                        </option>
                        {/* <option value="Mr">Mr</option> */}
                        <option value="Mr">Male</option>
                        <option value="Mrs">Female</option>
                        <option value="Nonbinary">Other</option>
                      </select>
                    </div> 
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="name"
                        value={loginform.name}
                        onChange={FormHandler}
                        type="text"
                        placeholder="Enter full name..."
                      />
                    </div>  
                    </>
                    ) :nextPreState == 1 ? (
                      <>
                    <p className="flex justify-start lg:px-14 md:px-16 px-0   mb-1  font-bold text-sm   ">
                    Enter your CNIC & degree registration number  
                    </p>
                       <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="cnic"
                        value={loginform.cnic}
                        onChange={FormHandler}
                        type="text"
                        placeholder="Enter applicant CNIC..."
                      />
                    </div> 
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="registrationNum"
                        value={loginform.registrationNum}
                        onChange={FormHandler}
                        type="text"
                        placeholder="Enter applicant degree registration number..."
                      />
                    </div>   
                      </>

                    ):nextPreState===2?(
                      <>
                      <p className="flex justify-start lg:px-14 md:px-16 px-0   mb-1  font-bold text-sm   ">
                    Enter a scaned picture of degree & attach a PDF file of documents 
                    </p>
                       <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="image"
                        onChange={(e)=>setImage(e.target.files[0])}
                        type="file"
                        
                      />
                    </div> 
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="pdf"
                        onChange={(e)=>setPDF(e.target.files[0])}

                        type="file"
                        accept="application/pdf"
                      />
                    </div> 
                      </>
                    ):nextPreState===3?(
                      <>
                      <p className="flex justify-start lg:px-14 md:px-16 px-0   mb-1  font-bold text-sm   ">
                    Select University and enter passing year 
                    </p>
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                      <select
                        className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-[#D3D3D3]  border bg-[#3D2638]  rounded-sm"
                        onChange={FormHandler}
                        name="university"
                      >
                        <option disabled selected value="">
                          University
                        </option>
                        {/* <option value="Mr">Mr</option> */}
                        <option value="PMAS">PMAS</option>
                        <option value="NUML">NUML</option>
                        <option value="IIUI">IIUI</option>
                        <option value="FAST">FAST</option>
                        <option value="COMSATS">COMSATS</option>
                        <option value="NUST">NUST</option>
                        <option value="NAMAL">NAMAL</option>
                        <option value="IQRA">IQRA</option>
                        <option value="GC">GC</option>
                        <option value="GOMAL">GOMAL</option>
                      </select>
                    </div>  
                    <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                      <input
                        className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border bg-[#3D2638]   border-gray-400 rounded-sm "
                        name="passing_year"
                        value={loginform.passing_year}
                        onChange={FormHandler}
                        type="date"
                        
                      />
                    </div> 
                      </>
                    ):""
                    
                    }
                    <div className=" mt-2 flex flex-col md:flex-row lg:flex-row   justify-evenly lg:justify-end md:justify-end   sm:w-full lg:w-full md:w-full   ">
                {nextPreState > 0 ? (
                  <>
                    <button
                      className="text-lg font-semibold  bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e]  md:w-[15%] lg:w-[15%] w-full py-2 sm:mr-24 md:mr-2"
                      onClick={Previous}
                    >
                      Previous
                    </button>
                    {nextPreState == 3 ? (
                      <>
                        <button
                          className="text-lg font-semibold  bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] md:w-[10%] lg:w-[10%] lg:mt-0 md:mt-0 mt-2 w-full py-2  mr-16 "
                           onClick={(e) => SendtoIPFS(e)}
                        >
                          Submit
                        </button>
                      </>
                    ) : (
                      <button
                        className="text-lg font-semibold  bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] md:w-[10%] lg:w-[10%] lg:mt-0 md:mt-0 mt-2 w-full py-2  mr-16 "
                        onClick={Next}
                      >
                        Next
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    className="text-lg font-semibold  bg-[#ebe2e9] hover:bg-[#e4cade] text-[#331f2e] md:w-[10%] lg:w-[10%] lg:mt-0 md:mt-0 mt-2 w-full py-2  mr-16"
                    onClick={Next}
                  >
                    Next
                  </button>
                )}
              </div>
              <div className="text-center mt-[20px] ">
              {nextPreState == 0 ? (
                  <span className="h-[15px] w-[15px] mr-[4px]  bg-[#ebe2e9]    rounded-[50%] inline-block "></span>
                ) : (
                  <span className="h-[15px] w-[15px] mr-[4px]  bg-[#ebe2e9]  opacity-[0.5] rounded-[50%] inline-block "></span>
                )}
                 {nextPreState == 1 ? (
                  <span className="h-[15px] w-[15px] mr-[4px]  bg-[#ebe2e9] rounded-[50%] inline-block "></span>
                ) : (
                  <span className="h-[15px] w-[15px] mr-[4px] bg-[#5f3e59] opacity-[0.5] rounded-[50%] inline-block "></span>
                )}
                {nextPreState == 2 ? (
                  <span className="h-[15px] w-[15px] mr-[4px] bg-[#ebe2e9]  rounded-[50%] inline-block "></span>
                ) : (
                  <span className="h-[15px] w-[15px] mr-[4px] bg-[#5f3e59] opacity-[0.5] rounded-[50%] inline-block "></span>
                )}
                {nextPreState == 3 ? (
                  <span className="h-[15px] w-[15px] mr-[4px] bg-[#ebe2e9]  rounded-[50%] inline-block "></span>
                ) : (
                  <span className="h-[15px] w-[15px] mr-[4px] bg-[#5f3e59] opacity-[0.5] rounded-[50%] inline-block "></span>
                )}
              </div>
            </div>
            </div>
          
       </div>
       </div>
</div>
      
        <Footer/>
    </>
  )
}

export default Apply