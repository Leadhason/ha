import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import WhoWeHelp from "@/components/who-we-help";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Navbar />
      <Partners />
      <WhoWeHelp />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
