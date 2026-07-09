"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import product from "../assets/service1.jpg"
import product1 from "../assets/customBlind1.jpg"
import product2 from "../assets/customblind2.jpg"
import product3 from "../assets/customblind3.jpg"
import product4 from "../assets/customblinds4.jpg"

interface ProductItem {
  id: number;
  category: string;
  imageSrc: string |StaticImageData; 
  title: string;
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 1,
    category: "Motorized Shades",
    imageSrc:product,
    title: "PowerView® Automation Experts",
    description: "Effortless control via Pebble® Remote, app, or voice command. We specialize in seamless smart-home integration for modern NYC living.",
  },
  {
    id: 2,
    category: "Solar Shades",
    imageSrc: product1,
    title: "UV Protection & View Preservation",
    description: "Eliminate glare and protect your fine furnishings while maintaining iconic Manhattan skyline or lush Bergen County views.",
  },
  {
    id: 3,
    category: "Blackout Roller Shades",
    imageSrc: product2,
    title: "Premium Room Darkening Solutions",
    description: "Achieve absolute serenity and complete darkness for master bedrooms and media rooms. Essential for high-rise urban living.",
  },
  {
    id: 4,
    category: "Honeycomb / Cellular Shades",
    imageSrc:product3,
    title: "Duette® Architella Energy Efficiency",
    description: "Architectural cellular design that provides superior insulation, keeping your home comfortable in every season.",
  },
  {
    id: 5,
    category: "Silhouette Shades",
    imageSrc: product4,
    title: "A Deux™ Light-Diffusing Elegance",
    description: "Soft fabric S-vanes that float between sheer facings, transforming harsh sunlight into a luxurious, warm ambient glow.",
  },
  {
    id: 6,
    category: "Blinds & Custom Solutions",
    imageSrc: product,
    title: "Bespoke Wood & Designer Blinds",
    description: "Timeless hardwood craftsmanship with modern operation. Custom solutions tailored for any window shape or size.",
  },
];

export default function ProductsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-16 md:mb-20"
        >
          <div className="hidden xs:block h-px w-12 sm:w-16 bg-[#cbb396]" />
          <h2 className="text-[#3a2f28] text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal tracking-[0.25em] uppercase text-center whitespace-nowrap">
            Our Products
          </h2>
          <div className="hidden xs:block h-px w-12 sm:w-16 bg-[#cbb396]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20 items-start"
        >
          {PRODUCTS_DATA.map((product) => (
            <motion.div 
              key={product.id} 
              variants={slideUpVariants}
              className="w-full flex flex-col items-center text-center group"
            >
              <div className="w-full border-t border-[#ebd9c7] pt-4 mb-4">
                <h3 className="text-[#102a43] font-serif text-lg sm:text-xl md:text-[22px] font-semibold tracking-wide">
                  {product.category}
                </h3>
              </div>

              <div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden mb-6 shadow-sm">
                <Image
                  src={product.imageSrc}
                  alt={product.category}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <h4 className="text-[#634832] font-serif text-sm sm:text-base font-bold tracking-wide max-w-[90%] leading-snug">
                {product.title}
              </h4>

              <p className="mt-3 text-[#486581] font-serif text-xs sm:text-sm font-normal leading-relaxed max-w-[88%] tracking-normal">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}