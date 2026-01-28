"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollSection = scrollSectionRef.current;
      if (!scrollSection) return;

      const totalWidth = scrollSection.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      gsap.to(scrollSection, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const chapters = [
    {
      year: "2020",
      title: "The Genesis",
      description:
        "Born from a desire to bridge the gap between human emotion and digital interfaces.",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Growing into a global collective of designers, thinkers, and code poets.",
    },
    {
      year: "2024",
      title: "The Future",
      description:
        "Redefining the web with immersive experiences that leave a lasting impact.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-900 text-white"
    >
      <div
        ref={scrollSectionRef}
        className="flex h-screen w-max items-center px-[10vw] gap-[20vw]"
      >
        {/* Intro Slide */}
        <div className="flex flex-col justify-center max-w-2xl">
          <span className="text-blue-400 font-mono mb-4">
            01 // THE JOURNEY
          </span>
          <h2 className="text-text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
            OUR <br /> STORY.
          </h2>
          <p className="text-2xl text-gray-400">
            A linear progression of non-linear{" "}
            <span className="italic font-playfair text-white">thoughts.</span>
          </p>
        </div>

        {/* Chapters */}
        {chapters.map((chapter, i) => (
          <div
            key={i}
            className="group relative flex flex-col justify-center min-w-[300px] md:min-w-[500px]"
          >
            <span className="text-[10rem] md:text-[15rem] font-black opacity-5 absolute -top-20 -left-10 select-none group-hover:opacity-10 transition-opacity">
              {chapter.year}
            </span>
            <div className="relative z-10">
              <h3 className="text-5xl font-bold mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-blue-500" />
                {chapter.title}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed max-w-sm">
                {chapter.description}
              </p>
            </div>
          </div>
        ))}

        {/* Closing Slide */}
        <div className="relative aspect-video h-[60vh] rounded-[3rem] overflow-hidden group">
          <img
            src="/about-culture.png"
            alt="Our Culture"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
            <div>
              <h4 className="text-4xl font-bold mb-2">Built on Culture</h4>
              <p className="text-gray-300">Where synergy creates excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
