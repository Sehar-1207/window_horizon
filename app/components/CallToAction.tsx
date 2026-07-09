import React from 'react';
import Link from 'next/link';

export default function CallToActionBanner() {
  return (
    <section className="w-full bg-[#c5a059] py-16 md:py-20 text-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-normal tracking-wide leading-tight">
          Ready to Transform Your Space?
        </h2>
        
        <p className="mt-4 text-base md:text-lg text-neutral-100 font-light max-w-2xl leading-relaxed">
          Let&apos;s create something beautiful together. Schedule your free consultation today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#c5a059] font-medium px-8 py-3.5 transition-all duration-200 text-sm md:text-base group shadow-sm hover:shadow-md rounded-sm"
          >
            Schedule Consultation 
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">›</span>
          </Link>
          
          <a 
            href="tel:877-779-6060"
            className="inline-flex items-center justify-center border border-white text-white font-medium px-8 py-3.5 bg-black/5 hover:bg-white/10 transition-colors duration-200 text-sm md:text-base tracking-wide rounded-sm"
          >
            Call 877-779-6060
          </a>
        </div>

      </div>
    </section>
  );
}