"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Sands from "../Resources/sand.png";
import Hands from "../Resources/Hands.png";
import 'animate.css';


function CardSection() {
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(-1);
  const containerRefs = useRef<(HTMLDivElement | null)[]>(Array(2).fill(null));
  const textRefs = useRef<(HTMLParagraphElement | null)[]>(Array(2).fill(null));

  const handleMouseEnter = (index: number) => {
    setHoveredBoxIndex(index);
    const container = containerRefs.current[index];
    const text = textRefs.current[index];
    if (container && text) {
      container.style.height = `${text.scrollHeight}px`;
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredBoxIndex(-1);
    const container = containerRefs.current[index];
    if (container) {
      container.style.height = 'auto';
    }
  };

  const handleOrangeBoxHover = (index: number) => {
    const greyBoxImage = document.getElementById(`greyBoxImage-${index}`);
    const container = containerRefs.current[index];
    if (greyBoxImage && container) {
      greyBoxImage.classList.add('animate__fadeOut', 'animate__slower');
      container.style.height = 'auto';

      const greyBox = container.nextElementSibling as HTMLDivElement;
      if (greyBox) {
        greyBox.classList.add('animate__fadeIn', 'animate__faster');
      }
    }
  };

  const handleOrangeBoxLeave = (index: number) => {
    const greyBoxImage = document.getElementById(`greyBoxImage-${index}`);
    const container = containerRefs.current[index];
    if (greyBoxImage && container) {
      greyBoxImage.classList.remove('animate__fadeOut', 'animate__slower');
      if (hoveredBoxIndex === -1) {
        container.style.height = 'auto';
      }

      const greyBox = container.nextElementSibling as HTMLDivElement;
      if (greyBox) {
        greyBox.classList.remove('animate__fadeIn', 'animate__faster');
      }
    }
  };

  return (
   
    <div className="flex flex-row  rounded-2xl p-10">
      <div className="flex flex-col py-20">
        <p className="text-2xl text-orange-500 px-20 py-10">Why Choose Us</p>
        <p className="text-6xl w-2/3 text-bold text-zinc-900 px-20">We will Help You Getting Your Dream Job</p>
        <p className="text-4xl text-zinc-900 px-20 py-20">asjdghasjdha asjdh gasjfhgf kjashdfk jashdf kajhkjhewk kjhwekrjhe r kejhrkjher ekujherkjhrwek kwehrkjehwr </p>
      </div>
      <div className="flex flex-col space-y-3 mb-60">
        <div
          ref={el => (containerRefs.current[0] = el)}
          className={`w-[25rem] bg-orange-600 mt-40 mr-20 rounded-xl text-zinc-300 ${
            hoveredBoxIndex === 0 ? 'overflow-auto' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          onMouseOver={() => handleOrangeBoxHover(0)}
          onMouseOut={() => handleOrangeBoxLeave(0)}
        >
          <h2 className="text-3xl text-bold px-20 text-zinc-800 mt-10">Labour Law</h2>
          <div className="flex justify-center items-center"></div>
          <p
            ref={el => (textRefs.current[0] = el)}
            className={`text-2xl  mt-10 ${hoveredBoxIndex === 0 ? '' : 'line-clamp-3'}`}
          >
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo mir aut perferendis doloribus asperiores
            repellat."
          </p>
          <Image className="ml-20" src={Hands} alt="Hands" width={250} height={250} />
        </div>
        <div className="w-[25rem] bg-gray-300 mr-20 rounded-xl text-zinc-800">
          <p className='px-20 text-4xl'> Labour Law</p>
          <p className="text-2xl">asdfsadfasdf asdasfsdf asdfsadfasdf dafsasdfg sagdfgdsg sdfgsdfg</p>
          <Image
            id="greyBoxImage-0"
            className='ml-20'
            src={Sands}
            alt="Sands"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        
        <div
          ref={el => (containerRefs.current[1] = el)}
          className={`w-[25rem] bg-gray-300 mt-40 mr-20 rounded-xl text-stone-800 ${
            hoveredBoxIndex === 1 ? 'overflow-auto' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          onMouseOver={() => handleOrangeBoxHover(1)}
          onMouseOut={() => handleOrangeBoxLeave(1)}
        >
          <h2 className="text-3xl text-bold px-20 text-stone-800 mt-10">Labour Law</h2>
          <div className="flex justify-center items-center"></div>
          <p
            ref={el => (textRefs.current[1] = el)}
            className={`text-2xl mt-10 ${hoveredBoxIndex === 1 ? '' : 'line-clamp-3'}`}
          >
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo mir aut perferendis doloribus asperiores
            repellat."
          </p>
          <Image className="ml-20" src={Hands} alt="Hands" width={250} height={250} />
        </div>
        <div className="w-[25rem] bg-orange-600 mr-20 rounded-xl text-zinc-300">
          <p className='px-20 text-4xl'> Labour Law</p>
          <p className="text-2xl">asdfsadfasdf asdasfsdf asdfsadfasdf dafsasdfg sagdfgdsg sdfgsdfg</p>
          <Image
            id="greyBoxImage-1"
            className="ml-20"
            src={Sands}
            alt="Sands"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  
  );
}

export default CardSection;
