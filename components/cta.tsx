"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ctaImages = [
  {
    src: "/cta-1.jfif",
    alt: "Design showcase 1",
  },
  {
    src: "/cta-2.jfif",
    alt: "Design showcase 2",
  },
  {
    src: "/cta-3.jfif",
    alt: "Design showcase 3",
  },
];

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imagesContainer = imagesContainerRef.current;

    if (!section || !imagesContainer) return;

    const images = imagesContainer.querySelectorAll(".cta-image");
    const totalImages = images.length;

    // Set initial stacked state - all overlapping in center
    // Middle image (index 1) is straight, left rotates left, right rotates right
    gsap.set(images, {
      position: "absolute",
      top: 0,
      left: "50%",
      xPercent: -50,
      x: 0,
      rotation: (i) => {
        if (i === 0) return -8; // Left image rotates left
        if (i === 2) return 8; // Right image rotates right
        return 0; // Middle image stays straight
      },
      transformOrigin: "center bottom",
      zIndex: (i) => (i === 1 ? 3 : i === 2 ? 2 : 1), // Middle on top
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

    // Animate images to partially unfold - left and right move outward but stay overlapping
    tl.to(images, {
      x: (i) => {
        if (i === 0) return -180; // Left moves left but still overlaps
        if (i === 2) return 180; // Right moves right but still overlaps
        return 0; // Middle stays in place
      },
      rotation: (i) => {
        if (i === 0) return -12; // Left rotates more
        if (i === 2) return 12; // Right rotates more
        return 0; // Middle stays straight
      },
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span className="font-playfair italic">start</span>
            <br />
            your project!
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-gray-500 text-md max-w-xl mx-auto mb-8">
          Tell us about your vision and we&apos;ll help you bring it to life
          through beautiful, strategic design. Book a free discovery call
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <button className="bg-gray-900 text-white px-5 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="font-medium text-sm">Book a free call now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Images Container */}
        <div className="flex justify-center">
          <div
            ref={imagesContainerRef}
            className="relative h-[480px] w-full max-w-5xl"
          >
            {ctaImages.map((image, index) => (
              <div
                key={index}
                className="cta-image w-80 h-[480px] rounded-lg overflow-hidden shadow-md bg-gray-900"
              >
                <Image
                  src={image.src}
                  width={400}
                  height={520}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
