import React from 'react';
import { Sparkles, Ruler, Wrench, Zap } from 'lucide-react';

export default function WhatWeOffer() {
  const services = [
    {
      icon: <Sparkles className="text-[#c5a059] w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />,
      title: "FREE IN-HOME CONSULTATION",
      desc: "We bring samples to your home and help you choose the best solution."
    },
    {
      icon: <Ruler className="text-[#c5a059] w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />,
      title: "PROFESSIONAL MEASURING",
      desc: "Accurate measurements for a perfect fit, including large and custom windows."
    },
    {
      icon: <Wrench className="text-[#c5a059] w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />,
      title: "EXPERT INSTALLATION",
      desc: "Our certified team ensures your window treatments are installed flawlessly.",
    },
    {
      icon: <Zap className="text-[#c5a059] w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />,
      title: "MOTORIZATION & AUTOMATION",
      desc: "Control your shades effortlessly with smart home integration and remotes."
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[0.15em] md:tracking-[0.2em] text-[#0d1b2a] uppercase">
          What We Offer
        </h2>
        <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 sm:p-8 md:p-10 rounded-sm transition-all duration-300 border-2 border-transparent hover:border-[#c5a059] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] md:hover:translate-y-[-4px] min-h-[220px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-center items-start"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#fcf9f3] mb-5 md:mb-6 shrink-0">
              {service.icon}
            </div>

            <h3 className="font-serif text-base md:text-lg lg:text-xl font-normal tracking-wide text-[#0d1b2a] mb-2.5 uppercase">
              {service.title}
            </h3>

            <p className="text-[#555555] text-sm md:text-base font-light leading-relaxed max-w-xl">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}