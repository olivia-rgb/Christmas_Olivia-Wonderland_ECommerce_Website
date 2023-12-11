import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const navLinks = [
  { id: 1, title: 'Women', path: '/women' },
  { id: 2, title: 'Men', path: '/men' },
  { id: 3, title: 'Kids & Baby', path: '/kids' },
  { id: 4, title: 'Shoes', path: '/shoes' },
  { id: 5, title: 'Handbag & Accessories', path: '/accessories' },
  { id: 6, title: 'Jewelry', path: '/jewelry' },
  { id: 7, title: 'Utensils', path: '/utensils' },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex py-2 bg-black px-12 justify-between sticky w-full'>
      <ul className='hidden md:flex justify-between w-full'>
        {navLinks.map((item) => (
          <li key={item.id} className='text-white font-bold border-b-4 border-red-950'>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden text-white font-bold'>
        {nav ? <AiOutlineClose className='' size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden center-0 top-8  h-full text-center  font-black text-white ease-in-out duration-500'
            : 'ease-in-out  duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Navigation Items */}
        {navLinks.map((item) => (
          <li
            key={item.id}
            className='p-2  border-b-4  hover:border-white duration-200 hover:text-blue-200 cursor-pointer border-red-700'
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
