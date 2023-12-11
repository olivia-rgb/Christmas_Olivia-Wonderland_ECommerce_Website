import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import bg from '../assets/christmasbg.jpg';
import Carousel from './Carousel';
import MenChristmasGift from './MenChristmasGift';
import { WomenChristmasGifts, KidsChristmasGifts } from './WomenChristmasGifts';
import BrandPromotion from './BrandPromotion';
import Footer from './Footer';

function App() {
  return (
    <div className='w-full h-screen  bg-cover' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
        <Navbar />
        <Header  /> 
        <Carousel />
        <MenChristmasGift />
        <WomenChristmasGifts /> 
        <KidsChristmasGifts />
        <BrandPromotion />
        <Footer />
        
    </div>
  );
}

export default App;
