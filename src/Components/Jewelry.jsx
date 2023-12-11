
import React from 'react';
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Jewelry = () => {

    const giftsData = [
       
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Diamond Pendant Necklace',
            price: '$499.99',
          },
          {
            id: 2,
            image: 'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Gold Hoop Earrings',
            price: '$149.99',
          },
          {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Sapphire Bracelet',
            price: '$299.99',
          },
          {
            id: 4,
            image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Pearl Drop Earrings',
            price: '$89.99',
          },
          {
            id: 5,
            image: 'https://media.istockphoto.com/id/1491130656/photo/platinum-and-gold-ring-with-square-diamonds-floating-on-white-background-from-design-with-3d.webp?b=1&s=170667a&w=0&k=20&c=Lz0KTL5d-26n7cWP4Bx40DCfTCoFnv9swmhMwzV8TgE=',
            title: 'Ruby and Diamond Ring',
            price: '$399.99',
          },
          {
            id: 6,
            image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Silver Charm Bracelet',
            price: '$59.99',
          },
          {
            id: 7,
            image: 'https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Emerald Stud Earrings',
            price: '$179.99',
          },
          {
            id: 8,
            image: 'https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?s=612x612&w=0&k=20&c=miNpkI_ekZ8HoC0U9NhHNacsgcdq8xIFxR-n0zjO5p8=',
            title: 'Rose Gold Anklet',
            price: '$69.99',
          },
          {
            id: 9,
            image: 'https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
            title: 'Crystal Choker Necklace',
            price: '$49.99',
          },
          {
            id: 10,
            image: 'https://media.istockphoto.com/id/1131793447/vector/line-jewelry-icons.jpg?s=612x612&w=0&k=20&c=K5UQX8K1Yv0Y4FfHV2naxGqiLPamiB6zpqxxtqEY5o0=',
            title: 'Amethyst Pendant',
            price: '$119.99',
          },
          {
            id: 11,
            image: 'https://example.com/jewelry11.jpg',
            title: 'Engraved Name Bracelet',
            price: '$89.99',
          },
          {
            id: 12,
            image: 'https://media.istockphoto.com/id/466531928/photo/white-gold-diamond-rings.jpg?s=612x612&w=0&k=20&c=2Tn8h6fw_E-IURCA6TZq6-aYpb2YV2CUN2i2vE4EaGY=',
            title: 'Diamond Stud Earrings',
            price: '$249.99',
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO JEWELRIES WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Jewelry;