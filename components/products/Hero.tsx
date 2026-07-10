"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type HeroAnimationType = "slideUpStagger" | "fadeIn" | "none";

interface TagHeroProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: React.ReactNode;
  description: string;
  animationType?: HeroAnimationType;
}

const tagItems = [
  { label: "Solar Shades", href: "/products/solar-shades" },
  { label: "Honeycomb Shades", href: "/products/honeycomb-shades" },
  { label: "Silhouette® Shades", href: "/products/silhouette-shades" },
  { label: "Blackout Roller Shades", href: "/products/roller-shades" },
  { label: "Roman Shades", href: "/products/roman-shades" },
  { label: "Real Wood Blinds", href: "/products/wood-blinds" },
  { label: "Faux Wood Blinds", href: "/products/faux-wood" },
  { label: "Vertical Blinds", href: "/products/vertical-blinds" },
  { label: "Motorized Solutions", href: "/products/motorized" },
  { label: "Pirouette® Shadings", href: "/products/pirouette" }
];

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  },
};

const pureFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } }
};

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  description,
  animationType = "slideUpStagger"
}: TagHeroProps) {
  const isStagger = animationType === "slideUpStagger";
  const activeVariants = animationType === "slideUpStagger" ? slideUpVariants : (animationType === "fadeIn" ? pureFadeVariants : {});

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-4 sm:px-6 md:px-12 pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="absolute inset-0 scale-105 select-none pointer-events-none z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <motion.div 
        variants={isStagger ? containerVariants : undefined}
        initial={animationType !== "none" ? "hidden" : undefined}
        animate={animationType !== "none" ? "visible" : undefined}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center select-none"
      >
        <motion.h1 
          variants={activeVariants}
          className="text-white font-serif font-normal uppercase tracking-[0.05em] w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.2] sm:leading-[1.15] max-w-5xl"
        >
          {title}
        </motion.h1>

        <motion.p 
          variants={activeVariants}
          className="text-white/95 text-base xs:text-lg sm:text-xl md:text-2xl font-serif font-light tracking-wide italic max-w-4xl leading-relaxed mt-6 sm:mt-8"
        >
          {description}
        </motion.p>

        <motion.div 
          variants={activeVariants}
          className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-12 sm:mt-16"
        >
          {tagItems.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              className="bg-white hover:bg-[#c5a059] text-gray-800 hover:text-white font-sans text-[11px] sm:text-xs md:text-[13px] font-medium tracking-wide px-4 sm:px-6 py-2.5 sm:py-3.5 transition-all duration-200 shadow-md transform hover:-translate-y-0.5 whitespace-nowrap block"
            >
              {tag.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}