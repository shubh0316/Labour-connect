import React from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Process from './ProcessesForEmployee';
import Jobs from './Candidates';
import Footer from './Footer';
function page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Process />
        <Jobs />
        <Footer />
    </div>
  )
}

export default page;
