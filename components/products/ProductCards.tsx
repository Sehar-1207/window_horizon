import ProductFeatureBlock from "./ProductFeatures";
import solarImg from "@/components/assets/customblinds4.jpg";
import honeycombImg from "@/components/assets/service2.jpg";
import silhouetteImg from "@/components/assets/service3.jpg";
import rollerImg from "@/components/assets/service4.jpg";

export default function ProductShowcase() {
  return (
    <div className="flex flex-col">
      <ProductFeatureBlock
        badge="Solar Shades"
        title="Modern Light Control & View Preservation"
        description="Custom solar shades designed for Manhattan apartments and Bergen County homes. Reduce glare and UV damage while maintaining your beautiful outside views."
        mediaSrc={solarImg}
        mediaAlt="Modern backyard patio window with solar shades lowered"
        videoOverlayText="Solar Shade Experience"
        productHref="/products/solar-shades"
        imageAlignment="left"
        styles={[
          { name: "Design Studio™", description: "Designer fabrics & textures" },
          { name: "Designer Solar", description: "Clean lines & functionality" }
        ]}
        benefits={[
          "Eliminate screen glare",
          "Maintain outside views",
          "Perfect for large windows",
          "99% UV protection",
          "Modern minimalist style",
          "Daytime privacy protection"
        ]}
      />

      <ProductFeatureBlock
        badge="Honeycomb Shades"
        title="Superior Insulation & Energy Efficiency"
        description="The most energy-efficient window treatment available. Hunter Douglas Duette® shades trap air in cells to keep your NYC or NJ home comfortable year-round."
        mediaSrc={honeycombImg}
        mediaAlt="Honeycomb cellular custom shades details close up"
        videoOverlayText="Honeycomb Shade Performance"
        productHref="/products/honeycomb-shades"
        imageAlignment="right"
        styles={[
          { name: "Duette® Architella", description: "Honeycomb-within-a-honeycomb design" },
          { name: "Applause®", description: "Streamlined reliability & value" }
        ]}
        benefits={[
          "Maximum heating/cooling savings",
          "Excellent sound absorption",
          "Top-Down/Bottom-Up controls",
          "Crisp pleats match deep windows"
        ]}
      />

      <ProductFeatureBlock
        badge="Silhouette Shades"
        title="Soft Fabric Sheers & Diffused Glow"
        description="Transform harsh, direct sunlight into a gentle, inviting glow. These luxury shadings feature signature S-shaped fabric vanes floating elegantly between two sheer facings."
        mediaSrc={silhouetteImg}
        mediaAlt="Bright living space featuring signature fabric sheer silhouettes"
        videoOverlayText="Silhouette Material Luxury"
        productHref="/products/silhouette-shades"
        imageAlignment="left"
        styles={[
          { name: "Silhouette® ClearView®", description: "Specialized sheers maximizing visibility" },
          { name: "Nantucket™", description: "Casual, elegant styles & soft palettes" }
        ]}
        benefits={[
          "Preserve exterior landscapes",
          "UV blocking protection when open",
          "Enhanced privacy options",
          "Sophisticated fabric choices"
        ]}
      />

      <ProductFeatureBlock
        badge="Roller Shades"
        title="Clean Engineering & Minimalist Design"
        description="A contemporary classic presenting pristine lines and completely out-of-the-way storage when raised. Perfect for sleek layouts or pairing beneath custom draperies."
        mediaSrc={rollerImg}
        mediaAlt="Sleek bedroom master windows with matching neutral roller shades"
        videoOverlayText="Roller Engineering Showcase"
        productHref="/products/roller-shades"
        imageAlignment="right"
        styles={[
          { name: "Designer Roller", description: "Hundreds of performance textiles" },
          { name: "Sonnette® Cellular", description: "Roller form factor with cellular build" }
        ]}
        benefits={[
          "Disappears entirely when up",
          "Massive textile library catalog",
          "Flawless modern window pairs",
          "Precision-weighted bottom bars"
        ]}
      />
    </div>
  );
}