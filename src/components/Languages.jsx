import React from 'react'
import group1 from '../assets/svg/Group 3439.svg'
import group2 from '../assets/svg/Group 3440.svg'

const Languages = () => {
  return (
    <div className='flex flex-col gap-[4rem] prehvihear text-white justify-center items-center text-center px-[20rem] py-[10rem] max-lg:px-[5rem]'>
        <div className='flex flex-col gap-6'>
            <h2 className='text-3xl max-sm:text-2xl'>I'm currently looking to join a<span className='text-[#A362FF]'>cross-functional </span> team</h2>
            <p className='max-sm:text-[12px]'>that values improving people's lives through accessible design </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div>
            <img src={group1} alt="Group 1" />
            </div>
            <div className='mt-[-7rem]'>
            <img src={group2} alt="Group 1" />
            </div>
        </div>
    </div>
  )
}

export default Languages