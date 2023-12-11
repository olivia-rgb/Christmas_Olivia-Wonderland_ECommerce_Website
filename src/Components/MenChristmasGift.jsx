
import React from 'react';
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.jpg'
import men3 from '../assets/men3.jpg'
import men4 from '../assets/men4.jpg'
import bg from '../assets/christmasbg.jpg'
import { Link } from 'react-router-dom';


const MenChristmasGift = () => {
  const giftsForMen = [
    {
      id: 1,
      title: ' Fngeen Classic Watch',
      description: 'A timeless piece for the modern man.',
      price: '#4,880',
      image: men4,
    },
    {
      id: 2,
      title: 'Leather Wallet',
      description: 'Men Leather Portable Short Wallet- Dark Brown',
      price: '#7,000',
      image: men2,
    },
    {
      id: 3,
      title: 'Grooming Kit',
      description: 'Keep him looking sharp with this kit.',
      price: '#4,300',
      image: men3,
    },
    {
      id: 4,
      title: 'Bluetooth Headphones',
      description: ' Wireless Foldable Bluetooth Headphone.',
      price: '#4,880',
      image: men1,
    },
  ];

  return (
    <div className='w-full mt-5 ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: 'full' }}>
      <div className="border-8 border-[#eed688] mx-auto md:max-w-[960px] p-4 bg-white">
        <h1 className="text-3xl font-bold mb-8">For Men</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-md">
          {giftsForMen.map((gift) => (
            <div key={gift.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={gift.image} alt={gift.title} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-lg font-semibold mb-2">{gift.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{gift.description}</p>
              <p className="text-lg font-bold text-red-950">{gift.price}</p>
            </div>
          ))}
          
        </div>
        <div className="text-center mt-5 mx-auto ">
          <Link to="/men" className="text-white  bg-red-500 font-bold rounded-lg  px-4 py-2 "> See More
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenChristmasGift;