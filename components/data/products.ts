import { StaticImageData } from 'next/image';
import mainImg from "@/components/assets/customblind3.jpg";

export interface ComparisonBlock {
  title: string;
  points: string[];
}

export interface BestForBlock {
  heading: string;
  subheading: string;
}

export interface ProductData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: StaticImageData;
  heroDescription: string;
  italicIntro: string;
  keyBenefits: string[];
  bestForList: BestForBlock[];
  hasComparison: boolean;
  comparisonHeader?: string;
  comparisonSub?: string;
  leftCompare?: ComparisonBlock;
  rightCompare?: ComparisonBlock;
  motorTitle: string;
  motorSub: string;
  motorBenefits: string[];
  installations: { img: StaticImageData; label: string }[];
  videoId: string;
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: "solar-shades",
    title: "SOLAR SHADES",
    subtitle: "LIGHT CONTROL WITHOUT LOSING YOUR VIEW",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: mainImg,
    heroDescription: "Reduce glare, protect your furniture, and maintain your outside view with modern solar shades. Ideal for apartments and homes with large windows and strong sunlight.",
    italicIntro: "Our Designer Solar Shades are specifically engineered to curb heat gain and block harmful UV rays, preserving your furniture and flooring without sacrificing your Manhattan skyline or Bergen County landscape.",
    keyBenefits: [
      "Reduce glare on TVs and screens",
      "Protect floors and furniture from UV damage",
      "Maintain your outside view",
      "Improve comfort by reducing heat",
      "Clean, modern look for any space",
      "Available in manual or motorized operation"
    ],
    bestForList: [
      { heading: "LIVING ROOMS", subheading: "Perfect for rooms with strong sunlight." },
      { heading: "FLOOR-TO-CEILING WINDOWS", subheading: "Ideal for modern Manhattan high-rises." },
      { heading: "APARTMENTS WITH CITY VIEWS", subheading: "Protect your furniture without blocking the skyline." },
      { heading: "OFFICES AND TV ROOMS", subheading: "Eliminate screen glare for work and entertainment." },
      { heading: "MODERN DESIGN", subheading: "For homeowners looking for a clean, minimal look." }
    ],
    hasComparison: true,
    comparisonHeader: "3% VS 5% OPENNESS – WHAT'S THE DIFFERENCE?",
    comparisonSub: "We help you choose the right option based on your sunlight exposure and privacy needs.",
    leftCompare: {
      title: "3% OPENNESS",
      points: ["More privacy", "Better glare and heat reduction", "Slightly less visibility"]
    },
    rightCompare: {
      title: "5% OPENNESS",
      points: ["Brighter room", "Better outside view", "Slightly less heat protection"]
    },
    motorTitle: "MOTORIZED SOLAR SHADES",
    motorSub: "Upgrade your solar shades with motorization for convenience and comfort. Perfect for modern smart homes and large windows.",
    motorBenefits: [
      "Control shades with remote or app",
      "Perfect for large or hard-to-reach windows",
      "Smooth and quiet operation",
      "Ideal for modern smart homes"
    ],
    installations: [
      { img: mainImg, label: "Solar Shades - Patio Deck" },
      { img: mainImg, label: "Solar Shades - Manhattan" },
      { img: mainImg, label: "Solar Shades - Living Lounge" },
      { img: mainImg, label: "Solar Shades - Minimal Bedroom" }
    ],
    videoId: "qPsY4AKFlnM"
  },
  {
    slug: "honeycomb-shades",
    title: "HONEYCOMB SHADES",
    subtitle: "MAXIMUM INSULATION AND CLIMATE COMFORT",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: mainImg,
    heroDescription: "Trap air inside specialized cellular pockets to lower energy dependency. The ultimate treatment choice for fluctuating tri-state seasons.",
    italicIntro: "Our Duette® Honeycomb Shades provide custom dimensional texture and precision temperature control across drafty window exposures year-round.",
    keyBenefits: [
      "Substantially lower seasonal cooling costs",
      "Absorb outside city street noises effectively",
      "Crisp, consistent pleats that never sag",
      "Disappearing low-profile stacking profiles",
      "Top-down or bottom-up manual arrangements",
      "Industry leading thermal barrier construction"
    ],
    bestForList: [
      { heading: "BEDROOMS", subheading: "Create absolute thermal insulation and acoustic calm." },
      { heading: "DRAFTY BREAKFAST NOOKS", subheading: "Keep dining parameters comfortable during winter chills." },
      { heading: "HISTORIC HOME RESTORATIONS", subheading: "Add high-efficiency performance to older single-pane windows." }
    ],
    hasComparison: false,
    motorTitle: "AUTOMATED CELLULAR SHADING",
    motorSub: "Schedule your honeycomb window pockets to coordinate with morning sunshine automatically using PowerView® automation systems.",
    motorBenefits: [
      "Sync seamlessly with local climate triggers",
      "Cordless designs protect pets and children",
      "Voice command activation compatibility",
      "Optimize continuous home temperature zones"
    ],
    installations: [
      { img: mainImg, label: "Honeycomb - Kitchenette" },
      { img: mainImg, label: "Honeycomb - Master Bedroom" }
    ],
    videoId: "qPsY4AKFlnM"
  },
   {
    slug: "silhouette-shades",
    title: "SILHOUETTE SHADES",
    subtitle: "MAXIMUM INSULATION AND CLIMATE COMFORT",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: mainImg,
    heroDescription: "Trap air inside specialized cellular pockets to lower energy dependency. The ultimate treatment choice for fluctuating tri-state seasons.",
    italicIntro: "Our Duette® Honeycomb Shades provide custom dimensional texture and precision temperature control across drafty window exposures year-round.",
    keyBenefits: [
      "Substantially lower seasonal cooling costs",
      "Absorb outside city street noises effectively",
      "Crisp, consistent pleats that never sag",
      "Disappearing low-profile stacking profiles",
      "Top-down or bottom-up manual arrangements",
      "Industry leading thermal barrier construction"
    ],
    bestForList: [
      { heading: "BEDROOMS", subheading: "Create absolute thermal insulation and acoustic calm." },
      { heading: "DRAFTY BREAKFAST NOOKS", subheading: "Keep dining parameters comfortable during winter chills." },
      { heading: "HISTORIC HOME RESTORATIONS", subheading: "Add high-efficiency performance to older single-pane windows." }
    ],
    hasComparison: false,
    motorTitle: "AUTOMATED CELLULAR SHADING",
    motorSub: "Schedule your honeycomb window pockets to coordinate with morning sunshine automatically using PowerView® automation systems.",
    motorBenefits: [
      "Sync seamlessly with local climate triggers",
      "Cordless designs protect pets and children",
      "Voice command activation compatibility",
      "Optimize continuous home temperature zones"
    ],
    installations: [
      { img: mainImg, label: "Honeycomb - Kitchenette" },
      { img: mainImg, label: "Honeycomb - Master Bedroom" }
    ],
    videoId: "qPsY4AKFlnM"
  },
   {
    slug: "roller-shades",
    title: "Roller SHADES",
    subtitle: "MAXIMUM INSULATION AND CLIMATE COMFORT",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: mainImg,
    heroDescription: "Trap air inside specialized cellular pockets to lower energy dependency. The ultimate treatment choice for fluctuating tri-state seasons.",
    italicIntro: "Our Duette® Honeycomb Shades provide custom dimensional texture and precision temperature control across drafty window exposures year-round.",
    keyBenefits: [
      "Substantially lower seasonal cooling costs",
      "Absorb outside city street noises effectively",
      "Crisp, consistent pleats that never sag",
      "Disappearing low-profile stacking profiles",
      "Top-down or bottom-up manual arrangements",
      "Industry leading thermal barrier construction"
    ],
    bestForList: [
      { heading: "BEDROOMS", subheading: "Create absolute thermal insulation and acoustic calm." },
      { heading: "DRAFTY BREAKFAST NOOKS", subheading: "Keep dining parameters comfortable during winter chills." },
      { heading: "HISTORIC HOME RESTORATIONS", subheading: "Add high-efficiency performance to older single-pane windows." }
    ],
    hasComparison: false,
    motorTitle: "AUTOMATED CELLULAR SHADING",
    motorSub: "Schedule your honeycomb window pockets to coordinate with morning sunshine automatically using PowerView® automation systems.",
    motorBenefits: [
      "Sync seamlessly with local climate triggers",
      "Cordless designs protect pets and children",
      "Voice command activation compatibility",
      "Optimize continuous home temperature zones"
    ],
    installations: [
      { img: mainImg, label: "Honeycomb - Kitchenette" },
      { img: mainImg, label: "Honeycomb - Master Bedroom" }
    ],
    videoId: "qPsY4AKFlnM"
  }
];