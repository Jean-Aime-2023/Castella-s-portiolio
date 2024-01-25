import React from 'react';
import Experience from '../data/Experience';

const Work = () => {
  return (
    <div className="mt-[20rem] text-white px-[20rem] max-xl:px-[10rem] max-md:px-[2rem] flex flex-col gap-12 max-md:mt-[30rem] max-sm:mt-[45rem]">
      <div>
        <h2 className='prehvihear max-md:text-3xl sm:text-4xl'>Work Experience</h2>
      </div>

      <div className=" poppins grid grid-cols-2 max-lg:grid-cols-1 gap-10 place-content-center">
        {Experience.map((item) => (
          <div
            key={item.id}
            className="flex flex-row gap-5 items-center bg-[#693B93] max-md:w-full workbox hover:scale-105 cursor-pointer hover:ease-in-out hover:duration-200 px-[3rem] py-[2rem]"
          >
            <div className=' object-contain'>
              <img src={item.image} alt={item.title} className=' h-[90%] w-full' />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className=" font-bold uppercase text-3xl max-md:text-2xl">{item.title}</h2>
              <p className=" text-[12px]">{item.text}</p>   
              <button className='btn3 px-4 py-2 rounded-xl w-[10rem] mt-4'>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
