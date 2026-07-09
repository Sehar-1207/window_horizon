import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bgImage from "../assets/customBlind1.jpg";

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[550px] md:h-[70vh] flex items-center justify-center bg-[#1c1917] overflow-hidden text-center px-6">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={bgImage}
          alt="Elegant dining room with window blinds"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center h-full py-16 md:py-24">
        
        <span className="text-[#c5a059] text-xs md:text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
          Window Horizons
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide leading-[1.15] max-w-4xl font-normal uppercase">
          Window Treatment Blog For<br />
          <span className="block mt-1">NYC & New Jersey</span>
        </h1>

        <div className="w-12 h-[1px] bg-[#c5a059] my-6" />

        <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light max-w-3xl leading-relaxed italic">
          Looking for the best window treatments in New York City and New Jersey? Our blog provides expert advice on shades, blinds, and motorized solutions. We cover everything from modern Manhattan apartments to Bergen County homes, helping you choose the right window treatments for your space.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b08e4b] text-white font-serif font-bold text-xs tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-200"
          >
            Free Consultation
          </Link>
          
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center border border-white/80 text-white font-serif font-bold text-xs tracking-[0.15em] uppercase px-8 py-4 bg-black/10 hover:bg-white/10 transition-colors duration-200"
          >
            Read Articles
          </Link>
        </div>

      </div>
    </section>
  );
}