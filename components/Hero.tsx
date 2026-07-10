"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";

export type HeroAnimationType = "slideUpStagger" | "fadeIn" | "none";

interface HeroProps {
  imageSrc: StaticImageData | string;
  imageAlt: string;
  badge: string;
  badgeType?: "minimal" | "pill" | "shaded" | "portfolio";
  title: React.ReactNode;
  description: string;
  subDescription?: string;
  alignment?: "center" | "left";
  animationType?: HeroAnimationType;
  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonType?: "link" | "tel";
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
  badge,
  badgeType = "minimal",
  title,
  description,
  subDescription,
  alignment = "center",
  animationType = "slideUpStagger",
  showSecondaryButton = true,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonType = "link"
}: HeroProps) {
  const isStagger = animationType === "slideUpStagger";
  const activeVariants = animationType === "slideUpStagger" ? slideUpVariants : (animationType === "fadeIn" ? pureFadeVariants : {});

  const alignmentClasses = alignment === "left" 
    ? "items-start text-left pl-0 md:pl-8" 
    : "items-center text-center";

  return (
    <section className={`relative w-full ${alignment === 'center' ? 'min-h-screen' : 'min-h-[80vh]'} flex items-center overflow-hidden bg-zinc-950 px-4 sm:px-6 md:px-12 pt-12 pb-16 sm:pt-16 sm:pb-24 ${alignment === 'left' ? 'justify-start' : 'justify-center'}`}>
      <div className="absolute inset-0 scale-105 select-none pointer-events-none z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />
        {alignment === "left" && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent md:bg-black/20" />
        )}
      </div>

      <motion.div 
        variants={isStagger ? containerVariants : undefined}
        initial={animationType !== "none" ? "hidden" : undefined}
        animate={animationType !== "none" ? "visible" : undefined}
        className={`relative z-10 w-full max-w-7xl mx-auto flex flex-col select-none ${alignmentClasses}`}
      >
        {badge && (
          <motion.div variants={activeVariants} className={alignment === 'left' ? 'mb-5 md:mb-7' : 'w-full'}>
            {badgeType === "minimal" && alignment === "center" && !subDescription && (
              <span className="text-white/90 text-xs sm:text-sm md:text-lg tracking-[0.05em] font-sans font-light max-w-[280px] xs:max-w-xs sm:max-w-none leading-relaxed block mt-4 sm:mt-6 md:mt-8 order-3">
                {badge}
              </span>
            )}
            {badgeType === "minimal" && (alignment !== "center" || subDescription) && (
              <span className="text-[#c5a059] text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-4 block">
                {badge}
              </span>
            )}
            {badgeType === "pill" && (
              <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-[#cda377] bg-[#2b221b]/60 border border-[#cda377]/40 px-6 py-2.5 rounded-full uppercase">
                {badge}
              </span>
            )}
            {badgeType === "shaded" && (
              <span className="inline-block bg-[#c5a059]/25 text-[#e2d5c3] text-sm md:text-base tracking-widest uppercase font-semibold px-5 py-2 rounded-md backdrop-blur-sm border border-[#c5a059]/40">
                {badge}
              </span>
            )}
            {badgeType === "portfolio" && (
              <span className="inline-block bg-[#c5a059]/25 text-[#e2d5c3] text-sm md:text-base tracking-widest uppercase font-semibold px-5 py-2 rounded-md backdrop-blur-sm border border-[#c5a059]/40">
                {badge}
              </span>
            )}
          </motion.div>
        )}

        <motion.h1 
          variants={activeVariants}
          className={`text-white font-serif font-normal uppercase tracking-[0.05em] w-full ${
            alignment === 'center' && !subDescription
              ? 'text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.2] sm:leading-[1.1]'
              : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[1.1] max-w-5xl'
          }`}
        >
          {title}
        </motion.h1>

        {alignment === "center" && subDescription && (
          <motion.div variants={activeVariants} className="w-16 h-[1px] bg-[#c5a059] my-6" />
        )}

        <motion.p 
          variants={activeVariants}
          className={
            subDescription || badgeType === "portfolio"
              ? "text-lg sm:text-xl md:text-2xl text-neutral-100 font-light max-w-4xl leading-relaxed italic mt-4"
              : alignment === "center"
                ? "text-white/95 text-lg xs:text-xl sm:text-3xl md:text-[32px] font-serif font-light tracking-wide mt-4 sm:mt-6"
                : "text-lg md:text-xl lg:text-2xl font-light text-white/95 max-w-3xl leading-relaxed drop-shadow-sm mt-4"
          }
        >
          {description}
        </motion.p>

        {subDescription && (
          <motion.p 
            variants={activeVariants}
            className="text-white/90 text-xs sm:text-sm md:text-lg tracking-[0.05em] font-sans font-light mt-5 sm:mt-8 md:mt-10 max-w-[280px] xs:max-w-xs sm:max-w-none leading-relaxed"
          >
            {subDescription}
          </motion.p>
        )}

        <motion.div 
          variants={activeVariants} 
          className={`w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10 sm:mt-12 ${
            alignment === 'center' ? 'justify-center px-4 sm:w-auto' : 'justify-start'
          }`}
        >
          <motion.button 
            whileHover={animationType !== "none" ? { scale: 1.02, y: -1 } : undefined}
            whileTap={animationType !== "none" ? { scale: 0.98 } : undefined}
            className={
              alignment === 'center' && !subDescription
                ? "bg-[#c5a059] w-auto max-w-full px-8 sm:px-12 py-4 sm:py-5 text-white font-sans text-xs sm:text-base font-medium tracking-[0.12em] uppercase rounded-none shadow-xl flex items-center justify-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap"
                : alignment === 'left' && badgeType === 'pill'
                  ? "mt-2 inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-[#895C09] text-white text-sm md:text-base font-semibold tracking-widest px-8 py-4.5 transition-all duration-200 active:scale-[0.98] uppercase"
                  : "inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b08e4b] text-white font-serif font-bold text-sm tracking-[0.15em] uppercase px-10 py-4.5 transition-colors duration-200"
            }
            onClick={() => window.location.href = '/contact'}
          >
            {alignment === 'center' && !subDescription && <Calendar className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />}
            <span className="truncate">
              {badgeType === 'portfolio' ? 'Start Your Project' : 'Book Free Consultation'}
            </span>
            {alignment === 'left' && badgeType === 'pill' && <FaChevronRight className="text-sm" />}
            {badgeType === 'portfolio' && <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">›</span>}
          </motion.button>

          {showSecondaryButton && secondaryButtonText && (
            secondaryButtonType === "tel" ? (
              <motion.a 
                href={`tel:${secondaryButtonHref}`}
                variants={activeVariants}
                whileHover={animationType !== "none" ? { scale: 1.03 } : undefined}
                className="mt-6 sm:mt-0 flex items-center justify-center gap-3 text-white/90 font-serif text-base sm:text-lg md:text-xl tracking-wide hover:text-white transition-colors cursor-pointer max-w-full px-4 overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={1.5} />
                </span>
                <span className="tracking-widest text-sm sm:text-lg tabular-nums">{secondaryButtonText}</span>
              </motion.a>
            ) : (
              <Link 
                href={secondaryButtonHref || "#"}
                className={
                  badgeType === 'portfolio'
                    ? "inline-flex items-center justify-center border border-white text-white font-medium px-10 py-4 bg-black/10 hover:bg-white/10 transition-colors duration-200 text-base tracking-wide"
                    : "inline-flex items-center justify-center border border-white/80 text-white font-serif font-bold text-sm tracking-[0.15em] uppercase px-10 py-4.5 bg-black/10 hover:bg-white/10 transition-colors duration-200"
                }
              >
                {secondaryButtonText}
              </Link>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}