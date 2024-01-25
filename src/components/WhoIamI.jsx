import React from 'react';
import log from '../assets/icons/image 8.png';
import image from '../assets/icons/Group 1191.png'
import {motion} from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const WhoIamI = () => {
  return (
    <div className='mt-[20rem] max-sm:mt-[14rem] text-white max-sm:px-[4rem] max-sm:text-center xl:px-[12rem] max-xl:px-[6rem] '>
      <div className="flex flex-row gap-5 items-center max-md:flex-col max-md:gap-10">
        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" className='flex flex-col gap-8 max-lg:w-2/4 max-md:w-full'>
          <section className='prehvihear flex flex-col gap-3'>
            <h1 className='tracking-wider text-4xl font-bold max-sm:text-3xl'>I'm a Software Engineer.| </h1>
            <p className='flex gap-3 flex-row max-lg:flex-col'>
              Currently, I'm a Software Engineer at 
              <span className='flex flex-row gap-4'><img src={log} alt="/" className='max-sm:hidden' />{' '}
              <span className='text-[#1877F2]'>Rwanda Coding Academy</span></span>
            </p>
          </section>
          <section className='prehvihear'>
            <p>
              Embarking on a dynamic design journey, I studied UI/UX at Rwanda
              Coding <br /> Academy and have thrived as a freelancer for over 3 years.
              Crafting digital <br /> experiences that strike a perfect balance between
              user needs and business goals <br /> is my forte. Join me in the world
              where pixels tell stories, and design is an art of <br /> leaving lasting
              impressions!
            </p>
          </section>
          <div className='flex flex-row gap-5 max-sm:justify-center'>
            <button className="btn1 px-6 py-3 max-sm:px-3 max-sm:text-lg poppins">Hire me</button>
            <button className="btn2 px-6 py-3 max-sm:px-3 max-sm:text-lg poppins">Download CV</button>
          </div>
        </div>

        <motion.div animate={{ y: [-40, 0, -40] }}
  transition={{
    values: [0, 1, 0],  // Updated to use values instead of times
    duration: 2,
    repeat: Infinity,
    type: "keyframes",
    ease: "easeInOut"
  }} className='flex mt-[10rem] max-lg:w-2/4 blur1 max-md:w-screen max-md:mt-[60rem]'>
          <img src={image} alt="/" className='max-md:w-full' />  
        </motion.div>
      </div>
    </div>
  );
};

export default WhoIamI;
