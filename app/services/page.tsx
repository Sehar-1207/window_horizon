
import ConsultationSection from "../components/services/Consultation";
import HeroSection from "../components/services/Hero";
import WhatWeOffer from "../components/services/WhatWeOffer";


export function ServicePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer/>
      <ConsultationSection/>
    </>
  );
}

export default function Services() {
  return (
    <>
   <ServicePage/>
    </>
  );
}
