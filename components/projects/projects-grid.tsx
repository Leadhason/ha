"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { portfolioItems } from "@/lib/data";
import ProjectCard from "./project-card";

const ProjectsGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Staggered entry for items
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all",
      },
    );
  }, []);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Masonry-like Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`${index % 2 === 1 ? "md:mt-12 lg:mt-12" : ""} ${index % 3 === 1 ? "lg:mt-24" : ""}`}
            >
              <ProjectCard project={item} />
            </div>
          ))}
        </div>

        {/* Empty State fallback */}
        {portfolioItems.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="text-xl">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
