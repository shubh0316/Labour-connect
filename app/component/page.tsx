
import Navbar from "./Navbar";
import HeroSectionAnimation from "./HeroSectionAnimation";
import CardSection from "./CardSection";
import ScrollSection from "./ScrollSection";
import Job from "./Job";
import Hero from "./Hero";
import Fotter from "./Fotter";
import Service from "./Service";
const dashboard = () => {
    return (
    <>
    <Navbar />
    <Hero />
     <CardSection /> 

     <Service />
     <ScrollSection />

  
    <Job />


    <Fotter />
   

    </>
    )
}

export default dashboard;