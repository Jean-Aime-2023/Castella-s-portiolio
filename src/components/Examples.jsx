import React from 'react';
import image from '../assets/images/Portfolio.png';
import image2 from '../assets/images/Group 3443.png';

const Examples = () => {
  return (
    <div className="flex flex-col 2xl:px-[20rem] py-[10rem] gap-[20rem] max-md:py-[3rem] max-md:gap-[10rem] items-center max-2xl:px-[4rem] max-md: text-white poppins">
      <div className="flex flex-row max-lg:flex-col items-center">
        <div className="flex flex-col gap-8">
          <section>
            <p className="text-[#9857D3] text-[15px]">Featured Project</p>
            <p className="text-3xl text-[#CCD6F6]">Example Project</p>
          </section>

          <section className="blured p-7 rounded-xl md:mr-[-3rem] max-md:mb-[-3rem]">
            <p className="text-[15px] text-[#CCD6F6]">
              A web app for visualizing personalized Spotify data. View your{' '}
              <br className='max-md:hidden' />
              top artists, top tracks, recently played tracks, and detailed
              audio <br className='max-md:hidden'/>
              information about each track. Create and save new playlists of{' '}
              <br className='max-md:hidden'/>
              recommended tracks based on your existing playlists and more.
            </p>
          </section>
        </div>

        <div className="absolute blur2 right-[28rem] bottom-[45rem]"></div>

        <div>
          <img src={image2} alt="" className="w-[90%] max-xl:w-full max-xl:h-full" />
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col items-center">
        <div className="flex flex-col gap-8 order-2 max-md:order-1 text-end">
          <section>
            <p className="text-[#9857D3] text-[15px]">Featured Project</p>
            <p className="text-3xl text-[#CCD6F6]">Example Project</p>
          </section>

          <section className="blured p-7 rounded-xl md:ml-[-7rem] max-md:mb-[-3rem]">
            <p className="text-[15px] text-[#CCD6F6]">
              A web app for visualizing personalized Spotify data. View your{' '}
              <br className='max-md:hidden'/>
              top artists, top tracks, recently played tracks, and detailed
              audio <br className='max-md:hidden'/>
              information about each track. Create and save new playlists of{' '}
              <br className='max-md:hidden'/>
              recommended tracks based on your existing playlists and more.
            </p>
          </section>
        </div>

        <div className="absolute blur2 left-[10rem] bottom-[2rem]"></div>

        <div className='order-1 max-md:order-2'>
          <img src={image2} alt="" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Examples;
