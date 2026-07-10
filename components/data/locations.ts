import { StaticImageData } from "next/image";
import bg from "../assets/customblind3.jpg";
import bg1 from "../assets/shade2.jpg";

export interface HeroSection {
  tagline: string;
  heading: string;
  subheading: string;
  ctaPrimary: string;
  ctaLink: string;
  phone: string;
  bgImage: string | StaticImageData;
}

export interface IntroSection {
  heading: string;
  paragraph1: string;
  paragraph2: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: "FileCheck" | "Home" | "Award" | "Shield" | "Layers" | "Sparkles" | "Compass" | "Wrench"; 
}

export interface FeaturesSection {
  heading: string;
  items: FeatureItem[];
}

export interface ProductItem {
  title: string;
  description: string;
  productSlug: string;
}

export interface ProductsSection {
  heading: string;
  subheading: string;
  items: ProductItem[];
}

export interface SubSection {
  heading: string;
  paragraph1: string;
  paragraph2: string;
}

export interface NeighborhoodsSection {
  heading: string;
  subheading: string;
  list: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  iconName: "Calendar" | "Ruler" | "CheckCircle2";
}

export interface ProcessSection {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

export interface VideoSection {
  subheading: string;
  youtubeId: string;
}

export interface LocationSchema {
  title: string;
  hero: HeroSection;
  intro: IntroSection;
  features: FeaturesSection;
  products: ProductsSection;
  subSection: SubSection;
  neighborhoods: NeighborhoodsSection;
  process: ProcessSection;
  video: VideoSection;
}

export const locationData: Record<string, LocationSchema> = {
    
  manhattan: {
    title: "Manhattan",
    hero: {
      tagline: "MANHATTAN'S PREMIER WINDOW TREATMENT SPECIALISTS",
      heading: "Custom Window Treatments for Manhattan Apartments & Condos",
      subheading: "Expert installation of custom shades, blinds, and motorized solutions throughout Manhattan. Experienced with COI approvals, condo boards, and co-op requirements.",
      ctaPrimary: "Schedule Free Consultation",
      ctaLink: "/contact?location=manhattan",
      phone: "877-779-6060",
      bgImage: bg
    },
    intro: {
      heading: "Expert Window Shades & Motorized Blinds for Manhattan High-Rises",
      paragraph1: "Living in Manhattan comes with unique window treatment challenges. From floor-to-ceiling windows on the Upper West Side with stunning skyline views to strict condo board requirements in Midtown, you need a window treatment company that understands the Manhattan lifestyle.",
      paragraph2: "Whether you're in a high-rise on the Upper East Side, a historic brownstone in Chelsea or Greenwich Village, or a modern condo in Tribeca or SoHo, we provide flawless installation of premium Hunter Douglas window treatments."
    },
    features: {
      heading: "Why Manhattan Residents Choose Us",
      items: [
        { title: "COI & Condo Board Experience", description: "We handle all Certificate of Insurance requirements smoothly.", iconName: "FileCheck" },
        { title: "Manhattan Apartment Specialists", description: "Tailored options engineered specifically for urban penthouse layouts.", iconName: "Home" },
        { title: "Premium Product Selection", description: "Authorized elite dealer with exclusive NYC showroom configurations.", iconName: "Award" },
        { title: "Professional Installation", description: "Clean, efficient installation adhering to rigid building rules.", iconName: "Shield" }
      ]
    },
    products: {
      heading: "Custom Window Shades & Blinds for Manhattan Homes",
      subheading: "We offer a complete range of window treatment solutions designed for Manhattan's unique architectural styles.",
      items: [
        { title: "Motorized Shades", description: "Perfect for high-rise apartments and hard-to-reach windows.", productSlug: "motorized-shades" },
        { title: "Blackout Shades", description: "Essential for Manhattan bedrooms dealing with consistent city light pollution.", productSlug: "blackout-shades" },
        { title: "Solar Shades", description: "Reduce glare and protect interiors while preserving your beautiful skyline views.", productSlug: "solar-shades" },
        { title: "Custom Blinds", description: "Wood and faux wood choices calibrated dynamically for any metropolitan frame.", productSlug: "custom-blinds" }
      ]
    },
    subSection: {
      heading: "Motorized Window Treatments for Manhattan High-Rises",
      paragraph1: "Manhattan apartments often feature floor-to-ceiling windows and hard-to-reach window configurations. Our motorized shades provide effortless control with smartphone apps and automated schedules.",
      paragraph2: "Whether you need battery-powered solutions for easy deployment or hardwired systems for permanent luxury reliability, we integrate seamlessly."
    },
    neighborhoods: {
      heading: "Serving All Manhattan Neighborhoods",
      subheading: "We proudly provide custom window treatment installation throughout Manhattan, including:",
      list: ["Upper East Side", "Upper West Side", "Midtown", "Chelsea", "Tribeca", "SoHo", "Greenwich Village", "Financial District"]
    },
    process: {
      heading: "Our Manhattan Installation Process",
      subheading: "From consultation to installation, we make the entire process seamless and stress-free",
      steps: [
        { title: "Free Consultation", description: "We visit your Manhattan space with physical texture profiles and design samples.", iconName: "Calendar" },
        { title: "Custom Design & COI", description: "We map out your tracking engineering parameters and process required building documents.", iconName: "Ruler" },
        { title: "Professional Installation", description: "Our technical specialists construct, level, and clean up your setup flawlessly.", iconName: "CheckCircle2" }
      ]
    },
    video: {
      subheading: "Take a look at how we transform Manhattan apartments with custom motorized shades and premium window treatments.",
      youtubeId: "1qAdrxsL0k8"
    }
  },
  bergen: {
    title: "Bergen County",
    hero: {
      tagline: "BERGEN COUNTY'S PREMIER WINDOW TREATMENT SPECIALISTS",
      heading: "Custom Window Treatments for Bergen County Homes & Estates",
      subheading: "Expert installation of custom shades, blinds, and motorized solutions throughout Bergen County. Experienced with local estate blueprints and luxury design standards.",
      ctaPrimary: "Schedule Free Consultation",
      ctaLink: "/contact?location=bergen",
      phone: "877-779-6060",
      bgImage: bg1
    },
    intro: {
      heading: "Expert Window Shades & Motorized Blinds for Bergen County Residences",
      paragraph1: "Living in Bergen County comes with unique architectural styles and expansive views. From large floor-to-ceiling multi-panel setups in newly constructed estates to strict trim profiles on historic homes, your layout demands custom proportions.",
      paragraph2: "Whether you are looking to secure privacy on expansive properties or manage sun exposure over grand entryways, we match structures to your exact lighting needs."
    },
    features: {
      heading: "Why Bergen County Residents Choose Us",
      items: [
        { title: "Suburban Scale Expertise", description: "We coordinate expansive layouts, high walls, and full house integrations smoothly.", iconName: "Layers" },
        { title: "Bergen Architecture Specialists", description: "Deep familiarity managing estate frameworks, colonial builds, and classic trim styles.", iconName: "Compass" },
        { title: "In-Home Fabric Selection", description: "We transport full layout fabric arrays directly to your property to crosscheck with your home lighting.", iconName: "Sparkles" },
        { title: "Certified Family Safety", description: "Comprehensive specialization installing elite cordless profiles safe for children and pets.", iconName: "Wrench" }
      ]
    },
    products: {
      heading: "Custom Window Treatments for Bergen Estates",
      subheading: "We deliver an extensive selection of window adaptations engineered for massive home frameworks and classic window configurations.",
      items: [
        { title: "Automated Roller Shades", description: "Unified smart automation control setups perfect for towering panoramic windows.", productSlug: "motorized-shades" },
        { title: "Plantation Shutters", description: "Timeless interior real-wood window shutters offering elegant premium privacy control.", productSlug: "plantation-shutters" },
        { title: "Architectural Solar Profiles", description: "Control intense heat build-up across rooms while retaining clean backyard visibility.", productSlug: "solar-shades" },
        { title: "Custom Master Drapes", description: "Bespoke ceiling-to-floor flowing drapery paths tailored around premium fabrics.", productSlug: "custom-drapery" }
      ]
    },
    subSection: {
      heading: "Motorized Window Treatments for Bergen County Residences",
      paragraph1: "Suburban homes display multi-directional exposures across vast rooms. Walking around toggling manually is tedious; our configurations group shades into unified zone patterns handled instantly via voice controls or timers.",
      paragraph2: "We construct internal low-voltage wire routes or hide long-life rechargeable battery interfaces safely out of sight inside clean frame assemblies."
    },
    neighborhoods: {
      heading: "Serving All Bergen County Areas",
      subheading: "We proudly provide custom window treatment installation across northern New Jersey, including:",
      list: ["Paramus", "Ridgewood", "Saddle River", "Alpine", "Englewood", "Teaneck", "Fort Lee", "Mahwah"]
    },
    process: {
      heading: "Our Bergen Installation Process",
      subheading: "From layout discovery straight to clean implementation, your home transformation is simple",
      steps: [
        { title: "In-Home Mapping", description: "Our developers review your precise lighting exposures and check building elements on-site.", iconName: "Calendar" },
        { title: "Laser Measurement", description: "We map opening paths down to micro-millimeter levels via high-precision laser trackers.", iconName: "Ruler" },
        { title: "White-Glove Turnkey Setup", description: "Certified crews secure structural assemblies, run configurations, and handle complete clean-up tasks.", iconName: "CheckCircle2" }
      ]
    },
    video: {
      subheading: "Take a look at how we transform Bergen County spaces with advanced remote shades and custom setups.",
      youtubeId: "1qAdrxsL0k8"
    }
  }
};