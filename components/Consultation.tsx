"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const phoneNo = "877-779-6060";

export function ConsultationCTA() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden border-b border-[#ebd9c7]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        <h2 className="text-[#3c332a] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-light tracking-[0.15em] uppercase leading-tight max-w-2xl select-none">
          Book Your Free In-Home Consultation
        </h2>

        <p className="mt-6 text-[#5a4f43]/85 font-sans font-light text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed tracking-wide px-2">
          We bring samples directly to your home, provide expert advice, and handle full professional installation.
        </p>

        <div className="mt-10 w-full flex flex-col items-center gap-6 px-4">
          <Link 
            href="/contact"
            className="w-auto max-w-full bg-[#c5a059] hover:bg-[#E8B65A] text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-6 sm:px-10 py-4 shadow-[0_4px_14px_rgba(164,122,76,0.25)] active:scale-[0.99] transition-all rounded-none overflow-hidden text-ellipsis whitespace-nowrap inline-flex items-center justify-center"
          >
            Schedule Consultation Today
          </Link>

          <a
            href={`tel:${phoneNo}`}
            className="group flex items-center gap-3 text-[#3c332a] hover:text-[#a47a4c] font-serif text-lg sm:text-xl md:text-2xl font-normal tracking-wide transition-colors duration-200 mt-2"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#ebd9c7]/50 flex items-center justify-center text-[#a47a4c] shadow-sm group-hover:border-[#a47a4c]/50 transition-colors">
              <Phone className="w-4 h-4 fill-current" />
            </span>
            <span className="tabular-nums">{phoneNo}</span>
          </a>
        </div>

      </div>
    </section>
  );
}