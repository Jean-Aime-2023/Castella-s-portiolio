import React from 'react';
import image from '../assets/images/Portfolio.png';
import image2 from '../assets/images/Group 3443.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 800, 
  easing: 'ease',
});

const Examples = () => {
  return (
    <div id='examples' className="flex flex-col 2xl:px-[20rem] py-[10rem] gap-[20rem] max-md:py-[3rem] max-md:gap-[10rem] items-center max-2xl:px-[4rem] max-md: text-white poppins">
      <div className="flex flex-row max-lg:flex-col items-center">
        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" className="flex flex-col gap-8">
          <section>
            <p className="text-[#9857D3] text-[15px]">Featured Project</p>
            <p className="text-3xl text-[#CCD6F6]">Example Project</p>
          </section>

          <section className="blured p-7 rounded-xl md:mr-[-3rem] max-md:mb-[-3rem]">
            <p className="text-[15px] text-[#CCD6F6]">
              A web app for visualizing personalized Spotify data. View your{' '}
              <br className="max-md:hidden" />
              top artists, top tracks, recently played tracks, and detailed
              audio <br className="max-md:hidden" />
              information about each track. Create and save new playlists of{' '}
              <br className="max-md:hidden" />
              recommended tracks based on your existing playlists and more.
            </p>
          </section>

          <div className="flex flex-row gap-[1rem] justify-start px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <mask
                id="mask0_1106_1434"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <path
                  d="M15.5 2.58337V7.75004"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2083 14.2084L27.1249 16.7917L23.2499 19.375L27.1249 23.25L23.2499 27.125L19.3749 23.25L16.7916 27.125L14.2083 14.2084Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6333 6.3667L20.9798 10.0202M6.36654 24.6334L10.02 20.98M2.58325 15.5001H7.74992M6.36654 6.3667L10.02 10.0202"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_1106_1434)">
                <path d="M0 0H31V31H0V0Z" fill="white" />
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <mask
                id="mask0_1106_1434"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <path
                  d="M15.5 2.58337V7.75004"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2083 14.2084L27.1249 16.7917L23.2499 19.375L27.1249 23.25L23.2499 27.125L19.3749 23.25L16.7916 27.125L14.2083 14.2084Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6333 6.3667L20.9798 10.0202M6.36654 24.6334L10.02 20.98M2.58325 15.5001H7.74992M6.36654 6.3667L10.02 10.0202"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_1106_1434)">
                <path d="M0 0H31V31H0V0Z" fill="white" />
              </g>
            </svg>
          </div>
        </div>

        <div className="absolute blur2 right-[28rem] bottom-[90em]"></div>

        <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="50">
          <img
            src={image2}
            alt=""
            className="w-[90%] max-xl:w-full max-xl:h-full"
          />
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col items-center">
        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" className="flex flex-col gap-8 order-2 max-md:order-1 text-end">
          <section>
            <p className="text-[#9857D3] text-[15px]">Featured Project</p>
            <p className="text-3xl text-[#CCD6F6]">Example Project</p>
          </section>

          <section className="blured p-7 rounded-xl md:ml-[-7rem] max-md:mb-[-3rem]">
            <p className="text-[15px] text-[#CCD6F6]">
              A web app for visualizing personalized Spotify data. View your{' '}
              <br className="max-md:hidden" />
              top artists, top tracks, recently played tracks, and detailed
              audio <br className="max-md:hidden" />
              information about each track. Create and save new playlists of{' '}
              <br className="max-md:hidden" />
              recommended tracks based on your existing playlists and more.
            </p>
          </section>

          <div className="flex flex-row gap-[1rem] justify-end px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <mask
                id="mask0_1106_1434"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <path
                  d="M15.5 2.58337V7.75004"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2083 14.2084L27.1249 16.7917L23.2499 19.375L27.1249 23.25L23.2499 27.125L19.3749 23.25L16.7916 27.125L14.2083 14.2084Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6333 6.3667L20.9798 10.0202M6.36654 24.6334L10.02 20.98M2.58325 15.5001H7.74992M6.36654 6.3667L10.02 10.0202"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_1106_1434)">
                <path d="M0 0H31V31H0V0Z" fill="white" />
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <mask
                id="mask0_1106_1434"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <path
                  d="M15.5 2.58337V7.75004"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2083 14.2084L27.1249 16.7917L23.2499 19.375L27.1249 23.25L23.2499 27.125L19.3749 23.25L16.7916 27.125L14.2083 14.2084Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6333 6.3667L20.9798 10.0202M6.36654 24.6334L10.02 20.98M2.58325 15.5001H7.74992M6.36654 6.3667L10.02 10.0202"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_1106_1434)">
                <path d="M0 0H31V31H0V0Z" fill="white" />
              </g>
            </svg>
          </div>
        </div>

        <div className="absolute blur2 left-[10rem] bottom-[50rem]"></div>

        <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" className="order-1 max-md:order-2">
          <img src={image} alt="" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Examples;
