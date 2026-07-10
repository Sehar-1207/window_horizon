"use client"
import React from 'react';
import Link from 'next/link';

interface ExploreLink {
  label: string;
  href: string;
}

interface ExploreProps {
  links?: ExploreLink[]; 
}

export default function Explore({ links }: ExploreProps) {
  const defaultLinks = [
    { label: "Our Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Manhattan", href: "/location/manhattan" },
    { label: "Bergen County", href: "/location/bergen" }
  ];

  const activeLinks = links || defaultLinks;

  return (
    <section className="w-full bg-[#FAF8F5] py-16 text-center px-6 border-t border-stone-200/40">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-serif text-[#0F223D] font-normal tracking-wide mb-10">
          Explore More
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {activeLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="bg-white text-stone-800 font-serif font-bold text-sm py-4 px-6 rounded-xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-[#D4B996] transition-all duration-300 flex items-center justify-center min-h-[58px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}