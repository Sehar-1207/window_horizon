import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';

export default function BlogLayout() {
  const featuredBlog = BLOGS_DATA.find((blog) => blog.slug === 'nyc-apartments') || BLOGS_DATA[0];

  if (!featuredBlog) return null;

  return (
    <div className="w-full bg-[#fcfbf9] min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[1px] bg-[#c5a059]" />
          <span className="text-[#c5a059] font-serif text-xs font-bold tracking-[0.25em] uppercase">
            Featured Article
          </span>
        </div>

        <div className="gradient-gold-stone rounded-xl overflow-hidden shadow-xl border border-neutral-900/10 grid grid-cols-1 md:grid-cols-2 lg:min-h-[480px]">
          <div className="relative w-full min-h-[300px] md:min-h-full">
            <Image
              src={featuredBlog.image}
              alt={featuredBlog.title}
              fill
              priority
              className="object-cover object-center bg-black/20"
            />
          </div>

          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left bg-black/40 backdrop-blur-[2px]">
            <div className="mb-4">
              <span className="inline-block bg-white/20 text-white text-[10px] md:text-xs font-serif font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm border border-white/30">
                {featuredBlog.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wide leading-snug font-normal">
              {featuredBlog.title}
            </h2>

            <p className="mt-4 text-sm lg:text-base text-neutral-100 font-light leading-relaxed">
              {featuredBlog.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-neutral-200 text-xs font-light tracking-wide">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 stroke-[1.5]" />
                <span>{featuredBlog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 stroke-[1.5]" />
                <span>{featuredBlog.readTime}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href={`/blog/${featuredBlog.slug}`}
                className="inline-flex items-center text-white hover:text-neutral-200 font-serif text-xs font-bold tracking-[0.2em] uppercase group transition-colors duration-200"
              >
                Read Article 
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">›</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}