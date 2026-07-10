
import { ConsultationCTA } from "@/components/Consultation";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import Hero from "@/components/Hero";
import serviceHeroImg from "@/components/assets/service1.jpg";

export default function Services() {
  return (
    <>
      <Hero 
      imageSrc={serviceHeroImg}
      imageAlt="Expert Window Treatment Services"
      badge="Our Services"
      badgeType="pill"
      title="Expert Window Treatment Services"
      description="From free in-home consultations to professional installation, we handle every detail for your dream windows."
      alignment="left" 
      animationType="slideUpStagger"
      showSecondaryButton={false}
    />
      <WhatWeOffer/>
      <ConsultationCTA/>
    </>
  );
}
