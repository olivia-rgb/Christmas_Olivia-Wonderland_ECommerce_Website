
import React from 'react';
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Shoes = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/607302122/photo/womens-shoes-for-one-day-on-brown-paper.jpg?s=612x612&w=0&k=20&c=NwHZ8rgvDfjhqOGs8Qf0X0b1wpASkoaV35U1ikZAz1I=',
            title: 'Classic Leather Boots',
            price: '$149.99',
          },
          {
            id: 2,
            image: 'https://media.istockphoto.com/id/1250260971/vector/cartoon-color-different-sneakers-shoes-seamless-pattern-background-vector.jpg?s=612x612&w=0&k=20&c=IexBdCIpxSySmdPbsynpXx_Q19dBVPMSzcAUOS0KtEk=',
            title: 'Athletic Running Shoes',
            price: '$99.99',
          },
          {
            id: 3,
            image: 'https://media.istockphoto.com/id/857511138/vector/women-shoes-in-different-styles-vector-illustrations.jpg?s=612x612&w=0&k=20&c=eMQTf0Mtj2QiQJ2bPckiB2epTlcdtopeLbOJNmPrYaw=',
            title: 'Fashionable High Heels',
            price: '$129.99',
          },
          {
            id: 4,
            image: 'https://media.istockphoto.com/id/1250260960/vector/cartoon-color-different-sneakers-shoes-banner-card-circle-vector.jpg?s=612x612&w=0&k=20&c=i9qpjzi2EWBB_rPgH2n8lGu75k9XlzbbQjwLRouzmgE=',
            title: 'Casual Sneakers',
            price: '$79.99',
          },
          {
            id: 5,
            image: 'https://media.istockphoto.com/id/483656512/photo/life-is-a-journey-not-a-destination-inspiration-quote.jpg?s=612x612&w=0&k=20&c=n2NtbW8EL64dMaztNAm3cf4_kZfxMgeg0R7jPx-tLBA=',
            title: 'Comfortable Slip-on Flats',
            price: '$89.99',
          },
          {
            id: 6,
            image: 'https://media.istockphoto.com/id/1221362520/vector/shoes-mens-womens-and-childrens-footwear-different-types-trendy-casual-stylish-elegant.jpg?s=612x612&w=0&k=20&c=57QnGmd6wCj05VfvPoTjPs8KV8cya8Sa5VtLcKeWo4U=',
            title: 'Outdoor Hiking Boots',
            price: '$179.99',
          },
          {
            id: 7,
            image: 'https://media.istockphoto.com/id/1250260960/vector/cartoon-color-different-sneakers-shoes-banner-card-circle-vector.jpg?s=612x612&w=0&k=20&c=i9qpjzi2EWBB_rPgH2n8lGu75k9XlzbbQjwLRouzmgE=',
            title: 'Sporty Running Sneakers',
            price: '$109.99',
          },
          {
            id: 8,
            image: 'https://media.istockphoto.com/id/1130696753/vector/cartoon-color-different-sneakers-shoes-set-vector.jpg?s=612x612&w=0&k=20&c=ooUJagEY6Qiqps7pxFweKRh_FpqfbC1KbfOnN3oWKdM=',
            title: 'Formal Oxford Shoes',
            price: '$159.99',
          },
          {
            id: 9,
            image: 'https://media.istockphoto.com/id/1221362520/vector/shoes-mens-womens-and-childrens-footwear-different-types-trendy-casual-stylish-elegant.jpg?s=612x612&w=0&k=20&c=57QnGmd6wCj05VfvPoTjPs8KV8cya8Sa5VtLcKeWo4U=',
            title: 'Cozy Winter Boots',
            price: '$129.99',
          },
          {
            id: 10,
            image: 'https://media.istockphoto.com/id/1170289923/photo/sneakers-blue-sport-shoes-side-view.jpg?s=612x612&w=0&k=20&c=p44T9S0ORQvmbq6QCxMyt26ZuIrNOWUkTBpK0vmiW7o=',
            title: 'Bohemian Sandals',
            price: '$69.99',
          },
          {
            id: 11,
            image: 'https://media.istockphoto.com/id/1097802978/vector/shoes-sign-3d-icon-set-isometric-view-vector.jpg?s=612x612&w=0&k=20&c=oQT9Eg8IHXflAknaUtXBySb_XdKEuN_Yy45U0W_JJs0=',
            title: 'Classic Loafers',
            price: '$119.99',
          },
          {
            id: 12,
            image: 'https://media.istockphoto.com/id/1170291590/photo/a-lot-of-sneakers-on-a-white-background-sport-shoes.jpg?s=612x612&w=0&k=20&c=Ye7uiQ2zDqsOEFBL3cdscftYshPCjvvWlrrk-wN4wY4=',
            title: 'Sleek Ankle Boots',
            price: '$139.99',
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO SHOES WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Shoes;