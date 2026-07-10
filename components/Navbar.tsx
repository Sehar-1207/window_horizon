"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "./assets/logo.png";

const GRADIENT_CLASS = "gradient-gold-stone";

const navigationData = [
  { label: "HOME", href: "/" },
  { 
    label: "LOCATIONS", 
    href: "#", 
    dropdownItems: [
      { label: "MANHATTAN", href: "/locations/manhattan" }, 
      { label: "BERGEN COUNTY", href: "/locations/bergen" }
    ] 
  },
  { 
    label: "PRODUCTS", 
    href: "#", 
    dropdownItems: [
      { label: "ALL PRODUCTS", href: "/products" },
      { label: "SOLAR SHADES", href: "/products/solar-shades" },
      { label: "HONEYCOMB SHADES", href: "/products/honeycomb-shades" },
      { label: "SILHOUETTE SHADES", href: "/products/silhouette-shades" },
      { label: "ROLLER SHADES", href: "/products/roller-shades" },
    ]
  },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("PRODUCTS");

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const isLinkActive = (href: string, dropdownItems?: { href: string }[]) => {
    if (href !== "#" && pathname === href) return true;
    if (dropdownItems) {
      return dropdownItems.some(subItem => pathname === subItem.href);
    }
    return false;
  };

  return (
    <>
      <div className={`h-[5px] w-full ${GRADIENT_CLASS} relative z-50`} />
      <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 h-24 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-14 h-20">
              <Image src={logo} alt="Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl text-gray-800 font-medium">Window Horizons</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[13px] tracking-widest text-gray-600 font-bold h-full">
            {navigationData.map((item, index) => {
              const active = isLinkActive(item.href, item.dropdownItems);
              return (
                <div key={index} className="relative group flex items-center h-full">
                  <Link 
                    href={item.href} 
                    className={`py-8 flex items-center gap-1 transition-colors relative group/link ${active ? "text-black" : "hover:text-black"}`}
                  >
                    <span className="relative py-1">
                      {item.label}
                      <div className={`absolute bottom-0 left-0 w-full h-[3px] ${GRADIENT_CLASS} ${active ? "opacity-100" : "opacity-0 group-hover/link:opacity-100"} transition-opacity`} />
                    </span>
                    {item.dropdownItems && <ChevronDown size={14} />}
                  </Link>
                  
                  {item.dropdownItems && (
                    <div className="absolute top-[calc(100%-4px)] left-0 w-60 bg-white shadow-xl border-t-2 border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      {item.dropdownItems.map((sub, sIdx) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link 
                            key={sIdx} 
                            href={sub.href} 
                            className={`block px-6 py-3 text-[10px] tracking-widest hover:bg-gray-50 transition-colors ${subActive ? "text-black bg-gray-50/80 font-extrabold" : "text-gray-600"}`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Search size={18} className="text-gray-400 cursor-pointer mr-2" />
            <a href="tel:877-779-6060" className={`flex items-center gap-2 px-4 py-2.5 text-[10px] text-white font-bold rounded shadow-sm hover:opacity-90 ${GRADIENT_CLASS}`}>
              <Phone size={14} /> 877-779-6060
            </a>
            <a href="mailto:info@windowhorizons.com" className={`flex items-center gap-2 px-4 py-2.5 text-[10px] text-white font-bold rounded shadow-sm hover:opacity-90 ${GRADIENT_CLASS}`}>
              <Mail size={14} /> Email
            </a>
            <Link href="/book" className={`px-4 py-2.5 text-[10px] text-white font-bold rounded shadow-sm hover:opacity-90 ${GRADIENT_CLASS}`}>BOOK CONSULTATION</Link>
          </div>

          <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden p-2 text-gray-800"><Menu size={24} /></button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsDrawerOpen(false)} />
      
      {/* Mobile Drawer Side Panel */}
      <aside className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform flex flex-col ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 border-b flex justify-between items-center shrink-0">
          <span className="font-bold tracking-widest text-sm text-gray-800">MENU</span>
          <X size={24} onClick={() => setIsDrawerOpen(false)} className="cursor-pointer text-gray-800" />
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <nav className="flex flex-col gap-1 mb-8">
            {navigationData.map((item, i) => {
              const active = isLinkActive(item.href, item.dropdownItems);
              return (
                <div key={i} className="border-b border-gray-100">
                  {item.dropdownItems ? (
                    <div 
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} 
                      className={`flex justify-between items-center py-4 cursor-pointer hover:text-amber-800 transition-colors ${active ? "text-amber-900" : "text-gray-800"}`}
                    >
                      <span className="text-sm font-bold tracking-widest">{item.label}</span>
                      <ChevronRight size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-90' : ''}`} />
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      onClick={handleLinkClick}
                      className={`flex justify-between items-center py-4 cursor-pointer hover:text-amber-800 text-sm font-bold tracking-widest w-full block transition-colors ${active ? "text-amber-900" : "text-gray-800"}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.dropdownItems && openDropdown === item.label && (
                    <div className="bg-gray-50 p-2 flex flex-col gap-1 mb-2 rounded">
                      {item.dropdownItems.map((sub, s) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link 
                            key={s} 
                            href={sub.href} 
                            onClick={handleLinkClick}
                            className={`text-[11px] py-2 px-4 uppercase transition-colors ${subActive ? "text-black font-extrabold bg-gray-200/50 rounded" : "text-gray-600 hover:text-black"}`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-gray-100 flex flex-col gap-3 shrink-0">
          <a href="tel:877-779-6060" className={`flex items-center justify-center gap-2 p-3 text-[12px] text-white font-bold rounded shadow-sm ${GRADIENT_CLASS}`}>
            <Phone size={14} /> 877-779-6060
          </a>
          <a href="mailto:info@windowhorizons.com" className={`flex items-center justify-center gap-2 p-3 text-[12px] text-white font-bold rounded shadow-sm ${GRADIENT_CLASS}`}>
            <Mail size={14} /> EMAIL US
          </a>
          <Link href="/book" onClick={handleLinkClick} className={`text-center p-3 text-[12px] text-white font-bold rounded shadow-sm ${GRADIENT_CLASS}`}>BOOK CONSULTATION</Link>
        </div>
      </aside>
    </>
  );
}