import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid from "@/components/projects/projects-grid";
import CTA from "@/components/cta";

export const metadata = {
  title: "Projects | Aura Creative",
  description:
    "Explore our catalog of digital marvels, case studies, and strategic impact.",
};

export default function ProjectsPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <CTA />
      <Footer />
    </main>
  );
}
