import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import bg from '../assets/christmasbg.jpg';

const Footer = () => {
  return (
<div className='w-full  mt-5  ' style={{ backgroundImage: `url(${bg})`,  backgroundSize: 'cover',height: 'full' }}>
    <div className="bg-red-950 mx-auto md:max-w-[960px] text-white">
      <div className='  mx-auto flex flex-col lg:flex-row justify-between w-full p-5'>
        <div className=" lg:mb-0 lg:w-1/3 text-white">
          <h3 className="text-xl font-bold mb-4">OLIVIA</h3>
          <p className="">&copy; 2023, Built and designed <br/>by Olivia Okafor</p>
        </div>

        <div className=" lg:mb-0 text-white lg:w-1/3">
          <h3 className="text-xl font-bold mb-4">LINKS</h3>
          <div className='flex gap-2'>
          <ul>
            <li className="mb-2">Home</li>
            <li className="mb-2">Blog</li>
            </ul>
            <ul>
            <li className="mb-2">About</li>
            <li className="mb-2">Contact</li>
          </ul>
          </div>

        </div>
        
        <div className="lg:w-1/3 text-white">
          <h3 className="text-xl font-bold  mb-4">GET IN TOUCH</h3>
          <ul className="flex space-x-4 text-3xl">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      </div>
      </div>  
  );
};

export default Footer;
