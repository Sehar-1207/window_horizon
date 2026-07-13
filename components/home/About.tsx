"use client";

import React from "react";
import Link from "next/link"; 
import { Award, Calendar, Phone, Star } from "lucide-react";

const BRAND_GRADIENT = "gradient-gold-stone";
const phoneNo = "877-779-6060";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#faf6f0] text-[#3c332a] font-serif overflow-hidden">
      <div className="w-full border-b border-[#ebd9c7] px-4 py-4 md:py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8 text-xs sm:text-sm tracking-wide text-[#5a4f43]">
          
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#a38765]" strokeWidth={1.5} />
            <span>30+ years Experience</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-[#ebd9c7]" />

          <div className="flex items-center gap-2.5">
            <span className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#3c332a] flex-shrink-0">
              <span className="absolute w-full h-0.5 bg-[#3c332a]" />
              <span className="absolute h-full w-0.5 bg-[#3c332a]" />
              <span className="w-2 h-2 rounded-full bg-[#3c332a] z-10" />
            </span>
            <span className="font-sans font-bold text-[#1a1a1a]">
              Hunter Douglas <span className="font-serif font-normal text-[#5a4f43]">Authorized Dealer</span>
            </span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-[#ebd9c7]" />

          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 border border-[#a38765] rotate-45 transform flex-shrink-0" />
            <span>Free In-Home Consultation</span>
          </div>

        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 text-center flex flex-col items-center">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal leading-relaxed md:leading-[1.45] text-[#3c332a] max-w-3xl">
          Window Horizons provides custom window treatments for apartments and homes across New York City and Bergen County, NJ.
        </h2>

        <p className="mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-sans font-light text-[#5a4f43]/90 leading-relaxed max-w-2xl">
          We specialize in solar shades, blackout shades, honeycomb shades, and motorized window treatments designed for modern living and large windows.
        </p>

        <div className="mt-10 md:mt-12 w-full flex justify-center px-4">
          <Link 
            href="/contact" 
            className="bg-[#c5a059] w-auto max-w-full px-6 sm:px-12 py-4 text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase rounded-none shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 flex-shrink-0" strokeWidth={1.8} />
            <span className="truncate">Book In-Home Consultation</span>
          </Link>
        </div>

        <a 
          href={`tel:${phoneNo}`}
          className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-[#3c332a] hover:text-[#a38765] transition-colors text-xl sm:text-2xl md:text-[28px] font-normal tracking-wide max-w-full px-4 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#a38765]" strokeWidth={1.5} />
          <span className="tracking-widest tabular-nums">{phoneNo}</span>
        </a>

        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[10px] sm:text-xs tracking-widest uppercase font-sans font-medium text-[#5a4f43]">
          
          <div className="flex items-center gap-1.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>4.9 Yelp</span>
          </div>

          <span className="text-[#ebd9c7] hidden xs:inline">|</span>

          <div className="flex items-center gap-1.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>5.0 Google</span>
          </div>

          <span className="text-[#ebd9c7] hidden xs:inline">|</span>

          <div className="flex items-center gap-1.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>5.0 Houzz</span>
          </div>

        </div>

      </div>
    </section>
  );
}