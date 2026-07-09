import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { MapPin } from 'lucide-react';
import photo from "../assets/customblind2.jpg"

interface ProjectCardProps {
  imageSrc: string | StaticImageData;
  location: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ imageSrc, location, title, description, tags }: ProjectCardProps) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full">
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-x-110"
      />
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-block bg-[#c5a059]/90 text-white text-xs font-medium px-3 py-1 rounded-md tracking-wider uppercase backdrop-blur-sm">
          Residential
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-1 text-[#c5a059] text-xs font-medium tracking-wide uppercase mb-3">
        <MapPin className="w-3.5 h-3.5 stroke-[2]" />
        <span>{location}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-neutral-900 tracking-tight leading-snug mb-3">
        {title}
      </h3>

      <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6 flex-grow line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] bg-neutral-50 text-neutral-400 font-medium px-2.5 py-1 rounded border border-neutral-100 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function FeaturedProjects() {
  const projectsData = [
    {
      imageSrc: photo,
      location: "Manhattan, NYC",
      title: "Custom Blackout Window Shades",
      description: "Blackout window shades installed in a Manhattan home for total light control and privacy.",
      tags: ["Blackout Shades", "Custom Shades"]
    },
    {
      imageSrc: photo,
      location: "Gramercy Park, NYC",
      title: "Custom Blackout Roller Shades",
      description: "Blackout roller shades installed in a Gramercy Park apartment for better sleep and a sleek design.",
      tags: ["Blackout Shades", "Roller Shades"]
    },
    {
      imageSrc: photo,
      location: "Upper West Side, NYC",
      title: "Custom Window Treatments",
      description: "Custom window treatments installed in an Upper West Side residence for enhanced privacy and elegance.",
      tags: ["Custom Shades", "Blinds"]
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF1] py-8 md:py-12  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-neutral-900 tracking-wide">
            Featured Projects
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            See how we've transformed homes and spaces across NYC and New Jersey with custom window treatments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              location={project.location}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>

      </div>
    </section>
  );
}