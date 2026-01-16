"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    number: "01",
    tags: ["SaaS", "UI/UX Design", "Strategy"],
    title: "Zenith",
    subtitle: "SaaS dashboard",
    description: "Redesigned a B2B SaaS dashboard to improve usability and onboarding, leading to 37% higher user retention.",
    image: "/abstract.jfif",
    bgColor: "bg-gradient-to-br from-violet-100 to-cyan-100",
  },
  {
    number: "02",
    tags: ["Fitness", "UI/UX Design", "Strategy"],
    title: "Fitness",
    subtitle: "coaching website",
    description: "A bold and energetic website design for an online fitness coach and course platform. and energetic website design for an online.",
    image: "/abstract.jfif",
    bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
  },
  {
    number: "03",
    tags: ["Crypto", "UI/UX Design", "Strategy"],
    title: "Crypto",
    subtitle: "trading app",
    description: "A sleek and modern trading application designed to simplify cryptocurrency trading for beginners and experts alike.",
    image: "/abstract.jfif",
    bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
];

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
        gsap.timeline({
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
    <section ref={sectionRef} className=" py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-medium shadow-sm mb-6">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore <span className="font-playfair italic">our work</span> that
            <br />
            drives real results
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Scrollable text */}
          <div className="space-y-48">
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-text relative min-h-[300px]">
                {/* Large number */}
                <span className="absolute -left-4 top-0 text-[8rem] font-bold text-transparent leading-none" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>
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
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div
                ref={imagesContainerRef}
                className="relative h-[500px] rounded-3xl overflow-hidden"
              >
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`portfolio-image absolute inset-0 ${item.bgColor} rounded-3xl flex items-center justify-center`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-4/5 h-4/5 object-contain"
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
