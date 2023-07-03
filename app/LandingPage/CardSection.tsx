import React from 'react';
import Image from 'next/image';
import Capa_1 from '../Resources/Capa_1.png';
import Capa_2 from '../Resources/Capa_2.png';
import Capa_3 from '../Resources/Capa_3.png';

const CardSection = () => {
  return (
    <div className='max-w-full container text-black my-40'>
      <div className='container gap-10 flex-col w-2/3'>
        <p className='text-orange-500 text-2xl font-bold'>Why choose our dynamic Services</p>
        <p className='text-6xl font-semibold'>
          Unlock your staffing success with us
        </p>
        <div className='flex md:flex-row flex-col justify-between my-10 gap-10'>
          <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-300 rounded-xl p-8 hover:bg-orange-600 hover:scale-125 transform duration-300'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
            <Image
                          className='absolute p-20 -bottom-20 -right-12 overflow-hidden'
                          src={Capa_1} alt={''}            />
          </div>
          <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-xl bg-gray-300 rounded-xl p-8 hover:bg-orange-600 hover:scale-125 transform duration-300'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p className='mb-20'>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
            <Image
                          className='absolute p-10 -bottom-6 -right-1 overflow-hidden'
                          src={Capa_2}  alt={''}            />
          </div>
          <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-300 rounded-xl p-8 hover:bg-orange-600 hover:scale-125 transform duration-300'>
            <p className='text-xl font-semibold'>Excellent Services</p>
            <p>
              Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
              quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
              nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
              officia assumenda sed magnam illo. Qui rerum nisi et pariatur
              omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
              et dolores suscipit et nulla veritatis. Id saepe pariaturs.
            </p>
            <Image
                          className='absolute p-10 -bottom-7 -right-0 overflow-hidden'
                          src={Capa_3} alt={''}            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;