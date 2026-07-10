import { StaticImageData } from 'next/image';
import mainImg from "@/components/assets/service2.jpg";
import bg1 from "@/components/assets/customblind3.jpg";
import bg2 from "@/components/assets/shade3.jpg";
import bg3 from "@/components/assets/shade4.jpg";

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
    heroImage: bg3,
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
      { img: bg3, label: "Honeycomb - Kitchenette" },
      { img: bg3, label: "Honeycomb - Master Bedroom" }
    ],
    videoId: "qPsY4AKFlnM"
  },
  {
    slug: "silhouette-shades",
    title: "SILHOUETTE SHADES",
    subtitle: "THE ULTIMATE IN SOFT LIGHT DIFFUSION",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: bg2,
    heroDescription: "Transform harsh sunlight into a soft, ambient glow. Features unique S-shaped fabric vanes floating between two sheer panels.",
    italicIntro: "Our Silhouette® Window Shadings elevate residential luxury, offering adjustable privacy while casting beautiful, filtered daylight throughout your interior spaces.",
    keyBenefits: [
      "Diffuse blinding daylight into soft, natural room lighting",
      "S-shaped fabric vanes tilt easily for precise light filtering",
      "Blocks up to 88% of harmful UV rays even when vanes are wide open",
      "Preserves daytime privacy without completely closing off the world",
      "Unmatched luxury aesthetic with premium textile lines"
    ],
    bestForList: [
      { heading: "FORMAL DINING ROOMS", subheading: "Set an elegant mood with softened natural lighting." },
      { heading: "PRIMARY SUITES", subheading: "Achieve daytime peacefulness with premium sheer coverage." },
      { heading: "SUN-DRENCHED SPACES", subheading: "Shield high-end artwork and fine area rugs from bleaching sunspots." }
    ],
    hasComparison: false,
    motorTitle: "INTELLIGENT SHEER CONTROLS",
    motorSub: "Fine-tune your light filtering instantly. Program your Silhouette shades to tilt exactly to your favorite angles throughout the day.",
    motorBenefits: [
      "Tilt fabric fabric vanes perfectly with voice commands",
      "Completely cordless profiles for clean minimalist outlines",
      "Integrates with smart lighting scenes and automated home control hubs"
    ],
    installations: [
      { img: bg2, label: "Silhouette - High-Rise Parlor" },
      { img: bg2, label: "Silhouette - Master Suite Lounge" }
    ],
    videoId: "qPsY4AKFlnM"
  },
  {
    slug: "roller-shades",
    title: "ROLLER SHADES",
    subtitle: "CLEAN LINES AND MINIMALIST SOPHISTICATION",
    badge: "HUNTER DOUGLAS AUTHORIZED DEALER",
    heroImage: bg1,
    heroDescription: "A timeless classic re-engineered. Exceptional operation combined with a clean, low-profile look that vanishes when raised.",
    italicIntro: "Our Designer Roller Shades deliver precise operation and an expansive library of custom designer fabrics, patterns, and textures.",
    keyBenefits: [
      "Disappears entirely into sleek headers when raised for maximum viewing",
      "Hundreds of luxury textiles from sheer fabrics to total room blackout",
      "Flawless, balanced bottom-bar weight prevents swinging and uneven roll-ups",
      "Ergonomic custom top treatments hide mechanisms out of sight",
      "Extremely durable mechanisms engineered for smooth everyday performance"
    ],
    bestForList: [
      { heading: "MINIMALIST APARTMENTS", subheading: "Complements modern industrial and clean design trends seamlessly." },
      { heading: "HOME THEATERS & BEDROOMS", subheading: "Pair with blackout fabrics for absolute morning darkness." },
      { heading: "KITCHENS AND TRANSITIONAL AREAS", subheading: "Durable, high-utility window architecture that stays clean." }
    ],
    hasComparison: false,
    motorTitle: "SMART ROLLER AUTOMATION",
    motorSub: "Experience effortless motion. Control groups of multi-window arrays seamlessly with whispers-quiet internal motorized rollers.",
    motorBenefits: [
      "Raise or lower entire multi-window structural rows simultaneously",
      "Eliminate manual pull-cords for safety and visual minimalism",
      "Set custom scene height limits accurate to the exact millimeter"
    ],
    installations: [
      { img: bg1, label: "Roller Shades - Modern Kitchen" },
      { img: bg1, label: "Roller Shades - Downtown Studio" }
    ],
    videoId: "qPsY4AKFlnM"
  }
];