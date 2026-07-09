"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Play,
  SquareTerminal,
  MapPin,
  Globe,
  Award,
} from "lucide-react";
import {
  FaYelp,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import thumbnail from "../components/assets/service1.jpg";

export default function CombinedFooter() {
  const sitemapLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Window Treatments Manhattan", href: "#" },
    { label: "Window Treatments Bergen County", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Service Areas", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const productLinks = [
    { label: "Roller Shades", href: "#" },
    { label: "Motorized Shades", href: "#" },
    { label: "Solar Shades", href: "#" },
    { label: "Honeycomb Shades", href: "#" },
    { label: "Silhouette Shades", href: "#" },
    { label: "Wood Blinds", href: "#" },
    { label: "Roman Shades", href: "#" },
    { label: "Vertical Blinds", href: "#" },
  ];
  const Gradient_Class = "gradient-gold-stone";
  const socialPlatforms = [
    {
      name: "YELP",
      meta: "4.9 RATING",
      icon: <FaYelp className="w-5 h-5 text-[#d32323]" />,
    },
    {
      name: "GOOGLE",
      meta: "5.0 RATING",
      icon: <FaGoogle className="w-5 h-5 text-[#4285F4]" />,
    },
    {
      name: "HOUZZ",
      meta: "5.0 RATING",
      icon: <Award className="w-5 h-5 text-[#7ac142]" />,
    },
    {
      name: "FACEBOOK",
      meta: "FOLLOW US",
      icon: <FaFacebookF className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      name: "INSTAGRAM",
      meta: "FOLLOW US",
      icon: <FaInstagram className="w-5 h-5 text-[#E1306C]" />,
    },
  ];

  return (
    <footer
      className={`w-full ${Gradient_Class} text-white border-t border-[#c5a059]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-start pb-14 border-b border-black/20">
          <div className="flex flex-col">
            <h3 className="text-white font-serif text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
              Sitemap
            </h3>
            <ul className="space-y-3.5">
              {sitemapLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 group">
                  <FaChevronRight className="w-2.5 h-2.5 text-white select-none group-hover:translate-x-0.5 transition-transform" />
                  <a
                    href={link.href}
                    className="text-white hover:text-white/80 font-sans text-[14px] font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-serif text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
              Our Products
            </h3>
            <ul className="space-y-3.5 mb-4">
              {productLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 group">
                  <FaChevronRight className="w-2.5 h-2.5 text-white select-none group-hover:translate-x-0.5 transition-transform" />
                  <a
                    href={link.href}
                    className="text-white hover:text-white/80 font-sans text-[14px] font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 group pt-1">
              <FaChevronRight className="w-2.5 h-2.5 text-white select-none group-hover:translate-x-0.5 transition-transform" />
              <a
                href="#"
                className="text-white hover:text-white/80 underline decoration-white underline-offset-4 font-sans text-[14px] font-bold tracking-wide transition-colors"
              >
                All Products →
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-serif text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
              Contact Us
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-white font-serif text-base font-bold tracking-wide flex items-center gap-1.5 uppercase">
                  <SquareTerminal className="w-4 h-4 text-white" /> Window
                  Horizons Corp
                </h4>
                <p className="text-white font-sans text-[14px] font-medium tracking-wide mt-1.5 leading-relaxed">
                  610 Columbus Ave
                  <br />
                  New York, NY 10024
                </p>
              </div>

              <div className="pt-1 space-y-3.5">
                <p className="flex items-center gap-3 text-white hover:text-white/80 font-sans text-[14px] transition-colors group font-medium">
                  <Phone className="w-4 h-4 text-white fill-current flex-shrink-0" />
                  <span className="tabular-nums group-hover:underline">
                    877-779-6060
                  </span>
                </p>

                <a
                  href="mailto:info@windowhorizons.com"
                  className="flex items-center gap-3 text-white hover:text-white/80 font-sans text-[14px] transition-colors group font-medium"
                >
                  <Mail className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="break-all group-hover:underline">
                    info@windowhorizons.com
                  </span>
                </a>
              </div>

              <p className="text-white font-serif italic text-xs sm:text-sm font-semibold tracking-wide pt-4 border-t border-black/10 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" /> Serving Manhattan
                & Bergen County
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 w-full flex flex-col items-center">
          <div className="w-full max-w-4xl aspect-[16/9] sm:aspect-[21/9] md:aspect-[32/11] max-h-[380px] bg-black border border-black/10 relative group overflow-hidden shadow-xl">
            <Image
              src={thumbnail}
              alt="Window Horizons Showcase Video Thumbnail"
              fill
              priority
              className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
            />
            <a
              href="https://www.youtube.com/watch?v=3FNK2neFGmI"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-gray-900 fill-current translate-x-0.5" />
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=3FNK2neFGmI"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-black/80 hover:bg-red-700 text-white font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase py-2.5 px-4 flex items-center gap-2 transition-all shadow-md rounded-none border border-white/10 z-20"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Open in YouTube</span>
            </a>
          </div>
        </div>
        <div className="pt-16 pb-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-white mb-4">
            <Globe className="w-8 h-8 text-white" />
            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-lg tracking-tight leading-none text-white">
                HunterDouglas
              </span>
              <span className="font-sans font-bold text-[9px] tracking-[0.35em] uppercase text-white mt-0.5 leading-none">
                Authorized Dealer
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-[13px] font-sans text-white font-medium">
            <a
              href="#"
              className="hover:text-white/80 hover:underline transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white/80 hover:underline transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white/80 hover:underline transition-colors"
            >
              Sitemap
            </a>
          </div>

          <div className="mt-6 text-[12px] font-sans text-white font-medium tracking-wide">
            © 2026 Window Horizons Corp. All Rights Reserved.
            <span className="block text-[11px] uppercase tracking-wider text-white font-bold mt-1">
              Hunter Douglas Authorized Dealer
            </span>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-black/20 w-full flex flex-col items-center">
          <span className="text-white font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-6 select-none">
            FOLLOW US ON YELP | GOOGLE | FACEBOOK | HOUZZ
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 w-full max-w-3xl justify-center">
            {socialPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-pointer select-none"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md border border-black/5 transition-transform duration-300 group-hover:scale-110">
                  {platform.icon}
                </div>
                <span className="text-white font-sans text-[11px] font-bold tracking-wider mt-2.5 group-hover:text-white/80 transition-colors">
                  {platform.name}
                </span>
                <span className="text-white/90 font-sans text-[9px] font-semibold tracking-tight mt-0.5">
                  {platform.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
