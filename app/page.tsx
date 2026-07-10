
import About from "@/components/home/About";
import ProductsSection from "@/components/home/ProductSection";
import WhyChooseSection from "@/components/home/WhyChooseUs";
import VideoGallery from "@/components/home/VideoGallery";
import Testimonials from "@/components/home/Testimonials";
import FrequentQuestions from "@/components/home/FrequentQuestion";
import { ConsultationCTA } from "@/components/Consultation";
import { SEOContent } from "@/components/home/Seo";
import ServiceDirectory from "@/components/home/ServiceDirectory";
import Hero from "@/components/Hero";
import homeHeroImg from "@/components/assets/customblind2.jpg";
export default function Home() {
  return (
    <> 
     <Hero 
          imageSrc={homeHeroImg}
          imageAlt="Custom Window Treatments Banner"
          badge="Free In-Home Consultation • Shades, Blinds & Motorized Solutions"
          badgeType="minimal"
          title={<>Custom Window <br className="xs:inline" /> Treatments</>}
          description="in NYC & New Jersey"
          alignment="center"
          animationType="slideUpStagger"
          secondaryButtonText="877-779-6060"
          secondaryButtonHref="8777796060"
          secondaryButtonType="tel"
        />
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
