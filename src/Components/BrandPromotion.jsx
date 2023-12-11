import React from 'react';
import bg from '../assets/christmasbg.jpg';


const BrandPromotion = () => {
  return (
    <div className='w-full  mt-5 ' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
        <div className="  md:max-w-[960px] bg-red-950 mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Olivia Wonderland🎅🎄✨</h1>
      <p className=" text-lg mb-6">
        Explore the enchantment of Olivia Wonderland, where magic meets elegance. Discover a world of extraordinary Christmas gifts crafted with love and care. Our curated collection is designed to bring joy and wonder to your holiday season.
      </p>
      <p className=" text-lg font-bold">
        🎄 Special Christmas Offer: Enjoy discounts on most of our products! 🎁 Hurry, and make your holiday shopping magical with Olivia Wonderland. Your one-stop shop for the best Christmas sales!
      </p>
    </div>
   
    </div>
    
  );
};

export default BrandPromotion;
