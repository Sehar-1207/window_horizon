import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locationData } from '@/data/locations';
import * as LucideIcons from 'lucide-react';
import CallToActionBanner from '@/components/CallToAction';
import Explore from "@/components/Explore"

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default async function LocationPage({ params }: PageProps) {
  const linksData = [
    { label: "Our Products", href: "/PRODUCTS" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blog" }
  ];
  const { slug } = await params;
  const data = locationData[slug.toLowerCase()];

  if (!data) {
    notFound();
  }

  return (
    <>
      <main className="w-full text-stone-800 bg-white font-sans antialiased">
        
        <section className="relative w-full min-h-[580px] flex items-center py-24 px-6 sm:px-12 md:px-24 overflow-hidden bg-stone-900">
          <Image
            src={data.hero.bgImage}
            alt={data.hero.heading}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center z-0 opacity-40"
          />
          
          <div className="max-w-5xl space-y-6 relative z-10">
            <span className="inline-block bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-[11px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 rounded-md backdrop-blur-sm">
              {data.hero.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-white leading-[1.15]">
              {data.hero.heading}
            </h1>
            <p className="text-base sm:text-lg font-light text-stone-200 max-w-3xl leading-relaxed">
              {data.hero.subheading}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link 
                href={data.hero.ctaLink}
                className="bg-[#c5a059] hover:bg-[#866443] transition-colors duration-300 text-white px-8 py-3.5 rounded font-sans text-sm font-semibold tracking-wide shadow-md text-center"
              >
                {data.hero.ctaPrimary}
              </Link>
              <a 
                href={`tel:${data.hero.phone}`} 
                className="bg-white hover:bg-stone-50 transition-colors duration-300 text-[#c5a059] border border-stone-200 px-8 py-3.5 rounded font-sans text-sm font-semibold tracking-wide shadow-md text-center"
              >
                Call {data.hero.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 md:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0F223D] mb-8 leading-snug max-w-4xl font-normal">
            {data.intro.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-stone-600 leading-relaxed font-light text-sm sm:text-[15px]">
            <p>{data.intro.paragraph1}</p>
            <p>{data.intro.paragraph2}</p>
          </div>
        </section>

        <section className="bg-[#FAF8F5] py-16 px-6 sm:px-12 border-y border-stone-200/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0F223D] mb-12 font-normal">
              {data.features.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {data.features.items.map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c5a059] text-white flex items-center justify-center shadow-sm">
                    <DynamicIcon name={item.iconName} className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#0F223D]">{item.title}</h3>
                    <p className="text-stone-600 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 md:py-24">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0F223D] font-normal">{data.products.heading}</h2>
            <p className="text-stone-500 font-light text-sm sm:text-[15px]">{data.products.subheading}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.products.items.map((product, index) => (
              <div key={index} className="border border-stone-200/80 hover:border-[#C0984F] rounded-xl p-8 hover:shadow-xl transition-all duration-300 group bg-white flex flex-col justify-between min-h-[200px]">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] ">
                    <DynamicIcon 
                      name={
                        product.productSlug.includes('motorized') ? 'Zap' :
                        product.productSlug.includes('blackout') ? 'Moon' :
                        product.productSlug.includes('solar') ? 'Sun' : 'Sliders'
                      } 
                      className="w-4 h-4 stroke-[1.75]" 
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F223D]">
                    {product.title}
                  </h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <Link 
                  href={`/products/${product.productSlug}`}
                  className="text-xs font-semibold text-[#c5a059] tracking-wide mt-6 flex items-center gap-1 group-hover:underline w-fit"
                >
                  Learn More <LucideIcons.ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border-t border-stone-200/60 py-16 px-6 sm:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0F223D] leading-snug font-normal">
            {data.subSection.heading}
          </h2>
          <div className="text-stone-600 font-light text-sm sm:text-[15px] leading-relaxed space-y-4">
            <p>{data.subSection.paragraph1}</p>
            <p>{data.subSection.paragraph2}</p>
          </div>
        </section>

        <section className="bg-[#FAF8F5] py-16 px-6 sm:px-12 border-t border-stone-200/60">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0F223D] font-normal">{data.neighborhoods.heading}</h2>
              <p className="text-stone-500 font-light text-sm sm:text-[15px]">{data.neighborhoods.subheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {data.neighborhoods.list.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-stone-200/60 hover:border-[#C0984F] rounded-xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FAF8F5] group-hover:bg-[#C0984F] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:text-white transition-all duration-300">
                    <LucideIcons.Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-stone-700 text-xs sm:text-sm font-medium tracking-wide text-left">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-stone-600 font-serif font-bold text-base sm:text-lg">Don&apos;t see your neighborhood? We serve all of Manhattan.</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c5a059] hover:underline">
                Contact us for a free consultation anywhere in NYC <LucideIcons.ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0F223D] font-normal">{data.process.heading}</h2>
            <p className="text-stone-500 font-light text-sm sm:text-[15px]">{data.process.subheading}</p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-[#c5a059]/40 z-0" />
            {data.process.steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 bg-white border border-[#c5a059] rounded-xl p-8 pt-12 text-center flex flex-col items-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out group min-h-[300px]"
              >
                <span className="absolute -top-[16px] -right-[4px] w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center font-sans text-sm font-medium shadow-sm">
                  {index + 1}
                </span>
                <div className="w-16 h-16 rounded-full bg-[#c5a059] text-white flex items-center justify-center shadow-md mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  <DynamicIcon name={step.iconName} className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div className="space-y-3 max-w-[260px]">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F223D]">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200/60 py-16 px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0F223D] font-normal">See Our Work in Action</h2>
            <p className="text-stone-500 font-light text-sm sm:text-[15px] max-w-2xl mx-auto">{data.video.subheading}</p>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-stone-200/80 bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data.video.youtubeId}?rel=0`}
              title={`${data.title} Window Treatment Process Showcase Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

      </main>
      <CallToActionBanner/>
       <Explore links={linksData} />
    </>
  );
}