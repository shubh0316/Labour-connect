import React from 'react';
import Image from 'next/image';
import Macbook from '../Resources/Macbook.png';
import { BsArrowRight } from 'react-icons/bs';

const Application = () => {
  return (
    <div className='relative bottom-20 max-w-full bg-zinc-950 border-cyan-400 h-auto' style={{ width: '100%', height: '480px' }}>
        <div className='flex flex-col flex-start w-1/2 '>
    <div className='text-orange-500 mt-20 mb-5 ml-20 text-2xl '>
      Our Staffing Services Process
    </div>
    <div className='text-white ml-20 text-6xl font-bold'>
        Unlock Your Staffing Success With Us 

    </div>
    <div className='text-white mt-10  ml-20 text-2xl  font-sans'>
    Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.

    </div>
    <button className='flex items-center justify-center gap-8 text-xl w-64 h-14  mt-20 ml-20 rounded-full bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-125'>
              Explore Jobs <BsArrowRight size={32} />
            </button>
    </div>
    <Image
        className='absolute w-2/5 right-0 bottom-0 '
        src={Macbook}
        alt=''
      />
    </div>
    

  
  
  
    
  

  );
};

export default Application;