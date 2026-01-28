"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProjectsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          textRef.current?.children || [],
          {
            y: 60,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .from(
          visualRef.current,
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Completed Projects", value: "150+" },
    { label: "Industries Served", value: "24" },
    { label: "Average Growth", value: "48%" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="z-10 order-2 lg:order-1">
          <span className="text-xs font-bold tracking-[0.4em] text-blue-700 uppercase mb-8 block">
            Our Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter mb-10">
            Engineering <br />
            <span className="font-playfair italic font-medium">
              impact
            </span>{" "}
            <br />
            through design.
          </h1>

          <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold mb-1 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Content */}
        <div
          ref={visualRef}
          className="relative aspect-square lg:h-[750px] order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-blue-50/70 rounded-[5rem] rotate-2 scale-105" />
          <img
            src="/projects-hero.png"
            alt="The Architecture of Innovation"
            className="relative w-full h-full object-cover rounded-[5rem] shadow-2xl z-10"
          />
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
