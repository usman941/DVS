
import React, { useContext, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import metaLogo from '../assets/metamask.png';
import Logo from '../assets/hec_pic2.png';
import {BiLogIn} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc'
import {GrContact,GrStatusInfo,GrDocumentUpdate} from 'react-icons/gr'
import {RiRegisteredLine} from 'react-icons/ri'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Apply from '../pages/Apply';

const Navbar = () => {
const {connectWallet}=useContext(AuthContext);
const {address,setToken}=useContext(AuthContext);
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
    const navigate=useNavigate();
    const logout=()=>{
        setToken({status:false});
        localStorage.removeItem('AuthToken');
          navigate('/login');
      }
  return (
    <>
        <div className=' w-full  h-[70px]   bg-[#f8eded]  text-black  border-b-2 border-[#3D2638] ' >
        <div className='w-full  flex  lg:flex-row md:flex-col  mx-auto px-4 justify-between  items-center h-full z-50'>
        <div className='' ><a href='https://www.hec.gov.pk/english/Pages/default.aspx'><img src={Logo}  className='w-14 h-14 hover:bg-white  '/></a></div>
        
        <div className='hidden md:flex z-50 '>
        <ul className='flex md:my-3 md:justify-evenly md:items-center md:flex-wrap text-black text-center'>
        <li className='px-3  inline-flex items-center hover:text-[#48A4EF] '><Link to='/'> <AiFillHome className=' text-xl inline-flex mx-1 items-center '/>Home</Link></li>
        {/* <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]'  ><Link to='/about'><FcAbout className='text-xl inline-flex mx-1 items-center' /> About us</Link></li> */}

        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]'  > <GrDocumentUpdate className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]' /><Link to='/apply'>Apply</Link></li>
        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]'  ><RiRegisteredLine className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]'/> <Link to='/registeredDegrees'>Registered degrees</Link></li>

        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]' onClick={connectWallet} ><img src={metaLogo} className='w-4 h-4 mr-1 hover:text-[#48A4EF]'/>{address?'Connected':'Connect with Metamask'}</li>
        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]'  ><GrContact className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]' /><Link to='/contact'> Contact us</Link></li>
        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-[#48A4EF]'  ><GrStatusInfo className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]' /><Link to='/status'> Status</Link></li>


</ul>
</div>
<div className='hidden md:block text-black cursor-pointer hover:text-[#48A4EF]'  onClick={logout}> <BiLogIn className=' text-xl inline-flex'/>  Log Out </div>

<div onClick={handleNav} className='block md:hidden '>
                {nav? <AiOutlineClose size={30} className='text-black bg-[#FDFDFD]    '/>:<AiOutlineMenu size={30} className=' text-black '/>}
            </div>
            {/* mobile view  */}
            <div className={nav? 'md:hidden w-full z-50 top-[32px] text-black left-0 absolute flex flex-row  items-center  mt-8 bg-[#f1e1cc] left':' hidden'}>
            <ul>
            <li className='pt-3'></li>
            <li className='px-2   items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/'> <AiFillHome className=' text-xl inline-flex mr-2 hover:text-[#48A4EF]'/>Home</Link></a></li>
            {/* <li className='px-2 pt-3  items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/about'> <FcAbout className=' text-xl inline-flex mr-2 hover:text-[#48A4EF]'/>About us</Link></a></li> */}
            <li className='px-2 pt-3  items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/apply'> <GrDocumentUpdate className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]' />Apply</Link></a></li>
            <li className='px-2 pt-3  items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/registeredDegrees'> <RiRegisteredLine className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]'/>Registered degrees</Link></a></li>
            <li className='px-2 pt-3  items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/status'><GrStatusInfo className='text-xl inline-flex mx-1 items-center hover:text-[#48A4EF]' />Status</Link></a></li>

            <li  className='px-2 pt-3 items-center text-sm cursor-pointer hover:text-[#48A4EF]' onClick={connectWallet} ><img src={metaLogo} className='w-4 inline-flex h-4 mr-2'/>{address?'Connected':'Connect with Metamask'}</li>
            <li className='px-2 pt-3  items-center  hover:text-[#48A4EF]'><a href="#"><Link to='/contact'> <GrContact className=' text-xl inline-flex mr-2 hover:text-[#48A4EF]'/>Contact us</Link></a></li>

            <li  className=' pt-3 pb-3 items-center text-sm cursor-pointer hover:text-[#48A4EF]' onClick={logout} ><BiLogIn className=' text-xl inline-flex'/>  Log Out </li>

            </ul>
</div>
    </div>
    </div>
    </>
  )
}

export default Navbar