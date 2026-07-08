
import HeroSection from "./components/home/Hero";
import About from "./components/home/About";
import ProductsSection from "./components/home/ProductSection";
import WhyChooseSection from "./components/home/WhyChooseUs";
import VideoGallery from "./components/home/VideoGallery";
import Testimonials from "./components/home/Testimonials";
import FrequentQuestions from "./components/home/FrequentQuestion";
import { ConsultationCTA } from "./components/home/Consultation";
import { SEOContent } from "./components/home/Seo";
import ServiceDirectory from "./components/home/ServiceDirectory";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <ProductsSection/>
    <WhyChooseSection/>
    <VideoGallery/>
    <Testimonials/>
    <FrequentQuestions/>
    <ConsultationCTA/>
    <SEOContent/>
    <ServiceDirectory/>
    </>
  );
}
