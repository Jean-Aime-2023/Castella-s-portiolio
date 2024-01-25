import React from 'react'
import profile from '../assets/images/OIP.jpeg'
import img from '../assets/images/Group 1185.png'

const Hero = () => {
  return (
    <div className='flex flex-row text-white mt-[12rem] 2xl:px-[28rem] gap-10 max-md:flex-col items-center justify-center max-md:items-center max-md:text-center max-md:px-[2rem] sm:px-[4rem] max-md:mt-[12rem]'>
        <div className='flex md:h-2/4 xl:w-2/5 max-md:w-full'>
            <div>
                {/* blur */}
                <img src={profile} alt="/" className='rounded-full sm:w-[90] md:ml-0 sm:ml-10 lg:w-[100%]' />
            </div>
        </div>
        <div className='flex md:h-2/4 max-md:w-full prehvihear max-md:justify-center'>
            <div className='flex flex-col gap-24'>
                <p className='text-lg'>Hello! I Am <span className='text-[#7127BA]'>Cinta Castella</span></p>
                <section className=' flex flex-col gap-4'>
                    <p className='text-lg'>A Designer who</p>
                    <h1 className='text-5xl'>Judges a book <br /> by its <span className='text-[#7127BA]'>cover</span>...</h1>
                    <p className='text-xs'>Because if the cover does not impress you what else can?</p>
                </section>
            </div>
        </div>

        <img src={img} alt="/" className=' z-[-1] xl:w-[318.37px] xl:h-[374px] absolute top-[-12rem] left-0 max-sm:hidden max-xl:w-[218.37px] max-xl:h-[274px] max-xl:left-[10rem]' />
    </div>
  )
}

export default Hero