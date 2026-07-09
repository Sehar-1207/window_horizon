import React from 'react';
import { Home, Building2, MapPin, Sparkles } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  subtitle: string;
}

const StatItem = ({ icon, number, title, subtitle }: StatItemProps) => (
  <div className="flex flex-col items-center text-center px-4 py-6">
    <div className="bg-[#c5a059] w-14 h-14 rounded-full flex items-center justify-center text-white mb-5 shadow-sm">
      {icon}
    </div>
    
    <span className="text-4xl md:text-5xl font-serif font-semibold text-[#0f172a] tracking-tight">
      {number}
    </span>
    <h3 className="text-sm md:text-base font-serif font-bold text-[#0f172a] mt-2 tracking-wide uppercase">
      {title}
    </h3>
    <p className="text-xs md:text-sm text-neutral-500 font-light mt-1 tracking-normal">
      {subtitle}
    </p>
  </div>
);

export default function StatsSection() {
  const statsData = [
    {
      icon: <Home className="w-6 h-6 stroke-[1.5]" />,
      number: "500+",
      title: "Residential",
      subtitle: "Homes transformed"
    },
    {
      icon: <Building2 className="w-6 h-6 stroke-[1.5]" />,
      number: "300+",
      title: "Manhattan",
      subtitle: "NYC installations"
    },
    {
      icon: <MapPin className="w-6 h-6 stroke-[1.5]" />,
      number: "200+",
      title: "Bergen County",
      subtitle: "NJ projects"
    },
    {
      icon: <Sparkles className="w-6 h-6 stroke-[1.5]" />,
      number: "150+",
      title: "Motorized",
      subtitle: "Smart solutions"
    }
  ];

  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}