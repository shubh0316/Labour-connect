
import Navbar from "./EmployeeNavbar";
import HeroSectionAnimation from "./MainAnimation";
import CardsProper from "./Cards";
import Hero from "./MainHero";
import Fotter from "./Fotters";
import Service from "./ServicePage";
import WrapScroll from "./ScrollingSection";
const employeePage = () => {
    return (
    <>
    <Navbar />
    <Hero />
     <CardsProper />
     <WrapScroll />
     <Service />
    <Fotter />
    </>
    )
}

export default employeePage;