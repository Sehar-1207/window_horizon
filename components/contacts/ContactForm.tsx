"use client"
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
const phoneNo = "877-779-6060";
export default function ContactSection() {
  return (
    <div className="w-full bg-[#fcfbf9] min-h-screen py-16 md:py-24 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-center pt-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-neutral-800 uppercase">
              Get In Touch
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-600 font-sans font-light leading-relaxed max-w-md">
              Transform your windows with Manhattan and Bergen County's premier window treatment specialists.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c5a059]/90 flex items-center justify-center text-white shadow-sm">
                  <Phone className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="font-sans">
                  <h4 className="font-serif font-bold text-neutral-800 text-base tracking-wide">Direct Line</h4>
                  <a href={`tel:${phoneNo}`} className="mt-1 block text-neutral-600 font-light text-base hover:text-[#c5a059] transition-colors duration-200">
                    {phoneNo}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c5a059]/90 flex items-center justify-center text-white shadow-sm">
                  <Mail className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="font-sans">
                  <h4 className="font-serif font-bold text-neutral-800 text-base tracking-wide">Email</h4>
                  <a href="mailto:info@windowhorizons.com" className="mt-1 block text-neutral-600 font-light text-base hover:text-[#c5a059] transition-colors duration-200">
                    info@windowhorizons.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c5a059]/90 flex items-center justify-center text-white shadow-sm">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="font-sans">
                  <h4 className="font-serif font-bold text-neutral-800 text-base tracking-wide">Showroom & Office</h4>
                  <p className="mt-1 text-neutral-600 font-light text-base leading-relaxed">
                    610 Columbus Ave<br />
                    New York, NY 10024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c5a059]/90 flex items-center justify-center text-white shadow-sm">
                  <Clock className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="font-sans">
                  <h4 className="font-serif font-bold text-neutral-800 text-base tracking-wide">Service Hours</h4>
                  <p className="mt-1 text-neutral-600 font-light text-base leading-relaxed">
                    Mon - Fri: 9AM - 6PM<br />
                    Sat: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#fbfaf7] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl border border-neutral-200/40">
            <h3 className="text-2xl font-bold tracking-wide text-neutral-800 uppercase text-center sm:text-left">
              Book Free Consultation
            </h3>

            <form className="mt-8 space-y-6 font-sans" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  required
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Address / Service Location
                </label>
                <input
                  type="text"
                  placeholder="Street address, City, ZIP"
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Number of Windows / Shades
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 windows, 2 patio doors"
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700 font-serif">
                  Message / Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your window treatment needs..."
                  className="w-full bg-[#fcfbf9]/50 px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all duration-200 text-base font-light resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#b59049] via-[#c5a059] to-[#b59049] text-white py-4 px-6 rounded-lg font-serif font-bold text-sm tracking-[0.2em] uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Request Consultation
                  <Send className="w-4 h-4 transform rotate-45" />
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-neutral-200/60 grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="block text-[11px] sm:text-xs font-bold tracking-wider text-[#c5a059] uppercase">
                  Hunter Douglas
                </span>
                <span className="block mt-1 text-[9px] sm:text-[10px] tracking-wide text-neutral-400 font-sans uppercase">
                  Certified Dealer
                </span>
              </div>
              <div className="border-x border-neutral-200/60">
                <span className="block text-[11px] sm:text-xs font-bold tracking-wider text-[#c5a059] uppercase">
                  30+ Years
                </span>
                <span className="block mt-1 text-[9px] sm:text-[10px] tracking-wide text-neutral-400 font-sans uppercase">
                  Industry Experience
                </span>
              </div>
              <div>
                <span className="block text-[11px] sm:text-xs font-bold tracking-wider text-[#c5a059] uppercase">
                  5-Star Quality
                </span>
                <span className="block mt-1 text-[9px] sm:text-[10px] tracking-wide text-neutral-400 font-sans uppercase">
                  Expert Installation
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}