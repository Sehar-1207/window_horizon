import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Phone } from 'lucide-react';
import { BLOGS_DATA } from '@/components/data/blogs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function DynamicArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const blog = BLOGS_DATA.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const recentPosts = BLOGS_DATA.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-white min-h-screen selection:bg-[#c5a059]/20">
      
      <div className="relative w-full h-[60vh] min-h-[400px] md:min-h-[500px] flex items-end">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
        
        <div className="absolute top-6 left-6 md:top-10 md:left-12 z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white/80 hover:text-white border border-white/20 hover:border-white/40 bg-black/10 backdrop-blur-sm px-4 py-2 text-xs font-serif font-light tracking-[0.15em] uppercase transition-all duration-200"
          >
            ← Back to Blog
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-12 md:pb-16 text-left">
          <div className="mb-4">
            <span className="inline-block bg-[#c5a059] text-white text-[11px] font-serif font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-light max-w-4xl tracking-wide">
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-white/70 text-xs font-light tracking-wider">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 stroke-[1.5] text-[#c5a059]" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 stroke-[1.5] text-[#c5a059]" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Stream Layout */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Scrollable Center Main Content (Ref: image_80f9a2.jpg / image_80fce6.jpg) */}
          <div className="lg:col-span-2 space-y-8 text-left">
            
            {/* Excerpt Summary Block Container */}
            <div className="border-l-4 border-[#c5a059] bg-[#fcfbf9] p-6 md:p-8 rounded-r-xl shadow-sm">
              <p className="text-base md:text-lg text-neutral-600 font-serif font-light italic leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            {/* Render Body Narrative Sections */}
            <div className="prose prose-neutral max-w-none text-neutral-700 font-light text-base md:text-lg leading-relaxed space-y-6">
              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* List Styled Layout Block Stream Demonstration */}
            <div className="pt-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-normal text-neutral-900 uppercase tracking-wide border-b pb-4">
                Top Shading Alternatives Desired
              </h2>

              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-[#fcfbf9] border border-neutral-100 rounded-xl p-6 flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center font-serif text-sm flex-shrink-0 mt-0.5 shadow-sm">
                      {num}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-medium text-neutral-800">
                        {num === 1 ? "Silhouette® Window Shadings" : num === 2 ? "Solar Shades for Glare Control" : "Blackout Shades for Better Sleep"}
                      </h3>
                      <p className="text-sm text-neutral-600 font-light leading-relaxed">
                        Customized operational components manufactured to balance glare control, privacy parameters, and light filtration variables for premium metropolitan high-rise properties.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Categories & Meta Share Block (Ref: image_80fa21.jpg) */}
            <div className="pt-12 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-serif tracking-widest text-neutral-400">Category:</span>
                <span className="bg-neutral-100 text-neutral-700 text-xs font-serif font-medium uppercase px-3 py-1.5 rounded-sm">
                  {blog.category}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-serif tracking-widest text-neutral-400 mr-2">Share:</span>
                <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs hover:opacity-90 transition-opacity">f</button>
                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs hover:opacity-90 transition-opacity">𝕏</button>
                <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs hover:opacity-90 transition-opacity">p</button>
              </div>
            </div>

            {/* Related Recommendations Carousel Container Block */}
            <div className="pt-12">
              <h3 className="text-xl font-serif font-normal text-neutral-900 tracking-wide uppercase mb-6 border-b pb-3">
                You May Also Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentPosts.slice(0, 2).map((item) => (
                  <Link href={`/blog/${item.slug}`} key={item.slug} className="group block text-left">
                    <div className="relative w-full h-44 rounded-lg overflow-hidden bg-neutral-100 mb-3 shadow-sm">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] text-[#c5a059] font-serif font-bold tracking-wider uppercase">{item.date}</span>
                    <h4 className="text-base font-serif text-neutral-800 leading-snug group-hover:text-[#c5a059] transition-colors line-clamp-2 mt-1">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Static Sidebar (Ref: image_80f9a2.jpg / image_80fa21.jpg) */}
          <div className="lg:sticky lg:top-8 space-y-8 text-left self-start">
            
            {/* Free Consultation Form Block */}
            <div className="bg-[#5B5B5B] text-white p-8 rounded-xl shadow-lg border border-black/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full translate-x-8 -translate-y-8" />
              
              <h3 className="text-xl md:text-2xl font-serif tracking-wider font-light uppercase border-b border-white/10 pb-4 mb-4 text-center">
                Free Consultation
              </h3>
              
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6 text-center">
                Transform your space with custom window treatments. Our NYC & NJ experts come to you — free in-home consultation.
              </p>
              
              <Link 
                href="/contact"
                className="block w-full bg-gradient-to-r from-[#b08c49] to-[#c5a059] hover:from-[#c5a059] hover:to-[#d9b36a] text-white text-center text-xs uppercase tracking-[0.15em] font-serif font-bold py-3.5 rounded-md shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                Book Now
              </Link>
              
              <a 
                href="tel:877-779-6060"
                className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors py-2 font-mono tracking-wider border border-white/10 rounded-md bg-white/[0.02]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                877-779-6060
              </a>
            </div>

            {/* Recent Posts Static Feed List Component */}
            <div className="bg-white border border-neutral-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-serif font-bold tracking-widest text-neutral-800 uppercase border-b pb-3 mb-4">
                Recent Posts
              </h3>
              
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link 
                    href={`/blog/${post.slug}`} 
                    key={post.slug}
                    className="flex gap-3 items-center group border-b border-neutral-50 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-neutral-50 flex-shrink-0">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] text-neutral-400 tracking-wide uppercase font-serif">
                        {post.date}
                      </span>
                      <h4 className="text-xs sm:text-sm font-serif text-neutral-800 leading-snug font-light line-clamp-2 group-hover:text-[#c5a059] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 text-center">
                <Link 
                  href="/blog"
                  className="text-xs uppercase font-serif tracking-widest text-[#c5a059] hover:text-[#b08c49] font-bold"
                >
                  View All Posts ›
                </Link>
              </div>
            </div>

            {/* Static Product Summary Block Area */}
            <div className="bg-[#fcfbf9] border border-neutral-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-serif font-bold tracking-widest text-neutral-800 uppercase border-b pb-3 mb-3">
                Our Products
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">
                Explore our full range of custom window treatments — shades, blinds, and motorized solutions for every room.
              </p>
              <Link 
                href="/products"
                className="inline-block w-full bg-white border border-neutral-200 text-center text-[10px] uppercase tracking-widest text-neutral-700 hover:bg-neutral-50 font-serif font-bold py-2.5 rounded shadow-sm transition-colors"
              >
                Browse Products ›
              </Link>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}