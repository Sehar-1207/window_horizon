"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureItem {
  id: number;
  text: string;
}

const FEATURES_DATA: FeatureItem[] = [
  { id: 1, text: "Over 30 years of experience in custom window treatments" },
  { id: 2, text: "Hunter Douglas products and premium materials" },
  { id: 3, text: "Free shop-at-home consultation service" },
  { id: 4, text: "Professional measuring and installation" },
  { id: 5, text: "Expertise with large and floor-to-ceiling windows" },
  { id: 6, text: "Serving NYC and Bergen County, NJ" },
];

export default function WhyChooseSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#c5a059] text-white py-12 xs:py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 xs:px-6 lg:px-8 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center select-none w-full"
        >
          <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-snug sm:leading-tight max-w-full break-words">
            Why Choose Window Horizons
          </h2>
          
          <div className="w-16 h-[2px] bg-[#E6D0B7] mt-3 sm:mt-4 mb-5 sm:mb-6 md:mb-8" />

          <p className="text-white/80 font-serif font-light text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed tracking-wide px-1 sm:px-2">
            For over 30 years, we&apos;ve been the trusted choice for custom window treatments across 
            NYC and New Jersey. As a certified Hunter Douglas dealer, we combine premium products 
            with expert installation and personalized service.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12 md:mt-16"
        >
          {FEATURES_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={slideUpVariants}
              whileHover={{ 
                scale: 1.01, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(230, 208, 183, 0.2)"
              }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-white/[0.04] border border-white/[0.06] rounded-lg p-3.5 xs:p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-colors duration-300 cursor-pointer shadow-sm select-none"
            >
              <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full bg-[#E6D0B7] text-[#332A19] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-[#332A19]" strokeWidth={3} />
              </div>

              <span className="text-white/95 font-serif text-xs sm:text-sm md:text-base font-light tracking-wide leading-snug flex-1">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}