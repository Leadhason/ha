"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { testimonialData as testimonials } from "@/lib/data";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(".testimonial-card");
    const totalCards = cards.length;

    // Set initial stacked state - spread out and skewed
    gsap.set(cards, {
      position: "absolute",
      top: (i) => i * 5,
      left: "50%",
      xPercent: -50,
      x: (i) => (i - (totalCards - 1) / 2) * 90,
      rotation: (i) => (i - (totalCards - 1) / 2) * 6,
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

    // Animate cards to unfold into a row
    tl.to(cards, {
      top: 0,
      x: (i) => (i - (totalCards - 1) / 2) * 250,
      rotation: (i) => (i === 0 || i === totalCards - 1 ? -6 : 6),
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
      className="min-h-screen py-8 -mb-12 px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
            TESTIMONIALS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Trusted by <span className="font-playfair italic">teams</span>
          <br />
          around the world
        </h2>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left - Stats */}
          <div>
            <p className="text-4xl font-semibold">145+</p>
            <p className="text-gray-500 text-sm">
              Services provided over the last 3 years
            </p>
          </div>

          {/* Right - Members & Description */}
          <div className="max-w-xl">
            {/* Avatar Stack */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt="Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm">Join 5,000+</p>
                <p className="text-gray-500 text-xs">satisfied clients</p>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              We&apos;re not just pixel pushers; we combine strategic thinking,
              business goals, and human-centered design to create digital
              experiences that deliver results.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative h-[600px] mt-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-cyan-200/60 rounded-full blur-3xl -z-10" />
          <div ref={cardsContainerRef} className="relative w-full h-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card w-72 h-[380px] bg-gray-200/40 backdrop-blur-md border border-gray-300/50 rounded-md p-6 shadow-sm"
              >
                {testimonial.isVideo ? (
                  // Video Card
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-400 rounded-md flex items-center justify-center relative overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center z-10">
                        <Play
                          className="w-6 h-6 text-gray-800 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <p className="font-playfair italic text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Text Card
                  <div className="h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic flex-1 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4">
                      <p className="font-playfair italic text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
