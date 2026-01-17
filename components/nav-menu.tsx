"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ArrowUpRight } from "lucide-react";
import Logo from "./logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu = ({ isOpen, onClose }: NavMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    const links = linksRef.current?.querySelectorAll(".nav-link");
    const footer = footerRef.current;

    if (!menu || !overlay || !links || !footer) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate in
      const tl = gsap.timeline();

      tl.set(menu, { display: "flex" })
        .fromTo(
          overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(
          menu,
          { clipPath: "circle(0% at calc(100% - 60px) 40px)" },
          {
            clipPath: "circle(150% at calc(100% - 60px) 40px)",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .fromTo(
          links,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          footer,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    } else {
      // Animate out
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(menu, { display: "none" });
          document.body.style.overflow = "";
        },
      });

      tl.to(links, {
        y: -40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in",
      })
        .to(
          footer,
          { y: -20, opacity: 0, duration: 0.2, ease: "power2.in" },
          "-=0.2"
        )
        .to(
          menu,
          {
            clipPath: "circle(0% at calc(100% - 60px) 40px)",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.1"
        )
        .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.4");
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    // Smooth scroll after menu closes
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <>
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 hidden flex-col bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
        style={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex justify-between items-center p-6 relative z-10">
          <Logo variant="light" size="md" />
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-colors border border-white/20"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <div
          ref={linksRef}
          className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 relative z-10"
        >
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.href)}
              className="nav-link group flex items-center justify-between py-4 md:py-6 border-b border-white/10 text-left"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span className="text-white/40 text-sm font-mono">
                  0{index + 1}
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-white group-hover:text-white/80 transition-colors">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 border-t border-white/10"
        >
          {/* Contact info */}
          <div className="text-white/60 text-sm">
            <p className="mb-1">contact@tarantula.com</p>
            <p>+44 20 7946 0958</p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
            Start a project
          </button>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
