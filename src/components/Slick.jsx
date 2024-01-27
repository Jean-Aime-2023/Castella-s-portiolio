  import React from 'react';
  import Slider from 'react-slick';
  import bg from '../assets/images/Background.png';
  import img1 from '../assets/images/Card.png';
  import img2 from '../assets/images/Card (1).png';
  import img3 from '../assets/images/cards.png';

  export default function Slick() {
    var settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return (
      <>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <img src={bg} alt="/" className="w-[80%] px-[10rem]" />
        </div>

        <div className="block justify-center px-[10rem] h-full items-center">
          <Slider {...settings} className="py-[20rem] flex justify-center items-center ">
            <div className="relative mx-[2rem]">
              <div className="relative overflow-hidden project">
                <img
                  className="px-4 w-full h-full divs"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 w-[100%] bg-black bg-opacity-70 text-white p-4 box-border"
                  style={{ textAlign: 'center' }}
                >
                  <h2 className="m-0">Design</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-[2rem]">
              <div className="relative overflow-hidden project">
                <img
                  className="px-4 w-full h-full divs"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 w-[100%] bg-black bg-opacity-70 text-white p-4 box-border"
                  style={{ textAlign: 'center' }}
                >
                  <h2 className="m-0">Design</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-[2rem]">
              <div className="relative overflow-hidden project">
                <img
                  className="px-4 w-full h-full divs"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 w-[100%] bg-black bg-opacity-70 text-white p-4 box-border"
                  style={{ textAlign: 'center' }}
                >
                  <h2 className="m-0">Design</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-[2rem]">
              <div className="relative overflow-hidden project">
                <img
                  className="px-4 w-full h-full divs"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 w-[100%] bg-black bg-opacity-70 text-white p-4 box-border"
                  style={{ textAlign: 'center' }}
                >
                  <h2 className="m-0">Design</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-[2rem]">
              <div className="relative overflow-hidden project">
                <img
                  className="px-4 w-full h-full divs"
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 w-[100%] bg-black bg-opacity-70 text-white p-4 box-border"
                  style={{ textAlign: 'center' }}
                >
                  <h2 className="m-0">Design</h2>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
