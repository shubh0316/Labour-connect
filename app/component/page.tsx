
import Navbar from "./Navbar";
import CardSection from "./CardSection";
import ScrollSection from "./ScrollSection";
import Job from "./Job";
import Hero from "./Hero";
import Fotter from "./Footer";
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