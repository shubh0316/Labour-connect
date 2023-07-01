import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Process from './ProcessesForEmployee';
import Jobs from './Candidates';
import Fotter from '../component/Fotter';
function page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Process />
        <Jobs />
        <Fotter />
    </div>
  )
}

export default page;
