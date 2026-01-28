"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ArrowUpRight, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./logo";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu = ({ isOpen, onClose }: NavMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const container = containerRef.current;
    const links = linksRef.current?.querySelectorAll(".nav-link-item");

    if (!menu || !container || !links) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();

      tl.set(menu, { display: "flex", opacity: 1 })
        .fromTo(
          container,
          { y: "-100%" },
          { y: "0%", duration: 0.8, ease: "power4.inOut" },
        )
        .fromTo(
          links,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4",
        );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(menu, { display: "none" });
          document.body.style.overflow = "";
        },
      });

      tl.to(container, { y: "-100%", duration: 0.6, ease: "power4.inOut" }).to(
        menu,
        { opacity: 0, duration: 0.3 },
        "-=0.2",
      );
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[100] hidden flex-col transition-opacity duration-300 no-scrollbar"
    >
      <div
        ref={containerRef}
        className="relative w-full h-full bg-gray-100 flex flex-col p-5 px-12 overflow-y-auto no-scrollbar"
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-8">
          <Logo variant="dark" size="md" />
          <button
            onClick={onClose}
            className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors group cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* Main Links */}
          <div
            ref={linksRef}
            className="flex flex-col -mt-4 space-y-4 md:space-y-6"
          >
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link.href)}
                className="nav-link-item group flex items-baseline gap-4 text-left cursor-pointer"
              >
                <span className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 transition-all duration-300 group-hover:pl-4 group-hover:text-blue-600">
                  {link.label}
                </span>
                <ArrowUpRight className="w-8 h-8 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 self-center" />
              </button>
            ))}
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute bottom-0 right-0 p-12 pointer-events-none opacity-[0.04] select-none hidden lg:block">
          <span className="text-[20vw] font-black leading-none">TARANTULA</span>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
