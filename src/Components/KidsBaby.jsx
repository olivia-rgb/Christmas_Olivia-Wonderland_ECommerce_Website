
import React from 'react';
import child1 from '../assets/child11.jpg'
import child2 from '../assets/child2.jpg'
import child3 from '../assets/child3.jpg'
import child4 from '../assets/child4.jpg'
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const KidsBaby = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dSrgMtP6BgbvGADu3vjv67RNLjPQ28r1VuT4wvV0H9VclLYYlgUZ2qvu',
            title: 'Plush Stuffed Animal',
            price: '$19.99',
          },
          {
            id: 2,
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmsvJaunYSw-SsB_XOhTbbGAbwRJCn_0MMLaQXCdTdADiXGTCYSQdKldo',
            title: 'Baby Onesie Set',
            price: '$24.99',
          },
          {
            id: 3,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5iV4daU3uitwPtYkYPj0XVcJ--Bd4ZpulQLUbVCY6-t7JkQqgRw-xajDa',
            title: 'Soft Baby Blanket',
            price: '$14.99',
          },
          {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wwBaNmLTGkGQLrQfeZD1XOpe9DF4YQDXPskmeTm7zenkSreYH898r_s',
            title: 'Musical Mobile',
            price: '$29.99',
          },
          {
            id: 5,
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGU365BQynXl1jj8UTlz3ewasZjUu6-PhInBThG_x_2M7Nx3KYqr1IPE8',
            title: 'Interactive Baby Toy',
            price: '$19.99',
          },
          {
            id: 6,
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMP7opxLvIQ0_ULciU_dKLwqCOppWRZ1qImKHVRnkKmTFsi9Jyk_9Bk3ap',
            title: 'Baby Keepsake Set',
            price: '$34.99',
          },
          {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZbDyLveyFrJfDjZ--jwKTbmB2F1b0iRsBk7d5y8myGEKPXnDhB1SRQPB',
            title: 'Personalized Baby Bibs',
            price: '$9.99',
          },
          {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGY7Yg1JjbcflAovhKUobrWt4tD9gviiR93uMO1Ebvu6RQoNYk3NkZ1jLd',
            title: 'Baby Memory Book',
            price: '$22.99',
          },
          
            {
                id: 9,
                image:child1,
                title: 'Plush Toy Set',
                price: '$39.99', 
              },
              {
                id: 10,
                image:child2,
                title: 'Interactive Learning Tablet',
                price: '$59.99',
                
              },
              {
                id: 11,
                image: child3,
                title: 'Superhero Costume Set',
                price: '$29.99',
                
              },
              {
                id: 4,
                image: child4,
                title: 'Colorful Building Blocks',
                price: '$19.99',
                
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO BABIES WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default KidsBaby;