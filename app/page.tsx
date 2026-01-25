import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import WhoWeHelp from "@/components/who-we-help";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Contact from "@/components/contact";

import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

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
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
