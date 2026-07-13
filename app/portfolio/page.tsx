import StatsSection from "@/components/portfolio/StatsSection";
import ProjectCard from "@/components/portfolio/ProjectCards";
import ClientTestimonials from "@/components/portfolio/ClientTestimonials";
import CallToActionBanner from "@/components/CallToAction";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import portfolioImg from "@/components/assets/shade2.jpg";
export default function Portfolio() {
  interface links{
  label:string,
  href:string
}
  const customLinks :links[]= [
    { label: "Products", href: "/PRODUCS/all-products" },
    { label: "Blog", href: "/blog" },
    { label: "Schedule Consultation", href: "/contact" },
    { label: "Home", href: "/" },
  ];

  return (
    <>
      <Hero
        imageSrc={portfolioImg}
        imageAlt="Luxury living room with custom window treatments"
        badge="Showcasing Our Expertise"
        badgeType="portfolio"
        title={
          <>
            Window Treatment Portfolio:
            <br />
            <span className="block mt-1">Manhattan & Bergen County</span>
          </>
        }
        description="Explore our collection of premium custom window treatment installations—from high-rise Manhattan condos to sprawling estates in Bergen County NJ."
        alignment="left"
        animationType="slideUpStagger"
        secondaryButtonText="Call 877-779-6060"
        secondaryButtonHref="877-779-6060"
        secondaryButtonType="link"
      />
      <StatsSection />
      <ProjectCard />
      <ClientTestimonials />
      <CallToActionBanner />
      <Explore links={customLinks} />
    </>
  );
}
