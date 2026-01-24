"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { portfolioItems } from "@/lib/data";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imagesContainer = imagesContainerRef.current;

    if (!section || !imagesContainer) return;

    const images = imagesContainer.querySelectorAll(".portfolio-image");
    const textItems = section.querySelectorAll(".portfolio-text");

    // Set initial state - first image visible, rest hidden
    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    // Create scroll-triggered animations for each text item
    textItems.forEach((item, index) => {
      if (index < textItems.length - 1) {
        // Fade out current image and fade in next image as user scrolls
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "bottom center",
              end: "bottom top",
              scrub: true,
            },
          })
          .to(images[index], { opacity: 0 }, 0)
          .to(images[index + 1], { opacity: 1 }, 0);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-8 z-0">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-cyan-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-medium mb-6">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore <span className="font-playfair italic">our work</span> that
            <br />
            drives real results
          </h2>
        </div>

        {/* Portfolio Layout - using flex instead of grid for proper sticky behavior */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Scrollable text */}
          <div className="lg:w-1/2 space-y-48">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="portfolio-text relative min-h-[300px]"
              >
                {/* Large number */}
                <span
                  className="absolute -left-4 top-0 text-[8rem] font-bold text-transparent leading-none"
                  style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}
                >
                  {item.number}
                </span>

                <div className="relative z-10 pl-20">
                  {/* Tags */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-white rounded-full text-xs font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-2xl md:text-3xl font-playfair italic text-gray-700 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Sticky images */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-24">
              <div
                ref={imagesContainerRef}
                className="relative h-[500px] rounded-3xl overflow-hidden"
              >
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`portfolio-image absolute inset-0 rounded-3xl flex items-center justify-center`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
