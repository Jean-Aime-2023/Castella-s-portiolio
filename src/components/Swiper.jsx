import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

import img1 from '../assets/images/Card.png';
import img2 from '../assets/images/Card (1).png';
import img3 from '../assets/images/cards.png';

const SwipperComponent =() => {
  return (
    <div className="container">
      <h1 className="heading">MY WORK</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container px-[10rem]"
      >
        <SwiperSlide className='w-[10rem]'>
          <img src={img1} alt="slide_image" className='w-10' />
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img2} alt="slide_image" className='w-10'/>
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img3} alt="slide_image" className='w-10'/>
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img1} alt="slide_image" className='w-10'/>
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img2} alt="slide_image" className='w-10'/>
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img3} alt="slide_image" className='w-10'/>
        </SwiperSlide>
        <SwiperSlide className='w-[10erem]'>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft/>
          </div>
          <div className="swiper-button-next slider-arrow">
          <FaArrowRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwipperComponent;