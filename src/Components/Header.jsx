import React from 'react'
import fxmas from '../assets/xmas2.jpg'
import Carousel from './Carousel'

function Header() {
  return (
    <div div className=' pt-5 w-full mx-auto mb-5  text-white bg-center font-sans' >
        <div className='bg-red-950 mx-auto text-white p-4 md:max-w-[960px]' >
            <h1 className='font-bold text-4xl  text-center mb-10'> SEASON GREETINGS! MERRY XMAS!🎄✨<br/> WELCOME TO OLIVIA'S WONDERLAND🎅🎄✨ </h1>
            <div className='flex gap-5 flex-col md:flex-row items-center '>
                <div className='w-full md:w-8/12 mt-5 md:mt-0'>
                <img src={fxmas} className='w-full md:w-[900px] h-[300px] border-[#eed688] border-8 object-cover'  alt="" />
                </div>
                
                <p className='w-full md:w-6/12 text-sm md:text-base lg:text-lg xl:text-xl z-10 flex items-center font-semibold'>"Unwrap the magic of the season with us! 🎁 Discover the perfect gifts for your loved ones this Christmas at our E-commerce Wonderland. Your holiday shopping made easy – we've got you covered. Come and shop for Xmas joy today!</p>
            </div>
           

        </div>

    </div>
  )
}

export default Header