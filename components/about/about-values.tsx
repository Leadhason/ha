"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Sparkles, Zap, ShieldCheck, Target } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    label: "Innovation",
    desc: "We don't follow trends. We set them by questioning the status quo.",
  },
  {
    icon: Zap,
    label: "Precision",
    desc: "Every pixel and every line of code is intentional and refined.",
  },
  {
    icon: ShieldCheck,
    label: "Integrity",
    desc: "We build relationships on trust and radical transparency.",
  },
  {
    icon: Target,
    label: "Impact",
    desc: "We measure success by the positive change our work inspires.",
  },
];

const AboutValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const cards = cardsRef.current?.children;
    if (!cards) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    // Normalize mouse position (-1 to 1)
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    Array.from(cards).forEach((card, i) => {
      const cardEl = card as HTMLElement;
      const factor = (i + 1) * 10;
      gsap.to(cardEl, {
        x: x * factor,
        y: y * factor,
        rotationY: x * 5,
        rotationX: -y * 5,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  const handleMouseLeave = () => {
    const cards = cardsRef.current?.children;
    if (!cards) return;
    gsap.to(Array.from(cards), {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 bg-white perspective-1000"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6">Our DNA</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            The fundamental principles that guide every decision we make and
            every project we undertake.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 transition-colors hover:bg-white hover:shadow-xl hover:border-blue-100 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.label}</h3>
              <p className="text-gray-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
