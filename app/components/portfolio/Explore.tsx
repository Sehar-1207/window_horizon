import React from 'react';
import Link from 'next/link';

export default function Explore() {
  const linksData = [
    { label: "Our Products", href: "/PRODUCTS" },
    { label: "Services", href: "/services" },
    { label: "Manhattan", href: "/LOCATION/manhattan" },
    { label: "Bergen County", href: "/LOCATION/bergen" }
  ];

  return (
    <section className="w-full bg-[#fcfbf9] py-12 md:py-16 text-center px-6">
      <div className="max-w-6xl mx-auto">
        
        <h3 className="text-xl md:text-2xl font-serif text-neutral-800 font-normal tracking-wide mb-8">
          Explore More
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {linksData.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="bg-white text-neutral-800 font-serif font-bold text-sm py-4 px-6 rounded-md border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[56px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}