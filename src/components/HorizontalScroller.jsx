import { motion } from 'framer-motion';
import { useRef, useLayoutEffect, useState } from 'react';
import bgImg from '../assets/images/Background.png'
import img1 from '../assets/images/w1.png'
import img2 from '../assets/images/w2.png'
import img3 from '../assets/images/w3.png'

const image1 = img1;
const image2 = img2;
const image3 = img3;

const images = [image1, image2, image3, image1, image2, image3]; // Repeat images for infinite scrolling
const texts = ["Designs", "UI Designs", "Mockups", "Designs", "UI Designs", "Mockups"]; // Repeat texts accordingly

const HorizontalScroller = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useLayoutEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <div id='work' className='carouselDiv my-48 relative'>
            <motion.div
                animate={{ y: [-40, 0, -40] }}
                transition={{
                    values: [0, 1, 0],
                    duration: 2,
                    repeat: Infinity,
                    type: "keyframes",
                    ease: "easeInOut"
                }}
                className='absolute -z-10 top-[-10rem] w-full flex items-center justify-center self-center'>
                <img src={bgImg} alt="" className='w-[65%]' />
            </motion.div>
            <motion.div className='carousel' ref={carousel} whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {images.map((image, index) => (
                        <motion.div key={index} className='bg-white/50 item rounded-3xl relative'>
                            <img src={image} alt="" className='w-full h-full object-contain pb-5' />
                            <div className='pt-[-3rem] absolute bottom-0 left-0 rounded-br-3xl rounded-bl-3xl flex justify-center items-center w-full py-4 text-center bg-black/35 text-white text-xl font-bold'>
                                <span>{texts[index]}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HorizontalScroller;
