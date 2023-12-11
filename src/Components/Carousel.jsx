import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import xmas1 from '../assets/xmas1.jpg';
import xmas2 from '../assets/xmas2.jpg';
import xmas3 from '../assets/xmas3.jpg';
import xmas4 from '../assets/xmas4.jpg';
import xmas5 from '../assets/xmas5.jpg';
import xmas6 from '../assets/xmas6.jpg';
import xmas7 from '../assets/xmas7.jpg';
import xmas9 from '../assets/xmas9.jpg';
import xmas10 from '../assets/xmas10.jpg';
import bg from '../assets/christmasbg.jpg';
import MenChristmasGift from './MenChristmasGift';

const images = [xmas1, xmas2, xmas3,xmas4,xmas5,xmas6,xmas7,xmas9,xmas10];

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Carousel = () => {
  return (
    <div className=' w-full ' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
        <div className="mx-auto md:max-w-[960px] bg-red-950 shadow-lg  overflow-hidden mt-10 mb-0 ">
                <h1 className='text-center text-white text-sm md:text-4xl  font-bold pb-2 '>We've Got You Covered.</h1>
            <Slider {...settings}>
                {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Christmas ${index + 1}`} className="w-full h-[300px] border-8 border-[#eed688]  object-cover" />
                </div>
                ))}  
            </Slider>
            
            
            </div>

    </div>
    
  );
};

export default Carousel;
