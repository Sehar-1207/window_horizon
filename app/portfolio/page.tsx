import HeroSection from "../components/portfolio/Hero";
import StatsSection from "../components/portfolio/StatsSection";
import ProjectCard from "../components/portfolio/ProjectCards";
import ClientTestimonials from "../components/portfolio/ClientTestimonials";
import CallToActionBanner from "../components/CallToAction";
import Explore from "../components/portfolio/Explore";
export default function Portfolio(){
    return<>
    <HeroSection/>
    <StatsSection/>
    <ProjectCard/>
    <ClientTestimonials/>
    <CallToActionBanner/>
    <Explore/>
    </>
}