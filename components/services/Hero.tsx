import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import hero from "../assets/service1.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-start px-6 md:px-12 py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={hero} 
          alt="Expert Window Treatment Services" 
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col items-start gap-4 md:gap-6 text-white pl-0 md:pl-8">
        
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#cda377] bg-[#2b221b]/60 border border-[#cda377]/40 px-5 py-2 rounded-full uppercase">
          Our Services
        </span>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide max-w-4xl leading-[1.15] drop-shadow-md">
          Expert Window Treatment Services
        </h1>

        <p className="text-base md:text-lg lg:text-xl font-light text-white/95 max-w-2xl leading-relaxed drop-shadow-sm">
          From free in-home consultations to professional installation, we handle every detail for your dream windows.
        </p>

        <button 
          type="button"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#895C09 ] text-white text-xs md:text-sm font-semibold tracking-widest px-7 py-4 transition-all duration-200 active:scale-[0.98] uppercase"
        >
          Book Free Consultation
          <FaChevronRight className="text-xs" />
        </button>

      </div>
    </section>
  );
}