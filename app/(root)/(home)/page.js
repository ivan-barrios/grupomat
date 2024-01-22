import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="px-[20px] md:px-[120px] bg-black">
      <div className="flex flex-col items-center w-full">
        <Hero />
        <AboutUs />
        <Services />
        {/* <Testimonials/> */}
        {/* <Contact/> */}
      </div>
    </main>
  );
}
