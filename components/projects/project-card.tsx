"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    tags: string[];
    image: string;
    number: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    gsap.to(cardRef.current, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.4,
      ease: "power2.out",
    });

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        x: x * 20,
        y: y * 20,
        duration: 0.4,
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000 aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100/50 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Dynamic Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40 opacity-0 transition-opacity pointer-events-none p-10 flex flex-col justify-end text-white"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-white/20">
          <ArrowUpRight className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono mb-2 opacity-70">CASE STUDY</span>
        <h4 className="text-3xl font-bold">Deep Dive →</h4>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white group-hover:translate-y-full transition-transform duration-500 ease-in-out">
        <div className="flex gap-2 mb-4">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-4xl font-bold mb-1">{project.title}</h3>
        <p className="font-playfair italic text-xl text-white/70">
          {project.subtitle}
        </p>
      </div>

      {/* Static Number */}
      <span className="absolute top-8 right-8 text-white/20 font-bold text-lg select-none">
        {project.number}
      </span>
    </div>
  );
};

export default ProjectCard;
