"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import Image from "next/image";
import hero from "../assets/customblind2.jpg";

const BRAND_GRADIENT = "gradient-gold-stone";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1] 
      }
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-16 sm:py-24">
      <div className="absolute inset-0 scale-105 select-none pointer-events-none">
        <Image
          src={hero}
          alt="Custom Window Treatments Banner"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 xs:px-6 text-center flex flex-col items-center select-none"
      >
        <motion.h1 
          variants={slideUpVariants}
          className="text-white text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-light tracking-[0.05em] uppercase font-serif leading-[1.25] sm:leading-[1.15] w-full"
        >
          Custom Window <br className="xs:inline" /> Treatments
        </motion.h1>

        <motion.p 
          variants={slideUpVariants}
          className="text-white/95 text-base xs:text-lg sm:text-2xl md:text-[26px] font-serif font-light tracking-wide mt-3 sm:mt-5"
        >
          in NYC & New Jersey
        </motion.p>

        <motion.p 
          variants={slideUpVariants}
          className="text-white/80 text-[11px] xs:text-xs sm:text-sm md:text-base tracking-[0.04em] font-sans font-light mt-6 sm:mt-10 md:mt-12 max-w-[260px] xs:max-w-xs sm:max-w-none leading-relaxed"
        >
          Free In-Home Consultation • Shades, Blinds & Motorized Solutions
        </motion.p>

        <motion.div variants={slideUpVariants} className="mt-8 w-sm xs:w-auto px-4 xs:px-0">
          <motion.button 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`${BRAND_GRADIENT} w-full xs:w-auto px-5 py-3.5 sm:px-10 sm:py-4 text-white font-sans text-[11px] sm:text-sm font-medium tracking-[0.12em] uppercase rounded-none shadow-xl flex items-center justify-center gap-2.5`}
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" strokeWidth={1.5} />
            <span className="truncate">Book Free Consultation</span>
          </motion.button>
        </motion.div>

        <motion.a 
          href="tel:8777796060"
          variants={slideUpVariants}
          whileHover={{ scale: 1.03 }}
          className="mt-6 flex items-center gap-2 text-white/90 font-serif text-sm sm:text-base md:text-lg tracking-wide hover:text-white transition-colors cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex-shrink-0">
            <Phone className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" strokeWidth={1.5} />
          </span>
          <span className="tracking-widest text-xs sm:text-base">877-779-6060</span>
        </motion.a>
      </motion.div>
    </section>
  );
}