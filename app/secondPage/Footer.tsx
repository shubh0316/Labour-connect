import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='P-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>
            labour<span className='text-orange-600'>connect</span>
          </p>
          <div className='flex gap-6 pb-5'>
              <FontAwesomeIcon icon={faInstagram} className='text-2xl cursor-pointer hover:text-yellow-600' />
              <FontAwesomeIcon icon={faTwitter} className='text-2xl cursor-pointer hover:text-blue-600' />
              <FontAwesomeIcon icon={faLinkedin} className='text-2xl cursor-pointer hover:text-blue-600' />
              <FontAwesomeIcon icon={faYoutube} className='text-2xl cursor-pointer hover:text-red-600' />
          </div>
          </ul>
        </div>
    </div>                
  );
}

export default Footer;
