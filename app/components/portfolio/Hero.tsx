import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hero from "../assets/customblind3.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[80vh] flex items-center bg-[#1c1917] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={hero}
          alt="Luxury living room with custom window treatments"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full flex flex-col justify-center h-full">
        
        <div className="mb-6">
          <span className="inline-block bg-[#c5a059]/30 text-[#e2d5c3] text-xs md:text-sm tracking-widest uppercase font-semibold px-4 py-1.5 rounded-md backdrop-blur-sm border border-[#c5a059]/40">
            Showcasing Our Expertise
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide leading-[1.15] max-w-4xl font-normal uppercase">
          Window Treatment Portfolio:<br />
          <span className="block mt-1">Manhattan & Bergen County</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 font-light max-w-2xl leading-relaxed italic">
          Explore our collection of premium custom window treatment installations—from high-rise Manhattan condos to sprawling estates in Bergen County NJ.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b08e4b] text-white font-medium px-8 py-3.5 transition-colors duration-200 text-sm md:text-base group"
          >
            Start Your Project 
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">›</span>
          </Link>
          
          <a 
            href="tel:877-779-6060"
            className="inline-flex items-center justify-center border border-white text-white font-medium px-8 py-3.5 bg-black/10 hover:bg-white/10 transition-colors duration-200 text-sm md:text-base tracking-wide"
          >
            Call 877-779-6060
          </a>
        </div>

      </div>
    </section>
  );
}