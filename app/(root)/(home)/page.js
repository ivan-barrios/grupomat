import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Services from "@/components/services/Services";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="px-[20px] md:px-[120px] bg-black">
      <div className="flex flex-col items-center w-full">
        <Hero />
        <Brands />
        <AboutUs />
        <Services />
        <Testimonials />
        {/* <Contact/> */}
      </div>
    </main>
  );
}
