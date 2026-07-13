import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard = ({ quote, author, location }: TestimonialCardProps) => (
  <div className="bg-[#fcfbf9] p-8 md:p-10 rounded-xl border border-neutral-100/60 shadow-sm flex flex-col justify-between h-full text-left">
    <div>
      <div className="text-[#c5a059] font-serif text-4xl lg:text-5xl leading-none mb-6 font-bold select-none">
        &ldquo;&rdquo;
      </div>
      <p className="text-neutral-700 font-serif font-light text-base md:text-lg leading-relaxed tracking-wide">
        {quote}
      </p>
    </div>
    
    <div className="mt-8 pt-6 border-t border-neutral-200/40">
      <h4 className="font-serif font-bold text-neutral-900 text-base md:text-lg tracking-wide">
        {author}
      </h4>
      <p className="text-xs md:text-sm text-neutral-500 font-light mt-1 tracking-normal">
        {location}
      </p>
    </div>
  </div>
);

const testimonialsData = [
  {
    quote: "The team did an amazing job with our motorized shades. The installation was flawless and they handled all the COI paperwork for our building. Highly recommend!",
    author: "Sarah M.",
    location: "Upper East Side, Manhattan"
  },
  {
    quote: "We needed window treatments for our entire home in Tenafly. They provided excellent design guidance and the quality is outstanding. Worth every penny!",
    author: "Michael R.",
    location: "Tenafly, Bergen County"
  }
];
export default function TestimonialsSection() {

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-neutral-900 tracking-wide">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>

      </div>
    </section>
  );
}