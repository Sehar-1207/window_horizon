import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { BLOGS_DATA } from '../../data/blogs';

export default function BlogGridComponent() {
  return (
    <div className="w-full bg-[#fcfbf9] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog) => (
            <div 
              key={blog.slug} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-neutral-100 flex flex-col transition-all duration-300"
            >
              <div className="relative w-full h-56 bg-neutral-100 overflow-hidden group">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#c5a059]/90 text-white text-[10px] font-serif font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm backdrop-blur-sm">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center gap-4 text-neutral-400 text-xs font-light tracking-wide mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif text-neutral-800 tracking-wide leading-snug font-normal hover:text-[#c5a059] transition-colors duration-200">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm text-neutral-500 font-light leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-50">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-[#c5a059] hover:text-[#b08c49] font-serif text-xs font-bold tracking-[0.15em] uppercase group transition-colors duration-200"
                  >
                    Read More 
                    <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">›</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}