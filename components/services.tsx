"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "UI/UX",
    description: "Custom websites designed to captivate your audience and drive conversions.",
    image: "/abstract.jfif",
  },
  {
    number: "02",
    title: "Growth",
    description: "Enhance your online visibility and attract qualified traffic with our proven SEO.",
    image: "/abstract.jfif",
  },
  {
    number: "03",
    title: "Branding",
    description: "Craft a memorable brand identity with impactful design and messaging.",
    image: "/abstract.jfif",
  },
  {
    number: "04",
    title: "Code",
    description: "Build and scale your online store with seamless e-commerce solutions tailored for growth.",
    image: "/abstract.jfif",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
            OUR SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          From idea to <span className="font-playfair italic">execution</span>
          <br />
          we&apos;ve got you covered
        </h2>

        {/* Services List */}
        <div className="border-t border-dotted border-gray-300">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-12 items-center py-8 px-6 border-b border-dotted border-gray-300 cursor-pointer transition-all duration-300 ${
                hoveredIndex === index
                  ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white rounded-none"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number */}
              <span className={`col-span-1 text-sm ${hoveredIndex === index ? "text-white" : "text-gray-400"}`}>
                {service.number}
              </span>

              {/* Title */}
              <h3 className="col-span-4 text-3xl md:text-4xl font-medium">
                {service.title}
              </h3>

              {/* Spacer for image area */}
              <div className="col-span-3"></div>

              {/* Description */}
              <p className={`col-span-3 text-sm ${hoveredIndex === index ? "text-white" : "text-gray-500"}`}>
                {service.description}
              </p>

              {/* Arrow */}
              <div className="col-span-1 flex justify-end">
                <ArrowRight className={`w-6 h-6 ${hoveredIndex === index ? "text-white" : "text-gray-800"}`} />
              </div>

              {/* Floating Image (visible on hover) */}
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-56 h-40 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100 scale-100 rotate-3" : "opacity-0 scale-75 rotate-0"
                }`}
              >
                <Image
                  src={service.image}
                  width={224}
                  height={160}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
