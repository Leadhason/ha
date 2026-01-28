"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { testimonialData as testimonials } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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

      const cards = cardsContainer.querySelectorAll(".testimonial-card");
      const totalCards = cards.length;
      const cardWidth = 250;

      // Desktop/Tablet unfolding logic
      gsap.set(cards, {
        position: "absolute",
        top: (i) => i * 5,
        left: "50%",
        xPercent: -50,
        x: (i) => (i - (totalCards - 1) / 2) * 90,
        rotation: (i) => (i - (totalCards - 1) / 2) * 6,
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
          top: 0,
          x: (i) => (i - (totalCards - 1) / 2) * (cardWidth + 20),
          rotation: (i) => (i === 0 || i === totalCards - 1 ? -4 : 4),
          stagger: 0.05,
          ease: "power2.out",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 px-6 overflow-hidden bg-white ${!isMobile ? "min-h-screen" : "h-auto"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm border border-gray-100 uppercase tracking-widest">
            TESTIMONIALS
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          Trusted by <span className="font-playfair italic">teams</span>
          <br />
          around the world
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 px-2">
          <div>
            <p className="text-5xl font-bold mb-2">145+</p>
            <p className="text-gray-500 text-sm md:text-base font-medium opacity-70">
              Impactful launches in 3 years
            </p>
          </div>

          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-sm"
                  >
                    <img
                      src={src}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-base leading-none mb-1">
                  Join 5,000+
                </p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Happy Partners
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium opacity-80">
              We focus on delivering high-fidelity digital solutions that bridge
              the gap between complex engineering and human-centered design.
            </p>
          </div>
        </div>

        {isMobile ? (
          // Mobile Grid - Vertical stacking
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-200/40 backdrop-blur-md border border-gray-300/50 rounded-3xl p-8 shadow-sm flex flex-col h-[380px]"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic flex-1 leading-relaxed font-medium">
                  "
                  {testimonial.quote ||
                    "Working with this team was a game-changer for our digital presence."}
                  "
                </p>
                <div className="mt-6">
                  <p className="font-bold text-xl tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Stacked - Animated
          <div className="relative h-[500px] mt-20 flex justify-center">
            <div
              ref={cardsContainerRef}
              className="relative w-full h-full overflow-visible"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card h-[400px] bg-gray-200/40 backdrop-blur-md border border-gray-300/50 rounded-3xl p-8 shadow-xl flex flex-col"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic flex-1 leading-relaxed font-medium">
                    "
                    {testimonial.quote ||
                      "Working with this team was a game-changer for our digital presence."}
                    "
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-xl tracking-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
