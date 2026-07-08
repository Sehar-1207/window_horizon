"use client";

import Image, { StaticImageData } from "next/image";
import { Star, ExternalLink } from "lucide-react";
import person from "../assets/testimonial1.jpg"

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  text: string;
  avatarSrc?: string | StaticImageData;
  initials?: string;
  platform: "Google" | "Yelp" | "Houzz";
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: "MICHAEL CROUCH",
    location: "New York",
    text: '"Meni helped us pick out and installed solar shades for several rooms in our home--including a solar/blackout combination in our bedroom. They look fantastic. He also expedited shipping so we..."',
  avatarSrc: person,
    platform: "Google",
  },
  {
    id: 2,
    name: "ANGELA R.",
    location: "New York",
    text: '"Great service by Meni. He measured and installed with accuracy. The honeycomb blinds are great! I have blackout in the bedrooms, regular blinds in the front room and a roller blind in the ki..."',
    avatarSrc: person,
    platform: "Yelp",
  },
  {
    id: 3,
    name: "HU-744900232",
    location: "New York City",
    text: '"I had a great experience with Window Horizons. Meni was very helpful, he came home to take all the measurements and recommended a blind solution. Then he spent extra time to install the blin..."',
    avatarSrc: person,
    platform: "Houzz",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#FAF6F0] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center select-none mb-12 md:mb-16">
          <div className="w-full flex items-center justify-center gap-4 mb-3">
            <div className="hidden xs:block h-px w-10 sm:w-16 bg-[#cbb396]" />
            <h2 className="text-[#3c332a] text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-serif font-normal tracking-[0.2em] uppercase max-w-full leading-tight">
              Trusted By Homeowners Across NYC & NJ
            </h2>
            <div className="hidden xs:block h-px w-10 sm:w-16 bg-[#cbb396]" />
          </div>
          
          <div className="flex items-center gap-0.5 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            ))}
          </div>
          <p className="text-[#5a4f43]/80 font-sans text-xs sm:text-sm tracking-wide">
            Over 500+ satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id}
              className="relative bg-white border border-[#ebd9c7]/40 shadow-sm rounded-sm px-6 py-10 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white p-1 shadow-sm border border-[#ebd9c7]/30 flex items-center justify-center">
                {item.avatarSrc ? (
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.avatarSrc}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full bg-[#4ab825] text-white font-sans font-semibold text-2xl flex items-center justify-center tracking-wide">
                    {item.initials}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-0.5 mt-4 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#dca671] fill-[#dca671]" />
                ))}
              </div>

              <div className="text-[#ebd9c7] text-4xl font-serif leading-none h-6 select-none opacity-60">
                &ldquo;&ldquo;
              </div>

              <p className="mt-2 text-[#5a4f43] font-serif italic text-sm sm:text-[15px] leading-relaxed tracking-wide flex-1 max-w-[92%]">
                {item.text}
              </p>

              <div className="w-[85%] h-px bg-[#ebd9c7]/40 my-6" />

              <h3 className="text-[#3c332a] font-serif text-sm sm:text-base font-bold tracking-widest uppercase">
                {item.name}
              </h3>
              
              <p className="text-[#a38765] font-sans text-xs font-medium tracking-wide mt-1">
                {item.location}
              </p>

              <a 
                href="#"
                className="mt-5 flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-widest transition-colors text-slate-400 group-hover:text-amber-700"
              >
                {item.platform === "Google" && (
                  <svg className="w-3.5 h-3.5 text-[#4285F4] fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.41 0-6.166-2.766-6.166-6.18 0-3.41 2.756-6.18 6.166-6.18 1.545 0 2.97.567 4.076 1.494l3.123-3.128C19.298 1.99 16.002 1 12.24 1 5.92 1 1 5.932 1 12s4.92 11 11.24 11c6.426 0 10.8-4.481 10.8-10.887 0-.74-.066-1.304-.19-1.828H12.24z"/>
                  </svg>
                )}
                {item.platform === "Yelp" && (
                  <svg className="w-3.5 h-3.5 text-[#d32323] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.613 0 12 0zm3.87 16.326c-.22.383-.69.57-1.07.394l-2.02-.916c-.29-.133-.51-.39-.58-.707l-.145-.632c-.06-.275.053-.56.284-.716l.542-.363c.313-.21.737-.156.984.122l1.393 1.573c.272.308.232.793-.01.993v-.055z"/>
                  </svg>
                )}
                {item.platform === "Houzz" && (
                  <svg className="w-3.5 h-3.5 text-[#7ac142] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.5 18h-3v-6h3v6zm6-6h-3V6h3v6zm5 6h-3v-6h3v6z"/>
                  </svg>
                )}
                <span>More {item.platform} Reviews</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}