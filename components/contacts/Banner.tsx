import React from 'react';
import Link from 'next/link';
const phoneNo = "877-779-6060";
export default function ConsultationBanner() {
  return (
    <section className="w-full bg-[#c5a059] text-white py-16 px-6 text-center shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
    
        <p className="font-serif italic text-base md:text-lg text-white tracking-wide">
          Call us or request a free in-home consultation.
        </p>
        <p className="mt-1 font-serif text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase">
          We serve New York City and Bergen County, NJ.
        </p>

        <span className="mt-8 block font-serif text-[10px] md:text-xs font-bold tracking-[0.25em] text-white uppercase">
          Call Our Experts Directly
        </span>
        <p 
          className="mt-2 block font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-wide"
        >
          {phoneNo}
        </p>
        <p
          className="mt-4 block font-serif text-xl sm:text-2xl md:text-3xl text-white tracking-[0.15em] uppercase pb-1"
        >
          Free In-Home Consultation
        </p>
        <p className="mt-8 max-w-2xl font-serif italic text-sm md:text-base text-white leading-relaxed tracking-wide">
          We bring thousands of samples to your home and provide professional measurement and expert installation.
        </p>

      </div>
    </section>
  );
}