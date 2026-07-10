import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/products';
import CallToActionBanner from '@/components/CallToAction';
import Explore from "@/components/Explore";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export default async function DynamicProductPage({ params }: PageProps) {

  const linksData = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blog" },
    { label: "Bergen County", href: "/LOCATION/bergen" }
  ];

  const { slug } = await params;
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-[#fcfbf9] text-neutral-800 selection:bg-[#c5a059]/20 font-sans">

      <div className="relative w-full h-[85vh] min-h-[550px] flex items-center justify-center text-center px-6">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <span className="block text-xs md:text-sm font-serif font-semibold tracking-[0.3em] text-[#e5c384]">
            {product.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-none uppercase">
            {product.title} – <span className="font-light text-neutral-200">{product.subtitle}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
            {product.heroDescription}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#dcae6c] hover:bg-[#c5a059] text-white font-serif font-bold text-xs tracking-[0.18em] uppercase px-8 py-4 shadow-md transition-colors"
            >
              Book Free Consultation
            </Link>
            <p className="border-2 border-white hover:bg-white/10 text-white font-serif font-bold text-xs tracking-[0.18em] uppercase px-8 py-4 transition-colors">
              Call 877-779-6060
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 font-serif font-light italic leading-relaxed">
            {product.italicIntro}
          </p>
        </div>
      </div>
      <div className="bg-white pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase font-normal text-neutral-900 border-b pb-4">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {product.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#dcae6c]/20 text-[#b08c49] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-base text-neutral-600 font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3 bg-[#fcfbf9] border border-neutral-200/50 p-8 md:p-12 rounded-sm text-left">
            <h3 className="text-xl font-serif text-center tracking-widest uppercase mb-8 text-neutral-900">
              Best For:
            </h3>
            <div className="space-y-6">
              {product.bestForList.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-200/60 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-xs font-serif font-bold tracking-wider text-[#b08c49] uppercase">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-neutral-600 font-light mt-1">
                    {item.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {product.hasComparison && (
        <div className="bg-[#ede8e2] py-20 md:py-28 border-t border-b border-neutral-200/40">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-widest text-neutral-900 uppercase">
              {product.comparisonHeader}
            </h2>
            <div className="w-16 h-[2px] bg-[#b08c49] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto">
              {product.comparisonSub}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 text-left">
              <div className="bg-white rounded-t-sm rounded-b-md shadow-sm border-t-4 border-[#dcae6c] p-8 space-y-6">
                <h3 className="text-xl font-serif tracking-widest text-neutral-900 font-medium">
                  {product.leftCompare?.title}
                </h3>
                <ul className="space-y-3">
                  {product.leftCompare?.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-center text-sm text-neutral-600 font-light">
                      <Check className="w-4 h-4 text-[#b08c49]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-t-sm rounded-b-md shadow-sm border-t-4 border-neutral-800 p-8 space-y-6">
                <h3 className="text-xl font-serif tracking-widest text-neutral-900 font-medium">
                  {product.rightCompare?.title}
                </h3>
                <ul className="space-y-3">
                  {product.rightCompare?.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-center text-sm text-neutral-600 font-light">
                      <Check className="w-4 h-4 text-[#b08c49]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#c5a059] text-white py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide uppercase">
            {product.motorTitle}
          </h2>
          <div className="w-12 h-[1px] bg-[#dcae6c] mx-auto" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {product.motorSub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-8 text-left">
            {product.motorBenefits.map((item, idx) => (
              <div key={idx} className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#dcae6c] flex-shrink-0" />
                <span className="text-sm font-light text-neutral-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link 
              href="/motorization" 
              className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-serif font-bold text-[#e5c384] hover:text-white transition-colors group"
            >
              Learn More About Motorization 
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">›</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-widest uppercase text-neutral-900">
            Our {product.title} Installations
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.installations.map((item, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100 shadow-sm">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left" />
                <span className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-serif tracking-wider uppercase px-2 py-1 rounded-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcfbf9] py-16 md:py-24 border-t border-neutral-200/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-widest uppercase text-neutral-900">
            See {product.title} In Action
          </h2>
          
          <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg border border-neutral-200 bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${product.videoId}`}
              title={`See ${product.title} in dynamic layout environments`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
      <CallToActionBanner />
      
      <Explore links={linksData} />
    </div>
  );
}