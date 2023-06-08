import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.jpg'
import "../App.css";
import BgVideo from '../assets/bgVideos/video1.mp4'

const RegisteredDegrees = () => {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen py-8 ">
   <video className="mint-video-bg" src={BgVideo} autoPlay muted loop/>

   <div className="  min-h-screen py-20 ">
   <div className="border  bg-black  bg-opacity-80  border-[#3D2638] mx-8 md:mx-12 lg:mx-20 mb-20 mt-10 rounded-3xl">
          <div className="flex justify-center mb-2">
        <div className="bg-[#3D2638] border-2 border-[#3D2638]  text-white text-2xl font-semibold tracking-wide pt-4 pb-3 px-12 rounded-full -mt-8 mb-8">
              Verified 
            </div>

          </div>
        <div className="justify-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-44 gap-y-8 mx-10 mt-8 pb-16">
        <div className="rounded-xl w-[270px] bg-[#15161B] p-4">
        <div className="flex overflow-hidden">
        <img
                  className="hover:scale-110 h-[220px] cursor-pointer w-full "
                  // src={item.image}
                  src={pic1}
                  // src={`https://gateway.moralisipfs.com/ipfs/${item.image}`}
                />
</div>
<div className="text-white flex justify-between">
<p className="font-bold">Name</p>

                <p className="font-bold">Muhammad Ali</p>
              </div>
              <div className="text-white flex justify-between">
              <p className="font-bold">Seriel No</p>
                <p className="font-bold">RQ1356290ZRT</p>
              </div>
</div>

<div className="rounded-xl w-[270px] bg-[#15161B] p-4">
        <div className="flex overflow-hidden">
        <img
                  className="hover:scale-110 h-[220px] cursor-pointer w-full "
                  // src={item.image}
                  src={pic2}
                  // src={`https://gateway.moralisipfs.com/ipfs/${item.image}`}
                />
</div>
<div className="text-white flex justify-between">
<p className="font-bold">Name</p>

                <p className="font-bold">Muhammad Ali</p>
              </div>
              <div className="text-white flex justify-between">
              <p className="font-bold">Seriel No</p>
                <p className="font-bold">RQ1356290ZRT</p>
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

export default RegisteredDegrees