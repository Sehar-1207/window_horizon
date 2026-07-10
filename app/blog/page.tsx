import Explore from "@/components/Explore";
import BlogGridComponent from "@/components/blogs/BlogComponent";
import BlogLayout from "@/components/blogs/BlogLayout";
import FloatingCategoryNav from "@/components/blogs/FloatingCategory";
import CallToActionBanner from "@/components/CallToAction";
import Hero from "@/components/Hero";
import blogHeroImg from "@/components/assets/customBlind1.jpg";

export default function Blog(){
    return<>
     <Hero 
          imageSrc={blogHeroImg}
          imageAlt="Elegant dining room with window blinds"
          badge="Window Horizons"
          badgeType="minimal"
          title={<>Window Treatment Blog For<br /><span>NYC & New Jersey</span></>}
          description="Looking for the best window treatments in New York City and New Jersey? Our blog provides expert advice on shades, blinds, and motorized solutions."
          alignment="center"
          animationType="fadeIn" 
          secondaryButtonText="Read Articles"
          secondaryButtonHref="/blog"
          secondaryButtonType="link"
        />
    <FloatingCategoryNav/>
    <BlogLayout/>
    <BlogGridComponent/>
    <CallToActionBanner/>
    <Explore />
    </>
}