// import React from 'react'


// const Navbar = () => {
//   return (
//     <div className='fixed w-screen items-center px-[30rem] align-middle top-10'>
//         <ul className='max-md:hidden flex flex-row justify-between poppins text-white'>
//             <li className='cursor-pointer'>Home</li>
//             <li className='cursor-pointer'>About me</li>
//             <li className='cursor-pointer'><img src={letterE} alt="/" /></li>
//             <li className='cursor-pointer'>Work</li>
//             <li className='cursor-pointer'>Contact</li>
//         </ul>




//         {/* <div className='fixed max-md:block'>
//             <li className='cursor-pointer'><img src={letterE} alt="/" /></li>
//             <ul className='flex flex-col gap-5 justify-between poppins text-white'>
//                 <li className='cursor-pointer'>Home</li>
//                 <li className='cursor-pointer'>About me</li>
//                 <li className='cursor-pointer'>Work</li>
//                 <li className='cursor-pointer'>Contact</li>
//             </ul> 
//         </div>  */}
        
//     </div>
//   )
// }

// export default Navbar

// import React, { useState } from 'react';
// import { IoSearch } from 'react-icons/io5';
// import { TbMenuDeep } from "react-icons/tb";
// import { IoMdClose } from "react-icons/io";
// import letterE from '../assets/icons/Logo name.png'

import React, { useState,useEffect } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import letterE from '../assets/icons/Logo name.png'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav =()=>{
        setNav(!nav);
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
  return (
    <header className={`py-4 top-0 2xl:px-32 xl:px-14 lg:px-7 fixed z-40 w-full max-lg:px-7 text-white ${scrolled ? 'bg-[#1c0f2c]' : ''}`}>
      <nav className="flex justify-center items-center">
        <div className='flex flex-row'>
        <ul className="flex flex-1 items-center 2xl:gap-[10rem] xl:gap-14 lg:gap-7 max-lg:hidden xl:text-[16px] font-bold tracking-widest lg:text-[12px] poppins">
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About me</li>
          <li className='cursor-pointer'><img src={letterE} alt="Logo" /></li>
          <li className='cursor-pointer'>Work</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
        </div>

        <div className='hidden max-lg:block cursor-pointer' onClick={handleNav}>
          <div className='flex flex-row w-screen px-10 justify-between'>
          <img src={letterE} alt="Logo" />  
          {!nav ? <TbMenuDeep size={40} color='purple' /> : <IoMdClose size={40} color='purple' />}
          </div>
        </div>

        <div className={nav ? ' bg-purple-900 h-screen shadow-xl w-[60%] absolute top-0 left-0 px-10 py-14 ease-in-out duration-300 z-50' : 'hidden ease-in-out duration-150'}>
            <a href="/">
            <img src={letterE} alt="Logo" width={100} height={20} />
            </a>
            <ul className="flex flex-col text-white p-12 ease-in-out duration-300 gap-8 poppins">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About me</li>
            <li className='cursor-pointer'>Work</li>
            <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
