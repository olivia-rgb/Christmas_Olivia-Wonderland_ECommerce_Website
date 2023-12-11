
import React from 'react';
import bg from '../assets/christmasbg.jpg';
import { Link } from 'react-router-dom';




const Handbag = () => {

    const giftsData = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=',
            title: 'Leather Tote Bag',
            price: '$129.99',
          },
          {
            id: 2,
            image: 'https://media.istockphoto.com/id/1302787124/photo/beige-leather-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=fOO0zCBqF3rbiGLLHwgtOMHxt66adpKikE7Fs2C_fDs=',
            title: 'Designer Crossbody Bag',
            price: '$249.99',
          },
          {
            id: 3,
            image: 'https://media.istockphoto.com/id/1154597724/photo/yellow-handbag.jpg?s=612x612&w=0&k=20&c=dsQ9iAiBEmlSUZUOdTuwgNc2O6BiV1iK9FbsxmVtj9I=',
            title: 'Chic Clutch Purse',
            price: '$79.99',
          },
          {
            id: 4,
            image: 'https://media.istockphoto.com/id/463378191/photo/women-handbag.jpg?s=612x612&w=0&k=20&c=UAqukWsvB7X5NlFoRIwwRhmQ1Y9rSzRMrYQj0ImPxh0=',
            title: 'Stylish Satchel',
            price: '$169.99',
          },
          {
            id: 5,
            image: 'https://media.istockphoto.com/id/916257096/photo/pink-women-bag-isolated.jpg?s=612x612&w=0&k=20&c=uskDO5rdc4w1UBfYtPsTXFjvMr8I6upSwd_EbLee9mk=',
            title: 'Canvas Backpack',
            price: '$99.99',
          },
          {
            id: 6,
            image: 'https://media.istockphoto.com/id/510625854/photo/woman-thinking-with-many-colorful-bags-shopping-fashion-image.jpg?s=612x612&w=0&k=20&c=p1xz4SlE0Sum4q8-iwh1kN5hNfuHK04QO8aVlm5jMF0=',
            title: 'Quilted Shoulder Bag',
            price: '$189.99',
          },
          {
            id: 7,
            image: 'https://media.istockphoto.com/id/952079442/photo/female-leather-bag.jpg?s=612x612&w=0&k=20&c=SmyDdfpbpAJ2TDHNZdnGIs9R0uk4qB2RZ-ur9TUwCbA=',
            title: 'Elegant Evening Clutch',
            price: '$109.99',
          },
          {
            id: 8,
            image: 'https://media.istockphoto.com/id/1223379047/photo/fashion-portrait-of-elegant-woman-in-brown-sweater.jpg?s=612x612&w=0&k=20&c=wlBMrmnqdmWJ9wNECASE8hs0mf2P5vFBJfqvOswlMo8=',
            title: 'Bohemian Fringe Bag',
            price: '$139.99',
          },
          {
            id: 9,
            image: 'https://media.istockphoto.com/id/493827882/photo/fashionable-beautiful-big-red-handbag.jpg?s=612x612&w=0&k=20&c=5m-MO-1FNjg9sIC6_BK13g_pXy-EzvcS47ri6BeUTAU=',
            title: 'Structured Tote',
            price: '$159.99',
          },
          {
            id: 10,
            image: 'https://media.istockphoto.com/id/1397686129/photo/stylish-womens-bag-and-different-stuff-on-pale-orange-background-top-view.jpg?s=612x612&w=0&k=20&c=jEZkjWdiWSi8m779IEDSlVPs2KOIRx14BgWpXSdy_F0=',
            title: 'Casual Hobo Bag',
            price: '$89.99',
          },
          {
            id: 11,
            image: 'https://media.istockphoto.com/id/1146768071/photo/young-woman-holding-stylish-handbag-and-wearing-trendy-outfit-spring-female-clothes-and.jpg?s=612x612&w=0&k=20&c=Sx1RRy0kWK7dwDiZFuy_BSFfyX27Slqp7b8p50Ldgl4=',
            title: 'Vintage Leather Purse',
            price: '$199.99',
          },
          {
            id: 12,
            image: 'https://media.istockphoto.com/id/1314879785/photo/unidentified-woman-puts-lingerie-in-trip-storage-container-use-konmari-method-packing-suitcase.jpg?s=612x612&w=0&k=20&c=IqeAkprev92tDk1fENtMi1aUPA_lc0EnyxXLVPmxjeY=',
            title: 'Weekender Travel Bag',
            price: '$179.99',
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
      <h1 className="text-3xl font-bold p-8 text-center text-white">WELCOME TO HANDBAG WONDERLAND</h1>
      <div className="gift-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-[960px] bg-white p-4 font-semibold">
        {giftsData.map((gift) => (
          <GiftItem key={gift.id} {...gift} className='' />
        ))}
      </div>
    </div>
  );
};

export default Handbag;