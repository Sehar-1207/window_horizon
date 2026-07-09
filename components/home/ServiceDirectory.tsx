"use client";

interface LinkItem {
  label: string;
  href: string;
}

interface DirectoryColumn {
  tag: string;
  title: string;
  links: LinkItem[];
  action?: {
    label: string;
    href: string;
  };
}

const DIRECTORY_DATA: DirectoryColumn[] = [
  {
    tag: "SERVICE AREA",
    title: "Manhattan & NYC",
    links: [
      { label: "Upper West Side", href: "#" },
      { label: "Upper East Side", href: "#" },
      { label: "Midtown Manhattan", href: "#" },
      { label: "Chelsea", href: "#" },
      { label: "Tribeca", href: "#" },
      { label: "SoHo", href: "#" },
      { label: "West Village", href: "#" },
      { label: "East Village", href: "#" },
      { label: "Harlem", href: "#" },
      { label: "Battery Park City", href: "#" },
      { label: "Gramercy Park", href: "#" },
      { label: "Flatiron District", href: "#" },
    ],
    action: { label: "VIEW MANHATTAN", href: "#" },
  },
  {
    tag: "HUNTER DOUGLAS",
    title: "Window Treatments NYC & NJ",
    links: [
      { label: "Motorized Shades NYC", href: "#" },
      { label: "Roller Shades Manhattan", href: "#" },
      { label: "Solar Shades New York", href: "#" },
      { label: "Blackout Shades NYC", href: "#" },
      { label: "Honeycomb (Cellular) Shades", href: "#" },
      { label: "Silhouette Shades NJ", href: "#" },
      { label: "Custom Wood Blinds NYC", href: "#" },
      { label: "Hunter Douglas Dealer NYC", href: "#" },
    ],
    action: { label: "ALL PRODUCTS", href: "#" },
  },
  {
    tag: "SERVICE AREA",
    title: "Bergen County NJ",
    links: [
      { label: "Tenafly, NJ", href: "#" },
      { label: "Englewood, NJ", href: "#" },
      { label: "Fort Lee, NJ", href: "#" },
      { label: "Paramus, NJ", href: "#" },
      { label: "Closter, NJ", href: "#" },
      { label: "Alpine, NJ", href: "#" },
      { label: "Demarest, NJ", href: "#" },
      { label: "Ridgewood, NJ", href: "#" },
      { label: "Hackensack, NJ", href: "#" },
      { label: "Edgewater, NJ", href: "#" },
      { label: "Mahwah, NJ", href: "#" },
      { label: "River Edge, NJ", href: "#" },
    ],
    action: { label: "VIEW BERGEN COUNTY", href: "#" },
  },
  {
    tag: "TRI-STATE COVERAGE",
    title: "NYC Metro Area",
    links: [
      { label: "Brooklyn, NY", href: "#" },
      { label: "Queens, NY", href: "#" },
      { label: "Bronx, NY", href: "#" },
      { label: "Jersey City, NJ", href: "#" },
      { label: "Hoboken, NJ", href: "#" },
      { label: "Weehawken, NJ", href: "#" },
      { label: "Westchester County, NY", href: "#" },
      { label: "Long Island, NY", href: "#" },
    ],
    action: { label: "GET A FREE QUOTE", href: "#" },
  },
];

const SEO_Service_LINKS = [
  "Window Horizons Corp — Custom Window Treatments NYC",
  "Hunter Douglas Dealer Manhattan",
  "Motorized Shades New York City",
  "Roller Shades Manhattan NY",
  "Blackout Shades NYC",
  "Solar Shades NYC",
  "Custom Blinds Bergen County NJ",
  "Window Coverings Upper East Side",
  "Shades Upper West Side",
  "Cellular Shades Midtown NYC",
  "Hunter Douglas PowerView NYC",
  "Window Treatments Tenafly NJ",
  "Blinds Englewood NJ",
  "Custom Shades Fort Lee NJ",
  "Window Treatments Westchester NY",
  "Motorized Blinds Brooklyn NY",
];

export default function ServiceDirectory() {
  return (
    <section className="w-full bg-[#FAF6F0] pt-12 pb-16 md:pt-16 md:pb-20 border-t border-[#ebd9c7]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {DIRECTORY_DATA.map((column, colIdx) => (
            <div 
              key={colIdx} 
              className="bg-white border border-[#ebd9c7]/30 shadow-sm flex flex-col rounded-none"
            >
              <div className="bg-[#b59a6c] px-5 py-4 text-white">
                <span className="block text-[10px] font-sans font-bold tracking-[0.15em] uppercase opacity-90 leading-none">
                  {column.tag}
                </span>
                <h3 className="mt-1.5 text-sm sm:text-base font-serif font-bold tracking-wide">
                  {column.title}
                </h3>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-6">
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-start gap-2.5 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cbb396] mt-[7px] flex-shrink-0 transition-transform group-hover:scale-110" />
                      <a 
                        href={link.href}
                        className="text-[#5a4f43] hover:text-[#b59a6c] font-sans text-[13px] sm:text-sm font-normal leading-tight tracking-wide transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {column.action && (
                  <div className="pt-2">
                    <a 
                      href={column.action.href}
                      className="inline-flex items-center justify-center w-full border border-[#ebd9c7] bg-white hover:bg-[#FAF6F0] text-[#a47a4c] font-sans text-xs font-semibold tracking-[0.15em] uppercase py-3 px-4 transition-all rounded-none text-center"
                    >
                      {column.action.label} &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#ebd9c7]/30 w-full">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-center">
            {SEO_Service_LINKS.map((phrase, idx) => (
              <span key={idx} className="inline-flex items-center text-[#999084] font-sans text-[11px] sm:text-xs tracking-normal">
                <a href="#" className="hover:text-[#a47a4c] transition-colors whitespace-nowrap">
                  {phrase}
                </a>
                {idx < SEO_Service_LINKS.length - 1 && (
                  <span className="text-[#ebd9c7] ml-2 select-none font-light">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}