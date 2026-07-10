"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";

export interface StyleSubCard {
  name: string;
  description: string;
}

export interface ProductFeatureBlockProps {
  badge: string;
  title: string;
  description: string;
  mediaSrc: StaticImageData | string;
  mediaAlt: string;
  videoOverlayText: string;
  productHref: string;
  imageAlignment?: "left" | "right";
  styles: StyleSubCard[];
  benefits: string[];
}

export default function ProductFeatureBlock({
  badge,
  title,
  description,
  mediaSrc,
  mediaAlt,
  videoOverlayText,
  productHref,
  imageAlignment = "left",
  styles = [],
  benefits = []
}: ProductFeatureBlockProps) {
  const isImageLeft = imageAlignment === "left";

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        
        <div className={`w-full lg:w-1/2 order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <Link 
            href={productHref} 
            className="group relative block w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-zinc-100"
          >
            <Image
              src={mediaSrc}
              alt={mediaAlt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-350 group-hover:scale-110 group-hover:bg-white text-gray-900 pl-1">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
              <p className="text-white text-xs sm:text-sm font-sans tracking-wider font-semibold uppercase">
                {videoOverlayText}
              </p>
            </div>
          </Link>
        </div>

        <div className={`w-full lg:w-1/2 order-2 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <div className="mb-4">
            <span className="inline-block bg-[#c5a059]/10 text-[#a37f3d] text-xs sm:text-sm tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full border border-[#c5a059]/20">
              {badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 tracking-wide leading-tight font-normal">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {description}
          </p>

          {styles.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xs sm:text-sm font-sans font-bold tracking-wider text-gray-800 uppercase mb-3">
                Available Styles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {styles.map((style, idx) => (
                  <div key={idx} className="border border-gray-100 p-4 rounded-md shadow-sm bg-white/50">
                    <h4 className="text-sm font-sans font-bold text-gray-900">{style.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 font-light">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {benefits.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xs sm:text-sm font-sans font-bold tracking-wider text-gray-800 uppercase mb-4">
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 border border-[#c5a059]/30">
                      <Check className="w-3 h-3 text-[#a37f3d]" strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}