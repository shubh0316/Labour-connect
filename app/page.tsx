import LandingNavbar from './LandingPage/LandingNavbar';

import CardsProper from './LandingPage/CardSection';
import Application from './LandingPage/Application';
import Footer from './LandingPage/Footer';
import AboutPage from './LandingPage/AboutUs';
import WrapWelcomePage from './LandingPage/WelcomePage';
export default function Home() {
  return (
    <>
      <LandingNavbar />
      <WrapWelcomePage />
     
      <AboutPage />
      <CardsProper />
    
      <Application />
      <Footer />
    </>
  )
}
