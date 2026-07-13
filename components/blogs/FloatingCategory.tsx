import React from 'react';
import Link from 'next/link';

interface Categories{
  label:string,
  href:string
}
const categories: Categories[] = [
  { label: "Local Design Guides", href: "#" },
  { label: "Product Comparison Guides", href: "#" },
  { label: "Motorized Window Blinds and Shades", href: "#" },
  { label: "Window Treatment Trends", href: "#" }
];
export default function FloatingCategoryNav() {

  return (
    <div className="sticky top-28 z-40 w-full pointer-events-none overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-start md:justify-center gap-4 whitespace-nowrap pointer-events-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={cat.href}
            className="bg-white/95 text-neutral-700 hover:bg-[#f5efe6] font-serif text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm border border-neutral-200/60 transition-colors duration-200 shadow-md backdrop-blur-sm"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}