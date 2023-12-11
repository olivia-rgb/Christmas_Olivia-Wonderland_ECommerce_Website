
import React from 'react';
import women1 from '../assets/women1.jpg'
import women2 from '../assets/women2.jpg'
import women3 from '../assets/women3.jpg'
import women4 from '../assets/women4.jpg'
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Women = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/1387525708/photo/beautiful-woman-drinking-hot-tea-wrapped-in-blanket.webp?b=1&s=170667a&w=0&k=20&c=GTcNI3A9kfHkssZ1i2-JK1JRBfkr2NlEi4oxxMMaHCo=',
            title: 'Cozy Blanket',
            price: '$39.99',
        },
        {
          id: 2,
          image: 'https://media.istockphoto.com/id/1176171347/photo/scented-candle-burning-on-sofa-table.jpg?s=612x612&w=0&k=20&c=EKovDu5UHUp0A4tLFHPzaCG5Z-N5_BtNo7EITZ0wgGI=',
          title: 'Scented Candles Set',
          price: '$29.99',
        },
        {
          id: 3,
          image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjAlpou-vyCJu9e7BIPoyrifgB8KvWpRs_1S2eG8nxOjdFTaR3ychcNppr',
          title: 'Jewelry Box',
          price: '$49.99',
        },
        {
          id: 4,
          image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQV3lIYNuJmYGBbBqjeipeQzmq1Fn7UpYBmnxMNZ56hLw0FPjQiBrfdRjQ',
          title: 'Spa Gift Basket',
          price: '$59.99',
        },
        {
          id: 5,
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMXhVk9oeiAgFRrRTyLFwih07qVK0YCM7e9oFS-3mqWXkh83UkWDwH75w',
          title: 'Personalized Mug',
          price: '$14.99',
        },
        {
          id: 6,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dERdotYhuL3N_5eMqKqRGC9sT4BX7S3OLBREEcN7be7Eq4h_eInqViT8',
          title: 'Fitness Tracker',
          price: '$79.99',
        },
        {
          id: 7,
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtNJylqXWJ3uLd6OucIJY19OMJbD0scWu_3bNft7SpiRtedew1KwOi4n8',
          title: 'Elegant Scarf',
          price: '$24.99',
        },
        {
          id: 8,
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8luRt0nZLvhOpfB4BCZOPXR65poIL2dqkV3NLH5hIfiiHFAAv_qvf7Rcw',
          title: 'Cookbook Collection',
          price: '$44.99',
        },
        {
          id: 9,
          title: 'Fashion Handbag',
          description: 'Elegant and stylish, a perfect accessory.',
          price: '$79.99',
          image: women1,
        },
        {
          id: 10,
          title: 'Cozy Scarf',
          description: 'Stay warm and fashionable with this scarf.',
          price: '$29.99',
          image: women2,
        },
        {
          id: 11,
          title: 'Jewelry Set',
          description: 'A stunning set to complement any outfit.',
          price: '$89.99',
          image:women3,
        },
        {
          id: 12,
          title: 'Perfume Collection',
          description: 'Indulge in a variety of delightful scents.',
          price: '$49.99',
          image: women4,
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO WOMEN WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Women;