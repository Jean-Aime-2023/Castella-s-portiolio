import React from 'react';
import log from '../assets/icons/image 8.png';
import image from '../assets/icons/Group 1191.png'

const WhoIamI = () => {
  return (
    <div className='mt-[10rem] text-white max-sm:px-[4rem] max-sm:text-center mb-5 sm:px-[5rem] xl:px-[16rem]'>
      <div className="relative">
        <div className='flex flex-col gap-8'>
          <section className='prehvihear flex flex-col gap-3'>
            <h1 className='tracking-wider text-4xl font-bold max-sm:text-3xl'>I'm a Software Engineer.| </h1>
            <p className='flex gap-3 flex-row max-sm:flex-col'>
              Currently, I'm a Software Engineer at 
              <section className='flex flex-row gap-4'><img src={log} alt="/" className='max-sm:hidden' />{' '}
              <span className='text-[#1877F2]'>Rwanda Coding Academy</span></section>
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

        <div className='absolute right-0 lg:top-[-10rem]'>
          <img src={image} alt="/" />  
        </div>
      </div>
    </div>
  );
};

export default WhoIamI;
