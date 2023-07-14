
import Navbar from "./EmployeeNavbar";
import HeroSectionAnimation from "./MainAnimation";
import CardSection from "./Cards";
import ScrollSection from "./ScrollingSection";
import Hero from "./MainHero";
import Fotter from "./Fotters";
import Service from "./ServicePage";
const employeePage = () => {
    return (
    <>
    <Navbar />
    <Hero />
     <CardSection /> 
  
     <ScrollSection />
     <Service />
    <Fotter />
    </>
    )
}

export default employeePage;