import React from 'react';
import child1 from '../assets/child11.jpg'
import child2 from '../assets/child2.jpg'
import child3 from '../assets/child3.jpg'
import child4 from '../assets/child4.jpg'
import women1 from '../assets/women1.jpg'
import women2 from '../assets/women2.jpg'
import women3 from '../assets/women3.jpg'
import women4 from '../assets/women4.jpg'
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';

const WomenChristmasGifts = () => {
  const giftsForWomen = [
    {
      id: 1,
      title: 'Fashion Handbag',
      description: 'Elegant and stylish, a perfect accessory.',
      price: '$79.99',
      image: women1,
    },
    {
      id: 2,
      title: 'Cozy Scarf',
      description: 'Stay warm and fashionable with this scarf.',
      price: '$29.99',
      image: women2,
    },
    {
      id: 3,
      title: 'Jewelry Set',
      description: 'A stunning set to complement any outfit.',
      price: '$89.99',
      image:women3,
    },
    {
      id: 4,
      title: 'Perfume Collection',
      description: 'Indulge in a variety of delightful scents.',
      price: '$49.99',
      image: women4,
    },
  ];

  return (
    <div className='w-full  mt-5 ' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
            <div className="mx-auto md:max-w-[960px] bg-white p-4 border-8 border-[#eed688]">
            <h1 className="text-3xl font-bold mb-8">For Women</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {giftsForWomen.map((gift) => (
                <div key={gift.id} className="bg-white p-4 rounded-lg shadow-md">
                    <img src={gift.image} alt={gift.title} className="w-full h-40 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold mb-2">{gift.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{gift.description}</p>
                    <p className="text-lg font-bold text-pink-500">{gift.price}</p>
                </div>
                ))}
            </div>
            <div className="text-center mt-5 mx-auto ">
          <Link to="/women" className="text-white  bg-red-500 font-bold rounded-lg  px-4 py-2 "> See More
           
          </Link>
        </div>
            </div>
    </div>
  );
};

const KidsChristmasGifts = () => {
  const giftsForKids = [
    {
      id: 1,
      title: 'Plush Toy Set',
      description: 'Cuddly companions for endless playtime fun.',
      price: '$39.99',
      image:child1,
    },
    {
      id: 2,
      title: 'Interactive Learning Tablet',
      description: 'Educational and entertaining for young minds.',
      price: '$59.99',
      image:child2,
    },
    {
      id: 3,
      title: 'Superhero Costume Set',
      description: 'Let their imagination soar with this costume set.',
      price: '$29.99',
      image: child3,
    },
    {
      id: 4,
      title: 'Colorful Building Blocks',
      description: 'Hours of creative construction and play.',
      price: '$19.99',
      image: child4,
    },
  ];

  return (
    
<div className='w-full  mt-5 ' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
            <div className="container mx-auto md:max-w-[960px] bg-white  p-4 border-8 border-[#eed688]">
            <h1 className="text-3xl font-bold mb-8">For Kids</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {giftsForKids.map((gift) => (
                <div key={gift.id} className="bg-white p-4 rounded-lg shadow-md ">
                    <img src={gift.image} alt={gift.title} className="w-full h-40 object-cover mb-4" />
                    <h2 className="text-lg font-semibold mb-2">{gift.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{gift.description}</p>
                    <p className="text-lg font-bold text-red-950">{gift.price}</p>
                </div>
                ))}
            </div>
            <div className="text-center mt-5 mx-auto ">
          <Link to="/kids" className="text-white  bg-red-500 font-bold rounded-lg  px-4 py-2 "> See More
           
          </Link>
        </div>
            </div>
    </div>   
  );
};

export { WomenChristmasGifts, KidsChristmasGifts };
