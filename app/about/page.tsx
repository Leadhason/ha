import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import AboutValues from "@/components/about/about-values";
import AboutTeam from "@/components/about/about-team";
import CTA from "@/components/cta";

export const metadata = {
  title: "About | Aura Creative",
  description:
    "Learn about our vision, our journey, and the core values that drive us.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTA />
      <Footer />
    </main>
  );
}
