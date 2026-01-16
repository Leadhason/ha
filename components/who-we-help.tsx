"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, PenTool, MessageSquare, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    icon: Monitor,
    title: "SaaS Startups",
    description: "We help product-led startups build clean, intuitive interfaces",
  },
  {
    icon: PenTool,
    title: "Digital Agencies",
    description: "White-label design solutions and collaboration for fast-moving agencies.",
  },
  {
    icon: MessageSquare,
    title: "Coaches & Consultants",
    description: "Build trust & conversion with expert personal branding and sales-driven design.",
  },
  {
    icon: TreePine,
    title: "Health & Wellness Brands",
    description: "Clean, & conversion-optimized experiences for focused businesses.",
  },
];

const WhoWeHelp = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    
    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(".sector-card");
    const totalCards = cards.length;
    const cardWidth = 256; // w-64 = 16rem = 256px
    const gap = 24; // gap-6 = 1.5rem = 24px

    // Set initial stacked state - centered
    gsap.set(cards, {
      position: "absolute",
      top: 0,
      left: "50%",
      xPercent: -50,
      x: (i) => (i - (totalCards - 1) / 2) * 25,
      rotation: (i) => (i - (totalCards - 1) / 2) * 4,
      transformOrigin: "center bottom",
      zIndex: (i) => i,
    });

    // Create the unfolding animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate cards to unfold
    tl.to(cards, {
      x: (i) => (i - (totalCards - 1) / 2) * (cardWidth + gap),
      rotation: 0,
      stagger: 0.05,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-nexo-light py-24 px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
            WHO WE HELP
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Empowering bold <span className="font-playfair italic">ideas</span>
          <br />
          across these sectors
        </h2>

        {/* Cards Container */}
        <div ref={cardsRef} className="flex justify-center">
          <div
            ref={cardsContainerRef}
            className="relative h-[350px] w-full max-w-5xl"
          >
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="sector-card w-64 h-[320px] bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-lg flex flex-col"
              >
                <div className="mb-4">
                  <sector.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold mb-3">{sector.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
