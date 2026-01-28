"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectors } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const WhoWeHelp = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) return; // Disable complex animation on mobile

      const section = sectionRef.current;
      const cardsContainer = cardsContainerRef.current;
      if (!section || !cardsContainer) return;

      const cards = cardsContainer.querySelectorAll(".sector-card");
      const totalCards = cards.length;
      const cardWidth = 288;
      const gap = 20;

      // Desktop/Tablet unfolding logic
      gsap.set(cards, {
        position: "absolute",
        top: 0,
        left: "50%",
        xPercent: -50,
        x: (i) => (i - (totalCards - 1) / 2) * 50,
        rotation: 0,
        transformOrigin: "center bottom",
        zIndex: (i) => i,
        width: cardWidth,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(cards, {
          x: (i) => (i - (totalCards - 1) / 2) * (cardWidth + gap),
          ease: "power2.out",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className={`bg-gray-100 py-16 md:py-24 px-4 overflow-hidden ${!isMobile ? "min-h-screen" : "h-auto"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
            WHO WE HELP
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          Empowering bold <span className="font-playfair italic">ideas</span>
          <br />
          across these sectors
        </h2>

        {isMobile ? (
          // Mobile Grid - Standard scroll
          <div className="grid grid-cols-1 gap-6 px-2">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm flex flex-col min-h-[300px]"
              >
                <div className="mb-6">
                  <sector.icon className="w-10 h-10 stroke-[1.5] text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sector.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop/Tablet - Animated Stack
          <div className="relative h-[500px] flex justify-center overflow-visible">
            <div ref={cardsContainerRef} className="relative w-full h-full">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="sector-card h-[400px] bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-md flex flex-col"
                >
                  <div className="mb-6">
                    <sector.icon className="w-10 h-10 stroke-[1.5] text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{sector.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoWeHelp;
