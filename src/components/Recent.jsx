import React from 'react';
import image1 from '../assets/images/Card (1).png';
import image2 from '../assets/images/Card.png';
import image3 from '../assets/images/cards.png';
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import CenterMode from './CenteredMode';

const RecentWork = [
  {
    id: 1,
    image: image1,
    title: 'Designs',
  },
  {
    id: 2,
    image: image2,
    title: 'UI Designs',
  },
  {
    id: 3,
    image: image3,
    title: 'Mockups',
  },
];

// const RecentWorkCard = ({ image, title }) => (
//   <div class="relative inline-block">
//   <img src={image} alt="/" className="w-full h-full" />
//   <div class="absolute top-[19.5rem] inset-0 flex items-center justify-center bg-black bg-opacity-50 h-[3rem] rounded-b-[1.8rem]">
//     <h2 class="text-white text-3xl">{title}</h2>
//   </div>
// </div>

// );

const RecentWorkSection = () => (
  <div className=''>
      <div className='text-white'>jsdjkhkjsah</div>
      <CenterMode/>
  </div>
);

export default RecentWorkSection;