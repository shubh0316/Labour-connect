import React from 'react';

function Marquee() {
  return (
    <div>
      <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="mx-4 text-white font-serif text-2xl">Labour Connect</span>
    <span className="mx-4  text-white  font-serif text-2xl">Labour Conenct</span>
    <span className="mx-4 text-white  font-serif text-2xl">Labour Connect</span>
    <span className="mx-4  text-white font-serif text-2xl">Labour Connect</span>
    <span className="mx-4 text-white font-serif text-2xl">Labour Connect</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="mx-4 text-white font-serif text-2xl">Labour Connect</span>
    <span className="mx-4  text-white font-serif text-2xl">Labour Connect</span>
    <span className="mx-4 text-white font-serif  text-2xl">Labour Connect</span>
    <span className="mx-4 text-white font-serif text-2xl">Labour Connect</span>
    <span className="mx-4 text-white font-serif  text-2xl">Labour Connect</span>
  </div>
</div>
    </div>
  )
}

export default Marquee
