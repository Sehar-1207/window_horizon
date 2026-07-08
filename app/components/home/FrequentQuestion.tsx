"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the cost of custom shades in NYC and Bergen County?",
    answer: "Custom window treatment costs vary based on window size, fabric selection, and features like motorization. On average, quality custom shades range from $200-$800 per window. Hunter Douglas products typically start at $300 per window. We provide a free in-home consultation with accurate measurements and detailed quotes tailored to your specific needs and budget.",
  },
  {
    question: "How long does installation take in Manhattan and Bergen County?",
    answer: "Most residential installations are completed in 2-4 hours depending on the number of windows. For larger projects or commercial spaces, installation may take 1-2 days. We coordinate with building management in NYC high-rises and provide all necessary COI documentation. Our professional installers work efficiently to minimize disruption to your daily routine.",
  },
  {
    question: "Do you offer motorized window treatments?",
    answer: "Yes! We specialize in Hunter Douglas PowerView® motorization, allowing you to control your shades via smartphone, tablet, voice commands (Alexa, Google Home), or remote control. Motorized shades are perfect for hard-to-reach windows, large windows, and smart home integration. Battery-powered and hardwired options are available.",
  },
  {
    question: "What are the best window treatments for energy efficiency in New York Winter?",
    answer: "Hunter Douglas honeycomb shades (Duette® and Applause®) are excellent for energy efficiency, featuring cellular construction that traps air and provides insulation. They can reduce heat loss by up to 40% in winter and heat gain in summer. For maximum efficiency, consider top-down/bottom-up options and motorization for optimal light and temperature control throughout the day.",
  },
  {
    question: "How do I choose between blackout and solar shades?",
    answer: "Solar shades reduce glare and UV rays while preserving your view, making them ideal for living areas and offices. Blackout shades block out light completely, providing absolute privacy and dark room conditions perfect for bedrooms and media rooms.",
  },
  {
    question: "Do you serve specific neighborhoods in Manhattan and Bergen County?",
    answer: "Yes, we serve all areas across Manhattan, Brooklyn, and Queens, as well as towns throughout Bergen County, NJ. Our team is fully equipped to handle high-rise building regulations and residential home installations alike.",
  },
  {
    question: "What is the warranty on Hunter Douglas products?",
    answer: "Hunter Douglas offers industry-leading limited lifetime warranties on most products, covering defects in materials and workmanship. Motorization components typically have a 5-year warranty. We stand behind all our installations and provide ongoing support for adjustments, repairs, and warranty claims.",
  },
  {
    question: "Can you match window treatments to my interior design style?",
    answer: "Absolutely. Our design experts work closely with you during the free consultation to choose textures, colors, and operational systems that perfectly complement your interior décor, whether modern, traditional, or transitional.",
  },
];

export default function FrequentQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(6);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAF6F0] py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center flex flex-col items-center select-none mb-12 md:mb-16">
          <h2 className="text-[#3c332a] text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-serif font-normal tracking-[0.2em] uppercase leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-[#cbb396] mt-4 mb-5" />
          <p className="text-[#5a4f43]/80 font-sans text-xs sm:text-sm tracking-wide max-w-2xl px-2">
            Common questions about custom window treatments in Manhattan and Bergen County
          </p>
        </div>

        <div className="space-y-4 w-full">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-none border transition-all duration-300 ${
                  isOpen ? "border-[#cbb396] shadow-sm" : "border-[#ebd9c7]/40"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 sm:px-6 sm:py-5 gap-4 group"
                >
                  <span className="text-[#3c332a] font-serif font-normal text-sm sm:text-base md:text-[17px] tracking-wide leading-snug group-hover:text-[#a38765] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#a38765] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-zinc-100 pt-4">
                      <p className="text-[#5a4f43]/90 font-serif text-xs sm:text-sm md:text-[15px] leading-relaxed tracking-wide">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center text-center select-none">
          <p className="text-[#5a4f43] font-serif text-sm sm:text-base tracking-wide mb-4">
            Have more questions? We&apos;re here to help!
          </p>
          <a 
            href="tel:8777796060"
            className="inline-block bg-[#c5a059] hover:bg-[#c5a059] text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase px-8 py-3.5 shadow-md active:scale-[0.99] transition-all rounded-none"
          >
            CALL 877-779-6060
          </a>
        </div>

      </div>
    </section>
  );
}