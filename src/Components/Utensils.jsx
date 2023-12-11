
import React from 'react';
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Utensils = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/1178062665/photo/contemporary-kitchen-background-with-blank-space-for-a-text.jpg?s=612x612&w=0&k=20&c=Ex09Vc6CjRObsSz1S5ZPr3Z0ljhsIMovVv-xIS1R6Bc=',
            title: 'Stainless Steel Cookware Set',
            price: '$89.99',
          },
          {
            id: 2,
            image: 'https://media.istockphoto.com/id/469555585/photo/professional-kitchen-utensils-on-white-background.jpg?s=612x612&w=0&k=20&c=SFKws8NqDpK8NJRDSFzWvQcvmGUYqV2ZAbJKn5SEqFE=',
            title: "Chef's Knife Set",
            price: '$49.99',
          },
          {
            id: 3,
            image: 'https://media.istockphoto.com/id/1306486191/vector/set-of-vector-drawings-of-kitchen-tools.jpg?s=612x612&w=0&k=20&c=v8h48i33GitGbrOyGTTOLwmgmwzZQj_7dd-iy_6B0Qc=',
            title: 'Non-Stick Bakeware Set',
            price: '$39.99',
          },
          {
            id: 4,
            image: 'https://media.istockphoto.com/id/1134020110/vector/cutlery-restaurant-icons.jpg?s=612x612&w=0&k=20&c=udrCAY1Ru_iLEdwJK_fyuHXNQoH3y47ZCuNIr7uRwR0=',
            title: 'Silicone Kitchen Utensils',
            price: '$29.99',
          },
          {
            id: 5,
            image: 'https://media.istockphoto.com/id/1178062665/photo/contemporary-kitchen-background-with-blank-space-for-a-text.jpg?s=612x612&w=0&k=20&c=Ex09Vc6CjRObsSz1S5ZPr3Z0ljhsIMovVv-xIS1R6Bc=',
            title: 'Cutting Board Set',
            price: '$19.99',
          },
          {
            id: 6,
            image: 'https://media.istockphoto.com/id/1133879044/vector/cutlery-restaurant-icon-set-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=N8jeZw9_akZwKuxbTeR01tgElla3rdFWpuwCeC1Wp5U=',
            title: 'Dinnerware Set',
            price: '$59.99',
          },
          {
            id: 7,
            image: 'https://media.istockphoto.com/id/1370697180/photo/red-cast-iron-enamel-frying-pan-dutch-oven-isolated-on-white.jpg?s=612x612&w=0&k=20&c=9PR0m6Kg4w0OCoL5ZUVkgMEgtu_ABiz-JmQlaNNbaq4=',
            title: 'Glass Drinkware Set',
            price: '$24.99',
          },
          {
            id: 8,
            image: 'https://media.istockphoto.com/id/172734113/photo/whisk-and-eggs.jpg?s=612x612&w=0&k=20&c=TmdW2-xNEezGt0deK09ryw2GA98qW9xoXsNa91RoKWE=',
            title: 'Kitchen Egg  Whisk',
            price: '$34.99',
          },
          {
            id: 9,
            image: 'https://media.istockphoto.com/id/1223414833/photo/clean-saucepan-on-a-gas-stove-in-kitchen.jpg?s=612x612&w=0&k=20&c=U1L33o9BH9qXtfexlWleX0Y5qGy4es0ySk1Drgq_oxk=',
            title: 'Electric Kettle',
            price: '$29.99',
          },
          {
            id: 10,
            image: 'https://media.istockphoto.com/id/1146833253/photo/barbecue-tools-on-wooden-table-flat-lay-top-view.jpg?s=612x612&w=0&k=20&c=aFdNSpNtC0aGLGeNFm7WPy6nFhsRiZdgVioDTF9Qd_0=',
            title: 'Stainless Steel Flatware Set',
            price: '$39.99',
          },
          {
            id: 11,
            image: 'https://media.istockphoto.com/id/666832316/photo/colorful-baking-ingredients.jpg?s=612x612&w=0&k=20&c=y1O7xRpSfKhrUh1MHr8QLZko2_kZZcAMqHeYygNcRKY=',
            title: 'Spice Rack Organizer',
            price: '$14.99',
          },
          {
            id: 12,
            image: 'https://media.istockphoto.com/id/1131736386/photo/kitchen-utensils-in-ceramic-cup-on-a-gray-background-copy-space.jpg?s=612x612&w=0&k=20&c=YxfXkYUMCxJA_pKJOvtd8INTXTbi0jEDGmIE9l04hFM=',
            title: 'Tea Infuser Set',
            price: '$12.99',
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO UTENSILS WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Utensils;