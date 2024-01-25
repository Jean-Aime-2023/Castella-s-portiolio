import React from 'react';
import Slider from 'react-slick';
import Project from './Project';

import image1 from '../assets/images/Card (1).png';
import image2 from '../assets/images/Card.png';
import image3 from '../assets/images/cards.png';

const RecentWorks = [
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

var settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1, // Changed the slidesToScroll to 1 for better navigation
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, // Adjusted for better navigation on smaller screens
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderComp = () => {
  let sliderProject = RecentWorks.map((item, i) => <Project item={item} key={i} />);

  return <Slider {...settings}>{sliderProject}</Slider>;
};

export default SliderComp;
