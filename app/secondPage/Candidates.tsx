"use client"
import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import card1 from '../Resources/card1.png';
import card2 from '../Resources/card2.png';
import card3 from '../Resources/card3.png';

const Jobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const cards = [
    { image: card1, alt: 'Card 1', candidateDetails: 'Developers', data: '300K+ Candidates' },
    { image: card2, alt: 'Card 2', candidateDetails: 'Designers', data: '300K+ Candidates' },
    { image: card3, alt: 'Card 3', candidateDetails: 'DevOps', data: '300K+ Candidates' },
    { image: card3, alt: 'Card 3', candidateDetails: 'DevOps', data: '300K+ Candidates' },
    { image: card3, alt: 'Card 3', candidateDetails: 'DevOps', data: '300K+ Candidates' },
  ];

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className='relative bottom-40 container text-black max-w-full'>
      <div className='flex flex-col w-5/6 gap-10'>
        <div className='flex flex-col gap-5'>
          <p className='text-orange-500 text-2xl font-bold'>Our Candidates</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <p className='align-text-center text-5xl font-semibold mb-0'>
                More than 400,000+ Verified candidates ready to hire
              </p>
              <div className='flex items-center gap-5 ml-4'>
                <BsArrowLeft
                  size={60}
                  className='cursor-pointer hover:text-orange-500'
                  onClick={handleLeftArrowClick}
                />
                <BsArrowRight
                  size={60}
                  className='cursor-pointer hover:text-orange-500'
                  onClick={handleRightArrowClick}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='w-full h-full rounded-lg bg-white shadow-md flex overflow-x-auto'>
            {visibleCards.map((card, index) => (
              <div key={index} className='w-1/3 mx-2 rounded-lg bg-center bg-cover'>
                <div className='relative'>
                  <Image src={card.image} alt={card.alt} width={800} height={600} className='rounded-lg' />
                  <div className='absolute inset-0 flex items-end justify-end p-4'>
                    <button className='bg-black-500 gap-4 inline-flex text-white px-4 py-2 rounded-full hover:bg-white hover:text-orange-500 transition duration-200'>
                      Recruit Now <BsArrowRight />
                    </button>
                  </div>
                  <div className='absolute bottom-0 left-0 p-4'>
                    <h2 className='text-2xl text-white font-bold mb-6'>{card.candidateDetails}</h2>
                    <h1 className='text-[rgba(255, 255, 255, 0.80)] text-sm text-white font-bold mb-3'>{card.data}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
