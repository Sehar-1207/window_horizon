import Hero from "@/components/products/Hero";
import ProductShowcase from "@/components/products/ProductCards";
import mainHeroBg from "@/components/assets/shade1.jpg";
import CallToActionBanner from "@/components/CallToAction";
import Explore from "@/components/Explore";

export default function products() {
     const customLinks = [
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Schedule Consultation", href: "/contact" },
    { label: "Home", href: "/" },
  ];

  return (
    <>
      <Hero
        imageSrc={mainHeroBg}
        imageAlt="Luxury window treatments showroom setup"
        title={<>Custom Window Treatments<br />In Manhattan & Bergen County</>}
        description="We offer a wide range of custom window treatments including solar shades, blackout shades, and motorized options designed for light control and privacy."
      />
      <ProductShowcase />
      <CallToActionBanner/>
      <Explore links={customLinks}/>
    </>
  );
}