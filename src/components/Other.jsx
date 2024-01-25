import React from 'react';
import Carousel from 'react-spring-3d-carousel';

const slides = [
  {
    key: 1,
    content: <img src="https://picsum.photos/800/800/?random" alt="1" />
  },
  {
    key: 2,
    content: <img src="https://picsum.photos/800/800/?random" alt="2" />
  },
  {
    key: 3,
    content: <img src="https://picsum.photos/600/800/?random" alt="3" />
  },
  {
    key: 4,
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: 5,
    content: <img src="https://picsum.photos/800/800/?random" alt="5" />
  },
  {
    key: 6,
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: 7,
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: 8,
    content: <img src="https://picsum.photos/800/800/?random" alt="8" />
  }
];

const settings = {
  width: 800,
  height: 800,
  background: '#fff',
  slideShow: false,
  centered: true,
  responsive: false,
  plugins: [
    'arrows',
    'infinite',
    'centered'
  ]
};

const Other = () => {
  return (
    <div className='flex px-5 py-10'>
      <Carousel slides={slides} config={settings} />
    </div>
  );
};

export default Other;
