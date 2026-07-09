import BlogGridComponent from "../../components/blogs/BlogComponent";
import BlogHero from "../../components/blogs/BlogHero";
import BlogLayout from "../../components/blogs/BlogLayout";
import FloatingCategoryNav from "../../components/blogs/FloatingCategory";
import CallToActionBanner from "../../components/CallToAction";

export default function Blog(){
    return<>
    <BlogHero/>
    <FloatingCategoryNav/>
    <BlogLayout/>
    <BlogGridComponent/>
    <CallToActionBanner/>
    </>
}