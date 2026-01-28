"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Twitter, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Visionary designer with 15+ years experience in digital architecture.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate about building scalable systems and elegant code solutions.",
  },
  {
    name: "Marcus Thorne",
    role: "Chief Strategy Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Turning data into direction. Specialized in brand evolution and market impact.",
  },
  {
    name: "Elena Vance",
    role: "UI/UX Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Crafting interfaces that bridge the gap between human emotion and logic.",
  },
];

const AboutTeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.4em] text-blue-700 uppercase mb-6 block">
            The Collective
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            The <span className="font-playfair italic font-medium">minds</span>{" "}
            behind <br />
            the magic.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, i) => (
            <div key={i} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-blue-700 text-sm font-medium uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
