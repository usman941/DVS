
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import mthical from '../assets/hec_pic2.png';
import thirdindlogo from '../assets/hec_pic.jpg';
import {GoLocation} from 'react-icons/go';



const Footer = () => {


  return (
    <div className='bg-[#141414] w-full h-auto pb-16'>
        <div className='flex-col flex sm:flex-row md:flex-row lg:flex-row xl:flex-row  lg:justify-between md:justify-between xl:justify-between  '>
          <div className='inline-flex px-3 sm:lg:px-16 md:px-16 xl:px-16 lg:px-16 lg:pt-20 md:pt-20 pt-16 '>
            <img className='cursor-pointer h-28' src={mthical} />
            <img className='mx-8 cursor-pointer h-28' src={thirdindlogo} />
          </div>
          <div className=' text-white px-3 sm:lg:px-16 md:px-16 xl:px-16 lg:px-16 lg:pt-20 md:pt-20 pt-4'>
            <h2 className='  font-extrabold'>FACULTY AND RESEARCH</h2>
            <p className='cursor-pointer mt-1 underline'>Faculty</p>
            <p className='cursor-pointer mt-1 underline'>Chairs</p>
            <p className='cursor-pointer mt-1 underline'>Centers</p>
            <p className='cursor-pointer mt-1 underline'>Knowledge@HEC</p>

          </div>
          {/* <div className=' text-white px-3 sm:lg:px-16 md:px-16 xl:px-16 lg:px-16 lg:pt-20 md:pt-20 pt-4 '>
            <h2 className='  font-extrabold'>TERMS OF USE</h2>
            <p className='cursor-pointer mt-1 underline'>Mythical Games</p>
            <p className='cursor-pointer mt-1 underline'>Blankos Block Party</p>
          </div> */}
        </div>

        {/*  */}
        <div className='flex-col flex sm:flex-row md:flex-row lg:flex-row xl:flex-row  lg:justify-between md:justify-between xl:justify-between  '>
          <ul className=' px-3 sm:lg:px-16 md:px-16 xl:px-16 lg:px-16 lg:pt-20 md:pt-20 pt-4'>
          <li className='cursor-pointer '  ><h1 className="text-white text-xl font-semibold">Contact information</h1></li>
          <li className='cursor-pointer inline-flex '  ><GoLocation className='text-white mr-1'/></li>
          
          <li className='cursor-pointer inline-flex'  ><p className="text-white ">Head Office, Sector H-9, East Service Road, Islamabad</p></li>
          <li className='cursor-pointer '  ><p className="text-white  text-sm font-semibold">Phone: UAN: (051) 111-119-432</p></li>

            
          </ul>
          
          <div className='px-3 sm:lg:px-0 md:px-0 xl:px-0 lg:px-0 lg:pt-20 md:pt-20 pt-4 text-white pr-1 '>
           
            <p className='cursor-pointer mt-1  '><Link>Home</Link></p>
            <p className='cursor-pointer mt-1  '><Link to='/'> About us</Link><br></br> <span className=''><Link to='/contact'> Contact us</Link> </span> <br></br> <span className='underline'> © Copyrights HEC 2023</span></p>

          </div>
         
        </div>
   </div>
  )
}

export default Footer