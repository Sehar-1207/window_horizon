import React from 'react';
import { Phone } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-wide text-[#2b221b] leading-[1.15] uppercase mb-6 max-w-4xl">
          Schedule Your Free<br className="hidden sm:inline" /> In-Home Consultation
        </h2>

        <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#6b6155] max-w-2xl leading-relaxed mb-10 md:mb-12">
          Let our experts handle everything from measurement to final installation.<br className="hidden sm:inline" />
          We bring samples directly to your door.
        </p>

        <button
          type="button"
          className="w-full sm:w-auto px-10 sm:px-12 py-4 font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-white uppercase rounded-sm bg-[#c5a059] hover:opacity-95 shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 transform active:scale-[0.99]"
        >
          Book Free Consultation
        </button>

        <div className="w-full max-w-[280px] sm:max-w-xs flex items-center justify-center gap-4 my-10 md:my-12">
          <div className="h-[1px] flex-1 bg-gray-300/80" />
          <span className="font-serif italic text-sm sm:text-base text-gray-400 select-none">OR</span>
          <div className="h-[1px] flex-1 bg-gray-300/80" />
        </div>

        <p
          className="inline-flex items-center gap-4 sm:gap-5 group transition-colors duration-300"
        >
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 bg-white shadow-sm group-hover:border-[#c5a059] transition-all duration-300 shrink-0">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b221b] group-hover:text-[#c5a059] transition-colors duration-300" />
          </div>
          <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#2b221b] tracking-tight group-hover:text-[#c5a059] transition-colors duration-300 select-all">
            877-779-6060
          </span>
        </p>

      </div>
    </section>
  );
}