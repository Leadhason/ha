"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutHero = () => {
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
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div ref={textRef} className="z-10 order-2 lg:order-1">
          <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-6 block">
            Our Vision
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            We turn <br />
            <span className="font-playfair italic font-medium">
              visions
            </span>{" "}
            into <br />
            digital marvels.
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            A boutique studio where radical creativity meets precise
            engineering. We don't just build websites; we curate digital
            legacies.
          </p>
        </div>

        {/* Visual Content */}
        <div
          ref={visualRef}
          className="relative aspect-square lg:h-[700px] order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-blue-50/50 rounded-[4rem] -rotate-3 transition-transform hover:rotate-0 duration-700" />
          <img
            src="/about-hero.png"
            alt="Boundless Creativity"
            className="relative w-full h-full object-cover rounded-[4rem] shadow-2xl z-10"
          />
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
