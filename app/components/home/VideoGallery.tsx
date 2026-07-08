"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import service from "../assets/service1.jpg";
import service1 from "../assets/service2.jpg";
import service2 from "../assets/service3.jpg";

interface VideoItem {
  id: string;
  title: string;
  channelName: string;
  thumbnailUrl: string | StaticImageData;
}

const VIDEOS_DATA: VideoItem[] = [
  {
    id: "VJOudfdcfJg",
    title: "Hunter Douglas Powerview ® Motorized Window Treatments",
    channelName: "Window Horizons Corp",
    thumbnailUrl: service,
  },
  {
    id: "dQw4w9WgXcQ",
    title:"Window Horizons Corporation, a full service of Hunter Douglas Dealer",
    channelName: "Window Horizons Corp",
    thumbnailUrl: service1,
  },
  {
    id: "3JZ_D3K60GA",
    title: "Hunter Douglas Motorized Silhouettes Window Shades",
    channelName: "Window Horizons Corp",
    thumbnailUrl: service1,
  },
  {
    id: "tgbNymZ7vqY",
    title: "Hunter Douglas Motorized Roller Shades Blackout",
    channelName: "Window Horizons Corp",
    thumbnailUrl: service,
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#FAF6F0] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VIDEOS_DATA.map((video) => (
            <div
              key={video.id}
              className="relative w-full aspect-video bg-black shadow-lg overflow-hidden group select-none cursor-pointer rounded-sm"
              onClick={() => setActiveVideo(video.id)}
            >
              {activeVideo === video.id ? (
                <iframe
                  className="w-full h-full absolute inset-0 z-20"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <div className="absolute inset-0 z-10 w-full h-full">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

                  <div className="absolute top-3 left-3 right-3 flex items-start gap-2.5 z-10">
                    <div className="w-9 h-9 rounded-full bg-[#1e293b] border border-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden text-[9px] text-white font-bold tracking-tighter text-center leading-none p-1 bg-gradient-to-tr from-emerald-800 to-teal-900">
                      WINDOW HORIZONS
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-white text-sm sm:text-[15px] font-sans font-medium leading-[1.3] truncate drop-shadow-md pr-4">
                        {video.title}
                      </h3>
                      <p className="text-white/80 text-[11px] sm:text-xs font-sans font-normal mt-0.5 drop-shadow-sm flex items-center gap-1">
                        {video.channelName}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[14px] flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
                      <svg
                        className="w-5 h-5 text-white fill-current translate-x-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded px-2.5 py-1.5 flex items-center gap-1.5 transition-colors border border-white/10 text-white font-sans text-[11px] sm:text-xs font-medium tracking-normal">
                    <span>Watch on</span>
                    <div className="flex items-center gap-0.5 font-bold tracking-tight">
                      <svg
                        className="w-4 h-4 text-[#FF0000] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-white lowercase font-semibold tracking-tighter -translate-y-[0.5px]">
                        YouTube
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3 text-white/90">
                    <button className="p-1.5 hover:text-white transition-colors">
                      <svg
                        className="w-[18px] h-[18px] stroke-current fill-none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                      </svg>
                    </button>
                    <button className="p-1.5 hover:text-white transition-colors">
                      <svg
                        className="w-[18px] h-[18px] stroke-current fill-none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
