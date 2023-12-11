
import React from 'react';
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.jpg'
import men3 from '../assets/men3.jpg'
import men4 from '../assets/men4.jpg'
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Men = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtqFec2zmkfkxsRyzjKeIuuKNeGhI1dhvYdXOQZyMHBnx-pl7tMZNMjz1m',
            title: 'Outdoor Adventure Backpack',
            price: '$59.99',
          },
          {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjulQ0g1fm0Kid5nNdozndP66Z0bwJ8CLRPS2aLFJ40huzDN8KbKO_Ea4',
            title: 'Tech Gadgets Set',
            price: '$79.99',
          },
          {
            id: 3,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQci48K4b0rBPt9UDVC3yMpzTRdI9_Zx2FmK8gTdYPfd5cR_0I5isZX55Y',
            title: 'Sports Gear Bundle',
            price: '$69.99',
          },
          {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXb37zTTS_M8tBB2wkeo_6g4h2WB3cYC3VB7ZXCNhWz_lQvHW7tZ2tBS_',
            title: 'Leather Messenger Bag',
            price: '$89.99',
          },
          {
            id: 5,
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThLEkWTqxFGqE27zGa8IMor8SkuoiSobyUndrRCAGOs9k2fZ6rNYIYpRyh',
            title: 'Wireless Headphones',
            price: '$99.99',
          },
          {
            id: 6,
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8E5bKcioB5nvLh_oPB5ryrUDciKYb5mbwdCkiivb81z9FzanNHDguXAY',
            title: 'Portable Grill Set',
            price: '$49.99',
          },
          {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPf6DPqPtrteMIedwpOVf5M-7sjAzNBBR-iprsKWYfT0Qx_TWkk4ZeE58',
            title: 'Smart Home Devices Kit',
            price: '$129.99',
          },
          {
            id: 8,
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_ISTbKhqEuO6zdNZmZNLMmArxFWMP-Tat-r4PAQ40LpneteD7gX6m4FpE',
            title: 'Vintage Style Watch',
            price: '$79.99',
          },
          {
          id: 9,
      title: ' Fngeen Classic Watch',
      description: 'A timeless piece for the modern man.',
      price: '#4,880',
      image: men4,
    },
    {
      id: 10,
      title: 'Leather Wallet',
      description: 'Men Leather Portable Short Wallet- Dark Brown',
      price: '#7,000',
      image: men2,
    },
    {
      id: 11,
      title: 'Grooming Kit',
      description: 'Keep him looking sharp with this kit.',
      price: '#4,300',
      image: men3,
    },
    {
      id: 12,
      title: 'Bluetooth Headphones',
      description: ' Wireless Foldable Bluetooth Headphone.',
      price: '#4,880',
      image: men1,
    },
        
      ];


const GiftItem = ({ image, title, price }) => (
    <div className="gift-item">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 " />
      <h3 className="gift-title">{title}</h3>
      <p className="gift-price">{price}</p>
    </div>
  );

  return (
    <div className='w-full mt-5' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: 'full' }}>
      <div className="flex items-start mb-4 ml-4 mx-auto md:max-w-[960px]">
        <Link to="/" className="bg-red-500  font-bold text-white px-4 py-2 rounded-md">
          Go to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO MEN WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Men;