
import Navbar from "./EmployeeNavbar";
import HeroSectionAnimation from "./MainAnimation";
import CardsProper from "./Cards";
import Hero from "./MainHero";
import Fotter from "./Fotters";
import ServicePage from "./ServicePage";
import WrapScroll from "./ScrollingSection";
const employeePage = () => {
    return (
    <>
    <Navbar />
    <Hero />
     <CardsProper />
     <WrapScroll />
     <ServicePage />
    <Fotter />
    </>
    )
}

export default employeePage;