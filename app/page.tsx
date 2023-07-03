import Image from 'next/image'
import LandingNavbar from './LandingPage/LandingNavbar';
import HomeScreen from './LandingPage/HomeScreen';
import CardSection from './LandingPage/CardSection';
import Application from './LandingPage/Application';
import Footer from './LandingPage/Footer';
import AboutUs from './LandingPage/AboutUs';
export default function Home() {
  return (
    <>
      <LandingNavbar />
      <HomeScreen />
      <CardSection />
      <AboutUs />
      <Application />
      <Footer />
    </>
  )
}
