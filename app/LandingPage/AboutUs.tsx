import React from 'react';
import Image from 'next/image';
import About from '../Resources/About.png';

function AboutUs() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <div className="w-90 h-90 mb-10 sm:mb-0 sm:ml-4 transform hover:scale-110">
          <Image src={About} alt="" layout="responsive" width={400} height={400} />
        </div>
      </div>
      <div className="w-full sm:w-1/2 text-black text-left text-lg sm:text-2xl font-sans">
        <div className="text-orange-500 text-4xl font-bold mt-10">About us</div>
        <div className="text-black-500 font-semibold text-3xl sm:text-5xl mb-6 sm:mb-10">
          We’re Helping Companies & Job Seekers in a Better Way
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam quia rem recusandae esse.
          Sit adipisci quaerat sed exercitationem nisi rem voluptatem quas qui fugiat maiores ut
          itaque possimus sit officia assumenda sed magnam illo. Qui rerum nisi et pariatur omnis
          qui quia sequi ea voluptatem debitis qui delectus laboriosam et dolores suscipit et nulla
          veritatis. Id saepe pariaturs.
        </p>
        <p>
          Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam quia rem recusandae esse.
          Sit adipisci quaerat sed exercitationem nisi rem voluptatem quas qui fugiat maiores ut
          itaque possimus sit officia assumenda sed magnam illo. Qui rerum nisi et pariatur omnis
          qui quia sequi ea voluptatem debitis qui delectus laboriosam et dolores suscipit et nulla
          veritatis. Id saepe pariaturs.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
