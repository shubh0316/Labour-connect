import Hero from "./Hero";
import Navbar from "./Navbar";
import CardSection from "./CardSection";
import ScrollSection from "./ScrollSection";
import Job from "./Job";
import Fotter from "./Fotter";

const dashboard = () => {
    return (
    <>
    <Navbar />
    <Hero />
    <CardSection />
    <ScrollSection />
    <Job />
    <Fotter />
    </>
    )
}

export default dashboard;