import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import planet from '../assets/icons/Illustration.png'
import Ig from '../assets/icons/Instagram.png'
import twitter from '../assets/icons/Twitter.png'
import linkedIn from '../assets/icons/Linkedin.png'
import fb from '../assets/icons/Facebook.png'
import youtube from '../assets/icons/YouTube.png'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div id='footer' className='relative flex flex-col gap-[4rem] text-white mt-[20rem] items-center px-[30rem] pt-[10rem] pb-[2rem] max-lg:px-[10rem] max-md:px-[3rem] max-lg:text-xs poppins w-screen bg-[#693B93]'>
        
        <motion.div animate={{ y: [-40, 0, -40] }}
  transition={{
    values: [0, 1, 0],  // Updated to use values instead of times
    duration:2,
    repeat: Infinity,
    type: "keyframes",
    ease: "easeInOut"
  }} className='absolute top-[-12rem] left-0'><img src={planet} alt="" /></motion.div>
        <div className='flex flex-row max-md:flex-col gap-[4rem]'>
                <section className='flex flex-row gap-[1rem] items-center'>
                    <CiHome size={15} />
                    <p>Home</p>
                </section>
                <section className='flex flex-row gap-[1rem] items-center'>
                    <IoPersonOutline size={15} />
                    <p>About Me</p>
                </section>
                <section className='flex flex-row gap-[1rem] items-center'>
                    <IoBag size={15} />
                    <p>Work</p>
                </section>
                <section className='flex flex-row gap-[1rem] items-center'>
                    <FaPhone size={15} />
                    <p>Contact</p>
                </section>
        </div>

        <div className='flex flex-row gap-[1rem]'>
            <div><img src={Ig} alt="/" className='w-[40px] h-[40px]' /></div>
            <div><img src={twitter} alt="/" className='w-[40px] h-[40px]' /></div>
            <div><img src={linkedIn} alt="/" className='w-[40px] h-[40px]' /></div>
            <div><img src={fb} alt="/" className='w-[40px] h-[40px]' /></div>
            <div><img src={youtube} alt="/" className='w-[40px] h-[40px]' /></div>
        </div>

        <hr className='w-[90rem] border-1 px-[10rem] bg-slate-400' />
     
        <section>
            <p className='text-xs'>Terms of Service - Privacy Policy</p>
        </section>

    </div>
  )
}

export default Footer